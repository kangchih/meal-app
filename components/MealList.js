import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';
import { useSelector } from 'react-redux';

const MealList = props => {
    // ---- section 150 ---- //
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    
    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.find(meal=> meal.id === itemData.item.id);
        return (<MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: itemData.item.id,
                        // Can fix the title shows up lately(lecture 148)
                        mealTitle: itemData.item.title,
                        // ---- section 150 ---- //
                        isFav: isFavorite
                    }
                });
            }}
        />
        );
    };
    return <View style={styles.list}>
        <FlatList
            data={props.listData}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
            style={{ width: '100%' }} />
    </View>

};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
});

export default MealList;