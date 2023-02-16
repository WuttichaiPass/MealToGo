import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Text, Button } from "react-native";
import { RestaurantsNavigator } from "../../../restaurants/infrastructure/navigation/restaurants.navigator";
import MapScreen from "../../../map/screens/map.screen";
import { AuthenticationContext } from "../../../../services/authentication/authentication.context";
import { RestaurantsContextProvider } from "../../../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../../../services/location/location.context";
import { FavouritesContextProvider } from "../../../../services/favourites/favourites.context";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        headersShow: false,
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,

    };
};
const Settings = () => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
        <SafeArea>
            <Text>Settings</Text>
            <Button title="logout" onPress={() => onLogout()} />
        </SafeArea>
    );
};

export const AppNavigator = () => (
    <FavouritesContextProvider>
        <LocationContextProvider>
            <RestaurantsContextProvider>
                <Tab.Navigator screenOptions={createScreenOptions}>
                    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                    <Tab.Screen name="Map" component={MapScreen} />
                    <Tab.Screen name="Settings" component={SettingsNavigator} />
                </Tab.Navigator>
            </RestaurantsContextProvider>
        </LocationContextProvider>
    </FavouritesContextProvider>


);