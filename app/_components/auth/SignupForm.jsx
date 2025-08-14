import Link from "next/link";
import GoogleSignIn from "./GoogleSignIn";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Header } from "./Header";

export function SignupForm() {
  return (
    <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
      <Header text="Create an account" subText="Start your 30-day free trial" />
      <form className="flex flex-col gap-4">
        <Input
          label="Name"
          type="text"
          name="name"
          placeholder="Enter your name"
          important={true}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          important={true}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          important={true}
        />
        <span className="text-[12px] text-gray-500">
          Must be at least 8 characters long
        </span>
        <Button>Get Started</Button>
      </form>
      <GoogleSignIn text="up" />
      <span className="text-sm text-gray-500 w-full text-center inline-block mt-4">
        Already have an account?{" "}
        <Link href="/sign-up" className="text-blue-900 hover:underline">
          Log in
        </Link>
      </span>
    </div>
  );
}
