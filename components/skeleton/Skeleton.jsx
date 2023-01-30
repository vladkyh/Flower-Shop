import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={601}
    viewBox="0 0 499 601"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="529" rx="3" ry="3" width="115" height="40" /> 
    <rect x="14" y="443" rx="3" ry="3" width="88" height="35" /> 
    <rect x="17" y="491" rx="3" ry="3" width="299" height="20" /> 
    <rect x="15" y="29" rx="0" ry="0" width="300" height="400" />
  </ContentLoader>
)

export default MyLoader