import {
  ToastContext,
  ToastContextIF,
  ToastContextState,
  ToastVariant,
} from "@app/contexts";
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { TostElement } from "@app/components";

const TOAST_TIMER = 5000;

interface props {
  children?: ReactNode;
}

export const ToastContextProvider: FC<props> = ({ children }) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [state, setState] = useState<ToastContextState>({
    show: false,
    message: "",
    variant: "none",
  });

  const hideToast = useCallback(() => {
    setState({
      show: false,
      message: "",
      variant: "none",
    });
  }, []);

  const showToast = useCallback<ToastContextIF>(
   async (message: string, { variant, duration }: { variant: ToastVariant, duration?: number }) => {
      // check the status of the toast
      // toast is already active then close
      if (state.show) {
        hideToast();

        // wait for some little to trigger the new toast
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      // show toast
      setState({ show: true, message, variant });

      // clear the toast, if it exists
      if (timerRef.current != null) {
        clearTimeout(timerRef.current);
      }

      // set new timer to hide the toast after defined time
      timerRef.current = setTimeout(() => {
        hideToast();
        timerRef.current = null;
      }, duration ?? TOAST_TIMER);
    },
    [state, hideToast]
  );

  useEffect(() => {
    // clean up the timer when the component unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <TostElement state={state} hideToast={hideToast} />
    </ToastContext.Provider>
  );
};
