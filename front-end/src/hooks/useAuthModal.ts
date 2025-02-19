import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';
import { CustomFormData } from '../types/customFormData';

export function useAuthModal(defaultIsLogin: boolean, onClose: () => void) {
  const [isLogin, setIsLogin] = useState(defaultIsLogin);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleLogin = async (data: CustomFormData) => {
    const { email_user, password_user } = data;
    if (!email_user || !password_user) {
      throw new Error('Please fill in all required login fields.');
    }
    const { error } = await supabase.auth.signInWithPassword({
      email: email_user,
      password: password_user,
    });
    if (error) throw error;
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
    if (error) throw error;
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

  return {
    isLogin,
    error,
    loading,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleClose,
    handleToggleMode,
  };
}
