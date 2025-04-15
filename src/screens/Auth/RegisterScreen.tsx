import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import Container from '../../components/Container'

const RegisterScreen: React.FC = () => {
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  return (
    <Container scrollView>
      <TextInput
        mode='outlined'
        label='Name'
        value={name}
        onChangeText={setName}
        style={{ backgroundColor: 'white', marginBottom: 15 }}
        outlineStyle={{ borderRadius: 12 }}
        left={<TextInput.Icon icon='account' />}
        autoCapitalize='none'
      />

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
        onPress={() => { }}
        buttonColor='darkblue'
        textColor='white'
      >
        Submit
      </Button>
    </Container>
  )
}

export default RegisterScreen
