/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 eevee.glb
Author: drewsdigitaldesigns (https://sketchfab.com/drewsdigitaldesigns)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/eevee-9b7f0605ef1443d5a25757484ca484c7
Title: Eevee
*/

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

// import eevee from "..eevee.glb";

// type GLTFResult = GLTF & {
//   nodes: {
//     Pyramid: THREE.Mesh;
//   };

//   materials: {
//     ["default"]: THREE.MeshStandardMaterial;
//   };
// };

export function Eevee(props) {
  const { nodes, materials } = useGLTF("/3dmodels/eevee.glb");
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1}>
        <mesh
          geometry={nodes.Eevee_Material__12_0.geometry}
          material={materials.Material_12}
        />
        <mesh
          geometry={nodes.Eevee_Material__13_0.geometry}
          material={materials.Material_13}
        />
        <mesh
          geometry={nodes.Eevee_Material__14_0.geometry}
          material={materials.Material_14}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/eevee.glb");
