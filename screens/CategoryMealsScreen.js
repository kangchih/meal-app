import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen!</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' });
                // props.navigation.navigate({ routeName: 'Categories' });

            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.pop();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoryMealsScreen;