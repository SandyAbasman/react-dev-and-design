/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function Checkbox({ label, children }) {
  const [ischecked, setIsCheck] = useState(false);
  return (
    <div className=" w-fit h-auto text-md cursor-pointer flex  bg-transparent flex-row text-black/50 justify-start items-center gap-1">
      {ischecked ? (
        <MdCheckBoxOutlineBlank
          size={24}
          className=" w-fit bg-orange-600 bg-transparent "
          onClick={() => setIsCheck(false)}
        />
      ) : (
        <MdCheckBoxOutlineBlank
          size={24}
          onClick={() => setIsCheck(true)}
          className=" w-fit bg-transparent "
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
