import * as S from './styles'
import Logo from "../Logo"
import Link from "../Link"
import Text from "../Text"

export default function Nav() {
    return (
        <S.StyledNav>
            <Link href="/">
                <Logo />
            </Link>
            <S.LinksContainer>
                <Link href="/about">Quem Somos</Link>
                <Link href="/schedule">
                    <S.ButtonContainer>
                        <Text fontWeight="700">
                            Agendar Consulta
                        </Text>
                    </S.ButtonContainer>
                </Link>
            </S.LinksContainer>
        </S.StyledNav>
    )
}
