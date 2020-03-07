import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealsScreen = props => {
    const renderMealItem = itemData => {
        return (<View><Text>{itemData.item.title}</Text></View>);
    };
    const catId = props.navigation.getParam('categoryId');
    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList 
            data={displayedMeals} 
            keyExtractor={(item, index)=> item.id} 
            renderItem={renderMealItem} />
            {/* <Text>The Category Meal Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' });
                // props.navigation.navigate({ routeName: 'Categories' });

            }} />
            <Button title="Go Back" onPress={() => {
                props.navigation.pop();
            }} /> */}
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,

    };

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoryMealsScreen;