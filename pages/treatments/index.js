import { createClient } from "contentful"

import React from 'react';
import BookingForm from '../../components/BookingForm';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    host: "preview.contentful.com"
})

export async function getStaticProps() {
   
    const res = await client.getEntries(({
        content_type: "project",
        select: "fields"
    }))

    return {
        props: {
            projects: res.items
        },
        revalidate: 100
    }
}

export default function Treatments({projects}) {
    
    const blockedDates = [
        {
          date: '2023-04-25', // Blocked date
          times: ['09:00', '10:00', '11:00'], // Blocked times for the date
        },
        {
          date: '2023-04-26', // Blocked date
          times: ['14:00'], // Blocked times for the date
        },
      ];

    return (
        <div>
            <h1>Treatments</h1>
            <BookingForm blockedDates={blockedDates}/>
        </div>
    )
}

