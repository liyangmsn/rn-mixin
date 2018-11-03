// https://github.com/react-native-community/react-native-camera
import React from 'react'
import {View} from 'react-native'
import { RNCamera } from 'react-native-camera'

export default class extends React.Component {
    render () {
        return <View style={{flex:1}}>
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style = {{
                    flex:1
                }}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes)
                }}
            />
        </View>
    }
}