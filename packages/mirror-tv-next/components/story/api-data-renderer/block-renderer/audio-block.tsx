'use client'

import Image from 'next/image'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { type ApiDataBlockBase, ApiDataBlockType } from './type'
import AudioPlayer from '~/components/shared/audio-player'
// import AudioPlayer from '~/components/show/_slug/podcast/audio-player'

type AudioV2_MM = {
  id: string
  audioSrc: string
  name: string
}
type ContentAudioV2_MM = AudioV2_MM

type AudioProps = {
  audio: {
    id: string
    url: string
    name: string
  }
}

export interface ApiDataAudio extends ApiDataBlockBase {
  type: ApiDataBlockType.Audio
  content: [ContentAudioV2_MM]
  alignment: 'center'
}

function getDisplayTimeFromSeconds(seconds: number) {
  const displayMinutes = Math.floor(seconds / 60)
  const displaySeconds = ('0' + Math.floor(seconds % 60)).slice(-2)
  return `${displayMinutes}:${displaySeconds}`
}
const Audio = ({ audio }: AudioProps) => {
  const { id, name, url } = audio
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [durationTime, setDurationTime] = useState('0:00')
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  const handleControlButtonClicked = () => {
    if (isPlaying) {
      setIsPlaying(false)
      audioRef.current?.pause()
    } else {
      setIsPlaying(true)
      audioRef.current?.play().catch((error) => {
        console.error(error)
        setTimeout(() => {
          setIsPlaying(false)
        }, 500)
      })
    }
  }

  const onAudioTimeUpdate = () => {
    const currentTimeInSeconds = audioRef.current?.currentTime ?? 0
    const durationInSeconds = audioRef.current?.duration ?? 0
    const progress = durationInSeconds
      ? (currentTimeInSeconds / durationInSeconds) * 100
      : 0
    setProgress(progress)

    const currentTime = getDisplayTimeFromSeconds(
      audioRef.current?.currentTime ?? 0
    )
    setCurrentTime(currentTime)
  }

  const onAudioLoadedMetadata = () => {
    const durationTime = getDisplayTimeFromSeconds(
      audioRef.current?.duration ?? 0
    )
    setDurationTime(durationTime)
  }

  const onAudioEnded = () => {
    setIsPlaying(false)
  }

  const onProgressBarClicked: MouseEventHandler<HTMLDivElement> = (evt) => {
    const progressBar = progressRef.current
    if (progressBar) {
      const rect = progressBar.getBoundingClientRect()
      const offsetX = evt.clientX - rect.left
      const totalWidth = rect.width
      const newProgress = (offsetX / totalWidth) * 100
      if (
        audioRef.current?.currentTime !== undefined &&
        audioRef.current?.duration
      ) {
        audioRef.current.currentTime =
          (audioRef.current.duration * newProgress) / 100
        setProgress(newProgress)
      }
    }
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="audio-block">
      {/* avoid onLoadedMetadataCapture not being triggered in ssr */}
      {isClient && (
        <audio
          id={`audio_${id}`}
          src={url}
          ref={audioRef}
          onTimeUpdate={onAudioTimeUpdate}
          onLoadedMetadataCapture={onAudioLoadedMetadata}
          onEnded={onAudioEnded}
        />
      )}
      <button className="play-pause" onClick={handleControlButtonClicked}>
        <Image
          src={isPlaying ? '/icons/audio-muted.svg' : '/icons/audio-sound.svg'}
          width={64}
          height={64}
          alt={isPlaying ? 'click to pause audio' : 'click to play audio'}
          onError={(error) => {
            console.error('load audio icon error, make sure icon exist', error)
          }}
        />
      </button>
      <div className="panel">
        <div className="title">{name}</div>
        <div
          className="progress-container"
          onClick={onProgressBarClicked}
          ref={progressRef}
        >
          <div
            className="progress-bar"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
        <div className="time">
          <span>{currentTime}</span>
          <span className="divider-y"></span>
          <span>{durationTime}</span>
        </div>
      </div>
    </div>
  )
}
const AudioBlock = ({ data }: { data: ApiDataAudio }) => {
  const apiDataAudio = data
  const audioData = apiDataAudio.content[0]
  console.log({ audioData })
  //   return (
  //     <AudioPlayer
  //       listeningPodcast={{
  //         title: audioData.name,
  //         link: audioData.audioSrc,
  //       }}
  //     />
  //   )
  // return (
  //   <Audio
  //     audio={{
  //       id: audioData.id,
  //       name: audioData.name,
  //       url: audioData.audioSrc,
  //     }}
  //   />
  // )
  //@ts-expect-error: audioData.url is not a string
  return <AudioPlayer src={audioData.url} title={audioData.name} />
}

export default AudioBlock
