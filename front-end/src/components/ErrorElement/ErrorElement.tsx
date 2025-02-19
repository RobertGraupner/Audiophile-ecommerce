import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';

export function ErrorElement() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex min-h-[calc(100vh-400px)] flex-col items-center justify-center gap-8 bg-white px-8 py-16">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-wider text-primary">
          Oops!
        </h1>
        <p className="text-lg text-gray-600">
          An unexpected error occurred. Please try again later.
        </p>
      </div>
      <Button
        bgColor="bg-primary"
        hoverColor="hover:bg-primary-light"
        textColor="text-white"
        to="/"
        onClick={handleGoHome}
      >
        Back to home
      </Button>
    </div>
  );
}
