import React from "react";

export const metadata = {
  title: "blog page",
  description: "this is a blog page",
};

const BlogLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default BlogLayout;
