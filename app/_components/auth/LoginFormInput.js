import Link from "next/link";
import GoogleSignIn from "./GoogleSignIn";
import Image from "next/image";
import { Input } from "../ui/Input";

export default function LoginFormInput() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 mb-6">
        <Image
          src="/icons/kanban-logo.svg"
          alt="Kanban logo"
          height="40"
          width="40"
          className="hidden md:block"
        />
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-2xl font-semibold text-gray-700">
            Log in to your account
          </h1>
          <p className="text-gray-600">
            Welcome back! Please enter your details.
          </p>
        </div>
      </div>
      <form className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <div className="flex items-center gap-12 ">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="mr-2"
            />
            <label className="text-[12px] md:text-sm" htmlFor="rememberMe">
              Remember for 30 days
            </label>
          </div>
          <div>
            <Link
              href="forgot-password"
              className="text-blue-900 text-sm hover:underline text-[12px] md:text-sm"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400"
        >
          Sign in
        </button>
      </form>
      <GoogleSignIn />
      <span className="text-sm text-gray-500 w-full text-center inline-block mt-4">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-blue-900 hover:underline">
          Sign up
        </Link>
      </span>
    </div>
  );
}
