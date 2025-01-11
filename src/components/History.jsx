import {
  calculateCurrentCaffeineLevel,
  getCaffeineAmount,
  timeSinceConsumption,
} from "@/lib/utils";
import { Coffee, HistoryIcon } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import { useAuth } from "@/context/AuthContext";

const History = () => {
  const { globalData } = useAuth();
  return (
    <>
      <div>
        <div className="flex flex-row gap-2 items-center mt-3">
          <HistoryIcon className="text-slate-600 text-xs md:text-sm xl:text-xl" />
          <h2 className="font-bold text-slate-600 text-sm md:text-xl xl:text-2xl">
            History
          </h2>
        </div>
        <div>
          <p className="text-xs md:text-sm text-slate-500 mt-3 font-medium">
            Hover for more information
          </p>
          <div className="w-full flex flex-row flex-wrap gap-3 mt-3">
            {Object.keys(globalData)
              .sort((a, b) => b - a)
              .map((utcTime, coffeeIndex) => {
                const coffee = globalData[utcTime];
                const timeSinceConsumed = timeSinceConsumption(utcTime);
                const originalAmount = getCaffeineAmount(coffee.name);
                const remainingAmount = calculateCurrentCaffeineLevel({
                  [utcTime]: coffee,
                });

                const summary = `${coffee.name} | ${timeSinceConsumed} | $${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg`;
                return (
                  <div key={coffeeIndex}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Coffee className="text-slate-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs md:text-sm text-white font-medium p-1">
                            {summary}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
