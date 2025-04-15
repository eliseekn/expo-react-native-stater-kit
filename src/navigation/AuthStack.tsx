import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationStack } from '../interfaces'
import { LoginScreen, RegisterScreen, } from '../screens'
import HomeStack from './HomeStack'

const Stack = createNativeStackNavigator<NavigationStack>()

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerTitle: 'Register' }} />
      <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthStack
