import "./App.css";
import { Profile } from "../Profile/Profile";
import { Statistics } from "../Statistics/Statistics";
import { FriendList } from "../FriendList/FriendList";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";
import  user   from "data/user.json";
import  data   from "data/data.json";
import  friends   from "data/friends.json";
import  transactions   from "data/transactions.json";

function App() {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App;
