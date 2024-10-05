interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-secondary">
      {children}
    </div>
  );
}
