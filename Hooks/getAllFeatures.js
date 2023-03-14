import { getRequestUrl } from "../Common/api";

export const getAllFeatures = () => {
  let QUERY = encodeURIComponent(`*[_type == "featured"] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
  }`);

  return fetch(getRequestUrl(QUERY)).then((res) => res.json()).catch((err) => console.error(err));;
};
