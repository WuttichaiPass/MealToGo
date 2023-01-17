import { Text } from 'react-native';
import React from 'react';
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: white;
`;

const Title = styled(Text)`
font-family: ${(props) => props.theme.fonts.heading};
font-size: ${(props) => props.theme.fontSizes.body};
color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
padding: ${(props) => props.theme.space[3]};
`;


export const RestaurantInfoCard = ({ ...restaurant }) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = ["https://travel.mthai.com/app/uploads/2019/04/Gyeongju-1.jpg"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant

    return (
        <RestaurantCard>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
}
