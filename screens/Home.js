import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { global_styles} from "../styles/global";
import Card from "../shared/Card";
import {MaterialIcons} from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";


export default function Home({navigation}){
    const [modalOPen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        {title: "Zelda", rating: 5, body: "Ddfshdfjsf", key: 1},
        {title: "Gotta Catch Them All", rating: 4, body: "Ddfshdfjsf", key: 2},
        {title: "Not so Final", rating: 3, body: "Ddfshdfjsf", key: 3},
    ])

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }
    // const pressHandler = () => {
        // navigation.navigate('Details');
        // navigation.push("Details");
    // }
    return (
        <View style={global_styles.container}>
            <Modal visible={modalOPen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons name="close" size={24}
                            onPress={() => setModalOpen(false)}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                        />
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons name="add" size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList data={reviews} 
                renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("Details Page", item)}>
                        <Card>
                            <Text style={global_styles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            {/* <Button title="Go to review page" onPress={pressHandler}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0,

    },
    modalContent: {
        flex: 1
    }
});