/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {SafeAreaView, useSafeArea} from 'react-native-safe-area-context';
import {styles} from './styles';
import {Header, AppText, MoneyTag} from '../../component';
import {LimitAmount} from './component';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PRIMARY_COLOR} from '../../helper/Constants';

const SpendingLimit = () => {
  const insets = useSafeArea();

  const [spendingLimit, setspendingLimit] = useState<number | undefined>(
    undefined,
  );

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

export default SpendingLimit;
