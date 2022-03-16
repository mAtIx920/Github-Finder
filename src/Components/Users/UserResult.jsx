import { useContext } from "react";
import Spinner from "../Layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../context/GitHub/GithubContext";

function UserResult() {
  const {users, isLoading} =useContext(GithubContext)

  const simplyUser = users.map(user => <UserItem key={user.id} user={user} />)

  return !isLoading ? (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {simplyUser}
    </div>
  ) : <Spinner />
}

export default UserResult
