import { ToastContextState } from "@app/contexts";
import { InformationCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { FC } from "react";

interface props {
  state: ToastContextState;
  hideToast: VoidFunction;
}

export const TostElement: FC<props> = ({ state, hideToast }) => {
  return (
    <div
      className={clsx(
        "transition-transform top-5 left-[40%] font-medium fixed flex justify-between gap-2 items-center shadow-md min-h-[48px] max-w-[50vw] px-4 py-2 rounded-lg min-w-[300px] text-sm truncate whitespace-nowrap z-50",
        state?.varient === "success" && "bg-white text-primary",
        state?.varient === "error" && "bg-error text-white",
        state?.show && "translate-y-0",
        !state?.show && "-translate-y-[200%]"
      )}
    >
      {state?.show && <InformationCircleIcon height={20} width={20} />}
      {state?.message}
      {state?.show && (
        <div
          className="hover:bg-black/20 p-1 rounded-full cursor-pointe"
          onClick={hideToast}
        >
          <XCircleIcon height={20} width={20} />
        </div>
      )}
      {/* TODO: progress of remaining time left on current toast */}
      {/* <progress id="file" max="100" value="70">
            70%
          </progress> */}
    </div>
  );
};
