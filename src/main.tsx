import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { registerLicense } from '@syncfusion/ej2-base';
import { Provider } from 'react-redux/es/exports'
import { store } from './store/store.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
registerLicense('ORg4AjUWIQA/Gnt2VlhhQlJCfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn9SdkFjUHtccXRURmVd');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // sinnvolle Defaults
      staleTime: 30_000,         // 30s: Daten gelten kurz als „frisch“
      refetchOnWindowFocus: false,
      retry: 1,                  // weniger aggressiv
    },
    mutations: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(

  

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <App />
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
