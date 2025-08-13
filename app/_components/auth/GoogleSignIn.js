import Image from "next/image";

export default function GoogleSignIn() {
  return (
    <form className="mt-4">
      <button className="flex w-full items-center gap-6 text-sm justify-center border border-gray-300 px-10 py-2 font-medium">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Sign in with Google</span>
      </button>
    </form>
  );
}
