import InputComponent from "./InputComponent";
import Member from "./Member";

export default function Layout() {
  return (
    <div
      className={`w-[30rem] border h-[30rem] mx-auto  my-[10rem] flex flex-col justify-start items-start gap-3 rounded-2xl bg-white p-6`}
    >
      <InputComponent />

      <Member />
    </div>
  );
}
