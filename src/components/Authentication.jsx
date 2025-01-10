import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Authentication = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="text-slate-600 text-xs md:text-sm">
            Email
          </Label>
          <Input
            type="email"
            placeholder="Enter your email"
            id="email"
            required="true"
            className="placeholder:text-slate-500 text-xs md:text-sm"
          />
        </div>
        <div className="flex flex-col mt-3 gap-1">
          <Label
            htmlFor="password"
            className="text-slate-600 text-xs md:text-sm"
          >
            Password
          </Label>
          <Input
            type="password"
            placeholder="Enter your password"
            id="password"
            required="true"
            className="placeholder:text-slate-500 text-xs md:text-sm"
          />
        </div>
        <Button className="mt-3 w-full text-white text-xs md:text-sm font-medium capitalize h-[40px]">
          Sign In
        </Button>
        <hr />
        <div className="flex flex-row items-center justify-center gap-3 mt-3">
          <p className="text-slate-500 text-xs md:text-sm font-medium">
            Don&apos;t have an account ?
          </p>
          <Button
            variant="ghost"
            className="p-0 text-orange-500 hover:bg-transparent hover:text-orange-600 text-xs md:text-sm font-medium"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
