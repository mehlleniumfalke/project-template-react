import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CenteredLayout } from 'ui/Layouts'
import  { uuid, icons }  from 'utils'

const GlobalStyle = createGlobalStyle`
  body, html, #__next {
    height: 100%;
    width: 100%;
  }
`

const Index = () => (
    <Fragment>
        <GlobalStyle />
        <CenteredLayout>
            <h1>Hello, {uuid()}!</h1>
            <FontAwesomeIcon icon={["fas","hand-spock"]} size="5x" />
        </CenteredLayout>
    </Fragment>
)

export default Index