import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Text, View, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Categories";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import FeatureRow from "../components/FeatureRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
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

      {/* Search */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeatureRow
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
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
