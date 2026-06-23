import { ScreenshotGrid, Screenshot } from '../../styles'

export function SectionScreenshots({ images, columns }) {
  return (
    <ScreenshotGrid $columns={columns ?? images.length}>
      {images.map((image) => (
        <Screenshot key={image.alt} src={image.src} alt={image.alt} />
      ))}
    </ScreenshotGrid>
  )
}
