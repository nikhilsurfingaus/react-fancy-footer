
# react-adaptive-footer


A reusable Footer component in react for either Web Browser or 
Mobile screen responsivenes.


Live demo
# Live demo

Link: https://quivercrypto.netlify.app/home


## Installation

Install my-project with npm

```bash
  npm i react-adaptive-footer
```
    
```bash
import { Footer } from 'react-footer-navbar';

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

export const Example = () => 
        <>
            <Footer 
                bg='#0b4a91' 
                siteName="MyWebsite"
                siteDesc="Thus us sum mad website cuz"
                siteDesc="Thus us sum mad website cuz"
                nav = {LINKS}
            />
        </>
```
## Props

| Props | Types  | Description |
| ------------- | ------------- | -------------| 
| bg  | Str  | Background colour for footer with '#xxxxx' |
| siteName  | Str  | Name of Website |
| siteLogo  | img  | Logo image file for website |
| s1Title,s2Title,s2Title  | str  | Title for each sub section |
| subOne,subTwo,subThree,subSocial  | Object Array  | Each Prop Requires display:"name", url:"_page/web link", target="_self/_blank" |


## Feedback

If you have any feedback, please reach out to us at nikhilsurfingaus@gmail.com

