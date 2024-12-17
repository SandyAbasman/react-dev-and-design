import { FiPlus } from "react-icons/fi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Chips from "./Chips";
import { useState } from "react";

export default function InputComponent() {
  const [text, setText] = useState(" ");
  const [fullList, setFullList] = useState([]);

  const handleSubmission = (e) => {
    e.preventDefault();

    if (text === " ") {
      return;
    }

    if (fullList.length >= 5) {
      return;
    } else {
      setFullList([...fullList, text]);
    }

    setText(" ");
  };

  function deleteChip(index) {
    const filterdList = fullList.filter((item, filteredIndex) => {
      return filteredIndex !== index;
    });
    setFullList(filterdList);
  }

  return (
    <form
      onSubmit={handleSubmission}
      className="w-full h-auto flex  flex-col justify-start items-start  gap-2 bg-inherit  "
    >
      <label className=" bg-inherit text-black/50  font-semibold text-md flex flex-row">
        Add Tags
        <span className=" bg-inherit text-black/20 text-sm font-medium flex flex-row justify-start items-center gap-1">
          (max.8)
          <BsFillInfoCircleFill />
        </span>
      </label>
      <div className="w-full bg-inherit h-auto flex-col gap-2 flex relative">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-auto border-[2px] border-black/10 outline-none focus:border-green-400/80 rounded-xl bg-white p-3 "
          type="text"
          placeholder="Add tags..."
        />
        <div className="absolute cursor-pointer hover:text-black/60 hover:border-black/60 w-[30px] h-[30px] text-center flex flex-row justify-center items-center text-gray-500/80  bg-white rounded-lg border-2   right-3 top-[0.7rem] ">
          <FiPlus
            onClick={handleSubmission}
            size={20}
            className="bg-transparent"
          />
        </div>
        <div className="w-full h-auto flex flex-row flex-wrap gap-1">
          {fullList.map(function (item, index) {
            return (
              <Chips
                key={index}
                text={item}
                deleteChip={deleteChip}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </form>
  );
}
