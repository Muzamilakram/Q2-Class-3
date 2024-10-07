'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  return (
    <>
      {/* Navbar Section */}
      <div>
        <b><i>Created By Muzamil Akram</i></b>
        <ul className="flex gap-3 text-white bg-yellow-900 justify-end pr-1 font-bold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/footer">Footer</Link></li>
        </ul>
      </div>

      <div className="fixed bottom-0 left-0 w-full flex justify-center mb-4">
        <button
          className="p-4 bg-yellow-900 text-white"
          onClick={() => route.push('/about')}>
          Go to Home Page
        </button>
      </div>
    </>
  );
}