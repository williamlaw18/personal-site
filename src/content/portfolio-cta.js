import React from 'react';

import employersolutions from '../assets/images/es.png';
import as3performance from '../assets/images/as3.jpg';
import personalsite from '../assets/images/portfolio.png';

export default [

      {
        img : as3performance,
        preview: 'AS3 Performance',
        content :   <React.Fragment>
                        <h3>AS3 Performance</h3>
                        <a href="https://www.verse.co.uk/">@Verse Ltd</a>
                        <p>I went into this project with no prior understanding of shopify and hadn't even worked on a E-commerse site before where I was expected to deliver the project to a deadline by myself</p>
                        <p>The site is easy to navigate and effectively displays a vast ammount of products without any noticable load times. It was a totally bespoke site and written from scratch in order to achive the best performance and editability possibly</p>
                        <p>Technologies Used:</p>
                        <ul>
                          <li>Twig</li>
                          <li>HTML & CSS (SASS)</li>
                          <li>Javascript</li>
                          <li>Shopify CMS</li>
                          <li>Github</li>
                        </ul>                    </React.Fragment>,
        link: 'https://as3performance.myshopify.com/'
    },

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
                          <li>HTML & CSS (SASS)</li>
                          <li>Wordpress CMS</li>
                          <li>Github</li>
                        </ul>
                    </React.Fragment>,
        link: 'https://employersolutions.pixeljunctiondemo.co.uk/'
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
                          <li>CSS SASS</li>
                        </ul>
                    </React.Fragment>
    }

]
