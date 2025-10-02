import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Sidebar, SettingsButton, Navbar, ThemeSettings } from "./components";
import { Calendar, Customers, Dashboard, Kanban, Orders } from "./pages";
import { useAppSelector } from "./store/hooks";
import { settingSelector } from "./store/settingsSlice";
import Expenses from "./pages/Expenses/Expenses";
import CustomerInformation from "./pages/Customers/CustomerInformation/CustomerInformation";
import OrderInformation from "./pages/Orders/OrderInformation/OrderInformation";

//Hier sind wir wieder im alten stand
function App() {
  const settingsStore = useAppSelector(settingSelector);

  return (
    <div className={settingsStore.currentMode === "Dark" ? "dark" : "light"}>
      <div className="w-full h-full max-h-screen max-w-screen bg-main-bg">
        <SettingsButton />
        <BrowserRouter>
          <div className="flex">
            <Sidebar />
            <div className="dark:bg-secondary-dark-bg w-full max-h-screen overflow-hidden h-screen">
              <div className="bg-main-bg dark:bg-main-dark-bg navbar w-full h-1/10 ">
                <Navbar />
              </div>

              <div className="w-full h-full overflow-scroll dark:bg-secondary-dark-bg">
                {settingsStore.settingsRight && <ThemeSettings />}
                <Routes>
                  {/* dashboard  */}
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />

                  {/* pages  */}
                  <Route path="/orders"  >
                  <Route index element={<Orders />} />
                    <Route path=":id" element={<OrderInformation />} />
                    <Route path="create" element={<OrderInformation newOrder={true} />} />
                  </Route>
                  <Route path="/customers">
                    <Route index element={<Customers />} />
                    <Route path=":id" element={<CustomerInformation />} />
                    <Route path="create" element={<CustomerInformation newCustomer={true} />} />
                    <Route path="create/:customerId" element={<CustomerInformation newCustomer={true} />} />
                  </Route>
                  <Route path="/expenses" element={<Expenses />} />

                  {/* apps  */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/calendar" element={<Calendar />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
