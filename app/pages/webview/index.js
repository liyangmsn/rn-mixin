// https://github.com/react-native-community/react-native-webview
import React from 'react'
import { WebView } from 'react-native-webview'

export default class extends React.Component {
    render() {
        return <WebView
            source={{ uri: 'https://cn.bing.com' }}
            onLoadProgress={e=>console.log(e.nativeEvent.progress)}
        />
    }
}