import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { NavigationStack } from '../../interfaces'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useAuthStore } from '../../stores'
import Container from '../../components/Container'

type NavigationProps = NativeStackNavigationProp<NavigationStack>

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { setAuth } = useAuthStore()

  const navigation: NavigationProps = useNavigation<NavigationProps>()

  const handleLogin = async (): Promise<void> => {
    setAuth({
      user: {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com',
      }
    })

    navigation.navigate('HomeScreen')
  }

  return (
    <Container>
      <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 30 }}>
        Log in to your account
      </Text>

      <Text style={{ marginBottom: 10 }}>
        Email
      </Text>

      <TextInput
        mode='outlined'
        value={email}
        onChangeText={setEmail}
        style={{ backgroundColor: 'white', marginBottom: 10 }}
        outlineStyle={{ borderRadius: 12 }}
        right={<TextInput.Icon icon='email' />}
        autoCapitalize='none'
      />

      <Text style={{ marginBottom: 10 }}>
        Password
      </Text>

      <TextInput
        mode='outlined'
        value={password}
        onChangeText={setPassword}
        style={{ backgroundColor: 'white' }}
        outlineStyle={{ borderRadius: 12 }}
        right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />}
        secureTextEntry={!showPassword}
        autoCapitalize='none'
      />

      <Button
        mode="contained"
        compact
        labelStyle={{ color: 'white' }}
        contentStyle={{ height: 50 }}
        style={{ backgroundColor: 'darkblue', borderRadius: 12, marginTop: 20 }}
        onPress={handleLogin}
      >
        Log in
      </Button>

      <Text style={{ textAlign: 'center', marginVertical: 10 }}>
        OR
      </Text>

      <Button
        mode="contained"
        compact
        labelStyle={{ color: 'white' }}
        contentStyle={{ height: 50 }}
        style={{ backgroundColor: 'darkred', borderRadius: 12 }}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Register
      </Button>
    </Container>
  )
}

export default LoginScreen
