// https://github.com/react-native-community/react-native-video
import React from 'react'
import {View} from 'react-native'
import Video from 'react-native-video'

export default class extends React.Component {
    render () {
        return <View style={{flex:1}}>
            <Video source={{uri: "http://vod.zjstv.com/video/2018/10/26/980cfe58dce91fe259bd0c9ecb1ef87d.mp4"}}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}
                style={{
                    flex: 1
                }}/>
        </View>
    }
}