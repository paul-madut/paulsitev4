"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function Projects() {

  type Card = {
  'Project name ': string;
  'Image path': string;
  'Project description': string;
  'Live Url': string;
  'Repository': string;
  'Completion': string;
};
  const [active, setActive] = useState<Card | null>(null);
  
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [cards2, setCards2] = useState<Card[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sheetdb.io/api/v1/m7tc7h94vxr92"); // Replace with actual API URL
        const data: Card[] = await response.json();

        setCards2(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 "
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active['Project name ']}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
           
            </motion.button>
            <motion.div
              layoutId={`card-${active['Project name ']}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 border-2 border-[#1f2937] sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active['Project name ']}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active['Image path']}
                  alt={active['Project name ']}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active['Project name ']}-${id}`}
                      className="font-medium text-neutral-200 text-base"
                    >
                      {active['Project name ']}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active['Project description']}-${id}`}
                      className="text-neutral-400 text-base"
                    >
                      {active['Project description']}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active['Live Url']}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    Visit
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <p>Repository: <a href={active['Repository']} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{active['Repository']}</a></p>
                    <p>Completion: {active['Completion']}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start lg:gap-8 gap-4">
        {cards2.map((card, index) => (
          <motion.div
            layoutId={`card-${card['Project name ']}-${id}`}
            key={card['Project name ']}onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-800 border-2 border-[#1f2937] rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card['Project name ']}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card['Image path']}
                  alt={card['Project name ']}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card['Project name ']}-${id}`}
                  className="font-medium text-neutral-200 text-center md:text-left text-base"
                >
                  {card['Project name ']}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card['Project description']}-${id}`}
                  className="text-neutral-400 text-center md:text-left text-base"
                >
                  {card['Project description']}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
