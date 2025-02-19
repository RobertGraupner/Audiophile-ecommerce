import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { InputForm } from '../InputForm/InputForm';
import { CustomFormData } from '../../types/customFormData';

interface BillingDetailsFormProps {
  register: UseFormRegister<CustomFormData>;
  errors: FieldErrors<CustomFormData>;
}

export function BillingDetailsForm({
  register,
  errors,
}: BillingDetailsFormProps) {
  return (
    <section>
      <h2 className="mb-4 text-[13px] font-bold uppercase leading-[25px] tracking-[0.929px] text-primary">
        Billing Details
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <InputForm
          id="name"
          label="Name"
          register={register}
          error={errors.name}
          required
          autoComplete="off"
        />
        <InputForm
          id="email"
          label="Email Address"
          type="email"
          register={register}
          error={errors.email}
          required
          pattern={{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          }}
          autoComplete="off"
        />
        <InputForm
          id="phoneNumber"
          label="Phone Number"
          register={register}
          error={errors.phoneNumber}
          required
          pattern={{
            value: /^[+]?\d+$/,
            message: 'Phone number can only contain numbers and + sign',
          }}
          autoComplete="off"
        />
      </div>
    </section>
  );
}
