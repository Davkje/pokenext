import Image from "next/image";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
				<div className="font-mono">
					<p>PokeNext</p>
					<button className="border p-1 pl-3 pr-3 mt-2 hover:border-white active:bg-gray-900">Button</button>
				</div>
			</main>
		</div>
	);
}
