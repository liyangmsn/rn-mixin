// https://github.com/react-native-community/react-native-modal
import React from 'react'
import {View,Text,Button} from 'react-native'
import Modal from 'react-native-modal'

export default class extends React.Component {
    state = {
        isModalVisible: false
    }
    _toggleModal = () =>{
        this.setState({ isModalVisible: !this.state.isModalVisible })
    }
    render () {
        return <View style={{ flex: 1 }}>
            <Button onPress={this._toggleModal} title="Show Modal"/>
            <Modal isVisible={this.state.isModalVisible} style={{
                backgroundColor: 'white'
            }}>
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>
                    <Button onPress={this._toggleModal} title="Hide me"/>
                </View>
            </Modal>
        </View>
    }
}