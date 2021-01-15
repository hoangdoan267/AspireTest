import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
interface Props {
  backButton?: boolean;
}

export const Header = (props: Props) => {
  const {backButton} = props;
  const navigation = useNavigation();

  const goBack = () => {
    if (backButton) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={1} onPress={goBack}>
        {backButton && (
          <Icon name="chevron-back-outline" color={'#ffffff'} size={24} />
        )}
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoStyle}
      />
    </View>
  );
};
