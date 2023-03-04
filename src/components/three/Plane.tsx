import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { Texture, TextureLoader, Vector3 } from "three";
import img from "../../images/boxed-water.jpg";

interface IPlaneProps {
  position?: Vector3;
}

export default function Plane({ position }: IPlaneProps) {
  const texture = useLoader(TextureLoader, img);

  return (
    <mesh position={position}>
      <planeGeometry args={[4, 4]} />
      {/* <boxGeometry /> */}
      <meshBasicMaterial map={texture as Texture} toneMapped={false} />
    </mesh>
  );
}
