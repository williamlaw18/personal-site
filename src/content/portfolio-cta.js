import React, { Component } from 'react';

import employersolutions from '../assets/images/es.png';
import lodgebywindermere from '../assets/images/lodge.png';
import personalsite from '../assets/images/portfolio.png';

export default [

    {
        img : employersolutions,
        preview: 'Employer Solutions',
        content :   <React.Fragment>
                        <h3>Employer Solutions</h3>
                        <a href="https://www.pixeljunction.co.uk/">@PixelJunction</a>
                        <p>This project was undertaken whilst working for Pixel as a refresh for an outdated client site</p>
                        <p>The project demonstates my ability in following a bespoke deisgn, by building and testing the site ontop of Wordpress with totally, custom content management, within a set time frame.</p>
                        <p>Technologies Used:</p>
                        <ul>
                          <li>PHP</li>
                          <li>MySQL</li>
                          <li>Wordpress CMS</li>
                          <li>SaaS</li>
                        </ul>
                    </React.Fragment>,
        link: 'https://employersolutions.pixeljunctiondemo.co.uk/'
    },

    {
        img : lodgebywindermere,
        preview: 'This is a title',
        content :   <React.Fragment>
                        <h3>Another Title</h3>
                        <p>Maecenas euismod mi odio, a dapibus eros maximus gravida. Pellentesque vel nisi ut libero convallis congue ut id orci. Donec sed dui tellus. Cras bibendum convallis quam accumsan egestas.</p>
                    </React.Fragment>,
        link: 'https://lodgebywindermere.co.uk/'
    },

    {
        img : personalsite,
        preview: 'This Site!',
        content :   <React.Fragment>
                        <h3>Personal Portfolio Site</h3>
                        <p>The site is primarily built using the React library and is heavily componented to allow for quick re-use of modules</p>
                        <p>I find that by appying technologies as I learn them, I am able to pick them up much faster than purely studying them, so the main goal in creating this site was to further my knowlage of JAM stack based development and to put React into actual practice.</p>
                        <p>Netlify is used as a free static hosting platform, which integrates very nicely with github for quality project management and rapid deployment of code to the server.</p>
                        <p>After working on this project for a short time, I come to realise that as the modern web starts to lean toward Node based stacks, a server side language is no longer required to have complex and contentfull sites when such Technologies like react and vue can be paired with a lightweight cms like netlify.</p>
                        <p>Technologies Used:</p>
                        <ul>
                          <li>Javascript</li>
                          <li>React</li>
                          <li>Netlify</li>
                          <li>SaaS</li>
                        </ul>
                    </React.Fragment>
    }

]
