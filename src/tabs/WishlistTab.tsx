import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { icons, images } from '../constants';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomSearch } from '~/components';
import { ScrollView } from 'react-native-gesture-handler';
import { CartContext, CartItem } from '~/components/CartContext';

type Props = {};

const products: CartItem[] = [
  { id: 1, name: 'Burrito bòa', price: 40000, image: require('../../assets/images/food/burgerDisp.jpg'), quantity: 0 },
  { id: 2, name: 'Cơm chiên dương châu', price: 20000, image: require('../../assets/images/food/Chicken-Republic-Fried-Rice.jpg'), quantity: 0 },
  { id: 3, name: 'Burrito chay', price: 30000, image: require('../../assets/images/food/burgerTwoDisp.jpg'), quantity: 0 },
  { id: 4, name: 'Probably thịt kho', price: 50000, image: require('../../assets/images/food/Menum.freis.GissDodo.png'), quantity: 0 },
  { id: 5, name: 'Cánh gà + Khoai tây chin', price: 70000, image: require('../../assets/images/food/Menum.freis.Fried-Yam-and-Chicken-Wings.png'), quantity: 0 },
  { id: 6, name: 'Cánh gà + Xoài non', price: 60000, image: require('../../assets/images/food/Menum-Fries--Chips-Chicken-Wings.png'), quantity: 0 },
  { id: 7, name: 'Probably bánh mì', price: 20000, image: require('../../assets/images/food/ToastPan-Sandwhiches--SteakSandwich.jpeg'), quantity: 0 },
  { id: 8, name: 'Săn uých xông khói', price: 30000, image: require('../../assets/images/food/ToastPan-wrap--smokedTurkeyWrap.jpeg'), quantity: 0 },
  { id: 9, name: 'Săn uých thịt', price: 35000, image: require('../../assets/images/food/ToastPan-Sandwhiches--SteakSandwich.jpeg'), quantity: 0 },
  { id: 10, name: 'Tép rim', price: 40000, image: require('../../assets/images/food/Menum-PepperredProtein--pepperredPrawn.png'), quantity: 0 },
  { id: 11, name: 'Thịt kho (?)', price: 50000, image: require('../../assets/images/food/Menum-PepperSoup--Goat-meat-pepper-soup.png'), quantity: 0 },
  { id: 12, name: 'Still burrito', price: 35000, image: require('../../assets/images/food/Menum-Shawarma--Extra-large-chicken-shawarma.png'), quantity: 0 },
  { id: 13, name: 'Xiên bẩn', price: 69000, image: require('../../assets/images/food/Menum-Shawarma--shawarmaCombo.jpeg'), quantity: 0 },
  { id: 14, name: 'Thịt dê rim tiêu', price: 70000, image: require('../../assets/images/food/Menum-PepperSoup--Goat-meat-pepper-soup.png'), quantity: 0 },
  { id: 15, name: 'Cơm chiên trứng tỏi', price: 80000, image: require('../../assets/images/food/Chicken-Republic-Rice-Beans-with-sauce.jpg'), quantity: 0 },
];

type RootStackParamList = {
  Cart: undefined;
};

const WishlishTab: React.FC = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { addToCart } = useContext(CartContext) || {};

  type RootStackParamList = {
    Setting: undefined;
  };

  const NavigateToProfile = () => {
    navigation.navigate('Setting');
  }
  return (
    <View>
      <View className='flex flex-row items-center justify-between mx-5 py-5'>
        <Image
          source={icons.menu}
          className='w-8 h-8'
          resizeMode='contain'
        />
        <Image
          source={images.logo}
          className='h-14'
          resizeMode='contain'
        />
        <TouchableOpacity onPress={NavigateToProfile}>
          <Image
            source={icons.profile}
            className='w-8 h-8'
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
      {/**search */}
      <CustomSearch initialQuery='' />

      <Text className='text-3xl font-bold text-center pb-8'>Các món ăn hiện đang On Top</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between bg-white p-3 mb-2 rounded-lg shadow-sm">
            <Image source={item.image} className="w-20 h-20 rounded-lg mr-3" />

            {/* Thông tin sản phẩm */}
            <View className="flex-1 justify-center">
              <Text className="text-base text-xl font-bold text-gray-800 mb-1">{item.name}</Text>
              <Text className="text-xl font-semibold text-orange-500">{item.price.toLocaleString()}₫</Text>
            </View>

            {/* Nút thêm vào giỏ hàng */}
            <TouchableOpacity
              className="bg-orange-500 p-2 rounded-full justify-center items-center"
              onPress={() => addToCart?.(item)}
            >
              <Image
                source={icons.addcart}
                className="w-8 h-8"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 160,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WishlishTab;