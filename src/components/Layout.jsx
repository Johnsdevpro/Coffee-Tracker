import { ArrowRight, User } from "lucide-react";
import { Button } from "./ui/button";
import { useDialog } from "./DialogProvider";
import Authentication from "./Authentication";

const Layout = (props) => {
  const { children, isAuthenticated } = props;
  const { openDialog } = useDialog();

  const handleClick = () => {
    openDialog({
      title: "Authentication",
      description: "Fill the form bellow to continue",
      content: <Authentication />,
    });
  };

  const header = (
    <header className="w-full border-b-2 border-b-slate-300 h-[50px] md:h-[60px] bg-white backdrop-blur-sm">
      <div className="flex flex-row w-full max-w-7xl justify-between items-center gap-4 mx-auto h-full px-3">
        <a href="/">
          <p className="font-extrabold text-lg md:text-xl bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            Coffeum
          </p>
        </a>

        {!isAuthenticated ? (
          <Button className="py-1 px-5" onClick={handleClick}>
            <p className="text-xs md:text-sm">Sign Up</p>
            <ArrowRight className="text-white text-xs md:text-sm" />
          </Button>
        ) : (
          <User className="text-lg text-slate-500" />
        )}
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
      <div className="min-h-screen flex flex-col">
        {header}
        <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 container overflow-y-auto py-4">
          {children}
        </main>
        {footer}
      </div>
    </>
  );
};

export default Layout;
