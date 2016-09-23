import React, {PropTypes} from 'react'
import Photo from './Photo'

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
       {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
})

/*const PhotoGrid = ({posts}) => (
  <div className="photo-grid">
    {posts.map((post, i) => <Photo {...post} key={i} i={i} post={post} />) }
  </div>
)

PhotoGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    display_src: PropTypes.string.isRequired
  }).isRequired).isRequired
}
*/


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