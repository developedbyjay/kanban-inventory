


export function Input({ label, important, type, name, placeholder }) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label} {important && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="p-2 w-full border border-gray-300 rounded"
      />
    </div>
  );
}
