import 'react-native-gesture-handler';
import React from 'react'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationStack } from './src/interfaces'
import { AuthStack, HomeStack } from './src/navigation'
import { useAuthStore } from './src/stores'

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  ...DefaultTheme.colors,
  colors: {},
}

const Stack = createNativeStackNavigator<NavigationStack>()

const App: React.FC = () => {
  const { auth } = useAuthStore()

  const getInitialRouteName = () => {
    if (!auth?.user) {
      return 'AuthStack'
    }

    return 'HomeStack'
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={getInitialRouteName()}>
          <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
          <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
