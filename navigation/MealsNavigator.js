import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen'

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
        },
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetail: MealDetailScreen
    },
    {
        // mode: 'modal',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    }
);

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
    
});

export default createAppContainer(MealsFavTabNavigator);