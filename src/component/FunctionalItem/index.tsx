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
  const {icon, name, content, haveSwitch, onChange, switchValue} = props;

  const onChangeSwitch = (value: boolean) => {
    onChange && onChange(value);
  };

  return (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.9}>
      <View style={styles.contentContainer}>
        {icon}
        <View>
          <AppText style={styles.nameStyle}>{name}</AppText>
          <AppText style={styles.contentStyle}>{content}</AppText>
        </View>
      </View>
      {haveSwitch && (
        <Switch
          onValueChange={onChangeSwitch}
          value={switchValue}
          style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
        />
      )}
    </TouchableOpacity>
  );
};
