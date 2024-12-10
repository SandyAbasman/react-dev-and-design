export default function InputComponent() {
  return (
    <form className="w-full h-auto flex flex-col justify-start items-start ">
      <label htmlFor="">
        Add Tags <span>(max.8)</span> <span>icon</span>
      </label>
      <input className="w-full h-auto " type="text" placeholder="Add tags..." />
      <div className="">+</div>
    </form>
  );
}
