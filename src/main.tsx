import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary"
import "@github/spark/spark"

import App from './App.tsx'
import { ErrorFallback } from './ErrorFallback.tsx'
import { assetPath } from "./lib/utils"

import "./main.css"
import "./styles/theme.css"
import "./index.css"

const backgroundUrl = assetPath("backgrounds/sun.jpg")
if (typeof document !== "undefined") {
  document.documentElement.style.setProperty(
    "--site-background-image",
    `url(${backgroundUrl})`
  )
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />
   </ErrorBoundary>
)
