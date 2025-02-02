import Navbar from "@/components/shared/Navbar";
import { Globe, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container">
      <div className="flex justify-between items-center mt-10 mx-28">
        <div className="flex items-center gap-6 font-sans opacity-60 text-lg">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Globe />
              <span className="hover:underline hover:text-blue-400">
                Foreign
              </span>
            </div>
          </Link>
          <Link href="/" className="hover:underline hover:text-blue-400">
            Professionnels
          </Link>
          <Link href="/" className="hover:underline hover:text-blue-400">
            Entreprises
          </Link>
        </div>
        {/* the logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="./groppa.svg" alt="logo" width={200} height={200} />
        </div>

        {/* Added buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-blue-700"
          >
            Devenir client
          </Link>
          <Link
            href="/"
            className="px-4 py-2 border border-black text-black rounded-md hover:bg-white/10"
          >
            <div className="flex items-center gap-2">
              <User size={20} />
              Se connecter
            </div>
          </Link>
        </div>
      </div>
      {/* The nav content */}
      <Navbar />
    </div>
  );
}
