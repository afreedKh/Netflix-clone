import { useState, type FormEvent } from "react";
import logo from "../../assets/logo.png";
import "./Login.css";
import {login,signup} from '../../Firebase'
import netflix_spinner from "../../assets/netflix_spinner.gif"



export const Login = () => {
  const [signState, setSignState] = useState<"Sign in" | "Sign up">("Sign in");
  const [name , setName] = useState<string>('');
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('')
  const [loading ,setLoading] = useState(false);

  const userAuth = async (e:FormEvent):Promise<void>=>{
    e.preventDefault()
    setLoading(true);
    if(signState==='Sign in'){
      await login({email,password})
    }else{
      await signup({name,email,password})
    }
    setLoading(false)
  }

  return (
    loading? <div className="login-spinner w-full h-screen flex items-center justify-center">
      <img src={netflix_spinner} alt="" className="w-14" />
    </div>:
    <div className="login h-screen  py-5 px-[8%] sm:py-[15px] sm:px-[5%]">
      <img src={logo} alt="logo" className="login-logo w-[150px] " />
      <div className="login-form w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded p-[60px] m-auto sm:p-5 sm:mt-[30px]">
        <h1 className="text-3xl font-medium mb-7">{signState}</h1>
        <form onSubmit={userAuth}>
          {signState === "Sign up" && (
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Your name "
              className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium"
          />
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            className="w-full h-12 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-4 px-5 text-base font-medium placeholder:text-base placeholder:font-medium"
          />
          <button  type="submit" className="w-full border-0 outline-0 p-4 bg-[#e50914] text-white rounded text-base font-medium mt-5 cursor-pointer ">
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
