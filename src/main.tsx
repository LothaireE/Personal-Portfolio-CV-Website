import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "@/App"
import "@/index.css"
// import "@/index.oklch.css"

import { ThemeProvider } from "@/components/common/ThemeProvider"
import { ErrorBoundary } from "@/components/common/ErrorBoundary"
import { LanguageProvider } from "./context/provider/LanguageProvider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LanguageProvider>
          <BrowserRouter
            future={{
              v7_relativeSplatPath: true,
            }}
          >
            <App />
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
)