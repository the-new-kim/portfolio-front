import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { slideInViewState } from "../atom";
import { ISection } from "../libs/types";
import Heading from "./Heading";
import Links from "./Links";

interface ISliderProps {
  section: ISection;
}

export default function Slider({ section }: ISliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const ulRef = useRef<HTMLUListElement>(null);
  const isInView = useInView(ulRef, { margin: "-10px" });
  const setSlideInView = useSetRecoilState(slideInViewState);

  useEffect(() => {
    if (!containerRef.current) return;

    setWidth(
      containerRef.current.scrollWidth - containerRef.current.offsetWidth
    );
  }, [containerRef]);

  useEffect(() => {
    setSlideInView(isInView);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="absolute w-full h-full flex justify-start items-center overflow-hidden pointer-events-none"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex justify-start items-center pointer-events-auto"
      >
        <div className="w-screen h-screen flex justify-center items-center snap-center text-9xl">
          <Heading>{section.title}</Heading>
        </div>
        <motion.ul
          ref={ulRef}
          className="flex justify-start items-center
        [&>*]:w-screen [&>*]:h-screen [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:p-20
        "
        >
          {section.images.map((image, index) => (
            <li key={index}>
              <img
                className="w-full h-full object-contain pointer-events-none"
                src={image}
              />
            </li>
          ))}
          <li>
            <Links links={section.links} />
          </li>
        </motion.ul>
      </motion.div>
    </div>
  );
}
