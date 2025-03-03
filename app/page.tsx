import Link from "next/link";

export default function Home() {
  return (
    
    <main className="">
  
      <section className="flex flex-col gap-y-10 justify-center items-center min-h-screen">
        <h1 className="text-4xl xl:text-5xl 2xl:text-7xl font-bold">Track Like a Pro!
        </h1>
        <Link href="/tracker" className="p-4 text-lg bg-blue-900 rounded-2xl ring-white transition duration-200 hover:ring-2 hover:shadow-blue-800/30 hover:shadow-xl">Get Started</Link>
      </section>
    </main>
  );
}