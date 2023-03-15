import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, View, Image, TextInput, ScrollView, ScrollViewBase } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

import { getAllFeatures } from "../Hooks/getAllFeatures";
import Categories from "../Components/Categories";
import FeatureRow from "../Components/FeatureRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    getAllFeatures().then(({ result }) => {
      setFeaturedCategories(result);
    });
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5" style={{flex: 1}}>
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <View>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        </View>

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl">Current Location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Features */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}

        {featuredCategories?.map((item) => (
          <FeatureRow
            key={item?._id}
            id={item?._id}
            title={item?.name}
            desc={item?.short_desc}
          />
        ))}

        {/* <FeatureRow
          id="1"
          title="Featured"
          desc="Paid placements from our partners!"
        />
        <FeatureRow
          id="2"
          title="Tasty Discounts"
          desc="Everyone's been enjoy these juicy discounts!"
        />
        <FeatureRow
          id="3"
          title="Offers near you!"
          desc="Why not support your local restaurant tonight!"
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
