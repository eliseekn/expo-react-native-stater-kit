import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type NavigationStack = {
  LoginScreen: undefined
  RegisterScreen: undefined
  AuthStack: undefined
  HomeStack: undefined
  HomeScreen: undefined
}

export type UserType = {
  id: number
  name: string
  email: string
  created_at: string
  updated_at: string
}

export type AuthType = {
  user: UserType
  token?: string
}

export type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: string | FormData
  headers?: Record<string, string>
}

export type FetchResponse<T> = {
  data: T | null
  loading: boolean
  error: string
  status: number | null
}

export type NavigationProps = NativeStackNavigationProp<NavigationStack>
