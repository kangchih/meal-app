import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
// import { CATEGORIES } from '../data/dummy-data';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
        />
    )
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },


});

export default CustomHeaderButton;