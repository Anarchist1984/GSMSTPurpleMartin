import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="h-screen bg-indigo-600 dark:bg-indigo-950 relative style={{ paddingTop: `${headerHeight}px` }}">
        <div className="bg-white rounded-lg inline-block px-6 py-10 ">
          <h1 className="text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              The
            </span>
          </h1>
          <h1 className="text-8xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-pink-900">
              Purple
            </span>
          </h1>
          <h1 className="text-8xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-pink-900">
              Martin
            </span>
          </h1>
          <h1 className="text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Project
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
}
