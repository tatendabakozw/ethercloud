import React, { useState } from "react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import PrimaryInput from "@/components/inputs/PrimaryInput";
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="grid grid-cols-2 min-h-screen w-full bg-white">
      <div className="col-span-1 grid items-center w-full content-center">
        <div className="max-w-md w-full mx-auto flex flex-col space-y-6">
          <p className="text-3xl font-bold text-zinc-950">Welcome back</p>
          <p className="text-zinc-600">
            Welcome back! Please enter your details
          </p>
          <PrimaryInput
            value={email}
            setValue={setEmail}
            placeholder="email"
            label={"Email"}
          />
          <PrimaryInput
            value={password}
            setValue={setPassword}
            placeholder="passsword"
            label={"Password"}
          />

          <p className="text-blue-700 text-sm text-end">Forgot password</p>
          <PrimaryButton text="Sign In" />
          <p className="text-sm text-center">
            <p>
              Dont have an account{" "}
              <span className="text-blue-700 font-semibold">
                <Link href={"/register"}>Sign Up</Link>
              </span>
            </p>
          </p>
        </div>
      </div>
      <div className="col-span-1 bg-zinc-100 relative flex items-center justify-center">
        <div className="h-40 w-40 bg-blue-700 rounded-full"></div>
        <div className="h-1/2 backdrop-blur-lg w-full absolute bottom-0 "></div>
      </div>
    </div>
  );
}

export default Login;
