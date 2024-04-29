import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowRight, FaRegCirclePlay } from 'react-icons/fa6';

const Landing = () => {
  return (
		<div className="px-5 lg:px-5 flex flex-col lg:flex-row items-center pt-5 lg:pt-10 justify-between">
			<div className="w-full lg:w-2/3">
				<h1 className="text-5xl lg:text-7xl font-bold text-left leading-[3.8rem] lg:leading-snug">
					Your{' '}
					<span className="text-[#9a53f7] font-bold">
						All-in-One
					</span>{' '}
					<br />
					Campus{' '}
					<span className="">Companion!</span>
				</h1>
				<p className="text-lg lg:text-xl text-left w-full lg:w-[80%] leading-normal mt-3 mb-8">
					Simplify your student life with our all-in-one
					solution for scheduling, collaboration, study
					materials, and task management. Enhance focus,
					productivity, and success with Campus Mate.
				</p>
				<div className="flex flex-row items-center gap-10 mb-10">
					<Link
						href="/"
						className="bg-[#1F0054] flex flex-row items-center gap-3 px-8 py-3 rounded-[5px] shadow-md text-white font-bold"
					>
						<p>Get App </p>
						<FaArrowRight />
					</Link>
					<Link
						href="/"
						className="text-[#000] flex flex-row gap-3 font-bold items-center"
					>
						<FaRegCirclePlay size={30} />
						<p>Watch Video</p>
					</Link>
				</div>
			</div>
			<div>
				<Image
					src="/landing.png"
					width={250}
					height={250}
				/>
			</div>
		</div>
	);
}

export default Landing