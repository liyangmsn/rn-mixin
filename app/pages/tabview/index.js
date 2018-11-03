// https://github.com/react-native-community/react-native-tab-view
import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

const FirstRoute = () => (
    <View style={{ backgroundColor: '#ff4081' }} />
)
const SecondRoute = () => (
    <View style={{ backgroundColor: '#673ab7' }} />
)
  
export default class extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
        ],
    }
  
    render() {
        return (
            <TabView style={{flex:1}}
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                />
        )
    }
  }