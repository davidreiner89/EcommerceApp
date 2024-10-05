import {StyleSheet} from 'react-native';

export const tabStyles = StyleSheet.create({
  tab: (activeEnvioType: string, item: string) => ({
    paddingVertical: 12 / 2,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: activeEnvioType === item ? '#0d6db3' : 'transparent',
    borderColor: activeEnvioType === item ? '#0d6db3' : '#0d6db3',
  }),

  tabText: (activeEnvioType: string, item: string) => ({
    color: activeEnvioType === item ? '#ffffff' : '#0d6db3',
    fontSize: 12,
  }),
});
