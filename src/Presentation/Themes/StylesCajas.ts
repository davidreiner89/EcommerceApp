import {StyleSheet} from 'react-native';
import {globalColors} from './GlobalColors';

export const StylesCajas = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  raya: {
    width: '28%',
    height: 1,
    backgroundColor: globalColors.lightGrey,
  },
});
