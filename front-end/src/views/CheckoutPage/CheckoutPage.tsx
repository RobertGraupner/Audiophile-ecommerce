import { CheckoutForm } from '../../components/CheckoutForm/CheckoutForm';
import { CheckoutSummary } from '../../components/CheckoutSummary/CheckoutSummary';
import { ConfirmationModal } from '../../components/ConfirmationModal/ConfirmationModal';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CustomFormData } from '../../types/customFormData';
import { useCheckout } from '../../hooks/useCheckout';
import { AuthModal } from '../../components/AuthModal/AuthModal';

export function CheckoutPage() {
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

  const {
    onSubmit,
    isSubmitting,
    isModalOpen,
    isAuthModalOpen,
    orderDetails,
    closeModalAndNavigate,
    setIsAuthModalOpen,
  } = useCheckout();

  return (
    <main className="bg-light-grey px-8 pb-40 lg:px-10">
      <div className="mx-auto max-w-[1120px] py-8 md:py-20">
        <Link
          to="/"
          className="text-[15px] leading-[25px] opacity-50 hover:text-primary hover:opacity-100"
        >
          Go Back
        </Link>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="mx-auto mt-14 grid max-w-[1120px] gap-8 md:grid-cols-[2fr_1fr]">
            <CheckoutForm register={register} errors={errors} watch={watch} />
            <CheckoutSummary isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          defaultIsLogin={true}
          message="Please sign in to complete your order and enjoy shopping!"
        />
      )}
      {isModalOpen && orderDetails && (
        <ConfirmationModal
          onClose={closeModalAndNavigate}
          orderItems={orderDetails.items}
          grandTotal={orderDetails.total}
        />
      )}
    </main>
  );
}
