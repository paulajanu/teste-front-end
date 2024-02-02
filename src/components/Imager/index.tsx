import * as S from './styles'

interface ImageProps {
    imageAddress: string
    altText?: string
    width?: string
    height?: string
}

export default function Imager({ imageAddress, altText, width, height }: ImageProps) {
    return (
        <S.StyledImage src={imageAddress} alt={altText} width={width} height={height} />
    )
}
