import { useInView, motion } from "framer-motion";
import { ArrowDown } from "phosphor-react";
import { ReactNode, useEffect, useRef, useState } from "react";

import { useSetRecoilState } from "recoil";
import { bgColorState, pageState, upDownButotnState } from "../atom";
import { ISection } from "../libs/types";
import Heading from "./Heading";
import Slider from "./Slider";

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

interface ISectionProps {
  // children: ReactNode;
  section: ISection;
  sectionIndex: number;
  sectionsLength: number;
}

export default function Section({
  section,
  sectionIndex,
  sectionsLength,
}: ISectionProps) {
  const setBgColor = useSetRecoilState(bgColorState);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-50px" });
  const [showing, setShowing] = useState(false);
  const setUpDownButtonState = useSetRecoilState(upDownButotnState);
  const setPageState = useSetRecoilState(pageState);

  useEffect(() => {
    const isFirstChild = sectionIndex === 0;
    const isLastChild = sectionIndex === sectionsLength - 1;

    if (!ref.current || !isInView) return;

    setBgColor(section.bgColor);
    setPageState({
      currentPage: sectionIndex,
      total: sectionsLength,
    });

    if (isFirstChild) {
      setUpDownButtonState({
        showingUp: false,
        showingDown: true,
      });
    } else if (isLastChild) {
      setUpDownButtonState({
        showingUp: true,
        showingDown: false,
      });
    } else {
      setUpDownButtonState({
        showingUp: true,
        showingDown: true,
      });
    }
  }, [isInView, ref]);

  const onClick = () => {
    setShowing((prev) => !prev);
  };

  return (
    <>
      <section
        id={"section" + sectionIndex}
        ref={ref}
        className="relative w-full min-h-screen flex justify-center items-center snap-center
      pointer-events-none [&>*]:pointer-events-auto bg-transparent"
        style={{
          perspective: 500,
          color: section.textColor,
        }}
      >
        {/* <Heading className="flex justify-center items-center relative">

            <button onClick={onClick}>{section.title}</button>
          </Heading> */}

        {/* <div className="absolute w-full max-w-md">
          <img src="https://images.unsplash.com/photo-1677939748562-9289efc24bf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3442&q=80" />
        </div> */}

        {!!section.links.length && !!section.images.length && (
          <Slider section={section} />
        )}
      </section>
    </>
  );
}
