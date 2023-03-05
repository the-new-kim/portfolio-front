import Section from "../components/Section";
import { sections } from "../libs/fakeData";

export default function Home() {
  return (
    <>
      {sections.map((section, index) => (
        <Section
          key={index}
          section={section}
          sectionIndex={index}
          sectionsLength={sections.length}
        />

        // <Link
        //   to={`/sections/${work.slug}`}
        //   key={index}
        //   className="text-9xl my-3 z-50"
        // >
        //   {work.title}
        // </Link>
      ))}
    </>
  );
}
