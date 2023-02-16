import React from 'react';
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantCard, RestaurantCardCover, Info, Section, SectionEnd, Rating, Icon, Address,} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant={} }) => {
    const {
        name = "อาหารเพื่อสุขภาพ",
        icon = "https://cdn-icons-png.flaticon.com/512/3094/3094837.png",
        photos = ["https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4ML4rWzJMONd6tMOwhn1urYCXJ3XzhUpaVRlOJhRyziSoe4aG7f.jpg"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
    } = restaurant

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((_, i) => (
                            <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">CLOSED TEMPORARILY</Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
}