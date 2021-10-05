import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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
    width: '90%',
    height: 300,
    backgroundColor: colors.blue2,
  },
  itemsListContainer: {
    height: 200,
    // position: 'absolute',
    width: '100%',
    borderRadius: 10,
    backgroundColor: colors.gray0,
    marginTop: 15,
    marginBottom: 25,
  },
  dropdownItemIconDefault: {
    borderRadius: 100,
    backgroundColor: colors.red,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemLabelText: {
    marginLeft: 10,
    fontSize: 15,
  },
  itemSelectedIcon: {
    marginRight: 15,
  },
  spotifyButton: {
    marginBottom: 5,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.blue2,
    borderWidth: 1,
    borderRadius: 30,
    width: 200,
    paddingLeft: 20,
    marginTop: 30,
  },
  spotifyButtonText: {
    fontSize: 15,
    color: colors.white,
  },
  spotifyLogo: {
    marginRight: 15,
    width: 20,
    height: 20,
  },
});

const ViewPlaylistScreen = ({ navigation, playlistInfo }) => {
  const items = [
    { id: 1, name: 'Song 1' },
    { id: 2, name: 'Song 2' },
    { id: 3, name: 'Song 3' },
    { id: 4, name: 'Song 4' },
    { id: 5, name: 'Song 5' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.playlistCover}></View>
        <View>
          <TouchableOpacity style={styles.spotifyButton}>
            <Image
              style={styles.spotifyLogo}
              source={require('../../../assets/spotify.png')}
            />
            <Text style={styles.spotifyButtonText}>Play on Spotify</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemsListContainer}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={items}
            renderItem={({ item, index }) => (
              <TouchableOpacity>
                <View>
                  <View style={styles.dropdownItemIconDefault}>
                    <MaterialIcons name="person" size={15} color="white" />
                  </View>
                  <Text style={styles.itemLabelText}>{item.name}</Text>
                  <View style={{ position: 'absolute', right: 0 }}>
                    <MaterialIcons
                      name="check"
                      size={20}
                      color="green"
                      style={styles.itemSelectedIcon}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

ViewPlaylistScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  playlistInfo: PropTypes.object.isRequired,
};

export default ViewPlaylistScreen;
