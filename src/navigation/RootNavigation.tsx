// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { BottomNavigator } from './Navigation';
import Login from '../screens/Login';


const RootNavigation: React.FC = () => {
  const user = useSelector((state: any) => state.currentUser);
  return (

    <NavigationContainer>
      {user ? <BottomNavigator /> : <Login />}

    </NavigationContainer>

  );
};

export default RootNavigation;
