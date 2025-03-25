import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },

  scrollView: {
    paddingHorizontal: Platform.OS === 'ios' ? 15 : 0,
  },
})

export default styles
