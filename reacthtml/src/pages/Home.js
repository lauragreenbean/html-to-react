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
                            <h2>Join Our Mailing List</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum, molestias animi aliquam.</p>
                            <form action="">
                                <input type="text" placeholder="First Name"/>
                                <input type="text" placeholder="Last Name"/>
                                <input type="text" placeholder="Email Address"/>
                                <p class="text-center"><button type="submit">Submit</button></p>
                            </form>
                            <p><small><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum, molestias animi aliquam ipsum architecto unde ut, neque quo laborum deserunt veritatis repellendus fugit dolore quisquam, quas quam porro rem.</em></small></p>
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