import React from 'react';
import { Link } from 'react-router-dom';

const workList = [
  {
    heading: 'Google Developers Student Club',
    position: 'Extended Core',
    desc: [
      'I took Git Github session to the attendees.',
      <Link to='https://gdsc-woc.tech/'>
        Helped organize WOC3.0 and contributed to develop the website.
      </Link>,
    ],
  },
  // {
  //   heading: 'Microsoft Learn Student Ambassador',
  //   position: 'Beta Student Ambassador',
  //   desc: [
  //     'MSLA is a community of students from all around the world and it gave me a chance to interact with developers from around the world.',
  //     'I take part in a lot of sessions held on various Tech Domains by developers who are far more experienced than me and I learn a lot from it.',
  //   ],
  // },
];

export default workList;