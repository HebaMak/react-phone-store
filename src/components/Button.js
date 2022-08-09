import styled from 'styled-components'

export const ButtonContainer = styled.button `
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: .05rem solid ${props => props.btn === 'navBtn' ? 'var(--main-white)' : props.btn === 'yellow' ? 'var(--main-yellow)':'var(--main-blue)'};
  // border-color: ${props => props.btn === 'navBtn' ? 'var(--main-white)' : props.btn === 'yellow' ? 'var(--main-yellow)':'var(--main-blue)'};
  color: ${props => props.btn === 'navBtn' ? 'var(--main-white)' : props.btn === 'yellow' ? 'var(--main-yellow)' : 'var(--main-blue)'};
  border-radius: .5rem;
  padding: .2rem .5rem;
  margin: .2rem .5rem .2rem 0;
  cursor: pointer;
  transition: all .5s ease-in-out;
  &:hover {
    background-color: ${props => props.btn === 'navBtn' ? 'var(--main-white)' : props.btn === 'yellow' ? 'var(--main-yellow)': 'var(--main-blue)'};
    border-color: ${props => props.btn === 'navBtn' ? 'var(--main-white)' : props.btn === 'yellow' ? 'var(--main-yellow)' : 'var(--main-blue)'};
    color: ${props => props.btn === 'navBtn' ?  'var(--main-blue)': 'var(--main-white)'};
  }
  &:focus {
    outline: none;
  }
`
