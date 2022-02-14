import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {BackArrow} from '../../../assets/svg';
import {ImageScreenStyles as styles} from './styles';

const FetchImage = ({navigation, route}) => {
  const {image} = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <BackArrow />
      </TouchableOpacity>
      <Text style={styles.welcomeText}>This is my Dog</Text>
      <Image source={{uri: image}} resizeMode="cover" style={styles.dogImage} />
    </View>
  );
};

export default FetchImage;
