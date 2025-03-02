export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-red-500">Task Not Found</h1>
        <p className="text-gray-600 mt-2">The task you are looking for does not exist.</p>
        <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Back to Tasks
        </a>
      </div>
    );
  }