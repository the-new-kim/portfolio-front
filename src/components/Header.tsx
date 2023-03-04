import { Link } from "react-router-dom";
import { At, InstagramLogo } from "phosphor-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-screen flex flex-col justify-between items-center z-50 pointer-events-none p-5 text-white mix-blend-difference [&>*]:pointer-events-auto">
      <div className="flex justify-start items-center w-full">
        <Link to="/">Home</Link>
      </div>
      <div className="flex justify-end items-center w-full">
        <Link to="/">
          <At />
        </Link>
        <InstagramLogo />
      </div>
    </header>
  );
}
