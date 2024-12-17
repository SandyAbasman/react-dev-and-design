/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "motion/react";
import { LiaTimesSolid } from "react-icons/lia";

export default function Chips({ text, index, deleteChip }) {
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className=" px-2 py-1 w-fit h-auto bg-gray-300/20  text-nowrap border-[1.5px] border-gray-300/50 rounded-lg text-black/70 flex flex-row gap-1 justify-start items-center text-sm font-semibold"
      >
        <p>{text}</p>
        <LiaTimesSolid
          onClick={() => deleteChip(index)}
          className="cursor-pointer"
        />
      </motion.div>
    </AnimatePresence>
  );
}
