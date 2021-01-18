/* eslint-disable import/no-anonymous-default-export */
export default (blogs = [], action) => {
  switch (action.type) {
    case "FETCH_BLOGS":
      return action.payload;
    case "CREATE_BLOG":
      return [...blogs, action.payload];
    default:
      return blogs;
  }
};
