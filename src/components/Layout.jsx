import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Layout = (props) => {
  const { children } = props;

  const header = (
    <header className="w-full border-b-2 border-b-slate-300 h-[50px] md:h-[60px]">
      <div className="flex flex-row w-full max-w-7xl justify-between items-center gap-4 mx-auto h-full px-3">
        <a href="/">
          <p className="font-extrabold text-lg md:text-xl bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            Coffeum
          </p>
        </a>

        <Button className="py-1 px-5">
          <a href="#" className="text-xs md:text-sm">
            Sign Up
          </a>
          <ArrowRight className="text-white text-xs md:text-sm" />
        </Button>
      </div>
    </header>
  );

  const footer = (
    <footer className="h-[40px] w-full bg-slate-900 flex flex-col items-center">
      <div className=" h-full flex flex-row  w-full max-w-7xl max-auto justify-center items-center gap-1">
        <p className="text-white text-[10px] sm:text-xs ">Copyright 2025 </p>
        <span className="text-[10px] sm:text-xs">
          <a href="/">
            <p className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Coffeum
            </p>
          </a>
        </span>
        <p className="text-white text-[10px] sm:text-xs">
          Made by{" "}
          <span>
            <a href="">John</a>
          </span>
        </p>
      </div>
    </footer>
  );

  return (
    <>
      {header}
      <main className="flex flex-col w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 overflow-auto h-dvh">
        {children}
      </main>
      {footer}
    </>
  );
};

export default Layout;
