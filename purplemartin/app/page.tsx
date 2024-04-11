import Navbar from "./components/Navbar";
import Image from "next/image";
import HomePagePurpleMartin from "../public/HomePagePurpleMartin.png";

export default function Home() {
  return (
    <main className="bg-gradient-to-b">
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
          <Image src={HomePagePurpleMartin} alt="Purple Martin" />
        </div>
        <div className="bg-gradient-to-b from-[#9CC6E7] to-blue-200"></div>
      </div>
    </main>
  );
}
