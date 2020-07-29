import React from 'react'
import Directory from '../../components/directory/directory.component'
import { HomeContainer } from './home.styles';
//import './home.styles.scss'

const Home = ({ history }) => {
    return (
        <HomeContainer>
            <Directory />
        </HomeContainer>
    )
}

export default Home