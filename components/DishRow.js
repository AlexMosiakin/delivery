import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

const DishRow = ({ id, name, desc, price, image }) => {
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200">
      <View className="flex-row">
        <View className='flex-1 pr-2'>
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{desc}</Text>
          <Text className="text-gray-400 mt-2">{price} $</Text>
        </View>

        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{
              uri: image,
            }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
