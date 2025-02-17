import { CustomFormData } from '../../types/customFormData';
import {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { InputForm } from '../InputForm/InputForm';

interface AuthFormProps {
  isLogin: boolean;
  error: string | null;
  onSubmit: (data: CustomFormData) => void;
  register: UseFormRegister<CustomFormData>;
  errors: FieldErrors<CustomFormData>;
  onToggleMode: () => void;
  handleSubmit: UseFormHandleSubmit<CustomFormData>;
  isLoading: boolean;
}

export function AuthForm({
  isLogin,
  error,
  onSubmit,
  register,
  errors,
  onToggleMode,
  handleSubmit,
  isLoading,
}: AuthFormProps) {
  return (
    <>
      {error && <p className="mb-4 text-[14px] text-red-500">{error}</p>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-black"
      >
        {!isLogin && (
          <InputForm
            id="name_user"
            label="Name"
            register={register}
            error={errors.name_user}
            required
          />
        )}
        <InputForm
          id="email_user"
          label="Email Address"
          type="email"
          register={register}
          error={errors.email_user}
          required
        />
        <InputForm
          id="password_user"
          label="Password"
          type="password"
          register={register}
          error={errors.password_user}
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 h-10 bg-primary text-[13px] font-bold uppercase tracking-[1px] text-white transition duration-300 hover:bg-primary-light disabled:opacity-50"
        >
          {isLoading ? 'Logging in...' : isLogin ? 'Login' : 'Register'}
        </button>
        <p className="text-center text-[14px]">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            type="button"
            onClick={onToggleMode}
            className="ml-2 font-bold text-primary hover:text-primary-light"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </>
  );
}
