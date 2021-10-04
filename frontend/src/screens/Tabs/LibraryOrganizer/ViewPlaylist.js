import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import * as colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
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
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 28,
  },
  playlistCover: {
    width: '100%',
    height: 300,
    backgroundColor: colors.blue2,
  },
});

const ViewPlaylistScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.playlistCover}></View>
        <Text style={styles.headerText}>VIEW PLAYLIST</Text>
      </View>
    </SafeAreaView>
  );
};

ViewPlaylistScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ViewPlaylistScreen;
