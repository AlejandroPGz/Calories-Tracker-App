import React from 'react'
import { Text, View } from 'react-native'

export const ListEmpty = () => {
  return (
    <View style={{width: '100%', height: '10rem', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: '700', color: 'white', marginTop: 25}}>Search Any Food</Text>
    </View>
   )
}
