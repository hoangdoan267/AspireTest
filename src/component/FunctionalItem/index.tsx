import React from 'react';
import {View, Switch} from 'react-native';
import {styles} from './styles';
import {AppText} from '../AppText';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  icon: JSX.Element;
  name?: string;
  content?: string;
  haveSwitch?: boolean;
  switchValue?: boolean;
  onChange?: (value: boolean) => void;
  onPress?: () => void;
}

export const FunctionalItem = (props: Props) => {
  const {
    icon,
    name,
    content,
    haveSwitch,
    onChange,
    switchValue,
    onPress,
  } = props;

  const onChangeSwitch = (value: boolean) => {
    onChange && onChange(value);
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.contentContainer}
        activeOpacity={0.9}
        onPress={onPress}>
        {icon}
        <View>
          <AppText style={styles.nameStyle}>{name}</AppText>
          <AppText style={styles.contentStyle}>{content}</AppText>
        </View>
      </TouchableOpacity>
      {haveSwitch && (
        <Switch
          testID="switch-functional"
          onValueChange={onChangeSwitch}
          value={switchValue}
          style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
        />
      )}
    </View>
  );
};
