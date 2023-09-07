import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { TaskSection } from './TaskSection/TaskSection';

import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import friends from './Friends/friends.json';
import { FriendList } from './Friends/FriendList/FriendList';

import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Layout>
      <h2>1 - Social network profile</h2>
      <TaskSection>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </TaskSection>
      <h2>2- Statistics Section</h2>
      <TaskSection>
        <Statistics title="Upload stats" stats={data} />
      </TaskSection>
      <h2>3 - Friends list</h2>
      <TaskSection>
        <FriendList friends={friends} />
      </TaskSection>
      <h2>4 - Transaction History</h2>
      <TaskSection>
        <TransactionHistory transactions={transactions} />
      </TaskSection>
      <GlobalStyle />
    </Layout>
  );
};