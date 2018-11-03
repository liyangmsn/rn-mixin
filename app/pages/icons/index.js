// https://github.com/oblador/react-native-vector-icons
import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

export default class extends React.Component{
    render () {
        return <View>
            <Icon name="user" size={36}/>
        </View>
    }
}