import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealsScreen = props => {
    // const renderMealItem = itemData => {
    //     return (<MealItem
    //         title={itemData.item.title}
    //         image={itemData.item.imageUrl}
    //         duration={itemData.item.duration}
    //         complexity={itemData.item.complexity}
    //         affordability={itemData.item.affordability}
    //         onSelectMeal={() => {
    //             props.navigation.navigate({
    //                 routeName: 'MealDetail',
    //                 params: {
    //                     mealId: itemData.item.id
    //                 }
    //             });
    //         }}
    //     />
    //     );
    // };
    const catId = props.navigation.getParam('categoryId');
    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />

        //Move to MealList
        // <View style={styles.screen}>
        //     <FlatList
        //         data={displayedMeals}
        //         keyExtractor={(item, index) => item.id}
        //         renderItem={renderMealItem}
        //         style={{ width: '100%' }} />
        //     {/* <Text>The Category Meal Screen!</Text>
        //     <Text>{selectedCategory.title}</Text>
        //     <Button title="Go to Details" onPress={() => {
        //         props.navigation.navigate({ routeName: 'MealDetail' });
        //         // props.navigation.navigate({ routeName: 'Categories' });

        //     }} />
        //     <Button title="Go Back" onPress={() => {
        //         props.navigation.pop();
        //     }} /> */}
        // </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,

    };

};

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 15
//     },
// });

export default CategoryMealsScreen;