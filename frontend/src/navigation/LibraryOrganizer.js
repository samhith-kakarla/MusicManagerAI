import React from 'react';
import PropTypes from 'prop-types';

import { createStackNavigator } from '@react-navigation/stack';

import {
  OrganizerScreen,
  SelectGenresScreen,
  SelectMoodsScreen,
  ViewPlaylistScreen,
} from '../screens';
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
      <Stack.Screen
        name="Select Genres"
        component={SelectGenresScreen}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('Select Genres');
          },
        })}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
        }}
      />
      <Stack.Screen
        name="Select Moods"
        component={SelectMoodsScreen}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('Select Moods');
          },
        })}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
        }}
      />
      <Stack.Screen
        name="View Playlist"
        component={ViewPlaylistScreen}
        listeners={({ route }) => ({
          focus: (e) => {
            recordScreen('View Playlist');
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
