import React from "react";
import { RestaurantsScreen } from "../../../restaurants/screens/restaurants.screen";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantDetailScreen } from "../../../restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalTransition,
        }} >
            <RestaurantStack.Screen
                name="Restaurants1"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
};
