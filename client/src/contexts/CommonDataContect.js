import { createContext, useState, useEffect } from "react";
import useFetch from "../useFetch";

export const CommonDataContext = createContext();

function CommonDataContextProvider(props) {

   const categories = useFetch('http://localhost:8080/api/categories');
   const levels = useFetch('http://localhost:8080/api/levels');
   const tags = useFetch('http://localhost:8080/api/tags');

   const getLevel = (id) => {
      if (!levels.data) return null;
      return levels.data.find((lev) => lev.id == id);
   }

   const getCategory = (id) => {
      if (!categories.data) return null;
      return categories.data.find((cat) => cat.id == id);
   }

   const getTags = (id) => {
      if (!tags.data) return null;
      return tags.data.find((tag) => tag.id == id);
   }

   return (
      <CommonDataContext.Provider value={{ categories, levels, tags, getLevel, getCategory, getTags }}>
         {props.children}
      </CommonDataContext.Provider>
   )
}

export default CommonDataContextProvider;