import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeatureRow = ({ id, title, desc }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{desc}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* RestCards */}
        <RestaurantCard 
            id="1"
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_desc="This is a Japanese restaurant"
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id="2"
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_desc="This is a Japanese restaurant"
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id="3"
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_desc="This is a Japanese restaurant"
            dishes={[]}
            long={20}
            lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
