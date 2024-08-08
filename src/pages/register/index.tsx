import React, { useState } from "react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import PrimaryInput from "@/components/inputs/PrimaryInput";
import Link from "next/link";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="grid grid-cols-2 min-h-screen w-full bg-white">
      <div className="col-span-1 bg-zinc-100 relative flex items-center justify-center">
        <div className="h-40 w-40 bg-blue-700 rounded-full"></div>
        <div className="h-1/2 backdrop-blur-lg w-full absolute bottom-0 "></div>
      </div>
      <div className="col-span-1 grid items-center w-full content-center">
        <div className="max-w-md w-full mx-auto flex flex-col space-y-6">
          <p className="text-3xl font-bold text-zinc-950">Hello there</p>
          <p className="text-zinc-600">
            Create an account by entering details below
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
            placeholder="username"
            label={"Username"}
          />
          <PrimaryInput
            value={password}
            setValue={setPassword}
            placeholder="passsword"
            label={"Password"}
          />
          <div className="flex items-center">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
            />
            <label
              htmlFor="checked-checkbox"
              className="ms-2 text-sm text-zinc-950 "
            >
              Agree to terms and conditions
            </label>
          </div>
          <PrimaryButton text="Sign Up" />
          <p className="text-sm text-center">
            <p>
              Already have an account{" "}
              <span className="text-blue-700 font-semibold">
                <Link href={"/"}>Log In</Link>
              </span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
