import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import { getAllCategories } from './../Hooks/getAllCategories';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(({result}) => {
      setCategories(result);
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Cards */}
      {categories?.map((category) => (
        <CategoryCard key={category._id} imageUrl={category.image} title={category.name} />
      ))}
    </ScrollView>
  );
};

export default Categories;
