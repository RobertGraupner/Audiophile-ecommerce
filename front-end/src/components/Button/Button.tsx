interface ButtonProps {
  children: React.ReactNode;
  bgColor: string;
  hoverColor: string;
  textColor: string;
  className?: string;
}

export function Button({
  children,
  bgColor,
  hoverColor,
  textColor,
  className = '',
}: ButtonProps) {
  return (
    <button
      className={`h-12 w-40 text-xs font-medium uppercase tracking-[1px] ${bgColor} ${hoverColor} ${textColor} ${className}`}
    >
      {children}
    </button>
  );
}
