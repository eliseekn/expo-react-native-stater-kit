import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationStack } from '../interfaces'
import { LoginScreen, HomeScreen, RegisterScreen, } from '../screens'

const Stack = createNativeStackNavigator<NavigationStack>()

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerTitle: 'Register' }} />
    </Stack.Navigator>
  )
}

export default AuthStack
