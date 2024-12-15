import InputComponent from "./InputComponent";
import LowerComponent from "./LowerComponent";
import Member from "./Member";

export default function Layout() {
  return (
    <div
      className={`w-[28rem] border h-auto mx-auto  my-[5rem] flex flex-col justify-start items-start gap-3 rounded-2xl bg-white p-6`}
    >
      <InputComponent />

      <Member />

      <LowerComponent
        title={"Add to portfolio"}
        discription={"Choose a portfolio to add your work"}
        buttonName={"Choose"}
      />
      <LowerComponent
        title={"Add Download File"}
        discription={"Share your files and allow downloads."}
        buttonName={"Add"}
      />
    </div>
  );
}
