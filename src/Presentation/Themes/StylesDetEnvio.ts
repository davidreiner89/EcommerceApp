/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {globalColors} from './GlobalColors';

export const StylesDetEnvio = StyleSheet.create({
  // Contenedor padre 1
  emptyContainer: {
    width: '100%',
    height: 65,
    backgroundColor: 'transparent',
  },
  iconContainer: {
    position: 'absolute',
    top: 15,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: globalColors.white,
    padding: 8,
    elevation: 2,
  },
  // Contenedor padre 2
  container: {
    position: 'relative',
    height: '89%',
    marginHorizontal: 12,
    backgroundColor: globalColors.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    elevation: 2,
    alignItems: 'center',
  },
  // Hijo del contenedor 2
  dataContainer: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  textDetEnvio: {
    color: globalColors.black,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  pointTitle: {
    fontSize: 13,
    color: globalColors.lightGrey,
    marginBottom: 1,
  },
  columnsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 12,
  },
  filaUno: {
    width: '16%',
  },
  phone: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0c5b98',
    borderRadius: 999,
  },
  filaDos: {
    width: '69%',
    paddingLeft: 12,
  },
  line: {
    borderWidth: 0.3,
    borderColor: globalColors.lightGrey,
    marginVertical: 5,
  },
  textStatus: {
    color: globalColors.black,
    fontSize: 15,
    paddingVertical: 1.5,
    backgroundColor: 'transparent',
  },
  textInput: {
    color: globalColors.black,
    fontSize: 15,
    backgroundColor: 'transparent',
    padding: 0,
    marginVertical: -3,
  },
  buttonCamara: {
    width: 27,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    marginHorizontal: 7,
  },
  selectBox: {
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 1.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#000000',
  },
  enviarInstancia: {
    position: 'absolute',
    top: 580,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0c5b98',
    backgroundColor: '#0c5b98',
    paddingVertical: 7,
    borderRadius: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 17,
  },
  iconButton: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
  buttonRutas: {
    width: 80,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0c5b98',
    backgroundColor: '#0c5b98',
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 3,
  },
  textRutas: {
    fontSize: 13,
    color: 'white',
  },
});
