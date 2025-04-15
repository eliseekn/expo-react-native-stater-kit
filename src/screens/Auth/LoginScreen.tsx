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
        name: email,
        email: password,
      },
      token: Date.now()
    })

    navigation.navigate('HomeStack')
  }

  return (
    <Container>
      <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 30 }}>
        Log in to your account
      </Text>

      <TextInput
        mode='outlined'
        label='Email'
        value={email}
        onChangeText={setEmail}
        style={{ backgroundColor: 'white', marginBottom: 15 }}
        outlineStyle={{ borderRadius: 12 }}
        left={<TextInput.Icon icon='email' />}
        autoCapitalize='none'
      />

      <TextInput
        mode='outlined'
        label='Password'
        value={password}
        onChangeText={setPassword}
        style={{ backgroundColor: 'white' }}
        outlineStyle={{ borderRadius: 12 }}
        right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />}
        left={<TextInput.Icon icon='lock' />}
        secureTextEntry={!showPassword}
        autoCapitalize='none'
      />

      <Button
        mode="contained"
        contentStyle={{ height: 50 }}
        style={{ borderRadius: 12, marginTop: 20 }}
        buttonColor='darkblue'
        textColor='white'
        onPress={handleLogin}
      >
        Log in
      </Button>

      <Text style={{ textAlign: 'center', marginVertical: 5 }}>
        OR
      </Text>

      <Button
        mode="contained"
        contentStyle={{ height: 50 }}
        style={{ borderRadius: 12 }}
        buttonColor='darkred'
        textColor='white'
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Register
      </Button>
    </Container>
  )
}

export default LoginScreen
