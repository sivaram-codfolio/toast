import {
  ToastContext,
  ToastContextIF,
  ToastContextState,
  ToastVarient,
} from "@app/contexts";
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { TostElement } from "@app/components";

const SNACKBAR_TIMER = 5000;

interface props {
  children?: ReactNode;
}

export const ToastContextProvider: FC<props> = ({ children }) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [state, setState] = useState<ToastContextState>({
    show: false,
    message: "",
    varient: "none",
  });

  const hideToast = useCallback(() => {
    setState({
      show: false,
      message: "",
      varient: "none",
    });
  }, []);

  const showToast = useCallback<ToastContextIF>(
    (message: string, varient: ToastVarient) => {
      // show snackbar
      setState({ show: true, message, varient });

      // clear the snackbar, if it exists
      if (timerRef.current != null) {
        clearTimeout(timerRef.current);
      }

      // set new timer to hide the snackbar after defined time
      timerRef.current = setTimeout(() => {
        hideToast();
        timerRef.current = null;
      }, SNACKBAR_TIMER);
    },
    [hideToast]
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
