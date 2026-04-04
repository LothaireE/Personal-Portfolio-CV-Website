import { StrictMode } from "react"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "@/index.oklch.css"
import App from "@/App"
import { ThemeProvider } from "@/components/common/ThemeProvider"
import { ErrorBoundary } from "@/components/common/ErrorBoundary"
import { LanguageProvider } from "./context/LanguageContext"
import { ProfileProvider } from "./context/ProfileContext";


const router = createBrowserRouter([
  { path: "/*", element: <App /> },
]);


createRoot(document.getElementById("root")!).render(
    <StrictMode>
     <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
             <ProfileProvider>
                <RouterProvider router={router} />
             </ProfileProvider>
          </LanguageProvider>
        </ThemeProvider>
    </ErrorBoundary>
    </StrictMode>,
);
