import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import BackgroundScene from "./BackgroundScene";

export default function Background() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "black",
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <BackgroundScene />
      </Canvas>
      <div className="w-full h-full top-0 left-0 bg-white fixed -z-50" />
    </Suspense>
  );
}
