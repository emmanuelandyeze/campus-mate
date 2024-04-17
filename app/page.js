import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center px-5 lg:px-0">
			<Image src="/icon.png" width={200} height={200} />
			<h1 className="text-4xl font-bold text-center">
				Welcome to Campus Mate!
			</h1>
			<p className="text-center">
				We are working tirelessly and would be with you
				shortly.
			</p>
		</main>
	);
}
