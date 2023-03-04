import { ReactNode } from "react";

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

interface ISectionProps {
  children: ReactNode;
}

export default function Section({ children }: ISectionProps) {
  return (
    <section
      className="w-full h-screen flex justify-center items-center snap-center border-white border-2 text-6xl pointer-events-none [&>*]:pointer-events-auto mix-blend-difference"
      //   style={{
      //     width: "100%",
      //     height: "100vh",
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "end",
      //     color: "white",
      //     fontSize: 100,
      //     border: "solid white 1px",
      //     scrollSnapAlign: "center",
      //   }}
    >
      {children}
    </section>
  );
}
