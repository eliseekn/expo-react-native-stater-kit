export type NavigationStack = {
  LoginScreen: undefined
  RegisterScreen: undefined
  AuthStack: undefined
  HomeScreen: undefined
}

export type UserType = {
  id: number
  name: string
  email: string
  created_at: string
  updated_at: string
}

export type AuthType = UserType & {
  token?: string
}
