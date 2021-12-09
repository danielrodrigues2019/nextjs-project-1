import styled from 'styled-components'
import React from 'react'

const Heading = styled.h1`
  background: ${({ theme }) => theme.colors.secondaryColor};
`

export default function Home() {
  return <Heading>Olá</Heading>
}
