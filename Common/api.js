export const PROJECT_ID = "3v8h659d";
export const DATASET = "production";

export const getRequestUrl = (QUERY) => {
    return  `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
}