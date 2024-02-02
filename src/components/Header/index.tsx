import * as S from './styles';
import Link from "../Link";
import Text from "../Text";

interface HeaderProps {
  headerText1: string
  headerText2: string
  headerText3: string
}

export default function Header({ headerText1, headerText2, headerText3 }: HeaderProps) {
  return (
    <S.HeaderContainer>
      <S.HeaderOptions>
        <Link href="/">
          <Text fontSize="12px" fontWeight="700">
            Home
          </Text>
        </Link>
        <S.Space>
          {">"}
        </S.Space>
        <Text fontSize="12px" fontWeight="700">
          {headerText1}
        </Text>
      </S.HeaderOptions>
      <Text fontSize="32px" fontWeight="700">{headerText2}</Text>
      <Text fontSize="14px" fontWeight="400">{headerText3}</Text>
    </S.HeaderContainer>
  )
}