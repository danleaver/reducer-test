import React, { createContext, useReducer } from 'react'; 
import { reducer } from '../reducers/reducer';

export const ArticleContext = createContext();

const ArticleProvider = (props) => {
  const [ articles, dispatch ] = useReducer(reducer, [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" }
  ])

  
  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;