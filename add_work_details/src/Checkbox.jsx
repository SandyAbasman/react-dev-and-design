/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { BiSolidCheckboxChecked } from "react-icons/bi";

function Checkbox({ label, children }) {
  const [ischecked, setIsCheck] = useState(false);
  return (
    <div className=" w-full h-auto text-md  cursor-pointer flex  bg-transparent flex-row text-black/50 justify-start items-center ">
      {ischecked ? (
        <MdCheckBoxOutlineBlank
          className=" w-6 h-6 bg-transparent "
          onClick={() => setIsCheck(false)}
        />
      ) : (
        <BiSolidCheckboxChecked
          color={"orange"}
          className=" w-6 h-6 bg-transparent "
          onClick={() => setIsCheck(true)}
        />
      )}

      <p className="flex flex-row justify-start font-medium  items-center gap-1">
        {label}
        {children}
      </p>
    </div>
  );
}

export default Checkbox;
