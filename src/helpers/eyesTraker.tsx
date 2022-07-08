export const eyesTracker = () => {
  const container = document.querySelector(".App-header")
  const leftEye = document.getElementById("leftEye")
  const rightEye = document.getElementById("rightEye")

  container &&
    leftEye &&
    rightEye &&
    container.addEventListener("mousemove", (e: any) => {
      const eyes = [leftEye, rightEye]
      eyes.map((eye) => {
        const mouseX =
          eye.id === "leftEye"
            ? eye.getBoundingClientRect().left
            : eye.getBoundingClientRect().right
        // Now we also need the vertical offset
        const mouseY = eye.getBoundingClientRect().top
        // Now we are going to calculate the radian value of the offset between the mouse and the eye
        const radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY)
        // Let's convert this into a degree based value so we can use it in CSS
        const rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180
        // Now all we have to do is add this degrees to our eye!
        eye.style.transform = `rotate(${rotationDegrees}deg)`
      })
    })
}
