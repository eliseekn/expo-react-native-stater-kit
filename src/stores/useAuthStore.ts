import { create } from 'zustand'
import { AuthType } from '../interfaces'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

type AuthStoreType = {
  auth?: AuthType
  setAuth: (data: Partial<AuthType>) => void
  removeAuth: () => void
}

const useAuthStore = create(
  persist<AuthStoreType | Partial<any>>(
    (set, get) => ({
      auth: undefined,
      setAuth: (data: Partial<AuthType>) => {
        set(() => ({ auth: { ...get()?.auth, ...data } }))
      },
      removeAuth: () => {
        useAuthStore.persist.clearStorage()
        set({ auth: undefined })
      },
    }),
    {
      name: 'EXPO_REACT_NATIVE_STARTER_KIT',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export default useAuthStore
