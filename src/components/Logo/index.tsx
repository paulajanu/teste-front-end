import * as S from './styles'
import Text from "../Text"
import Imager from "../Imager"

const LOGO_URL = '/images/white-pokeball.svg'

export default function Logo() {
    return (
        <S.LogoContainer>
            <S.ImageContainer>
                <Imager imageAddress={LOGO_URL} altText="Imagem que compõe a logo" width="37px" height="34px" />
            </S.ImageContainer>
            <Text fontSize="20px" fontWeight="600">Centro Pokémon</Text>
        </S.LogoContainer>
    )
}
