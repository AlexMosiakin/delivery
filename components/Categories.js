import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
    </ScrollView>
  );
};

export default Categories;
