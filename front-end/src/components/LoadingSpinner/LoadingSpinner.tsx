import { useState, useEffect } from 'react';

export function LoadingSpinner() {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!showSpinner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300">
      <div className="flex flex-col items-center gap-6 rounded-lg bg-white p-8 shadow-lg">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-[15px] font-bold uppercase tracking-[1px] text-black">
          Loading...
        </p>
      </div>
    </div>
  );
}
