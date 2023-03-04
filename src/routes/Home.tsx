import { Link } from "react-router-dom";
import Section from "../components/Section";

const works = [
  { title: "Toy shop", slug: "toy-shop" },
  { title: "Melanchthon", slug: "melanchthon" },
  { title: "Arthen Kommunikation", slug: "arthen-kommunikation" },
  { title: "Coin Tracker", slug: "coin-tracker" },
  { title: "Ambient sound player", slug: "ambient-sound-player" },
  { title: "Una Kim", slug: "una-kim" },
];

export default function Home() {
  return (
    <>
      {works.map((work, index) => (
        <Section key={index}>{work.title}</Section>
        // <Link
        //   to={`/works/${work.slug}`}
        //   key={index}
        //   className="text-9xl my-3 z-50"
        // >
        //   {work.title}
        // </Link>
      ))}
    </>
  );
}
