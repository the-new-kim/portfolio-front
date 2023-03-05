import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  At,
  InstagramLogo,
} from "phosphor-react";
import { useRecoilValue } from "recoil";
import { pageState, upDownButotnState } from "../atom";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const { showingUp, showingDown } = useRecoilValue(upDownButotnState);
  const { currentPage, total } = useRecoilValue(pageState);

  return (
    <header className="fixed top-0 left-0 w-full h-screen flex flex-col justify-between items-center z-50 pointer-events-none p-5 text-white mix-blend-difference [&>*]:pointer-events-auto">
      {/* TOP */}

      <div className="grid grid-cols-3 w-full">
        <div className="flex justify-start items-start w-full">
          <small>Home</small>
        </div>
        <AnimatePresence initial={false}>
          {showingUp && (
            <motion.div
              initial={{ y: "-200%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-200%", opacity: 0 }}
              key="upButton"
              transition={{ type: "tween" }}
              className="col-start-2 flex flex-col justify-start items-center"
            >
              <ArrowUp />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SLIDE ARROWS ??? */}
      <div className="grid grid-cols-3 w-full pointer-events-none">
        <ArrowLeft />
        <div className="col-start-3 flex justify-end items-center">
          <ArrowRight />
        </div>
      </div>

      {/* BOTTOM */}

      <div className="grid grid-cols-3 w-full">
        <div className="flex justify-start items-end">
          <small>
            <span>{currentPage + 1}</span>
            <span>/{total}</span>
          </small>
        </div>
        <AnimatePresence>
          {showingDown && (
            <motion.div
              initial={{ y: "200%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "200%", opacity: 0 }}
              key="downButton"
              transition={{ type: "tween" }}
              className="col-start-2 flex flex-col justify-center items-center"
            >
              <ArrowDown />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="col-start-3 flex justify-end items-end w-full [&>*]:ml-2">
          <Link to="/">
            <At />
          </Link>
          <InstagramLogo />
        </div>
      </div>
    </header>
  );
}
