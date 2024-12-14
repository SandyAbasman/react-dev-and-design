import Checkbox from "./Checkbox";

export default function Member() {
  return (
    <div className="bg-white w-full h-auto flex flex-col gap-3 ">
      <h2 className="text-lg font-semibold text-black/60">
        Memeber with access
      </h2>
      <Checkbox label={"Display on profile"}>
        <span className="bg-orange-100 text-orange-600 font-semibold text-sm  py-[0.1rem] px-[0.5rem] rounded-md">
          NEW
        </span>
      </Checkbox>
      <Checkbox label={"Disable commmenting"} />
    </div>
  );
}
