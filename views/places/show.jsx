const React = require('react')
const Def = require('../default')

function show (data) {
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
            currently unrated.
            <h2>Comments</h2>
            No comments yet!
            <br></br>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
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