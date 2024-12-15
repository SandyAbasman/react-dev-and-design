/* eslint-disable react/prop-types */
export default function LowerComponent({ title, discription, buttonName }) {
  return (
    <div className="w-full h-auto  border-dashed border-t-2 border-gray-300 py-6 px-2 flex flex-row justify-between items-center">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-black/50">{title}</h3>
        <p className="text-sm text-black/40 font-thin">{discription}</p>
      </div>

      <div className="w-fit h-auto">
        <button className="border bg-white py-1 px-2 shadow-md text-sm font-medium text-black/60 rounded-md">
          {buttonName}
        </button>
      </div>
    </div>
  );
}
