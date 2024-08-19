import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { InputForm } from '../InputForm/InputForm';
import { CustomFormData } from '../../types/customFormData';

interface PaymentDetailsFormProps {
  register: UseFormRegister<CustomFormData>;
  errors: FieldErrors<CustomFormData>;
  watch: UseFormWatch<CustomFormData>;
}

export function PaymentDetailsForm({
  register,
  errors,
  watch,
}: PaymentDetailsFormProps) {
  const paymentMethod = watch('paymentMethod');

  return (
    <section>
      <h2 className="mb-4 text-[13px] font-bold uppercase leading-[25px] tracking-[0.929px] text-primary">
        Payment Details
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="mb-2 block text-xs font-bold tracking-[-0.214px]">
            Payment Method
          </p>
        </div>
        <div className="space-y-4">
          <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3">
            <input
              type="radio"
              value="e-Money"
              {...register('paymentMethod', {
                required: 'Payment method is required',
              })}
              className="mr-4 h-5 w-5 accent-primary"
            />
            <span className="text-sm font-bold">e-Money</span>
          </label>
          <label className="flex cursor-pointer items-center rounded-lg border border-gray-300 p-3">
            <input
              type="radio"
              value="Cash on Delivery"
              {...register('paymentMethod', {
                required: 'Payment method is required',
              })}
              className="mr-4 h-5 w-5 accent-primary"
            />
            <span className="text-sm font-bold">Cash on Delivery</span>
          </label>
        </div>
        {errors.paymentMethod && (
          <p className="col-span-2 mt-1 text-xs text-primary">
            {errors.paymentMethod.message}
          </p>
        )}
      </div>

      {paymentMethod === 'e-Money' && (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <InputForm
            id="eMoneyNumber"
            label="e-Money Number"
            register={register}
            error={errors.eMoneyNumber}
            required
          />
          <InputForm
            id="eMoneyPin"
            label="e-Money PIN"
            type="password"
            register={register}
            error={errors.eMoneyPin}
            required
          />
        </div>
      )}
    </section>
  );
}
