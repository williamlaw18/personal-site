import React, { Component } from 'react';
import Tagline from '../molecules/tagline';

class Footer extends Component{

    render(){
        return(

            <footer>

                <section className="container container__footer">

                  <h3>Contact Me!</h3>

                  <p>if you like what you see or want to get in touch regarding any opportinities, please contact me through one of the means below:</p>

                  <ul>
                      <li>Email: 21will01law00@gmail.com</li>
                      <li>Phone: 07444167357</li>
                      <li>Address:
                        <ul class="footer__address">
                            <li>100 Birchwood drive</li>
                            <li>Ulverston</li>
                            <li>Cumbria</li>
                            <li>La129nz</li>
                        </ul>
                      </li>
                  </ul>

                </section>

            </footer>
        )
    }
}

export default Footer
