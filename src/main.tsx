import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/routes';
import axios, { AxiosError } from 'axios';
import { Bounce, ToastContainer } from 'react-toastify';

axios.defaults.baseURL = "http://localhost:8080/v1/";
axios.defaults.withCredentials = true;

export const baseURL = "http://localhost:8080/v1/";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retryDelay: 1000,
      retry: (failureCount, error) => {
        if(
          error instanceof AxiosError && 
          error.response !== undefined &&
          error.response.status === 401
        ) {
          if(failureCount === 3) {
            window.location.href = "http://localhost:5173/"
            return false;
          }
          try {
            axios.post("/auth/refresh");
          } catch { /* Пропускаем */ }
        }
        if(failureCount === 3) return false;
        return true;
      },
    },
  }
});

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="dark"
      transition={Bounce}
    />
  </QueryClientProvider>
)
