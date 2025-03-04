'use client'; // Required for error components

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('An error occurred:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl mb-3 font-bold text-blue-600">Something went wrong!</h1>
      <p className="text-gray-500">{error.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        onClick={() => reset()} // Attempts to re-render the component
      >
        Try Again
      </button>
    </div>
  );
}
