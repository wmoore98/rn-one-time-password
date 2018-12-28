import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-41157.cloudfunctions.net';

class SignUpForm extends Component {

    /* ES6 syntax
    constructor(props) {
        super(props);

        this.state = { phone: '' };
    }
    */

    state = { phone: '' }; //ES7 syntax

    /* ES6 - requires .bind(this)
    handleSubmit() {

        axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
            .then(() => {
                axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
            });
    */

    //ES 2017
    handleSubmit = async () => {
        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
        } catch (err) {
            console.log('whatup', err);
        }
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <Button onPress={this.handleSubmit} title="Sign Up" />
            </View>
        );
    }
}

export default SignUpForm;