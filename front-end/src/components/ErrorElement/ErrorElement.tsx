import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';

export function ErrorElement() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center py-16">
      <p>An unexpected error occurred</p>
      <Button
        bgColor="bg-primary"
        hoverColor="hover:bg-primary-light"
        textColor="text-white"
        to="/"
        onClick={handleGoHome}
        className="mt-4"
      >
        Back to home
      </Button>
    </div>
  );
}
