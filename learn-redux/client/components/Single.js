import React from 'react'
import Photo from './Photo'
// import comments
import Comments from './Comments'

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === postId)
    console.log(i)
    const post = this.props.posts[i]
    console.log(post)
    const postComments = this.props.comments[postId] || []
   
    // get us the post
    return (
      <div className="single-photo">
         <Photo i={i} post={post} {...this.props} />
         <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
})

// Other way of writting the above code
// export const Single = () => (
//   <div>
//     <h1>
//       <Link to="/">Reduxstagram</Link>
//     </h1>
//   </div>
// )

export default Single;