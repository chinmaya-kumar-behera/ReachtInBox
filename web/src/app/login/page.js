import React from "react";
import logo from "../../assets/images/google-logo.png"
import Image from "next/image";
import Button from "@/components/ui/Button";

const Login = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="min-w-[500px] space-y-5 p-10 bg-gray-100 bg-opacity-10 rounded-xl border border-gray-700">
        <div className="flex justify-center">
          <h2 className="text-xl">Create a new account</h2>
        </div>
        <div className="w-full pt-3">
          <div className="w-full flex items-center gap-4 justify-center p-xp1- py-2 border border-gray-700 rounded-xl">
            <div className="relative h-7 w-7">
              <Image
                src={logo}
                layout="fill"
                className="object-cover object-center"
              />
            </div>
            <span className="text-sm">Sign in with google</span>
          </div>
        </div>
        <div className="pt-5 space-y-5">
          <div className="flex justify-center">
            <Button className="px-10 py-[14px] rounded-sm">
              Create an account
            </Button>
          </div>
          <p className="text-sm text-center">
            Already have an account? <span className="font-semibold">Sign In</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
