import React, { Component } from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class BTglass extends Component {

    arrProduct = [
        {
            id: 1, price: 30, name: 'GUCCI G8850U', url: require('../assets/glassesImage/v1.png'), desc:
                'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. '
        },
        {
            id: 2, price: 50, name: 'GUCCI G8759H', url: require('../assets/glassesImage/v2.png'), desc:
                'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. '
        },
        {
            id: 3, price: 30, name: 'DIOR D6700HQ', url: require('../assets/glassesImage/v3.png'), desc:
                'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. '
        },
        {
            id: 4, price: 30, name: 'DIOR D6005U', url: require('../assets/glassesImage/v4.png'), desc:
                'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. '
        },
        {
            id: 5, price: 30, name: 'PRADA P8750', url: require('../assets/glassesImage/v5.png'), desc:
                'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. '
        },
        {
            id: 6, price: 30, name: 'PRADA P9700', url: require('../assets/glassesImage/v6.png'), desc:
                'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. '
        },
        {
            id: 7, price: 30, name: 'FENDI F8750', url: require('../assets/glassesImage/v7.png'), desc:
                'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. '
        },
        {
            id: 8, price: 30, name: 'FENDI F8500', url: require('../assets/glassesImage/v8.png'), desc:
                'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. '
        },
        {
            id: 9, price: 30, name: 'FENDI F4300', url: require('../assets/glassesImage/v9.png'), desc:
                'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. '
        },
    ];

    //Những giá trị người dùng thao tác làm giao diện thay đổi => đặt giá trị dó trong state 
    state = {
        glassesCurrent: {
            id: 9, price: 30, name: 'FENDI F4300', url: require('../assets/glassesImage/v9.png'), desc:
                'Light pink square lenses define these sunglasses,ending with amother of pearl effect tip. '
        }
    }

    renderGlassesItems = () => {
        return this.arrProduct.map((glassesItems, index) => {
            return <Col key={index} style={{ width: widthDevice / 3, height: 75 }}>
                <TouchableOpacity onPress={() => { this.changeGlassesItem(glassesItems) }}>
                    <View>
                        <Image style={{ width: widthDevice / 4, height: 30, margin: '10%', marginTop: '35%' }}
                            source={glassesItems.url} />
                    </View>
                </TouchableOpacity>
            </Col>
        })
    }

    changeGlassesItem = (newGlassesItem) => {
        //this.glassesCurrent =newGlassesItem;//khoong rener lại

        this.setState({
            glassesCurrent: newGlassesItem
        })
    }

    render() {
        return (
            <Grid>
                <Row style={{ height: heightDevice / 2, position: 'relative' }}>
                    <Image style={{ height: 480, marginLeft: '-5%', marginTop: '10%' }} source={require('../assets/glassesImage/model.jpg')} resizeMode='stretch' />
                    <Image style={{ position: 'absolute', top: '30%', left: '17%', width: '70%', height: heightDevice / 7 }} source={this.state.glassesCurrent.url} resizeMode='stretch' />
                    <View style={{
                        position: 'absolute', width: widthDevice, height: '30%', backgroundColor: 'rgba(150, 158, 170,0.3)',
                        bottom: 0
                    }}>
                        <Text style={{ fontSize: 30, color: '#A7CA51', fontWeight: 'bold', paddingTop: '3%' }}>{this.state.glassesCurrent.name}</Text>
                        <Text style={{ fontSize: 30, color: '#FFDA00', fontWeight: 'bold', paddingTop: '2%' }}>{this.state.glassesCurrent.price} $</Text>
                        <Text style={{ fontSize: 15, color: "#fff", fontWeight:"bold"}}>{this.state.glassesCurrent.desc}</Text>
                    </View>
                </Row>
                <Row style={{ flexWrap: 'wrap', backgroundColor: '#fff' }}>
                    {this.renderGlassesItems()}
                </Row>
            </Grid>
        )
    }
}
