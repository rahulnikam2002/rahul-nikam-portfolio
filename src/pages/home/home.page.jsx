import React, { useEffect } from 'react';
import { Header } from '../../components/header/header.component';
import { HeroArea } from '../../components/hero-area/hero-area';
import { ServiceArea } from '../../components/services/service-area/service-area.component'
import { Project } from '../../components/projects/projects.component'
export const HomePage = () => {

    useEffect(() => {
        document.title = `Rahul Nikam's Portfolio`
    }, [])

    return(
        <div>
            <Header />
            <HeroArea />
            <ServiceArea />
            <Project showData={true} shouldSlice={true}/>
        </div>
    )
}