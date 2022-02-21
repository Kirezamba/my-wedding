import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={850}
    viewBox="0 0 400 850"
    backgroundColor="#ade0f0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="15" ry="15" width="400" height="850" />
  </ContentLoader>
);

export default MyLoader;
