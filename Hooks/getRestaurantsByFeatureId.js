import { getRequestUrl } from "../Common/api";

export const getRestaurantsByFeatureId = (id) => {
  let QUERY = encodeURIComponent(
    `*[_type == "featured" && _id == "${id}"] {
      ...,
      restaurants[]->{
        ...,
        'image': image.asset->url,
        dishes[]->,
          category[0]->{
            name
          }
      }
    }[0]`
  );

  return fetch(getRequestUrl(QUERY))
    .then((res) => res.json())
    .catch((err) => console.error(err));
};