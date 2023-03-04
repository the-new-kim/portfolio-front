import { useParams } from "react-router-dom";

export default function Work() {
  const { slug } = useParams();

  return <div>{slug}</div>;
}
