import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 pb-20">
      <div className="max-w-7xl w-full flex-col flex md:flex-row items-center px-12">
        <div className="flex-1">
          <Image
            src="img/kanban.svg"
            width={250}
            height={250}
            alt="Login image"
            className="object-cover"
          />
        </div>
        <div className="flex-1 mt-20 md:mt-0">{children}</div>
      </div>
    </div>
  );
}
