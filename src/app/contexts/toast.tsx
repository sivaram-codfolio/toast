import { createContext } from "react";

export type ToastVariant = "success" | "error" | "none";

export interface ToastContextState {
  show: boolean;
  message: string;
  variant: ToastVariant;
}

export interface ToastContextIF {
  (message: string, {variant, duration}: {variant: ToastVariant, duration?: number}): void;
}

export const ToastContext = createContext<ToastContextIF | undefined>(
  undefined
);
