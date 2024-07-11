import {
	Inter,
	Open_Sans,
	Poppins,
} from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
	weight: '400',
	subsets: ['latin'],
});
const opensans = Open_Sans({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
});

export const metadata = {
	title:
		'Campus Mate - Your All-in-One Academic Companion.',
	description: 'Your #1 Academic Companion.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="bg-[#f1f1f1] text-[#1B1B1B]">
			<body className={opensans.className}>{children}</body>
		</html>
	);
}
