interface MainContentProps {
	children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
	return (
		<div
			className='w-full min-h-screen flex flex-col 
		 justify-between '>
			{children}
		</div>
	);
}
