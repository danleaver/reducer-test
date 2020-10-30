import React, { useContext, useState } from 'react';
import { ArticleContext } from '../providers/ArticleProvider';
import DeleteArticle from './DeleteArticle';

const Articles = () => {
  const { articles } = useContext(ArticleContext);

  return (
    <>
      {articles.map( a => (
        <div key={a.id}>  
          {a.title} 
          <br/> 
          {a.body}
          <br/><br/>
          <DeleteArticle article={a}/>
        </div>
      ))}
    </>
  )
}
export default Articles;
