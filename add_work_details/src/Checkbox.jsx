/* eslint-disable react/prop-types */
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function Checkbox({ label, children }) {
  return (
    <div className=" w-fit h-auto text-xl flex  bg-transparent flex-row text-black/40 justify-start items-center gap-1">
      <MdCheckBoxOutlineBlank size={25} className=" w-fit bg-transparent" />
      <p className="flex flex-row justify-start font-medium items-center gap-1">
        {label}
        {children}
      </p>
    </div>
  );
}

export default Checkbox;
