import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {PRIMARY_COLOR} from '../../helper/Constants';
import {useSafeArea} from 'react-native-safe-area-context';

export const TabBar = ({state, descriptors, navigation}: any) => {
  const insets = useSafeArea();

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={[
        styles.tabBarContainer,
        {
          paddingBottom: insets.bottom,
        },
      ]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const renderIcon = () => {
          switch (index) {
            case 0:
              if (isFocused) {
                return (
                  <Image
                    source={require('../../assets/images/home_active.png')}
                    style={styles.iconStyle}
                    resizeMode={'contain'}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('../../assets/images/home.png')}
                    style={styles.iconStyle}
                    resizeMode={'contain'}
                  />
                );
              }
            case 1:
              if (isFocused) {
                return (
                  <Image
                    source={require('../../assets/images/card_active.png')}
                    style={styles.iconStyle}
                    resizeMode={'contain'}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('../../assets/images/card.png')}
                    style={styles.iconStyle}
                    resizeMode={'contain'}
                  />
                );
              }
            case 2:
              if (isFocused) {
                return (
                  <Image
                    source={require('../../assets/images/payment_active.png')}
                    style={styles.iconStyle}
                    resizeMode={'contain'}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('../../assets/images/payment.png')}
                    style={styles.iconStyle}
                    resizeMode={'contain'}
                  />
                );
              }
            case 3:
              if (isFocused) {
                return (
                  <Image
                    source={require('../../assets/images/credit_active.png')}
                    style={styles.iconStyle}
                    resizeMode={'contain'}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('../../assets/images/credit.png')}
                    style={styles.iconStyle}
                    resizeMode={'contain'}
                  />
                );
              }
            case 4:
              if (isFocused) {
                return (
                  <Image
                    source={require('../../assets/images/user_active.png')}
                    style={styles.iconStyle}
                    resizeMode={'contain'}
                  />
                );
              } else {
                return (
                  <Image
                    source={require('../../assets/images/user.png')}
                    style={styles.iconStyle}
                    resizeMode={'contain'}
                  />
                );
              }

            default:
              break;
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            activeOpacity={0.8}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarButton}>
            {renderIcon()}
            <Text
              style={[
                styles.tabBarTitle,
                {color: isFocused ? PRIMARY_COLOR : '#DDDDDD'},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
