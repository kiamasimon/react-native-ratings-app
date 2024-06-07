import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { global_styles, images } from "../styles/global";
import Card from "../shared/Card";


export default function ReviewDetails({route}){
    // const pressHandler = () => {
    //     navigation.goBack("Details");
    // }
    const rating = route.params.rating
    return (
        <View style={global_styles.container}>
            <Card>
                <Text>{ route.params.title }</Text>
                <Text>{ route.params.body }</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating: </Text>
                    <Image source={images.ratings[rating]}/>
                </View>
                {/* <Button title="Pop screen off" onPress={pressHandler}/> */}
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});