import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/login_background.jpg";
// import Logo from "../../public/netflix_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="background image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-[0.2] bg-gradient-to-tr from-slate-900 to-yellow-600"
        priority
        fill
      />

     
      {children}
    </div>
  );
}