import Image from "next/image";

export function Header({ text, subText }) {
  return (
    <header className="flex flex-col justify-center items-center gap-4 mb-6">
      <Image
        src="/icons/kanban-logo.svg"
        alt="Kanban logo"
        height="40"
        width="40"
        className="hidden md:block"
      />
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-semibold text-gray-700">{text}</h1>
        <p className="text-gray-600 text-[12px] px-8">{subText}</p>
      </div>
    </header>
  );
}
