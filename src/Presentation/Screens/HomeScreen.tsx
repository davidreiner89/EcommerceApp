/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {HomeStackParams} from '../../Navigation/Protected/Home/HomeStackNavigator';
import {useInfiniteQuery} from '@tanstack/react-query';
import {getProductsByPage} from '../../actions/products';
import {MainLayout} from '../layouts/MainLayout';
import {FullScreenLoader} from '../components/ui/FullScreenLoader';
import {ProductList} from '../components/products/ProductList';
import {FAB} from '../components/ui/FAB';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParams>>();
  const drawer = useNavigation();

  const {isLoading, data, fetchNextPage} = useInfiniteQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60, // 1 hour
    initialPageParam: 0,

    queryFn: async params => await getProductsByPage(params.pageParam),
    getNextPageParam: (lastPage, allPages) => allPages.length,
  });

  return (
    <>
      <MainLayout
        title="Byma-ve Ecommerce"
        subTitle="Productos"
        showBackButton={false}
        rightActionIcon="menu-outline"
        rightAction={() => drawer.dispatch(DrawerActions.openDrawer())}>
        {isLoading ? (
          <FullScreenLoader />
        ) : (
          <ProductList
            products={data?.pages.flat() ?? []}
            fetchNextPage={fetchNextPage}
          />
        )}
      </MainLayout>

      <FAB
        iconName="plus-outline"
        onPress={() => navigation.navigate('ProductScreen', {productId: 'new'})}
        style={{
          position: 'absolute',
          bottom: 30,
          right: 20,
        }}
      />
    </>
  );
};
