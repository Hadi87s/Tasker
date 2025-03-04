import Link from "next/link";

export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl mb-5 text-blue-900 font-bold animate-pulse">404</h1>
        <h2 className="text-4xl font-bold text-blue-500">Task Not Found</h2>
        <p className="text-gray-500 mt-2">The task you are looking for does not exist.</p>
        <Link href="/task" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Back to Tasks
        </Link>
      </div>
    );
  }