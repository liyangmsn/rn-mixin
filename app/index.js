import React from 'react'
import {View,Text} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Home from './pages/index'
import Model from './pages/model'
import Camera from './pages/camera'
import TabView from './pages/tabview'
import Video from './pages/video'
import WebView from './pages/webview'
import ImagePicker from './pages/image-picker'
import Icons from './pages/icons'

const Pages = createStackNavigator({
    Home,
    Model,
    Camera,
    TabView,
    Video,
    WebView,
    ImagePicker,
    Icons
})
export default class extends React.Component{
    render () {
        return <Pages/>
    }
}