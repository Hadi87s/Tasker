import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-3 rounded-3xl relative h-[96vh] overflow-hidden">
      <Spotlight />
      <section className="flex flex-col gap-y-10 justify-center items-center min-h-screen">
        <h1 className="text-4xl xl:text-5xl 2xl:text-7xl font-bold ">Track Like a <span className="bg-blue-600 px-4 rounded-2xl">Pro!</span></h1>
        <p className="-mt-4">Tracker todo tasks using <span className="text-blue-600 font-bold">JSONPlaceholder</span> and <span className="text-blue-600 font-bold">Unsplash</span> Images</p>
        <Link href="/task" className="p-4 text-lg bg-blue-900 rounded-2xl ring-white transition duration-200 hover:ring-2 hover:shadow-blue-800/30 hover:shadow-xl">Start Tracking</Link>
      </section>
    </main>
  );
}