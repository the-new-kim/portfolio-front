import { Canvas, useFrame } from "@react-three/fiber";
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTime,
  useTransform,
} from "framer-motion";
import { degreesToRadians } from "popmotion";
import { Suspense, useRef, useState } from "react";
import { Mesh } from "three";
import Lights from "./Lights";
import Plane from "./Plane";

function Cube() {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.01;
    // meshRef.current.rotation.z += 0.01;
  });

  return (
    <mesh
      ref={meshRef}
      onClick={() => console.log("hello")}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry />
      <meshStandardMaterial
      // color={hovered ? "hotpink" : "orange"}
      // roughness={0}
      // wireframe
      />
    </mesh>
  );
}

export default function Scene() {
  const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  // const yAngle = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [0.001, degreesToRadians(90)]
  // );

  // const distance = useTransform(scrollYProgress, [0, 1], [10, 5]);

  // const time = useTime();

  // const springDistance = useSpring(distance, {
  //   stiffness: 100,
  //   damping: 11,

  // });

  // useFrame(({ camera }) => {
  //   camera.position.setFromSphericalCoords(
  //     springDistance.get(),
  //     yAngle.get(),
  //     time.get() * 0.0005
  //   );
  //   camera.updateProjectionMatrix();
  //   camera.lookAt(0, 0, 0);
  // });
  return (
    <mesh>
      <Lights />
    </mesh>
  );
  {
  }
}
