// src/hooks/useCustomers.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { customersApi } from "@/api/client";
import type { CustomerRequest } from "src-gen/openapi/app";

// Alle Kunden laden
export function useCustomers() {
  return useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const res = await customersApi.getAllCustomers();
      return res as CustomerRequest[]; // AxiosResponse<T>.data
    },
  });
}

// Einzelnen Kunden laden
export function useCustomer(customerId: string | undefined) {
  return useQuery({
    queryKey: ["customer", customerId],
    enabled: !!customerId,
    queryFn: async () => {
      if (!customerId) throw new Error("No customerId");
      const res = await customersApi.getCustomerById({ customerId });
      return res as CustomerRequest;
    },
  });
}

// Customer updaten (PUT /customer/{id})
type UpdateArgs = { id: string; customer: CustomerRequest };
type CreateArgs = { customer: CustomerRequest };

export function useUpdateCustomer() {
  const qc = useQueryClient();

  return useMutation({
    mutationKey: ["customer:update"],
    mutationFn: async ({ id, customer }: UpdateArgs) => {
      // 204 No Content erwartet – kein Body zurück
      await customersApi.updateCustomer({
        customerId: id,
        customerRequest: customer,
      });
      return { id, customer };
    },
    onSuccess: ({ id, customer }) => {
      // Liste neu laden
      qc.invalidateQueries({ queryKey: ["customers"] });
      // Einzelnen Eintrag im Cache direkt anpassen (optimistisch festschreiben)
      qc.setQueryData<CustomerRequest>(["customer", id], customer);
    },
  });
}

export function useCreateCustomer() {
    const qc = useQueryClient();
  
    return useMutation({
      mutationKey: ["customer:create"],
      mutationFn: async ({ customer }: CreateArgs) => {
        // 204 No Content erwartet – kein Body zurück
        await customersApi.createNewCustomer({
          customerRequest: customer
        });
        return { customer };
      },
      onSuccess: ({ customer }) => {
        // Liste neu laden
        qc.invalidateQueries({ queryKey: ["customers"] });
        // Einzelnen Eintrag im Cache direkt anpassen (optimistisch festschreiben)
        qc.setQueryData<CustomerRequest>(["customer"], customer);
      },
    });
  }
  