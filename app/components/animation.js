"use client";

import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../../public/Animation.json'

export default function Example() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}