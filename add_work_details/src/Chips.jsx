/* eslint-disable react/prop-types */
import { LiaTimesSolid } from "react-icons/lia";
export default function Chips({ text }) {
  return (
    <div className=" px-2 py-1 w-fit h-auto bg-gray-300/20 border-[1.5px] border-gray-300/50 rounded-lg text-black/70 flex flex-row gap-1 justify-start items-center text-sm font-semibold">
      <p>{text}</p>
      <LiaTimesSolid />
    </div>
  );
}
