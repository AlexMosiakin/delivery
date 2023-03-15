import { getRequestUrl } from "../Common/api";

export const getAllCategories = () => {
  let QUERY = encodeURIComponent(`*[_type == "category"] {
    ...,
    'image': image.asset->url,
  }`);

  return fetch(getRequestUrl(QUERY))
    .then((res) => res.json())
    .catch((err) => console.error(err));
};
