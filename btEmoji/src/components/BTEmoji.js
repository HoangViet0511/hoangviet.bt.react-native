import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'

export default class BTEmoji extends Component {
    arrIcon = [
        { url: require('../img/e1.png') },
        { url: require('../img/e2.png') },
        { url: require('../img/e3.png') },
        { url: require('../img/e4.png') },
        { url: require('../img/e5.png') },
    ];

    state = {
        iconsCurrent: {
            url: require('../img/e1.png')
        }
    }

    renderIcon = () => {
        return this.arrIcon.map((iconItems, index) => {
            return <Col key={index} >
                <TouchableOpacity onPress={()=>{this.changeIconsItem(iconItems)}}>
                    <View>
                        <Image
                            source={iconItems.url}
                            style={{ width: 50, height: 50, padding: '5%' }}></Image>
                    </View>
                </TouchableOpacity>
            </Col>

        })
    }

    changeIconsItem =(newIconsItem)=>{
        this.setState({
            iconsCurrent:newIconsItem
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, marginTop: 40 }}>Bạn đang cảm thấy?</Text>
                </View>

                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={this.state.iconsCurrent.url}></Image>
                </View>

                <View style={{ flex: 10, flexDirection: 'row', justifyContent: 'center' }}>
                    {this.renderIcon()}
                </View>
            </View>
        )
    }
}
