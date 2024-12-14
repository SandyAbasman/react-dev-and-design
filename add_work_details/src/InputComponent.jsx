import { FiPlus } from "react-icons/fi";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function InputComponent() {
  return (
    <form className="w-full h-auto flex  flex-col justify-start items-start  gap-1 bg-inherit ">
      <label className=" bg-inherit text-black/50 font-semibold text-md flex flex-row">
        Add Tags
        <span className=" bg-inherit text-black/20 text-md font-semibold flex flex-row justify-start items-center gap-1">
          (max.8)
          <BsFillInfoCircleFill />
        </span>
      </label>
      <div className="w-full bg-inherit h-auto flex-row flex relative">
        <input
          className="w-full h-auto border-[2px] border-black/10 outline-none focus:border-green-300/60 rounded-xl bg-white p-3 "
          type="text"
          placeholder="Add tags..."
        />
        <div className="absolute cursor-pointer hover:text-black/60 hover:border-black/60 w-[30px] h-[30px] text-center flex flex-row justify-center items-center text-gray-500/80  bg-white rounded-lg border-2   right-3 top-[0.7rem] ">
          <FiPlus size={20} className="bg-transparent" />
        </div>
      </div>
    </form>
  );
}
