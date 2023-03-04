export default function Lights() {
  return (
    <>
      {/* <ambientLight intensity={0.5} position={[-10, 10, 10]} /> */}
      <directionalLight position={[0, 10, 10]} intensity={0.5} color="green" />
      <pointLight position={[0, -5, -5]} intensity={0.4} color="yellow" />
    </>
  );
}
