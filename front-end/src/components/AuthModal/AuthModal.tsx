import { useState, useRef, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../../lib/supabase';
import { CustomFormData } from '../../types/customFormData';
import { IoClose } from 'react-icons/io5';
import { AuthForm } from '../AuthForm/AuthForm';

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
  const [isLogin, setIsLogin] = useState(defaultIsLogin);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CustomFormData>();

  const handleClose = useCallback(() => {
    reset();
    setError(null);
    setIsLogin(true);
    onClose();
  }, [onClose, reset]);

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

  useEffect(() => {
    setIsLogin(defaultIsLogin);
  }, [defaultIsLogin]);

  const handleLogin = async (data: CustomFormData) => {
    const { email_user, password_user } = data;
    if (!email_user || !password_user) {
      throw new Error('Please fill in all required login fields.');
    }
    const { error } = await supabase.auth.signInWithPassword({
      email: email_user,
      password: password_user,
    });
    if (error) {
      throw error;
    }
  };

  const handleRegister = async (data: CustomFormData) => {
    const { email_user, password_user, name_user } = data;
    if (!email_user || !password_user || !name_user) {
      throw new Error('Please fill in all required registration fields.');
    }
    const { error } = await supabase.auth.signUp({
      email: email_user,
      password: password_user,
      options: {
        data: {
          display_name: name_user,
        },
      },
    });
    if (error) {
      throw error;
    }
  };

  const onSubmit = async (data: CustomFormData) => {
    setLoading(true);
    try {
      if (isLogin) {
        await handleLogin(data);
      } else {
        await handleRegister(data);
      }
      handleClose();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An error occurred while logging in or registering');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleToggleMode = useCallback(() => {
    setIsLogin((prev) => !prev);
    setError(null);
    reset();
  }, [reset]);

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

        {error && <p className="mb-4 text-[14px] text-red-500">{error}</p>}

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
