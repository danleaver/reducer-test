export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.article.title,
          body: action.article.body,        
        }
      ];
      case "DELETE_ARTICLE":
        return (state.filter(a => a.id !== action.article.id))
    default:
      return state;
  }
};