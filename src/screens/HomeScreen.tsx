import React from 'react'
import {Text} from 'react-native-paper'
import {SafeAreaView} from 'react-native'
import style from '../style'

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={style.container}>
            <Text>Hello 👋</Text>
        </SafeAreaView>
    )
}

export default HomeScreen
