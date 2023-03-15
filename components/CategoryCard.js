import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 flex-col items-center justify-center">
      <Image
        source={{
          uri: imageUrl,
        }}
        className="h-20 w-20 overflow-hidden bg-gray-200 rounded-lg"
      />
      <Text className="text-black font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
