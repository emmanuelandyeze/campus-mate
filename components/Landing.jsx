import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowRight, FaRegCirclePlay } from 'react-icons/fa6';

const Landing = () => {
  return (
		<div className="px-5 lg:px-5 w-full flex flex-col lg:flex-row items-center pt-5 lg:pt-10">
			<div className="w-full lg:w-2/3">
				<h1 className="text-5xl lg:text-6xl font-bold w-[90%] text-left leading-[3.8rem] lg:leading-[5rem]">
					Stay{' '}
					<span className="text-[#1F0054] font-bold">
						Organized,
					</span>{' '}
					{/* <br /> */}
					Stay{' '}
					<span className="text-[#F3982C]">Ahead </span>
					with <span className="">Campus Mate!</span>
				</h1>
				<p className="text-lg lg:text-xl text-left w-full lg:w-[75%] lg:leading-[2rem] mt-3 mb-8">
					The ultimate companion for university students.
					Master your schedule, collaborate effortlessly,
					and access the best study materials.
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
						className=" flex flex-row gap-3 font-bold items-center"
					>
						<FaRegCirclePlay size={30} />
						<p>Watch Video</p>
					</Link>
				</div>
			</div>
			<div className="flex flex-row gap-5">
				<Image
					src="/landing.png"
					width={250}
					height={250}
					className="transform -rotate-6"
				/>
				<Image
					src="/landing.png"
					width={250}
					height={250}
					className="transform rotate-6"
				/>
			</div>
		</div>
	);
}

export default Landing