import React from 'react';
import PropTypes from 'prop-types';

import { createStackNavigator } from '@react-navigation/stack';

import { ProfileScreen } from '../screens';
import { recordScreen } from '../utils';

const Stack = createStackNavigator();

const ProfileScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('Profile');
          },
        })}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
        }}
      />
    </Stack.Navigator>
  );
};

ProfileScreens.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ProfileScreens;
