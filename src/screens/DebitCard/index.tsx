import React from 'react';
import {View, Image} from 'react-native';
import {SafeAreaView, useSafeArea} from 'react-native-safe-area-context';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';
import {
  BankCard,
  FunctionalItem,
  AppText,
  Header,
  MoneyTag,
} from '../../component';
import {PARALLAX_HEIGHT} from '../../helper/Constants';

import {styles} from './styles';

const DebitCardScreen = () => {
  const insets = useSafeArea();

  const renderHeader = () => {
    return <Header />;
  };

  return (
    <SafeAreaView
      style={[
        styles.safeAreaStyle,
        {
          paddingBottom: -insets.bottom,
        },
      ]}>
      <View style={styles.screenContainer}>
        <ParallaxScroll
          isHeaderFixed={false}
          parallaxHeight={PARALLAX_HEIGHT}
          parallaxBackgroundScrollSpeed={5}
          parallaxForegroundScrollSpeed={2.5}
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={styles.parallaxStyle}
          renderParallaxBackground={() => {
            return (
              <>
                {renderHeader()}
                <View style={styles.sectionContentStyle}>
                  <AppText style={styles.headerText}>Debit Card</AppText>
                  <AppText style={styles.contentText}>
                    Available balance
                  </AppText>
                  <MoneyTag value={3000} />
                </View>
              </>
            );
          }}
          headerFixedBackgroundColor="transparent">
          <View style={styles.contentContainer}>
            <BankCard
              cardInformation={{
                name: 'Mark Henry',
                cardNumber: '5647341124132020',
                expired: '12/20',
                cvv: '456',
              }}
            />
            <View>
              <FunctionalItem
                name={'Top-up account'}
                content={'Deposit money to your account to use with card'}
                icon={
                  <Image
                    source={require('../../assets/images/topup.png')}
                    style={styles.imageStyle}
                  />
                }
              />
              <FunctionalItem
                name={'Weekly spending limit'}
                content={'You haven’t set any spending limit on card'}
                icon={
                  <Image
                    source={require('../../assets/images/limit.png')}
                    style={styles.imageStyle}
                  />
                }
                haveSwitch
                switchValue={true}
              />
              <FunctionalItem
                name={'Freeze card'}
                content={'Your debit card is currently active'}
                icon={
                  <Image
                    source={require('../../assets/images/freeze.png')}
                    style={styles.imageStyle}
                  />
                }
                haveSwitch
                switchValue={false}
              />
              <FunctionalItem
                name={'Get a new card'}
                content={'Your debit card is currently active'}
                icon={
                  <Image
                    source={require('../../assets/images/new_card.png')}
                    style={styles.imageStyle}
                  />
                }
              />
              <FunctionalItem
                name={'Deactivated cards'}
                content={'Your previously deactivated cards'}
                icon={
                  <Image
                    source={require('../../assets/images/deactivated.png')}
                    style={styles.imageStyle}
                  />
                }
              />
            </View>
          </View>
        </ParallaxScroll>
      </View>
    </SafeAreaView>
  );
};

export default DebitCardScreen;
