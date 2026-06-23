import appIcon from '../../../../assets/images/cid360app/icone.webp'
import {
  BrandWrap,
  BrandIcon,
  BrandText,
  BrandTitle,
  BrandCid,
  BrandCidFooter,
  BrandNumber,
  BrandTagline,
} from './styles'

export function BrandLogo({ tagline, size = 'md', variant = 'header' }) {
  const CidLabel = variant === 'footer' ? BrandCidFooter : BrandCid

  return (
    <BrandWrap>
      <BrandIcon src={appIcon} alt="CID 360°" $size={size} />
      <BrandText>
        <BrandTitle $size={size}>
          <CidLabel>CID</CidLabel>
          <BrandNumber>360°</BrandNumber>
        </BrandTitle>
        {tagline && (
          <BrandTagline $variant={variant}>{tagline}</BrandTagline>
        )}
      </BrandText>
    </BrandWrap>
  )
}
