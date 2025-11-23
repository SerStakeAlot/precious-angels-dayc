import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function assetPath(relativePath: string) {
  const normalized = relativePath.replace(/^\/+/, "")
  const encoded = normalized
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")
  const base = import.meta.env.BASE_URL ?? "/"
  return `${base}${encoded}`
}
