import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from '../components/Foot/Footer';
import './Style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'remixicon/fonts/remixicon.css'

const MY__ACCOUNT = [
    {
      display: "Page 1",
      url: "/market",
      target: "_self",
    },
    {
      display: "Page 2",
      url: "https://mintable.app/u/nikhilsurfingaus",
      target: "_blank",
    },
    {
      display: "Page 3",
      url: "/market",
      target: "_blank",
    },
  ];

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    return(<>
        <Footer subOne={MY__ACCOUNT} bg="#003A6E" siteName="MyWebsite" siteDesc="Thus us sum mad website cuz" s1Title="First" />
    </>);
})