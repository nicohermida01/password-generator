import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Fragment } from 'react';

import './App.css'
import Imagen from './img/logo.png';
import { ButtonDecrease, ButtonIncrease, ButtonCheck, ButtonGenerate } from './components/Buttons';
import generatePassword from './functions/generatePassword';
import Favicon from './img/key.png';


const App = () => {
  const [config, setConfig] = useState({
    charactersNumber: 7,
    symbols: true,
    numbers: true,
    uppercaseLetters: true
  });

  const [generatedPassword, setGeneratedPassword] = useState('');

  useEffect(() => {
    setGeneratedPassword(generatePassword(config));
  }, [config]);

  const increaseCharactersNumber = () => {
    setConfig((previus) => {
      const newConfig = {...previus}
      newConfig.charactersNumber += 1;
      return newConfig;
    });
  }

  const decreaseCharactersNumber = () => {
    if (config.charactersNumber > 1) {
      setConfig((previus) => {
        const newConfig = {...previus}
        newConfig.charactersNumber -= 1;
        return newConfig;
      });
    }
  }

  const toggleSymbols = () => {
    setConfig((previus) => {
      const newConfig = {...previus}
      newConfig.symbols = !newConfig.symbols;
      return newConfig;
    });
  }

  const toggleNumbers = () => {
    setConfig((previus) => {
      const newConfig = {...previus}
      newConfig.numbers = !newConfig.numbers;
      return newConfig;
    });
  }

  const toggleUppercaseLetters = () => {
    setConfig((previus) => {
      const newConfig = {...previus}
      newConfig.uppercaseLetters = !newConfig.uppercaseLetters;
      return newConfig;
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    setGeneratedPassword(generatePassword(config));
  }

  return (
    <Fragment>

      <Helmet>
        <title>Password Generator</title>
        <link rel='icon' type='image/png' href={Favicon}/>
      </Helmet>

      {/* APP */}
      <div className='container'>
        <Logo>
          <img src={Imagen} alt="" />
        </Logo>
        
        <form onSubmit={onSubmit}>
            <Row>
              <label>Numero de caracteres:</label>
              <Controls>
                <ButtonDecrease click={decreaseCharactersNumber}/>
                <span>{config.charactersNumber}</span>
                <ButtonIncrease click={increaseCharactersNumber}/>
              </Controls>
            </Row>

            <Row>
              <label>¿Incluir Simbolos?</label>
              <ButtonCheck selected={config.symbols} click={toggleSymbols}/>
            </Row>

            <Row>
              <label>¿Incluir Numeros?</label>
              <ButtonCheck selected={config.numbers} click={toggleNumbers}/>
            </Row>

            <Row>
              <label>¿Incluir Mayusculas?</label>
              <ButtonCheck selected={config.uppercaseLetters} click={toggleUppercaseLetters}/>
            </Row>

            <Row>
              <ButtonGenerate />
              <Input type='text' readOnly={true} value={generatedPassword}/>
            </Row>
        </form>
      </div>
    </Fragment>
  );
}

export default App;

const Logo = styled.div`
  margin-bottom: 50px;

  img {
    width: 100%;
    vertical-align: top;
  }
`;

const Row = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  & > * {
    flex: 1;
  }

  span {
    line-height: 40px;
    background: #33257e;
  }
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255, .25);
  color: #fff;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  transition: all .3s ease;
  outline: none;

  &:hover {
    border: 1px solid rgba(255,255,255, .50);
  }

  &::selection {
    background: #212139;
  }

  &::-moz-selection {
    background: #212139;
  }
`;

