import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    Animated,
    Image,
} from 'react-native';

export default class Enemy extends Component {

    render() {
        return (
            <Animated.Image 
                source={this.props.enemyImg}
                style={{
                    height: 100,
                    width: 100,
                    position: 'absolute',
                    resizeMode: 'stretch',
                    left: this.props.enemyStartposX,
                    transform: [
                    { translateY: this.props.moveEnemyval }
                    ],
            }}></Animated.Image>
        )
    }
}