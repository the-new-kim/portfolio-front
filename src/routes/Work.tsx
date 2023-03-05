import { useParams } from "react-router-dom";

export default function Work() {
  const { slug } = useParams();

  return (
    <div
      style={{
        background: "white",
      }}
      className="text-black w-full min-h-screen"
    >
      {slug}
    </div>
  );
}
