import Link from "next/link";
import GoogleSignIn from "./GoogleSignIn";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Header } from "./Header";

export function LoginForm() {
  return (
    <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
      <Header
        text="Log in to your account"
        subText="Welcome back! Please enter your details."
      />
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
        <Button>Sign in</Button>
      </form>
      <GoogleSignIn text="in" />
      <span className="text-sm text-gray-500 w-full text-center inline-block mt-4">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-blue-900 hover:underline">
          Sign up
        </Link>
      </span>
    </div>
  );
}
