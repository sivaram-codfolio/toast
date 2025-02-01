import { useToast } from "@app/hooks";
import { FC } from "react";

const App: FC = () => {
  const showToast = useToast();

  return (
    <div className="w-full h-screen bg-indigo-300 flex items-center justify-center">
      <button
        className="px-3 py-1 bg-gray-700 rounded-md text-sm text-white cursor-pointer"
        onClick={() => showToast("Show some toast", "success")}
      >
        {"Show Toast"}
      </button>
    </div>
  );
};

export default App;
