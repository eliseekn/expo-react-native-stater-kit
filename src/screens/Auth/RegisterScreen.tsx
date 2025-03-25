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
      <Text style={{ marginBottom: 10 }}>
        Name
      </Text>

      <TextInput
        mode='outlined'
        value={name}
        onChangeText={setName}
        style={{ backgroundColor: 'white', marginBottom: 10 }}
        outlineStyle={{ borderRadius: 12 }}
        right={<TextInput.Icon icon='account' />}
        autoCapitalize='none'
      />

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
        onPress={() => { }}
      >
        Submit
      </Button>
    </Container>
  )
}

export default RegisterScreen
