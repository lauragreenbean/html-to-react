import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div>
        <footer>
        <p class="text-center hidden-sm">
            <a href="/index.html" class="active">Home</a> | <a href="/about.html">About</a> | <a href="/contact.html">Contact</a>
        </p>
        <p class="text-center">
            Fake Copyright 2021 &copy; The Dev Drawer
        </p>
    </footer>
      </div>
    );

  }
};

export default Footer;