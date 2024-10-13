import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import LoanApplicationScreen from './screens/LoanApplication';
import CrowdfundingScreen from './screens/Crowdfunding';
import FinancialLiteracyScreen from './screens/FinancialLiteracy';
import CreditScoreScreen from './screens/CreditScore';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Loan Application" component={LoanApplicationScreen} />
        <Stack.Screen name="Crowdfunding" component={CrowdfundingScreen} />
        <Stack.Screen name="Financial Literacy" component={FinancialLiteracyScreen} />
        <Stack.Screen name="Credit Score" component={CreditScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
