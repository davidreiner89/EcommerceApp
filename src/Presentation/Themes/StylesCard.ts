import {StyleSheet} from 'react-native';

export const StylesCard = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  raya: {
    width: 5,
    height: '100%',
    backgroundColor: '#0d6db3',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  envioNumber: {
    fontSize: 16,
    color: '#0c2945',
  },
  envioName: {
    fontSize: 12 + 2,
    color: '#0d6db3',
    marginTop: 3,
    textTransform: 'capitalize',
  },
});
