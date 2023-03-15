import { Profile } from './Profile/Profile';
import user from 'Data/user.json';
import {Statistics} from "./Statistics/Statistics";
import statistics from "Data/statistics.json";
import { FriendList } from './FriendList/FriendList';
import friends from "Data/friends"
import {TransactionHistory} from "./TransactionHistory/TransactionHistory"
import transactions from "Data/transactions"
export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <section className="statistics">
  <h2 className="title">Upload stats</h2>
<ul className="stat-list">
      <Statistics title="Upload stats" stats={statistics} />
      </ul>
</section>
   
   <ul className="friend-list" >  
<FriendList friends={friends} />;
</ul> 
<table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <TransactionHistory items={transactions} />
      </table>

      </>
      
  );
};
