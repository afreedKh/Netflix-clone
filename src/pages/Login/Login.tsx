import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Login.css";

export const Login = () => {
  const [signState, setSignState] = useState<"Sign in" | "Sign up">("Sign in");
  return (
    <div className="login h-screen  py-5 px-[8%] ">
      <img src={logo} alt="logo" className="login-logo w-[150px] " />
      <div className="login-form w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded p-[60px] m-auto">
        <h1 className="text-3xl font-medium mb-7">{signState}</h1>
        <form>
          {signState === "Sign up" && (
            <input
              type="text"
              placeholder="Your name "
              className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium"
          />
          <button className="w-full border-0 outline-0 p-4 bg-[#e50914] text-white rounded text-base font-medium mt-5 cursor-pointer ">
            {signState}
          </button>
          <div className="form-help flex items-center justify-between text-[#b3b3b3] text-xs mt-2">
            <div className="remember flex items-center gap-1.5  ">
              <input type="checkbox" className="w-[18px] h-[18px]" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>
        <div className="form-switch mt-10 text-[#737373]">
          {signState === "Sign in" && (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => setSignState("Sign up")}
                className="ml-[6px] text-white font-medium cursor-pointer"
              >
                Sign up now
              </span>{" "}
            </p>
          )}
          {signState === "Sign up" && (
            <p>
              Already have account?{" "}
              <span
                onClick={() => setSignState("Sign in")}
                className="ml-[6px] text-white font-medium cursor-pointer"
              >
                Sign in now
              </span>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
