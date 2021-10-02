import React from 'react';
import PropTypes from 'prop-types';

import { createStackNavigator } from '@react-navigation/stack';

import { OrganizerScreen } from '../screens';
import { recordScreen } from '../utils';

const Stack = createStackNavigator();

const LibraryOrganizerScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Organizer">
      <Stack.Screen
        name="Organizer"
        component={OrganizerScreen}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('Organizer');
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

LibraryOrganizerScreens.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LibraryOrganizerScreens;
