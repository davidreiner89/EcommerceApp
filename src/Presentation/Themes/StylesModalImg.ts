import {StyleSheet} from 'react-native';

export const StylesModalImg = StyleSheet.create({
  centeredView: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacidad: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  modalView: {
    position: 'relative',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    elevation: 5,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerClose: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 999,
    padding: 2,
  },
  close: {
    width: 20,
    height: 20,
  },
  bodyModal: {
    width: '100%',
    marginTop: 5,
  },
  containerImagenModal: {
    width: 155,
    height: 100,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  imagenModal: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  footerModal: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  descargarButton: {
    width: 140,
    borderWidth: 1,
    backgroundColor: '#0d6db3',
    borderColor: '#0d6db3',
    marginTop: 10,
    marginBottom: 5,
  },
});
