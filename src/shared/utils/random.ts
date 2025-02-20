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
