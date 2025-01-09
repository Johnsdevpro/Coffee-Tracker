import { HistoryIcon } from "lucide-react";

const History = () => {
  return (
    <>
      <div>
        <div className="flex flex-row gap-2 items-center mt-3">
          <HistoryIcon className="text-slate-600 text-xs md:text-sm xl:text-xl" />
          <h2 className="font-bold text-slate-600 text-sm md:text-xl xl:text-2xl">
            History
          </h2>
        </div>
      </div>
    </>
  );
};

export default History;
