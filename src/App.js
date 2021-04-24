import React, { useState } from 'react'
import styled from 'styled-components'

function App() {
  const OPTIONS = {
    IS_PRIME: 'isPrime',
    IS_FIBONACCI: 'isFibonacci'
  }
  const [dropdownValue, setDropdownValue] = useState(OPTIONS.IS_PRIME)
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState(false)

  const handleChange = (e) => {
    const value = Math.round(e.target.value)
    const tranformedValue = value < 0 ? 1 : value
    setInputValue(tranformedValue)
    handleCalculation(tranformedValue, dropdownValue)
  }

  const handleChangeDropdown = () => {
    var optionValue = document.getElementById("selectTypeOfFunction").value || OPTIONS.IS_PRIME
    setDropdownValue(optionValue)
    handleCalculation(inputValue, optionValue)
  }

  const handleCalculation = (value, optionValue) => {
    setResult(optionValue === OPTIONS.IS_PRIME ? isPrime(value) : isFibonacci(value))
  }

  const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }
    return num > 1
  }

  const isFibonacci = (query, count = 1, last = 0) => {
    if (count < query) return isFibonacci(query, count+last, count)
    if (count === query) return true
    return false
 }

  return (
    <AppContainer>
      <InputContainer>
        <input type="number" onChange={handleChange} />
      </InputContainer>
      <DropdownContainer>
        <select id="selectTypeOfFunction" onChange={handleChangeDropdown}>
          <option value={OPTIONS.IS_PRIME}>isPrime</option>
          <option value={OPTIONS.IS_FIBONACCI}>isFibonacci</option>
        </select>
      </DropdownContainer>
      <ResultContainer>{`${result}`}</ResultContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 944px;
  min-width: 600px;
  width: 100%;

  @media (max-width: 599px) {
    overflow-x: scroll;
  }
`

const InputContainer = styled.div`
  width: 198px;
  height: 100%;
  display: inline-block;
  float: left;
  border-right: 2px solid black;
`

const DropdownContainer = styled.div`
  min-width: 100px;
  width: calc(100% - 500px);
  height: 100%;
  display: inline-block;
`

const ResultContainer = styled.div`
  width: 298px;
  height: 100%;
  display: inline-block;
  float: right;
  border-left: 2px solid black;
`