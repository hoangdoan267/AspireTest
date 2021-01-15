import React, {useEffect} from 'react';
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
import {PARALLAX_HEIGHT, ActionTypes} from '../../helper/Constants';

import {styles} from './styles';
import {connect} from 'react-redux';
import {LimitBar} from './component';

const DebitCardScreen = (props: any) => {
  const insets = useSafeArea();

  useEffect(() => {
    props.getCardInformation();
    return () => {};
  }, []);

  const renderHeader = () => {
    return <Header />;
  };

  const onChangeWeeklySpendingLimit = (value: boolean) => {
    if (value) {
      props.navigation.navigate('SpendingLimit');
    } else {
      props.updateLimitPayment(undefined);
      // turn off weekly spending limit
    }
  };

  const toggleFreezeCard = (value: boolean) => {
    props.toggleFreezeCard(value);
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
                  <MoneyTag value={props.account.balance} />
                </View>
              </>
            );
          }}
          headerFixedBackgroundColor="transparent">
          <View style={styles.contentContainer}>
            <BankCard cardInformation={props.account.cardInformation} />
            <View>
              {props.account.limitPayment && (
                <LimitBar limit={props.account.limitPayment} spending={345} />
              )}
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
                switchValue={props.account.limitPayment ? true : false}
                onChange={onChangeWeeklySpendingLimit}
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
                switchValue={props.account.cardInformation.isFreeze}
                onChange={toggleFreezeCard}
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

const mapStateToProps = (state: any) => {
  return {
    account: state.account,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCardInformation: () =>
      dispatch({type: ActionTypes.GET_ACCOUNT_INFORMATION}),
    toggleFreezeCard: (value: boolean) =>
      dispatch({type: ActionTypes.TOGGLE_FREEZE_STATUS, value}),
    updateLimitPayment: (value: number) =>
      dispatch({type: ActionTypes.UPDATE_LIMIT_PAYMENT, value}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebitCardScreen);
