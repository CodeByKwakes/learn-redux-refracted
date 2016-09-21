import React from 'react'

const Single = React.createClass({
  render() {
    return (
      <div className="single-photo">
        I'm the single
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