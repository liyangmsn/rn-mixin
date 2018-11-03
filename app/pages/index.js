import React from 'react'
import {View,Button} from 'react-native'

export default class extends React.Component{
    static navigationOptions = {
        header: null
    }
    render () {
        const {navigation} = this.props
        return <View style={{
            flex:1,
            padding: 20,
            justifyContent:'space-around'
        }}>
            <Button title="Model" onPress={() => navigation.navigate('Model')}/>
            <Button title="Camera" onPress={() => navigation.navigate('Camera')}/>
            <Button title="TabView" onPress={() => navigation.navigate('TabView')}/>
            <Button title="Video" onPress={() => navigation.navigate('Video')}/>
            <Button title="WebView" onPress={() => navigation.navigate('WebView')}/>
        </View>
    }
}