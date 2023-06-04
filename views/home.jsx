const React = require('react')
const Def = require('./default')

function home() {

    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img style={{height: "300px"}} src="/images/chiaSeed-pudding.jpg" alt="picture of two glasses of chia seed pudding"/>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@cravethebenefits"> Brenda Godinez</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk">Unsplashed</a>
                </div>
                <a href="/places">
    <button className="btn-primary">Places Page</button>
    </a>

            </main>
        
        </Def>
  
        
        )  
}

module.exports = home


