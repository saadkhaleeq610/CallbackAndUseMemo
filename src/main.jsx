import { useState } from 'react';

import { DashboardContext } from './context';
import Dashboard from './Dashboard';

export default function App() {
  const [user] = useState({
    isSubscribed: true,
    name: 'You',
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
