import { StyleSheet } from 'react-native';

import * as colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b3b3b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    paddingTop: 140,
    paddingBottom: 10,
    paddingHorizontal: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  subView: {
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 28,
  },
  text: {
    color: colors.red,
    fontWeight: '400',
    fontSize: 25,
  },
  modalText: {
    color: colors.red,
    fontWeight: '400',
    fontSize: 25,
  },
  errorText: {
    color: colors.red3,
    fontWeight: '600',
    fontSize: 18,
  },
  inputBox: {
    width: '100%',
    padding: 15,
    fontSize: 18,
    borderColor: colors.gray0,
    borderBottomWidth: 2,
    textAlign: 'center',
    marginBottom: -15,
  },
  changePasswordInputBox: {
    width: '75%',
    padding: 15,
    fontSize: 15,
    borderColor: colors.gray0,
    borderBottomWidth: 2,
    textAlign: 'center',
    margin: 10,
  },
  defaultProfilePicture: {
    marginTop: 15,
    width: 165,
    height: 165,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: colors.gray2,
  },
  settingsView: {
    marginTop: 30,
    marginBottom: 10,
    marginRight: -40,
  },
  settingText: {
    marginTop: 6,
    fontSize: 16,
    textAlign: 'left',
    marginRight: 200,
  },
  switchButton: {
    position: 'absolute',
    marginLeft: 175,
  },
  roundButton: {
    marginTop: 15,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: colors.red,
  },
  roundButton2: {
    marginTop: 15,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: colors.yellow,
  },
  button: {
    marginBottom: 5,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: colors.red,
    borderColor: colors.red,
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
  cameraButton: {
    marginLeft: 190,
    marginTop: -35,
  },
  editButton: {
    marginLeft: 285,
    marginTop: -30,
  },
});

export default styles;
