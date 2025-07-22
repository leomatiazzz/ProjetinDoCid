type InputProps = {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ placeholder, type = 'text', value, onChange }: InputProps) {
  return (
    <input
      className="w-full p-2 border border-gray-300 rounded mb-4"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
