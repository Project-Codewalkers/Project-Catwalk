import React from 'react';
import styled from 'styled-components';
// import { Facebook } from 'styled-icons';
import { Facebook, Instagram, Messenger, Pinterest, Reddit, Snapchat, Twitter, Whatsapp } from '@styled-icons/boxicons-logos';

// const SocialMediaIcon = styled.a`
//   height: 64px;
//   width: 64px;
//   margin: 12px;
//   padding: 10px;
//   border: 1px solid #525252;
//   background: #FFF;
//   cursor: pointer;
//   &:active{
//     box-shadow: inset 0px 2px 8px rgba(82, 82, 82, 0.5);
//   }
// `;

const SocialMedia = () => (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
    <Facebook style={{ height: '30px', cursor: 'pointer' }} />
    <Instagram style={{ height: '30px', cursor: 'pointer' }} />
    <Messenger style={{ height: '30px', cursor: 'pointer' }} />
    <Pinterest style={{ height: '30px', cursor: 'pointer' }} />
    <Reddit style={{ height: '30px', cursor: 'pointer' }} />
    <Snapchat style={{ height: '30px', cursor: 'pointer' }} />
    <Twitter style={{ height: '30px', cursor: 'pointer' }} />
    <Whatsapp style={{ height: '30px', cursor: 'pointer' }} />

  </div>
);
// <SocialMediaIcon>
//   <img
//     src="/assets/social/Facebook.svg"
//     alt="share on facebook"
//     style={{
//       color: 'black',
//       height: '20px',
//       width: '20px',
//     }}
//   />
// </SocialMediaIcon>

export default SocialMedia;
