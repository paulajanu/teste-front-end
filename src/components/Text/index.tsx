import * as S from './styles'

interface TextProps {
    color?: string
    fontSize?: string
    fontWeight?: string
    children: React.ReactNode
}

export default function Text({ color, fontSize, fontWeight, children}: TextProps) {
    return (
        <S.StylesText
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
        >
            {children}
        </S.StylesText>
    )
}
