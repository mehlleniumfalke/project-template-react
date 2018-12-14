import { Fragment } from 'react'
import {  } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CenteredLayout } from 'ui/Layouts'
import  { uuid, icons }  from 'utils'

const Index = () => (
    <Fragment>
        <CenteredLayout>
            <h1>Hello, world!</h1>
            <FontAwesomeIcon icon={["fas","hand-spock"]} size="5x" />
        </CenteredLayout>
    </Fragment>
)

export default Index