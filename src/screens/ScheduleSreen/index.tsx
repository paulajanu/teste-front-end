import * as S from './styles'
import { Input } from "antd";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Text from "../../components/Text";
import RegionsList from "../../components/RegionsList";
import CitiesList from "../../components/CitiesList";
import PokemonList from "../../components/PokemonList";
import Button from "../../components/Button";
import DateList from "../../components/DateList";
import Footer from "../../components/Footer";

export default function Schedule() {
  return (
    <>
      <Nav />
      <Header headerText1="Agendar Consulta" headerText2="Agendar Consulta" headerText3="Recupere seus pokémons em 5 segundos" />
      <S.TextForm>
        <Text color="#1D1D1D" fontSize="24px" fontWeight="600">
          Preencha o formulário abaixo para agendar sua consulta
        </Text>
      </S.TextForm>
      <S.FormContainer>
        <S.StyledSetOfInformation>
          <S.StyledFields>
            <Text color="#1D1D1D" fontSize="12px" fontWeight="700">
              Nome
            </Text>
            <Input style={{ width: 265 }} size="large" placeholder="Digite seu nome" />
          </S.StyledFields>
          <S.StyledFields>
            <Text color="#1D1D1D" fontSize="12px" fontWeight="700">
              Sobrenome
            </Text>
            <Input style={{ width: 265 }} size="large" placeholder="Digite seu sobrenome" />
          </S.StyledFields>
        </S.StyledSetOfInformation>
        <S.StyledSetOfInformation>
          <S.StyledFields>
            <Text color="#1D1D1D" fontSize="12px" fontWeight="700">
              Região
            </Text>
            <RegionsList />
          </S.StyledFields>
          <S.StyledFields>
            <Text color="#1D1D1D" fontSize="12px" fontWeight="700">
              Cidade
            </Text>
            <CitiesList />
          </S.StyledFields>
        </S.StyledSetOfInformation>
        <S.StyledFields>
          <Text color="#1D1D1D" fontSize="12px" fontWeight="700">
            Cadastre seu time
          </Text>
          <Text color="#747474" fontSize="12px" fontWeight="500">
            Atendemos até 06 pokémons por vez
          </Text>
        </S.StyledFields>
        <S.StyledPokemonSelect>
          <Text color="#1D1D1D" fontSize="12px" fontWeight="700">
            Pokémon 01
          </Text>
          <PokemonList />
        </S.StyledPokemonSelect>
        <S.StyledPokemonSelect>
          <Text color="#1D1D1D" fontSize="12px" fontWeight="700">
            Pokémon 02
          </Text>
          <PokemonList />
        </S.StyledPokemonSelect>
        <S.StyledButton>
          <Button 
            color="#1D1D1D"
            backgroundColor="#FFFFFF"
            border="1px solid #1D1D1D"
            fontSize="12px"
            fontWeight="700"
            height="42px"
            width="253px"
            borderRadius="30px"
          >
            Adicionar novo pokémon ao time...
          </Button>
        </S.StyledButton>
        <S.StyledSetOfInformation>
          <S.StyledFields>
            <S.StyledNamesService>
              <Text color="#1D1D1D" fontSize="12px" fontWeight="700">
                Data de atendimento
              </Text>
              <Text color="#1D1D1D" fontSize="12px" fontWeight="700">
                Horário de atendimento
              </Text>
            </S.StyledNamesService>
            <DateList />
          </S.StyledFields>
          <S.StyledFields>
          </S.StyledFields>
        </S.StyledSetOfInformation>
        <S.StyledLine />
        <S.StyledButtonScheduling>
          <Button 
            color="#FFFFFF"
            backgroundColor="#E40F0F"
            border="1px solid #E40F0F"
            fontSize="14px"
            fontWeight="700"
            height="42px"
            width="183px"
            borderRadius="30px"
          >
            Concluir Agendamento
          </Button>
        </S.StyledButtonScheduling>
      </S.FormContainer>
      <Footer />
    </>
  )
}
