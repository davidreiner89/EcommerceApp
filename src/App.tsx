/* eslint-disable react/react-in-jsx-scope */
// UI Kitten
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

// Navigation
import {NavigationContainer} from '@react-navigation/native';

// Tan Stack Query
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {useColorScheme} from 'react-native';
import {StackNavigator} from './Navigation/StackNavigator';
import {PermissionsProvider} from './Presentation/Provider/PermissionsProvider';
import {LocationProvider} from './Presentation/Provider/LocationProvider';

// Creamos el cliente
const queryClient = new QueryClient();

export const App = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;

  return (
    <QueryClientProvider client={queryClient}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer>
          <PermissionsProvider>
            <LocationProvider>
              <StackNavigator />
            </LocationProvider>
          </PermissionsProvider>
        </NavigationContainer>
      </ApplicationProvider>
    </QueryClientProvider>
  );
};
