import Link from "next/link";
import Navbar from "./componment/navbar";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center bg-teal-800">
      <Navbar />
      <h1 className="text-center text-black font-bold">Home Page</h1>
    </div>
  );
}
