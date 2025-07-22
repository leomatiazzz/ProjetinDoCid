type CheckboxProps = {
  label: string;
  id: string;
};

export default function Checkbox({ label, id }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <input type="checkbox" id={id} className="w-4 h-4" required />
      <label htmlFor={id} className="text-gray-700">{label}</label>
    </div>
  );
}
