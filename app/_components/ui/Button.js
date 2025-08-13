export function Button({ children, onClick, className }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400"
    >
      {children}
    </button>
  );
}
