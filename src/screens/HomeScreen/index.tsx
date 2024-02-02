import * as S from './styles'
import Nav from "../../components/Nav";
import Imager from "../../components/Imager";
import Text from "../../components/Text";
import Footer from "../../components/Footer";

const MAIN_IMAGE_URL = '/images/pokemon-hero.jpg'

export default function Home() {
  return (
    <>
      <Nav />
      <S.StyledMain>
        <Imager imageAddress={MAIN_IMAGE_URL} altText="Imagem principal da home" />
        <S.TextOverImage>
          <Text fontSize="32px" fontWeight="700">
            Cuidamos bem do seu pokémon, <br /> para ele cuidar bem de você
          </Text>
        </S.TextOverImage>
      </S.StyledMain>
      <Footer />
    </>
  )
}
