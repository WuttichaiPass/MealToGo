import { Text, View, Image } from 'react-native';
import React from 'react';
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";


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

const Rating = styled.View`
flex-direction: row;
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
flex-direction: row;
align-items: center;
`;

const SectionEnd = styled.View`
flex: 1;
flex-direction: row;
justify-content: flex-end;
`;

export const RestaurantInfoCard = ({ ...restaurant }) => {
    const {
        name = "อาหารเพื่อสุขภาพ",
        icon = "https://cdn-icons-png.flaticon.com/512/3094/3094837.png",
        photos = ["https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4ML4rWzJMONd6tMOwhn1urYCXJ3XzhUpaVRlOJhRyziSoe4aG7f.jpg"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map((_, index) => (
                            <SvgXml key={index} xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text style={{
                                color: "red", fontStyle: "italic",
                                fontSize: 10
                            }}>
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <View style={{ paddingLeft: 16 }} />
                        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        <View style={{ paddingLeft: 16 }} />
                        <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
}
