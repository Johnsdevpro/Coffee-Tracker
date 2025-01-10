import { coffeeOptions } from "@/lib/utils";
import { Pencil } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { Input } from "./ui/input";

import { useDialog } from "./DialogProvider";
import Authentication from "./Authentication";

const CoffeeForm = (props) => {
  const { isAuthenticated } = props;
  const { openDialog } = useDialog();

  const [showSelectCoffeeType, setShowSelectCoffeeType] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [coffeeCost, setCoffeeCost] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);

  const handleSubmitForm = () => {
    if (!isAuthenticated) {
      openDialog({
        title: "Authentication",
        description: "Fill out the form to continue",
        content: <Authentication />,
      });
      return;
    }
    console.log(selectedCoffee, coffeeCost, hour, min);
  };
  return (
    <>
      <div>
        <div className="flex flex-row gap-2 items-center mt-3">
          <Pencil className="text-slate-600 text-xs md:text-sm xl:text-xl" />
          <h2 className="font-bold text-slate-600 text-sm md:text-xl xl:text-2xl">
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
                onClick={() => {
                  setSelectedCoffee(coffeOption.name);
                  setShowSelectCoffeeType(false);
                }}
                key={coffeOptionIndex}
                className={
                  "flex flex-col items-center justify-center gap-2 py-3 px-2 h-fit border border-slate-200 hover:bg-slate-100 " +
                  (coffeOption.name === selectedCoffee
                    ? "bg-slate-200 border-slate-300"
                    : "bg-white")
                }
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
            onClick={() => {
              setShowSelectCoffeeType(true);
              setSelectedCoffee(null);
            }}
            variant="outline"
            className={
              "flex flex-col items-center justify-center gap-2 py-3 px-2 h-fit border border-slate-200 hover:bg-slate-200 " +
              (showSelectCoffeeType
                ? "bg-slate-200 border-slate-300"
                : "bg-white")
            }
          >
            <p className="text-slate-600 font-bold capitalize text-sm">Other</p>
            <p className="text-xs md:text-sm font-medium text-slate-500">n/a</p>
          </Button>
        </div>
        <div className="mt-3">
          {showSelectCoffeeType && (
            <Select
              onValueChange={setSelectedCoffee}
              value={selectedCoffee}
              id="coffee-list"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a coffee Type" />
              </SelectTrigger>

              <SelectContent>
                {coffeeOptions.map((coffeeOption, coffeeOptionIndex) => {
                  return (
                    <SelectItem
                      key={coffeeOptionIndex}
                      value={coffeeOption.name}
                    >
                      {coffeeOption.name} ({coffeeOption.caffeine}mg)
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          )}
        </div>
        <div className="flex flex-col mt-3 mb-3">
          <h4 className="text-slate-600 font-medium text-xs md:text-lg">
            Add the cost
          </h4>
          <Input
            value={coffeeCost}
            onChange={(e) => {
              setCoffeeCost(e.target.value);
            }}
            type="number"
            placeholder="E.g. 4.56"
            className="mt-1"
            min="0"
          />
          <h4 className="text-slate-600 font-medium text-xs md:text-lg mt-2">
            Time since consumption
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <h6 className="text-sm text-slate-500 font-medium mt-1">Hours</h6>
              <Select id="hours-select" value={hour} onValueChange={setHour}>
                <SelectTrigger>
                  <SelectValue placeholder="Hour" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 13, 19, 20, 21, 22, 23,
                  ].map((hour, hourIndex) => {
                    return (
                      <SelectItem
                        key={hourIndex}
                        value={hour}
                        className="text-sm font-medium text-slate-500"
                      >
                        {hour}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div>
              <h6 className="text-sm text-slate-500 font-medium mt-1">Mins</h6>
              <Select id="mins-select" onValueChange={setMin} value={min}>
                <SelectTrigger>
                  <SelectValue placeholder="Min" />
                </SelectTrigger>
                <SelectContent>
                  {[4, 10, 15, 30, 45].map((min, minIndex) => {
                    return (
                      <SelectItem
                        key={minIndex}
                        value={min}
                        className="text-sm font-medium text-slate-500"
                      >
                        {min}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="h-[40px] mt-4" onClick={handleSubmitForm}>
            <p>Add Entry</p>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CoffeeForm;
