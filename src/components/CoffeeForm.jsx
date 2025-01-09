import { coffeeOptions } from "@/lib/utils";
import { Pencil } from "lucide-react";
import { Button } from "./ui/button";

const CoffeeForm = () => {
  return (
    <>
      <div>
        <div className="flex flex-row gap-2 items-center">
          <Pencil className="text-slate-600 text-xs md:text-sm xl:text-xl" />
          <h2 className="font-bold text-slate-600 mt-2 text-sm md:text-xl xl:text-2xl">
            Sart Tracking Now
          </h2>
        </div>

        <h4 className="text-slate-600 font-medium mt-3 text-xs md:text-lg">
          Select a Coffee Type
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">
          {coffeeOptions.slice(0, 7).map((coffeOption, coffeOptionIndex) => {
            return (
              <Button
                key={coffeOptionIndex}
                variant="outline"
                className="flex flex-col items-center justify-center gap-2 py-3 px-2 h-fit"
              >
                <p className="text-slate-600 font-bold capitalize text-sm">
                  {coffeOption.name}
                </p>
                <p className="text-xs md:text-sm font-medium text-slate-500">
                  {coffeOption.caffeine} mg
                </p>
              </Button>
            );
          })}
          <Button
            variant="outline"
            className="flex flex-col items-center justify-center gap-2 py-3 px-2 h-fit"
          >
            <p className="text-slate-600 font-bold capitalize text-sm">Other</p>
            <p className="text-xs md:text-sm font-medium text-slate-500">n/a</p>
          </Button>
        </div>
        <div>
          <select name="" id=""></select>
        </div>
      </div>
    </>
  );
};

export default CoffeeForm;
