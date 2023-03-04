import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Duck(props) {
  const { nodes, materials } = useGLTF("/3dmodels/duck/duck.gltf");
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.01;

    // ref.current.rotation.z += 0.01;
  });
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[10, 10, 10]} position={[5, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Duck}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3dmodels/duck/duck.gltf");

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 duck.gltf
Author: emilsvfx (https://sketchfab.com/emilsvfx)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rubber-duck-a84cecb600c04eeba60d02f99b8b154b
Title: Rubber Duck
*/