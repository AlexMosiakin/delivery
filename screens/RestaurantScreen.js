import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../Components/DishRow";
import BasketIcon from "../Components/BasketIcon";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../features/basketSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      category,
      address,
      short_desc,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      {!!items.length && <BasketIcon />}
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: imgUrl,
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-4 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>

            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon opacity={0.5} size={22} color="green" />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> - {category}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon opacity={0.5} size={22} color="gray" />
                <Text className="text-xs text-gray-500">
                  <Text className="text-xs text-gray-500">
                    Nearby - {address}
                  </Text>
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_desc}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.5} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className={items?.length && "pb-36"}>
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {dishes?.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              desc={dish.short_desc}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
