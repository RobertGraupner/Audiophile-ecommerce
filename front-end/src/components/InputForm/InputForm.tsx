import { UseFormRegister, FieldError } from 'react-hook-form';
import { CustomFormData } from '../../types/customFormData';

interface InputFormProps {
  id: keyof CustomFormData;
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<CustomFormData>;
  error?: FieldError;
  required?: boolean;
}

export function InputForm({
  id,
  label,
  type = 'text',
  register,
  error,
  required = false,
}: InputFormProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-bold tracking-[-0.214px]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(id, { required: required && `${label} is required` })}
        className={`w-full rounded-lg border p-3 text-sm tracking-[-0.25px] opacity-40 ${
          error ? 'border-primary' : 'border-[#CFCFCF]'
        } focus:border-primary focus:outline-none focus:ring-0`}
      />
      {error && <p className="mt-1 text-xs text-primary">{error.message}</p>}
    </div>
  );
}
