// https://github.com/rebeccahughes/react-native-device-info
import React from 'react'
import {View,Text} from 'react-native'
import DeviceInfo from 'react-native-device-info'

export default class extends React.Component{
    state = {
        ip: '',
        mac: ''
    }
    componentDidMount () {
        DeviceInfo.getIPAddress().then(ip => {
            this.setState({
                ip
            })
        })
        DeviceInfo.getMACAddress().then(mac => {
            this.setState({
                mac
            })
        })
    }
    render () {
        return <View style={{flex:1}}>
            <Text>AppName:{DeviceInfo.getApplicationName()}</Text>
            <Text>BuildNumber:{DeviceInfo.getBuildNumber()}</Text>
            <Text>BundleId:{DeviceInfo.getBundleId()}</Text>
            <Text>Version:{DeviceInfo.getVersion()}</Text>
            <Text>IPAddress:{this.state.ip}</Text>
            <Text>MACAddress:{this.state.mac}</Text>
        </View>
    }
}