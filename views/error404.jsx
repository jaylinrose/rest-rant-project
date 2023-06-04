const React = require('react')
const Def = require('./default')

function error404 () {
    return(
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <div>
                    <img style={{height: "300px"}} src="/images/404pug.jpg" alt="picture of a sad pug"/>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@matthewhenry"> Mathew Henery</a> on <a href="https://unsplash.com/photos/2Ts5HnA67k8">Unsplashed</a>
                </div>
        </main>
    </Def>
    )

}

module.exports = error404