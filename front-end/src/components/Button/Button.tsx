import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  bgColor: string;
  hoverColor: string;
  textColor: string;
  className?: string;
  to: string;
  onClick?: () => void;
}

export function Button({
  children,
  bgColor,
  hoverColor,
  textColor,
  className = '',
  to,
  onClick,
}: ButtonProps) {
  return (
    <Link
      to={to}
      className={`flex h-12 w-40 items-center justify-center text-xs font-medium uppercase tracking-[1px] ${bgColor} ${hoverColor} ${textColor} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
