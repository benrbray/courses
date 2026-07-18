import { getCollection, type CollectionEntry } from "astro:content";
// import { asyncFilter } from "./async";

export const IS_PROD = import.meta.env.PROD;
export const IS_DEV  = import.meta.env.DEV;


export const getPosts = (
  filter?: (entry: CollectionEntry<"post">) => boolean
) => {
  return getCollection("post", entry => {
    return filter ? filter(entry) : true;
  });
}