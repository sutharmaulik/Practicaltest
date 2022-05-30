import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { LoginRequest } from '../../Redux/Login/action';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'maulikartist@yopmail.com',
            password: '12345',
            error: ''
        };
        global.token = '';
    }

    componentDidMount() {

        // console.log('propas name data', this.props.nameData.userId)
        // this.setState({
        //     error: this.props.nameData.userId
        // })

    }
    componentDidUpdate() {
        console.log('enter value')
        if (this.props.nameData.statusCode == 1) {
            global.token = this.props.nameData.token;
            this.props.navigation.navigate('Profile')
        }
    }

    render() {
        return (
            <View style={{ marginLeft: 20, marginRight: 20 }}>
                <View style={{ marginBottom: 16 }}>
                    <Text style={{
                        fontSize: 16,
                        marginBottom: 8,
                        fontWeight: 'bold'
                    }}>{'Login'}</Text>
                    <TextInput
                        value={this.state.email}
                        placeholder={'enter email'}
                        onChangeText={(value) => {
                            this.setState({ email: value })
                        }}
                        style={{
                            height: 48,
                            borderWidth: 1,
                            borderColor: 'gray',
                            color: 'black',
                            paddingHorizontal: 16
                        }}
                        autoCapitalize="none"
                        placeholderTextColor="gray"
                    />
                    <Text style={{
                        fontSize: 16,
                        marginBottom: 8,
                        fontWeight: 'bold'
                    }}>{'Password'}</Text>
                    <TextInput
                        value={this.state.password}
                        placeholder={'Enter Password'}
                        onChangeText={(value) => {
                            this.setState({ password: value })
                        }}
                        style={{
                            height: 48,
                            borderWidth: 1,
                            borderColor: 'gray',
                            color: 'black',
                            paddingHorizontal: 16
                        }}
                        placeholderTextColor="gray"

                    />
                    <TouchableOpacity onPress={() => {
                        var system = {
                            user_name: this.state.email,
                            password: this.state.password,
                            request_from: 'Actor',
                            device_token: 'asdasdsad'
                        }
                        this.props.LoginRequest(system);
                    }} style={{
                        height: 48,
                        backgroundColor: 'blue',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        paddingHorizontal: 16,
                        marginTop: 20
                    }}>


                        <Text style={{
                            fontSize: 16,
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            color: 'white'
                        }}>{'Login'}</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Signup')
                    }} style={{
                        height: 48,
                        backgroundColor: 'blue',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        paddingHorizontal: 16,
                        marginTop: 20
                    }}>


                        <Text style={{
                            fontSize: 16,
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            color: 'white'
                        }}>{this.props.nameData ? this.props.nameData.userId : 'Singup'}</Text>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => {
    console.log('state state state', state.nameReducer.nameData)
    return {
        nameData: state.nameReducer.nameData,
        nameDataError: state.nameReducer.nameDataError,
    };

};

function mapDispatchToProps(dispatch) {
    console.log('Diap[atch value', dispatch)
    return {
        // LoginRequest: (type) => dispatch({ type: 'LoginRequest', payload: { userId } }),
        LoginRequest: (login, pass) => dispatch(LoginRequest(login, pass)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login); 
