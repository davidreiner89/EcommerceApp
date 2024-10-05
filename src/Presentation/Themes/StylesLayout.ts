import {StyleSheet} from 'react-native';
import {globalColors} from './GlobalColors';

export const StylesLayout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.white,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  // Contenedor padre 1
  emptyContainer: {
    position: 'relative',
    width: '100%',
    height: '45%',
    backgroundColor: 'transparent',
  },
  // Contenedor padre 2
  mainContainer: {
    marginHorizontal: 12,
    height: '52%',
    backgroundColor: 'transparent',
  },
  // Primer hijo del contenedor padre 2
  instanciaContainer: {
    width: '100%',
    backgroundColor: globalColors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: '4%',
    // Estilos del efecto de elevacion
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 2,
  },
  // Segundo hijo del contendor padre2
  dataContainer: {
    height: '82%',
    backgroundColor: globalColors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    // Estilos del efecto de elevacion
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 2,
  },
  iconMenu: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
    left: 10,
    backgroundColor: globalColors.white,
    padding: 8,
    borderRadius: 999,
  },
});
