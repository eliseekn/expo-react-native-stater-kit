import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationStack } from '../interfaces'
import { HomeScreen } from '../screens'
import AuthStack from './AuthStack'

const Stack = createNativeStackNavigator<NavigationStack>()

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default HomeStack
