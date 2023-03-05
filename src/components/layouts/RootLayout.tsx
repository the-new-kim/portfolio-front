import { useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Background from "../background/Background";

import Header from "../Header";

export default function RootLayout() {
  const location = useLocation();

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <div
        ref={containerRef}
        // className="fixed top-0 left-0 w-full h-screen overflow-y-auto snap-mandatory snap-y"
      >
        <main className="flex flex-col z-10">
          <Outlet />
        </main>
      </div>

      <Background />
    </>
  );
}
