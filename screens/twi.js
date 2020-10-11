import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class twi extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                <Text style={{fontSize:45}}>
                    Twitch
                </Text>
            </View>
        );
    }
}