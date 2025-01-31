import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <main>
        <div class="container">
            <div class="row">
                <div class="col w-1">
                    <div class="card">
                        <h1 class="text-center">Contact Me</h1>
                        <div class="row">
                            <div class="col w-6 left">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scisse enim te quis coarguere possit? Equidem, sed audistine modo de Carneade? Quid ad utilitatem</p>
                                <p>
                                    <strong>Telephone:</strong> 123-456-7890
                                    <br/>
                                    <strong>Email Address:</strong> sample@example.com
                                </p>
                            </div>
                            <div class="col w-6">
                                <form>
                                    <input type="text" placeholder="First Name"/>
                                    <input type="text" placeholder="Last Name"/>
                                    <input type="text" placeholder="Email Address"/>
                                    <input type="text" placeholder="Phone Number"/>
                                    <textarea placeholder="How can I help you?" rows="10"></textarea>
                                    <button type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        <Footer/>
      </div>
    );
  }
}

export default Contact;