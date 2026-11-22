import { getCollection, type CollectionEntry, reference, type CollectionKey } from "astro:content";
// import { asyncFilter } from "./async";

export const IS_PROD = import.meta.env.PROD;
// export const IS_DEV  = import.meta.env.DEV;

////////////////////////////////////////////////////////////

type HasPublished = { data : { published : boolean } };

export const isPublished = (entry: HasPublished) => {
  return entry.data.published;
}

////////////////////////////////////////////////////////////

export const getEntries =
  <K extends CollectionKey>(collectionKey: K) =>
    (filter?: (entry: CollectionEntry<K>) => boolean) =>
      getCollection(collectionKey, (entry => {
        const isPostPublished = isPublished(entry);
        const isNotProduction = !IS_PROD;
        const filterPred = filter ? filter(entry) : true
        
        return filterPred && (isPostPublished || isNotProduction);
      }));

////////////////////////////////////////////////////////////

export const getAssignments = getEntries("assignment");
export const getCourseAssignments =
  (course: string) => getAssignments(entry => entry.data.course.id == course);

/* ------------------------------------------------------ */

export const getPosts = getEntries("post");
export const getCoursePosts =
  (course: string) => getPosts(entry => entry.data.course.id == course);

////////////////////////////////////////////////////////////

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash if present

export const getPostUrl = (id: string) => {
  return `${BASE_URL}/temple/${id}`;
}

export const getAssignmentUrl = (assignment: CollectionEntry<'assignment'>) => {
  const course = assignment.data.course.id;
  const kind = assignment.data.kind;
  const id = assignment.id.split("/")[2];

  return `${BASE_URL}/temple/${course}/${kind}/${id}`;
}