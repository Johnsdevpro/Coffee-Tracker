import { banner } from "@/lib/data";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center sm:flex-row sm:justify-between h-fit">
        <div className="flex flex-col justify-center w-full sm:w-1/2 ">
          <h1 className="text-slate-600 font-extrabold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-4">
            Coffe Tacker: From <span className="text-orange-500">Bean </span>to
            <span className="text-orange-500"> Boost</span>
          </h1>
          <p className="text-slate-500 text-xs font-medium md:text-sm lg:text-base mt-1 line-clamp-3 ">
            Track your coffee journey like never before. Whether it’s your first
            cup of the day or a late-night pick-me-up, we’re here to help you
            redefine your connection with caffeine and savor every moment.
          </p>
          <div className="w-full p-2 bg-slate-100 mt-2 rounded-sm">
            <p className="text-xs md:text-sm text-slate-500 font-medium mt-2">
              Try{" "}
              <span className="font-extrabold bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                Coffeum
              </span>{" "}
              and start...
            </p>
            <ul className="text-xs md:text-sm text-slate-500 font-bold mt-3">
              <li className="mb-2">✅ Accurately Tracking your coffee</li>
              <li className="mb-2">✅ Mesuring your blood caffeine levels</li>
              <li className="mb-2">
                ✅ Costing and quantifying your addition{" "}
              </li>
            </ul>
          </div>

          <div className="card">
            <div>
              <h3></h3>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-1/2 flex-col justify-center items-center order-first sm:order-last">
          <div className="w-full max-w-[400px]">
            <img
              src={banner}
              alt="Coffe Banner"
              className=" flex flex-col w-auto  object-contain items-center justify-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
