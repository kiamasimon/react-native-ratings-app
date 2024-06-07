import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { global_styles } from "../styles/global";
import { Formik } from "formik";
import * as yup from 'yup';
import FlatButton from "../shared/Button";


const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 to 5', (val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

export default function ReviewForm({addReview}){
    return (
        <View style={global_styles.container}>
            <Formik
                initialValues={{title: "", body: "", rating: ""}}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions)=>{
                    actions.resetForm();
                    addReview(values);
                }}>
                {({ handleChange, handleSubmit, handleBlur, values, errors, touched })=>{
                    return (
                        <View>
                            <TextInput
                                style={global_styles.input} placeholder="Review Title"
                                onChangeText={handleChange("title")}
                                value={values.title}
                                onBlur={handleBlur("title")}
                            />
                            <Text style={global_styles.errorText}>{ touched.title && errors.title}</Text>

                            <TextInput
                                multiline
                                style={global_styles.input} placeholder="Review Body"
                                onChangeText={handleChange("body")}
                                value={values.body}
                                onBlur={handleBlur("body")}
                            />
                            <Text style={global_styles.errorText}>{touched.body && errors.body}</Text>

                            <TextInput
                                style={global_styles.input} placeholder="Rating (1-5)"
                                onChangeText={handleChange("rating")}
                                keyboardType="numeric"
                                value={values.rating}
                                onBlur={handleBlur("rating")}
                            />
                            <Text style={global_styles.errorText}>{touched.rating && errors.rating}</Text>

                            {/* <Button title="Submit" color='maroon' onPress={handleSubmit}/> */}
                            <FlatButton text='submit' onPress={handleSubmit}/>
                        </View>
                    )
                }}
            </Formik>
            
        </View>
    )
}