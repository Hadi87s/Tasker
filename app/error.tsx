"use client";

interface IError {
    error: Error,
    reset: () => void,
}

const Error = ({error, reset}: IError) => {
  return (
    <html>
    <body className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-3 font-bold text-blue-600">Oops! Something went wrong.</h1>
      <p className="text-gray-500">{error.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
        onClick={() => reset()} // Reset the app
      >
        Try Again
      </button>
    </body>
  </html>
  )
}

export default Error
