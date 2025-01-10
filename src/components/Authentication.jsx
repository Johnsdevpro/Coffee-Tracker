import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Loader } from "lucide-react";

const Authentication = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleAuthenticate() {
    setIsAuthenticating(true);
  }

  return (
    <div>
      <div className="">
        {isRegistration && (
          <div className="flex flex-col gap-1">
            <Label htmlFor="name" className="text-slate-600 text-xs md:text-sm">
              Full Name
            </Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your full name"
              id="name"
              required
              className="placeholder:text-slate-500 text-xs md:text-sm"
            />
          </div>
        )}
        <div className="flex flex-col gap-1 mt-3">
          <Label htmlFor="email" className="text-slate-600 text-xs md:text-sm">
            Email
          </Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            id="email"
            required
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            id="password"
            required
            className="placeholder:text-slate-500 text-xs md:text-sm"
          />
        </div>
        {isAuthenticating ? (
          <div className="flex flex-col items-center justify-center mt-3">
            <Loader className="text-orange-500 text-sm md:text-base animate-spin" />
          </div>
        ) : (
          <div>
            <Button className="mt-3 w-full text-white text-xs md:text-sm font-medium capitalize h-[40px]">
              {isRegistration ? "Sign Up" : "Sign In"}
            </Button>
            <Separator className="text-slate-500 my-3 h-[2px] rounded" />
            <div className="flex flex-row items-center justify-center gap-3">
              <p className="text-slate-500 text-xs md:text-sm font-medium">
                {isRegistration
                  ? "Already have an account ?"
                  : "Don't have an account ?"}
              </p>
              <Button
                onClick={() => {
                  setIsRegistration(!isRegistration);
                }}
                variant="ghost"
                className="p-0 text-orange-500 hover:bg-transparent hover:text-orange-600 text-xs md:text-sm font-medium"
              >
                {isRegistration ? "Sign In" : "Sign Up"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Authentication;
