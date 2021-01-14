import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppText} from '../AppText';
import {DotGroup} from '../DotGroup';

interface Props {
  cardInformation: {
    name: string;
    cardNumber: string;
    expired: string;
    cvv: string;
  };
}

export const BankCard = (props: Props) => {
  const {name, cardNumber, expired, cvv} = props.cardInformation;

  const [isHide, setIsHide] = useState<boolean>(true);

  const renderCardNumber = () => {
    if (!isHide) {
      return (
        <View style={styles.infoGroup}>
          <AppText style={styles.cardNumber}>
            {`${cardNumber.substr(0, 4)}   ${cardNumber.substr(
              4,
              4,
            )}   ${cardNumber.substr(8, 4)}  ${cardNumber.substr(12, 4)}`}
          </AppText>
        </View>
      );
    }
    return (
      <View style={styles.infoGroup}>
        <DotGroup />
        <DotGroup />
        <DotGroup />
        <AppText style={styles.cardNumber}>{cardNumber.substr(12, 4)}</AppText>
      </View>
    );
  };

  const cvvSection = () => {
    if (isHide) {
      return (
        <View style={styles.cvvSection}>
          <AppText style={styles.cvvText}>CVV:</AppText>
          <AppText style={styles.cvvHideText}>***</AppText>
        </View>
      );
    }
    return (
      <View style={[styles.cvvSection]}>
        <AppText style={styles.infoText}>CVV: {cvv}</AppText>
      </View>
    );
  };

  return (
    <>
      <View style={styles.hideContainer}>
        <TouchableOpacity
          style={styles.hideButton}
          activeOpacity={1}
          onPress={() => setIsHide(!isHide)}>
          {isHide ? (
            <Image
              source={require('../../assets/images/show.png')}
              style={styles.hideIcon}
            />
          ) : (
            <Image
              source={require('../../assets/images/hide.png')}
              style={styles.hideIcon}
            />
          )}
          <AppText style={styles.hideText}>
            {isHide ? 'Show card number' : 'Hide card number'}
          </AppText>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.logoArea}>
          <Image
            source={require('../../assets/images/white_logo.png')}
            style={styles.logoStyle}
          />
        </View>
        <AppText style={styles.cardName}>{name}</AppText>
        {renderCardNumber()}
        <View style={[styles.infoGroup, {paddingTop: !isHide ? 8 : 0}]}>
          <AppText style={styles.infoText}>Thru: {expired}</AppText>
          {cvvSection()}
        </View>

        <View style={styles.visaLogoArea}>
          <Image
            source={require('../../assets/images/visa.png')}
            style={styles.visaLogoStyle}
          />
        </View>
      </View>
    </>
  );
};
