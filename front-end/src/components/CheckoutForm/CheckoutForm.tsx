import { BillingDetailsForm } from '../BillingDetailsForm/BillingDetailsForm';
import { ShippingInfoForm } from '../ShippingInfoForm/ShippingInfoForm';
import { PaymentDetailsForm } from '../PaymentDetailsForm/PaymentDetailsForm';
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { CustomFormData } from '../../types/customFormData';

interface CheckoutFormProps {
  register: UseFormRegister<CustomFormData>;
  errors: FieldErrors<CustomFormData>;
  watch: UseFormWatch<CustomFormData>;
}

export function CheckoutForm({ register, errors, watch }: CheckoutFormProps) {
  return (
    <>
      <div className="flex flex-col gap-14 rounded-lg bg-white p-8">
        <h1 className="text-[32px] font-medium leading-9 tracking-[1.1px]">
          CHECKOUT
        </h1>
        <BillingDetailsForm register={register} errors={errors} />
        <ShippingInfoForm register={register} errors={errors} />
        <PaymentDetailsForm register={register} errors={errors} watch={watch} />
      </div>
    </>
  );
}
