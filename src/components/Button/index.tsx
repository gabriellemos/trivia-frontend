import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  color: var(--text-primary);
  box-shadow: var(--shadow);
  background: var(--button-background);
  border: 1px solid var(--text-primary);
  padding: 0.6em 2.4em;

  &:hover {
    background: var(--button-hover);
  }

  &:active {
    background: var(--button-active);
  }

  &:disabled {
    cursor: default;
    background: var(--button-disabled);
  }

  &.selected {
    color: var(--right-answer);
  }
`

export const IconButton = styled(Button)`
  border: none;
  border-radius: 50%;
  padding: 6px 16px;
`
