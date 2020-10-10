import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Icon = ({
    name,
    size = 35,
    backgroundColor='#000',
    iconColor = "#fff"
}) => {
    return (
        <View style={{
            width:size,
            height:size,
            backgroundColor,
            borderRadius:size/2,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size*0.5} />
        </View>
    );
}

export default Icon;