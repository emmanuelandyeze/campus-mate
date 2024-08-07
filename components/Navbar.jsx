import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const active = 'font-bold text-[#1F0054] underline underline-offset-4';

const Navbar = () => {
  return (
		<div className="flex flex-row items-center justify-between pr-5">
			<div className="flex flex-row gap-10">
				<div className="flex flex-row items-center px-0 py-5">
					<Image src="/logo.png" width={85} height={85} />
					<h1 className="font-bold text-xl ">
						Campus Mate
					</h1>
				</div>
			</div>
			<div className="hidden md:flex flex-row items-center gap-10">
				<Link href="/" className={active}>
					Home
				</Link>

				<Link href="/">Features</Link>
				<Link href="/">FAQs</Link>
				<Link href="/">Contact</Link>
			</div>
			<div>
				<Link
					href="/"
					className="bg-[#1F0054] lg:px-8 lg:py-3 px-4 py-3 rounded-[5px] shadow-md text-white font-bold"
				>
					Get App
				</Link>
			</div>
		</div>
	);
}

export default Navbar