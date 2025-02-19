import { useRef, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { AuthForm } from '../AuthForm/AuthForm';
import { useAuthModal } from '../../hooks/useAuthModal';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIsLogin: boolean;
  message?: string;
}

export function AuthModal({
  isOpen,
  onClose,
  defaultIsLogin,
  message,
}: AuthModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const {
    isLogin,
    error,
    loading,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleClose,
    handleToggleMode,
  } = useAuthModal(defaultIsLogin, onClose);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        className="w-full max-w-[400px] rounded-lg bg-white p-6 md:p-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold uppercase tracking-[1px] text-primary">
            {isLogin ? 'Login' : 'Register'}
          </h2>
          <button
            onClick={handleClose}
            className="text-xl text-black/60 transition-colors hover:text-primary"
            aria-label="Close modal"
          >
            <IoClose />
          </button>
        </div>

        {message && (
          <p className="mb-4 text-center text-sm text-gray-600">{message}</p>
        )}

        <AuthForm
          isLogin={isLogin}
          error={error}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          onToggleMode={handleToggleMode}
          handleSubmit={handleSubmit}
          isLoading={loading}
        />
      </div>
    </div>
  );
}
