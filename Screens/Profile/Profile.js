import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {

    }

    render() {
        return (
            <View>
                <Text> Profile </Text>
            </View>
        );
    }
}
const mapStateToProps = state => {
    console.log('state state state', state.ProfileReucer.nameData)
    return {
        nameData: state.ProfileReucer.nameData,
        nameDataError: state.ProfileReucer.nameDataError,
    };

};

function mapDispatchToProps(dispatch) {
    console.log('Diap[atch value', dispatch)
    return {
        Profilerequest: (login, pass) => dispatch(Profilerequest(login, pass)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile); 
