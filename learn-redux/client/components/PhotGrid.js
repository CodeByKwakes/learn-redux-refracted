import React from 'react'

const Photo = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        I'm the photo grid
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

export default Photo;