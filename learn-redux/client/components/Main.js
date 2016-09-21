import React from 'react'
import { Link } from 'react-router'

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
      </div>
    )
  }
})

// Other way of writting the above code
// export const Main = () => (
//   <div>
//     <h1>
//       <Link to="/">Reduxstagram</Link>
//     </h1>
//   </div>
// )

export default Main;