import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-indigo-800 via-blue-700 to-purple-600 dark:bg-indigo-950">
      <Navbar />
      <div className="h-screen">
        <div className="bg-white rounded-lg inline-block px-6 py-10 absolute top-32 left-56">
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
        <div>
          <img
            src="https://media.audubon.org/nas_birdapi_hero/h_purple-martin_006_shutterstock_texas_1220914552_adult-male_agamiphotoagency.jpg"
            alt="Purple Martin "
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
