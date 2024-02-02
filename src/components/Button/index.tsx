import * as S from './styles'

interface ButtonProps {
  color: string
  backgroundColor: string
  border: string
  fontSize: string
  fontWeight?: string
  height: string
  width: string
  borderRadius?: string
  onClick?: () => void;
  children: React.ReactNode
}

export default function Button({ 
  color, 
  backgroundColor, 
  border, 
  fontSize, 
  fontWeight, 
  height, 
  width, 
  borderRadius, 
  onClick,
  children
}: ButtonProps) {
  return (
    <S.StylesButton 
      color={color}
      backgroundColor={backgroundColor}
      border={border}
      fontSize={fontSize}
      fontWeight={fontWeight}
      height={height}
      width={width}
      onClick={onClick}
      borderRadius={borderRadius}
    >
      {children}
    </S.StylesButton>
  )
}
