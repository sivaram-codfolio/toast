import { createContext } from "react";

export type ToastVarient = "success" | "error" | "none";

export interface ToastContextState {
  show: boolean;
  message: string;
  varient: ToastVarient;
}

export interface ToastContextIF {
  (message: string, varient: ToastVarient): void;
}

export const ToastContext = createContext<ToastContextIF | undefined>(
  undefined
);
