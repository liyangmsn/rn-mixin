// https://github.com/react-community/react-native-image-picker
import React from 'react'
import {View,Button,Image} from 'react-native'
import ImagePicker from 'react-native-image-picker'

export default class extends React.Component{
    state = {
        avatarSource: {
            uri: ''
        }
    }
    _imagePicker = () => {
        ImagePicker.showImagePicker({
            title: '选择图片',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
            
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            
                this.setState({
                    avatarSource: source,
                })
            }
        })
    }
    render () {
        return <View style={{flex:1}}>
            <Image source={this.state.avatarSource} style={{
                height:200
            }}/>
            <Button onPress={this._imagePicker} title="Image Picker"/>
        </View>
    }
}