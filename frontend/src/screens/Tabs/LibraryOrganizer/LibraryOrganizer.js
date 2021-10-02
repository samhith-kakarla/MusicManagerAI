import React from 'react';
import PropTypes from 'prop-types';

import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

import * as colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b3b3b',
  },
  mainView: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: colors.yellow,
    fontWeight: 'bold',
    fontSize: 28,
  },
});

const OrganizerScreen = ({ title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text>LIBRARY ORGANIZER</Text>
      </View>
    </SafeAreaView>
  );
};

OrganizerScreen.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OrganizerScreen;
