// src/hooks/useCustomers.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { customersApi, ordersApi } from "@/api/client";
import type { CustomerRequest, OrderRequest } from "src-gen/openapi/app";

// Alle Kunden laden
export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await ordersApi.getAllOrders();
      return res as OrderRequest[]; // AxiosResponse<T>.data
    },
  });
}

// Einzelnen Kunden laden
export function useOrder(orderId: string | undefined) {
  return useQuery({
    queryKey: ["order", orderId],
    enabled: !!orderId,
    queryFn: async () => {
      if (!orderId) throw new Error("No customerId");
      const res = await ordersApi.getOrderById({orderId});
      return res as OrderRequest;
    },
  });
}

export function useOrderByCustomerId(customerId: string | undefined) {
    return useQuery({
      queryKey: ["order", customerId],
      enabled: !!customerId,
      queryFn: async () => {
        if (!customerId) throw new Error("No customerId");
        const res = await ordersApi.getOrdersByCustomerId({customerId});
        return res as OrderRequest[];
      },
    });
  }

// Customer updaten (PUT /customer/{id})
type UpdateArgs = { id: string; order: OrderRequest };

export function useUpdateOrder() {
  const qc = useQueryClient();

  return useMutation({
    mutationKey: ["order:update"],
    mutationFn: async ({ id, order }: UpdateArgs) => {
      // 204 No Content erwartet – kein Body zurück
      await ordersApi.updateOrder({
        orderId: id,
        orderRequest: order,
      });
      return { id, order };
    },
    onSuccess: ({ id, order }) => {
      // Liste neu laden
      qc.invalidateQueries({ queryKey: ["orders"] });
      // Einzelnen Eintrag im Cache direkt anpassen (optimistisch festschreiben)
      qc.setQueryData<OrderRequest>(["order", id], order);
    },
  });
}
