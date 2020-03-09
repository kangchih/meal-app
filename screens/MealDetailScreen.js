import React, { useEffect } from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import { useSelector } from 'react-redux';

const ListItem = props => {
    return <View style={styles.listItem}>

        <DefaultText>{props.children}</DefaultText>
    </View>
};

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    // This works but the title displays lately
    useEffect(() => {
        props.navigation.setParams({ mealTitle: selectedMeal.title });
    }, [selectedMeal]);

    // This means that I sent these params to my header when this component reders in the end

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}
            {/* <View style={styles.screen}>
                <Text>{selectedMeal.title}</Text>
                <Button title="Go Back to Categories"Í
                    onPress={() => {
                        props.navigation.popToTop();
                    }} />
            </View> */}
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    // const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: mealTitle,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName='ios-star'
                    onPress={() => {
                        console.log('Mark as favorite')
                    }}
                />
                {/* <Item
                    title="Favorite"
                    iconName='ios-star-outline'
                    onPress={() => {
                        console.log('Mark as favorite')
                    }}
                /> */}
            </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;