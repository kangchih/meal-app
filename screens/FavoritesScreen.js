import React from 'react';
import { View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
// import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';


const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);
    // const favMeals = availableMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2')

    // ---- Section 151 ---- //
    if (favMeals.length === 0 || !favMeals) {
        return <View style={styles.content}>
            <DefaultText>No favorites meals found. Start adding some!</DefaultText>
        </View>
    }
    return (<MealList listData={favMeals} navigation={props.navigation} />
        // <View style={styles.screen}>
        //     <Text>The FavoritesScreen Screen!</Text>
        // </View>
    );
};

// FavoritesScreen.navigationOptions = {
//     headerTitle: 'Your Favorites'
// };

//Favorite Tab's meau button
FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorite',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} />
            </HeaderButtons>
    }
};


const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default FavoritesScreen;