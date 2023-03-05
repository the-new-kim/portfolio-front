export default function BackgroundLights() {
  return (
    <>
      {/* <ambientLight intensity={0.5} position={[-10, 10, 10]} /> */}
      <directionalLight position={[0, 10, 10]} intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={0.4} />
    </>
  );
}
