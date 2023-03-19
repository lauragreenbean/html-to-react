import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
        <div class="container">
            <div class="row">
                <div class="col w-3 left">
                    <div class="logo">
                        <a href="/"><img alt="logo"src="https://1000logos.net/wp-content/uploads/2020/10/University-of-Southern-California-logo-640x384.png"/></a>
                    </div>
                </div>
                <div class="col w-9">
                    <div id="menu">
                        <button type="button" id="menu-btn">Menu</button>
                    </div>
                    <nav id="nav">
                        <ul>
                            <li><a href="/" class="active">Home</a></li>
                            <li><a href="/about.html">About</a></li>
                            <li><a href="/contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
      </div>
    );
  }
}

export default Header;