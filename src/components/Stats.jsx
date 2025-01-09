import { PieChart } from "lucide-react";

import {
  calculateCoffeeStats,
  calculateCurrentCaffeineLevel,
  coffeeConsumptionHistory,
  statusLevels,
} from "@/lib/utils";

function StatCard(props) {
  const { lg, title, children } = props;
  return (
    <div className={"" + (lg ? "col-span-2" : "col-span-2 sm:col-span-1")}>
      <div className="flex flex-col p-3 gap-2 md:gap-3 border-2 border-slate-200 rounded-lg shadow-sm bg-slate-50">
        <div>
          <h4 className="text-base font-bold text-slate-600 md:text-lg">
            {title}
          </h4>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

const Stats = () => {
  const stats = calculateCoffeeStats(coffeeConsumptionHistory);

  const caffeineLevel = calculateCurrentCaffeineLevel(coffeeConsumptionHistory);
  const warningLevel =
    caffeineLevel < statusLevels["low"].maxLevel
      ? "low"
      : caffeineLevel < statusLevels["moderate"].maxLevel
      ? "moderate"
      : "high";
  return (
    <>
      <div>
        <div className="flex flex-row gap-2 items-center mt-3 mb-3">
          <PieChart className="text-slate-600 text-xs md:text-sm xl:text-xl" />
          <h2 className="font-bold text-slate-600 text-sm md:text-xl xl:text-2xl">
            Stats
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <StatCard lg title="Active Caffeine Level">
            <div className="">
              <div className="flex flex-row gap-1 items-center">
                <p className="text-slate-500 text-sm">
                  <span className="text-base font-bold md:text-xl text-slate-500">
                    {caffeineLevel}
                  </span>
                  mg
                </p>
                <h5
                  style={{
                    color: statusLevels[warningLevel].color,
                    background: statusLevels[warningLevel].background,
                    padding: 2,
                    paddingInline: 10,
                    fontSize: 12,
                    fontWeight: "bold",
                    borderRadius: 6,
                  }}
                >
                  Low
                </h5>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-500 mt-2">
                {statusLevels[warningLevel].description}
              </p>
            </div>
          </StatCard>
          <StatCard title="Daily Caffeine">
            <p className="text-slate-500 text-sm">
              <span className="ext-base font-bold md:text-xl text-slate-500">
                {stats.daily_caffeine}
              </span>
              mg
            </p>
          </StatCard>
          <StatCard title="Avg # of Coffees">
            <p className="text-slate-500 text-sm">
              <span className="ext-base font-bold md:text-xl text-slate-500">
                {stats.average_coffee}
              </span>
            </p>
          </StatCard>
          <StatCard title="Daily Cost ($)">
            <p className="text-slate-500 text-sm">
              $
              <span className="ext-base font-bold md:text-xl text-slate-500">
                {stats.daily_cost}
              </span>
            </p>
          </StatCard>
          <StatCard title="Total Cost ($)">
            <p className="text-slate-500 text-sm">
              $
              <span className="ext-base font-bold md:text-xl text-slate-500">
                {stats.total_cost}
              </span>
            </p>
          </StatCard>
        </div>
      </div>
    </>
  );
};

export default Stats;
