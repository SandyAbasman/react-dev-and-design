// import { useContext } from "react";
// import { userContext } from "./ContextAPi/UserContextComponent";
import { userStore } from "./Zustard/UserStore";

function UserComponent() {
  //   const { user } = useContext(userContext);

  const { user, changeUser } = userStore();
  return (
    <div>
      <p>{user}</p>
      <button
        className="border"
        // onClick={user === "sandy" ? changeUser : changeUserSandy}
        onClick={changeUser}
      >
        change
      </button>
    </div>
  );
}

export default UserComponent;
