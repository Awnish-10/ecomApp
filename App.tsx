// App.tsx
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import RootNavigation from './src/navigation/RootNavigation';


// types.ts



const App: React.FC = () => {
  return (
    <Provider store={store}>
     <RootNavigation />
    </Provider>
  );
};

export default App;
