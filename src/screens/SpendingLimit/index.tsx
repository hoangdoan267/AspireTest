/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView, useSafeArea} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {PRIMARY_COLOR, ActionTypes} from '../../helper/Constants';
import {Header, AppText, MoneyTag} from '../../component';
import {LimitAmount} from './component';
import {styles} from './styles';

const SpendingLimit = (props: any) => {
  const insets = useSafeArea();
  const navigation = useNavigation();

  const [spendingLimit, setspendingLimit] = useState<number | undefined>(
    props.account.limitPayment,
  );

  const onSaveSpendingLimit = () => {
    props.updateLimitPayment(spendingLimit);
    navigation.goBack();
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
        <Header backButton />
        <View style={styles.sectionContentStyle}>
          <AppText style={styles.headerText}>Spending limit</AppText>
        </View>
        <View style={styles.contentContainer}>
          <View style={{flex: 1}}>
            <View style={styles.feature}>
              <Image
                source={require('../../assets/images/schedule.png')}
                style={styles.iconStyle}
              />
              <AppText style={styles.featureText}>
                Set a weekly debit card spending limit
              </AppText>
            </View>
            <MoneyTag value={spendingLimit} textStyle={{color: '#000000'}} />
            <View style={styles.divider} />
            <AppText style={styles.featureSubText}>
              Here weekly means the last 7 days - not the calendar week
            </AppText>
            <View style={styles.limitAmountContainer}>
              <LimitAmount
                value={5000}
                onChoose={() => setspendingLimit(5000)}
              />
              <LimitAmount
                value={10000}
                onChoose={() => setspendingLimit(10000)}
              />
              <LimitAmount
                value={20000}
                onChoose={() => setspendingLimit(20000)}
              />
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            disabled={!spendingLimit}
            onPress={onSaveSpendingLimit}
            style={[
              styles.saveButton,
              {
                backgroundColor:
                  spendingLimit === undefined ? '#EEEEEE' : PRIMARY_COLOR,
              },
            ]}>
            <AppText style={styles.saveText}>Save</AppText>
          </TouchableOpacity>
        </View>
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
    updateLimitPayment: (value: number) =>
      dispatch({type: ActionTypes.UPDATE_LIMIT_PAYMENT, value}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpendingLimit);
