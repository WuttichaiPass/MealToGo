import { StatusBar, FlatList } from "react-native";
import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";




const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const Loading = styled(ActivityIndicator)`
margin-left: -25px;
`;

const LoadingContainer = styled.View`
position: absolute;
top: 50%;
left: 50%;
`;

export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = (query) => setSearchQuery(query);

    const { isLoading, error, restaurants } =
        useContext(RestaurantsContext);
    console.log(error);

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true}
                        color={MD2Colors.purple900} />
                </LoadingContainer>
            )}
            <Search />
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    );
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
}

