import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Onboarding from 'react-native-onboarding-swiper';

import * as colors from '../../theme/colors';
import styles from './styles';

const OnboardingScreens = ({ navigation }) => {
  const pages = [
    {
      backgroundColor: 'white',
      image: (
        <Image
          style={{
            width: 250,
            height: 250,
          }}
          source={require('../../assets/images/group.png')}
        />
      ),
      title: (
        <Text style={[styles.onboardingText, styles.onboardingTitle]}>
          Fluid, simultaneous conversations
        </Text>
      ),
      subtitle: (
        <>
          <Text style={[styles.onboardingText, styles.onboardingSubtitle]}>
            Mingle and switch between chats as you would when your group is all
            together.
          </Text>
        </>
      ),
    },
    {
      backgroundColor: 'white',
      image: (
        <Image
          style={styles.image}
          source={require('../../assets/images/active.png')}
        />
      ),
      title: (
        <Text style={[styles.onboardingText, styles.onboardingTitle]}>
          Nonintrusive Notifications
        </Text>
      ),
      subtitle: (
        <Text style={[styles.onboardingText, styles.onboardingSubtitle]}>
          {
            "Fine tune your notifications so that you're only notified about what matters to you."
          }
        </Text>
      ),
    },
    {
      backgroundColor: 'white',
      image: (
        <Image
          style={{
            width: 250,
            height: 250,
            marginTop: 50,
          }}
          source={require('../../assets/images/chat.png')}
        />
      ),
      title: (
        <Text style={[styles.onboardingText, styles.onboardingTitle]}>
          Conversation Kickstarters
        </Text>
      ),
      subtitle: (
        <>
          <Text style={[styles.onboardingText, styles.onboardingSubtitle]}>
            Fresh conversation starters to help keep a conversation going, or to
            kickstart a completely new one.
          </Text>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            iconRight
            icon={
              <MaterialCommunityIcons
                name="arrow-right"
                size={20}
                color={colors.white}
                style={{ marginLeft: 10 }}
              />
            }
            title="Get Started"
            buttonStyle={styles.onboardingButton}
            style={{ marginTop: 50, color: 'white', alignSelf: 'flex-start' }}
          />
        </>
      ),
    },
  ];
  return (
    <Onboarding
      bottomBarHighlight={false}
      bottomBarHeight={60}
      titleStyles={{ alignSelf: 'flex-start' }}
      showNext={false}
      showSkip={false}
      showDone={false}
      transitionAnimationDuration={0}
      pages={pages}
    ></Onboarding>
  );
};

OnboardingScreens.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default OnboardingScreens;
