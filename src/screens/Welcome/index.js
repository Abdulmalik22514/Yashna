import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {CustomButton} from '../../components';
import {WelcomeScreenStyles as styles} from './styles';
import axios from 'axios';

const Welcome = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const fetchImages = () => {
    setLoading(true);
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        navigation.navigate('FetchImage', {image: res.data.message});
      })
      .catch(() =>
        Alert.alert('Error: ', 'Unable to fetch your data, try again later'),
      )
      .finally(() => setLoading(false));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome, click on the continue button
      </Text>
      <CustomButton title="Continue" onPress={fetchImages} loading={loading} />
    </View>
  );
};

export default Welcome;
