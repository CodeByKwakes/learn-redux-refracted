import React from 'react'
import Photo from './Photo'

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
       {this.props.posts.map((post, index) => <Photo {...this.props} key={index} i={index} post={post}/>)}
      </div>
    )
  }
})

// Other way of writting the above code
// export const Photo = () => (
//   <div>
//     <h1>
//       <Link to="/">Reduxstagram</Link>
//     </h1>
//   </div>
// )

// cant use the below to display JSON format on the page
  // <pre>
  //   { JSON.stringify(this.props.posts, null, ' ') }
  // </pre>

export default PhotoGrid;