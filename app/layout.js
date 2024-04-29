import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title:
		'Campus Mate - Your All-in-One Academic Companion.',
	description: 'Your #1 Academic Companion.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="bg-[#fefefe]">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
