import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { InputForm } from '../InputForm/InputForm';
import { CustomFormData } from '../../types/customFormData';

interface ShippingInfoFormProps {
  register: UseFormRegister<CustomFormData>;
  errors: FieldErrors<CustomFormData>;
}

export function ShippingInfoForm({ register, errors }: ShippingInfoFormProps) {
  return (
    <section>
      <h2 className="mb-4 text-[13px] font-bold uppercase leading-[25px] tracking-[0.929px] text-primary">
        Shipping Info
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <InputForm
            id="address"
            label="Address"
            placeholder="1137 Williams Avenue"
            register={register}
            error={errors.address}
            required
          />
        </div>
        <InputForm
          id="zipCode"
          label="ZIP Code"
          register={register}
          error={errors.zipCode}
          required
        />
        <InputForm
          id="city"
          label="City"
          register={register}
          error={errors.city}
          required
        />
        <InputForm
          id="country"
          label="Country"
          register={register}
          error={errors.country}
          required
        />
      </div>
    </section>
  );
}
