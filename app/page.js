import Link from "next/link";

export default function Page() {
  return (
    <main className="container mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl">
          <Link href="/week-2" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
            Click to go to WEEK-2
          </Link>
        </h2>
        <h2 className="text-xl">
          <Link href="/week-3" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
            Click to go to WEEK-3
          </Link>
        </h2>
        <h2 className="text-xl" >
          <Link href="/week-4" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
           Click to go to WEEK-4
          </Link>
        </h2>
        <h2 className="text-xl" >
          <Link href="/week-5" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
           Click to go to WEEK-5
          </Link>
        </h2>
        <h2 className="text-xl" >
          <Link href="/week-6" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
           Click to go to WEEK-6
          </Link>
        </h2>
        <h2 className="text-xl" >
          <Link href="/week-7" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
           Click to go to WEEK-7
          </Link>
        </h2>
      </div>
    </main>
  );
}