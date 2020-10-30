import React, { useContext, useState } from 'react';
import { ArticleContext } from '../providers/ArticleProvider';

const DeleteArticle = ({article}) => {
  const { dispatch } = useContext(ArticleContext);

  const deleteArticle = () => {
    dispatch({ type: "DELETE_ARTICLE", article });
  };

  return (
    <button onClick={deleteArticle}>delete Article</button>
  );
};

export default DeleteArticle;
