import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <main>
        <div class="hero">
            <div class="container">
                <div class="row">
                    <div class="col w-7 left">
                        <h1>Sample Header Here</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum, molestias animi aliquam ipsum architecto unde ut, neque quo laborum deserunt veritatis repellendus fugit dolore quisquam, quas quam porro rem.</p>
                        <a href="/contact.html" class="btn">Contact</a>
                    </div>
                    <div class="col w-5">
                        <div class="card">
                            <h2>Hi I'm Laura </h2>
                            <div>
                            <div >
                            <p>I work full time as a UX Researcher and I am graduating from USC Iovine & Young Academy this Summer!</p>

                                <img id="profile" alt= "profilepic"src= "https://media.licdn.com/dms/image/C5603AQEQojqJrODUsw/profile-displayphoto-shrink_800_800/0/1652891505554?e=1684972800&v=beta&t=u5tzT5dKR-_8rgRV0xJeyIYJrmBaUHecVx40MJWI7hU"
                                 width="250" height="250" float="right">
                                </img>  

                            </div> 
                            </div>
                            <div>
                                                         
                            </div>
                            <p><small><em>This Website is for IDSN 599: Front-End Programming. The date is 3/19/2023.</em></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <div class="icon"></div>
                    <h4>Service 1</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="col text-center">
                    <div class="icon"></div>
                    <h4>Service 2</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="col text-center">
                    <div class="icon"></div>
                    <h4>Service 3</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="col text-center">
                    <div class="icon"></div>
                    <h4>Service 4</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </main>
      </div>
    );
  }
}

export default Home;