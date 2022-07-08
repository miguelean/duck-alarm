export const playAudio = (audio: HTMLAudioElement) => {
    if (audio.paused) {
        audio.play()
    } else {
        audio.currentTime = 0
    }
  }