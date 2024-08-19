import { CheckoutForm } from '../../components/CheckoutForm/CheckoutForm';
import { CheckoutSummary } from '../../components/CheckoutSummary/CheckoutSummary';
import { ConfirmationModal } from '../../components/ConfirmationModal/ConfirmationModal';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomFormData } from '../../types/customFormData';

export function CheckoutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CustomFormData>({
    defaultValues: {
      paymentMethod: 'Cash on Delivery',
    },
  });

  const onSubmit = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="bg-light-grey px-8 pb-40 lg:px-10">
      <div className="mx-auto max-w-[1120px] py-8 md:py-20">
        <Link
          to={`/`}
          className="text-[15px] leading-[25px] opacity-50 hover:text-primary hover:opacity-100"
        >
          Go Back
        </Link>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="mx-auto mt-14 grid max-w-[1120px] gap-8 md:grid-cols-[2fr_1fr]">
            <CheckoutForm register={register} errors={errors} watch={watch} />
            <CheckoutSummary />
          </div>
        </form>
      </div>
      {isModalOpen && (
        <ConfirmationModal onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
}
