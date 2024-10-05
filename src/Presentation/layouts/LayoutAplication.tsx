/* eslint-disable react/react-in-jsx-scope */
import {Layout} from '@ui-kitten/components';
import {StylesLayout} from '../Themes/StylesLayout';
import {PropsWithChildren} from 'react';
import {LoadingScreen} from '../Screens/LoadingScreen';
import {Mapa} from '../components';
import {useLocationStore} from '../store/Location/useLocationStore';

export const LayoutAplication = ({children}: PropsWithChildren) => {
  // Usamos el hook
  const {lastKnowLocation} = useLocationStore();

  if (lastKnowLocation === null) {
    return <LoadingScreen />;
  }

  return (
    <Layout style={StylesLayout.container}>
      <Mapa initialLocation={lastKnowLocation} />
      {children}
    </Layout>
  );
};
