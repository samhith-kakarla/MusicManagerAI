import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import * as colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  mainView: {
    flex: 1,
    paddingTop: 90,
    paddingBottom: 40,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 40,
  },
  continueButton: {
    backgroundColor: colors.blue2,
    width: 300,
    paddingVertical: 15,
    borderRadius: 50,
    marginBottom: 15,
  },
  continueButtonText: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
  cancelText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

const SelectGenresScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.headerText}>
          What genres would you like to include?
        </Text>
        <View style={styles.optionView}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate('Select Moods')}
          >
            <Text style={styles.continueButtonText}>CONTINUE</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.cancelText}
              onPress={() => navigation.navigate('Organizer')}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

SelectGenresScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SelectGenresScreen;
