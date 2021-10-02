import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';

import { SafeAreaView, View, Text } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { Avatar } from 'react-native-elements';

import styles from './styles';
// import * as colors from '../../../theme/colors';

const ProfileScreen = ({ navigation }) => {
  // eslint-disable-next-line no-unused-vars
  // const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text>PROFILE</Text>
      </View>
    </SafeAreaView>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ProfileScreen;
