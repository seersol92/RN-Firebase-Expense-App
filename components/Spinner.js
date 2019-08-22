import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Colors from '../constants/Colors';


const Spinner = () => {
    return <View style={{ flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="large" color={Colors.appMainColor} />
        </View>
}

export default Spinner;