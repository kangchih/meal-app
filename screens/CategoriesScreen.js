import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import colors from '../constants/Colors'
import Colors from '../constants/Colors';

const CategoriesScreen = props => {
    // console.log(props);
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate({ routeName: 'CategoryMeals' });
            }}>
                <View style={styles.gridItem}>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <FlatList
            keyExtactor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
        // <View style={styles.screen}>
        //     <Text>The CategoriesScreen Screen!</Text>
        //     <Button title="Go to Meals" onPress={() => {
        //         props.navigation.navigate({ routeName: 'CategoryMeals' });
        //     }} />
        // </View>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }

});

export default CategoriesScreen;