import { getCollection, type CollectionEntry, reference } from "astro:content";
// import { asyncFilter } from "./async";

export const IS_PROD = import.meta.env.PROD;
// export const IS_DEV  = import.meta.env.DEV;

////////////////////////////////////////////////////////////

type HasPublished = { data : { published : boolean } };

export const isPublished = (entry: HasPublished) => {
  return entry.data.published;
}

////////////////////////////////////////////////////////////

export const getPosts = (
  filter?: (entry: CollectionEntry<"post">) => boolean
) => {
  return getCollection("post", (entry => {
    const isPostPublished = isPublished(entry);
    const isNotProduction = !IS_PROD;
    const filterPred = filter ? filter(entry) : true
    
    return filterPred && (isPostPublished || isNotProduction);
  }));
}

export const getCoursePosts = (
  course: string
) => {
  return getPosts((post) => post.data.course.id == course)
}