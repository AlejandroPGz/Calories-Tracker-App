import { Link } from 'expo-router';
import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
        <Text>Hello</Text>
        <Link href='/search'>Search</Link>
    </View>
  )
}

export default React.memo(HomeScreen);