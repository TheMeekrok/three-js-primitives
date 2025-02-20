export const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomHexColor = () => {
  return (
    "#" +
    randomInt(0, Math.pow(2, 24) - 1)
      .toString(16)
      .padStart(6, "0")
  )
}

export const randomRgbColor = () => {
  const color = randomHexColor()
  const red = Number("0x" + color.slice(1, 3)) / 255
  const green = Number("0x" + color.slice(3, 5)) / 255
  const blue = Number("0x" + color.slice(5, 7)) / 255
  return [red, green, blue]
}
