import { useToast } from "@app/hooks";
import { FC } from "react";

const App: FC = () => {
  const showToast = useToast();

  const forSuccessToast = () => {
    showToast("✅ Operation successful! Your changes have been saved.", { variant: "success", duration: 3000 });
  }

  const forErrorToast = () => {
    showToast("❌ Oops! Something went wrong. Please try again.", { variant: "error" });
  }

  return (
    <div className="w-full h-screen bg-indigo-300 flex items-center justify-center flex-col gap-2">
      {/* success toast button */}
      <button
        className="px-3 py-1 bg-gray-700 rounded-md text-sm text-white cursor-pointer"
        onClick={forSuccessToast}
      >
        {"Success Toast"}
      </button>

      {/* error toast button */}
      <button
        className="px-3 py-1 bg-gray-700 rounded-md text-sm text-white cursor-pointer"
        onClick={forErrorToast}
      >
        {"Error Toast"}
      </button>
    </div>
  );
};

export default App;
