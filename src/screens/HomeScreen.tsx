import React from "react"
import { Button, Text } from "react-native-paper"
import { useAuthStore } from "../stores"
import Container from "../components/Container"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationStack } from "../interfaces";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<NavigationStack>

const HomeScreen: React.FC = () => {
  const { auth, removeAuth } = useAuthStore()
  const navigation: NavigationProps = useNavigation<NavigationProps>()

  const handleGoBack = () => {
    removeAuth()
    navigation.goBack()
  }

  return (
    <Container>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>
        Hello,
      </Text>

      <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 40, fontWeight: 'bold' }}>
        {auth?.user?.name}
      </Text>

      <Button
        mode="contained"
        compact
        labelStyle={{ color: 'white' }}
        contentStyle={{ height: 50 }}
        style={{ backgroundColor: 'darkred', borderRadius: 12 }}
        onPress={handleGoBack}
      >
        Log out
      </Button>
    </Container>
  )
}

export default HomeScreen
