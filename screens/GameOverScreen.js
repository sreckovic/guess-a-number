import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} resizeMode="cover" />
        {/* <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri:
              'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/w_2560%2Cc_limit/Transpo_G70_TA-518126.jpg',
          }}
        /> */}
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>

      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 200,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    // width: '80%',
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default GameOverScreen;
