import React, { ReactNode } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Platform, ScrollView, ViewStyle } from "react-native"

type Props = {
  children: ReactNode | ReactNode[]
  scrollView?: boolean
  flatList?: boolean
  style?: ViewStyle
}

const Container: React.FC<Props> = ({ children, scrollView = false, flatList = false, style = {} }) => {
  return (
    <SafeAreaView style={[
      style, {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
      }
    ]}
    >
      {!flatList && (
        <>
          {!scrollView && <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: Platform.OS === 'ios' ? 15 : 0,
            }}>
            {children}
          </ScrollView>}

          {scrollView && <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: Platform.OS === 'ios' ? 15 : 0 }}
          >
            {children}
          </ScrollView>}
        </>
      )}

      {flatList && children}
    </SafeAreaView>
  )
}

export default Container
