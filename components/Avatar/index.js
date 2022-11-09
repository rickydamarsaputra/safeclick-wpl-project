/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image, {ImageProps} from 'next/image'

import styles from './Avatar.module.css'

// Change using next/image later
function Avatar({src}) {
  return <img style={{
    borderRadius: "50%",
    border: "3px solid #1D58A6",
    filter: "drop-shadow(0px 4px 24px rgba(155, 203, 249, 0.14))",
    width: "75px",
    height: "75px",
    verticalAlign: 'middle',
  }} 
  alt=""
  src={src ?? 'https://placekitten.com/75/75'}
  />;
}

export default Avatar