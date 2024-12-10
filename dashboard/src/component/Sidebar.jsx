import incomeIcon from "../assets/incomeIcon.svg";
import expensesIcon from "../assets/expensesIcon.svg";
import investmentIcon from "../assets/investmentIcon.svg";
import settingsIcon from "../assets/settingsIcon .svg";
import smsIcon from "../assets/smsIcon.svg";

function Sidebar() {
  return (
    <div className="w-[29rem] h-full p-[12.5rem_2rem_2.5rem_2rem] flex flex-col bg-blue  justify-between items-start rounded-md">
      <div className="w-full h-auto flex-col flex gap-4 border ">
        <div className="flex flex-row gap-2 ">
          <div className="w-fit h-auto">
            <img src={incomeIcon} alt="incomeIcon" />
          </div>

          <div className="w-fit h-auto flex flex-col gap-1  ">
            <h2 className=" text-lg text-white">Income</h2>
            <p className="text-text-light">
              Click to see how much income you ve made
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 ">
          <div className="w-fit h-auto">
            <img src={expensesIcon} alt="expenses" />
          </div>

          <div className="w-fit h-auto flex flex-col gap-1  ">
            <h2 className=" text-lg text-white">Expenses</h2>
            <p className="text-text-light">
              Click to see how much you’ve spent
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 ">
          <div className="w-fit h-auto">
            <img src={smsIcon} alt="sms" />
          </div>

          <div className="w-fit h-auto flex flex-col gap-1  ">
            <h2 className=" text-lg text-white">SMS alerts</h2>
            <p className="text-text-light">
              Click to see your financial SMS notifications
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 ">
          <div className="w-fit h-auto">
            <img src={investmentIcon} alt="investment" />
          </div>

          <div className="w-fit h-auto flex flex-col gap-1  ">
            <h2 className=" text-lg text-white">Investments</h2>
            <p className="text-text-light">
              Click to see how much you’ve invested
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 ">
          <div className="w-fit h-auto">
            <img src={settingsIcon} alt="settingsIcon" />
          </div>

          <div className="w-fit h-auto flex flex-col gap-1  ">
            <h2 className=" text-lg text-white">Settings</h2>
            <p className="text-text-light">Click to change you settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
