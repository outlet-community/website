import player from "@lib/player";
import React, { useEffect } from 'react'

function AudioSetup() {
  useEffect(() => {
    const element: HTMLAudioElement = document.createElement('audio')
    player.setInitialState(element)
    console.log('created audio')
  }, [])
  return <></>
}

export default AudioSetup
