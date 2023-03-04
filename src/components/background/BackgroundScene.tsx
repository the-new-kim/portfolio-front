import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll, useTime, useTransform } from "framer-motion";
import { degreesToRadians } from "popmotion";
import { Suspense } from "react";
import { Ball } from "../models/Ball";
import { CoffeeMug } from "../models/CoffeeMug";
import { Croissant } from "../models/Croissant";
import { Duck } from "../models/Duck";
import { LegoBlock } from "../models/LegoBlock";
import { Luggage } from "../models/Luggage";
import { Olympus } from "../models/Olympus";
import { Strawberry } from "../models/Strawberry";
import BackgroundLights from "./BackgroundLights";

export default function BackgroundScene() {
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(360)]
  );

  const distance = useTransform(scrollYProgress, [0, 1], [10, 15]);

  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), 0);
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <BackgroundLights />
      {/* <OrbitControls /> */}

      <Duck />
      <Ball position={[2, 0, 0]} scale={[0.5, 0.5, 0.5]} />
      <CoffeeMug />
      <LegoBlock scale={[0.3, 0.3, 0.3]} />
      <Croissant scale={[700, 700, 700]} />
      <Olympus />
      <Strawberry scale={[2, 2, 2]} />
      <Luggage />
    </>
  );
}
