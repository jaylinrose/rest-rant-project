const React = require('react')
const Def = require('../default')
const comments = require('../../models/comment.js')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
          stars += 'â­ï¸'
        }
        rating = (
          <h3>
            {stars} stars
          </h3>
        )
       
      }
      
      
    }
  } 
  return (
    <Def>
      <main>
        <h1>{data.places}</h1>
      </main>
      <body><center>
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
        <h2>description</h2> 
        {data.place.city}, {data.place.state}
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        <br></br>
        {data.place.cuisines}        
        <h2>Rating</h2>
        {rating}
        <h2>Comments</h2>
        No comments yet!
        <br></br>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
          </a>  
          <a href={`/places/${data.id}/comment`} className="btn btn-warning"> 
            Comment
          </a> 
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>     
        </center></body>
    </Def>
)

}
   


module.exports = show



