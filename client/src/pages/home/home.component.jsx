import React, { Profiler } from 'react'
import Directory from '../../components/directory/directory.component'
import { HomeContainer } from './home.styles';
//import './home.styles.scss'

const Home = ({ history }) => {
    return (
        <HomeContainer>
            <Profiler id='Directory' onRender={(id, phase, actualDuration) => {
                console.log({id, phase, actualDuration});
            }}>
                <Directory />
            </Profiler>
        </HomeContainer>
    )
}

export default Home