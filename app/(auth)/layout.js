import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center  bg-gray-100 pb-20">
      <div
        className="max-w-7xl w-full mx-auto flex-col flex md:flex-row
          items-center px-12 md:justify-between"
      >
        <Image
          src="img/kanban.svg"
          width={250}
          height={250}
          alt="Login image"
          className="object-cover"
        />
        {children}
      </div>
    </div>
  );
}
