import { Canvas } from "@react-three/fiber";
import { ArrowDown } from "phosphor-react";
import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { bgColorState, slideInViewState } from "../../atom";
import BackgroundScene from "./BackgroundScene";

export default function Background() {
  const bgColor = useRecoilValue(bgColorState);
  const slideInView = useRecoilValue(slideInViewState);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          filter: slideInView ? "blur(4px)" : "",
          pointerEvents: "none",
          zIndex: -1,
          transition: "filter 500ms linear",
        }}
      >
        <BackgroundScene />
      </Canvas>

      <div
        style={{
          background: bgColor,
        }}
        className="w-full h-full top-0 left-0 fixed -z-50 duration-300 transition-colors"
      />
    </Suspense>
  );
}
