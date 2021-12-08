import React, { useEffect } from 'react';
import { Header } from '../../components/header/header.component';
import './about.styles.scss'
import { HeroArea } from '../../components/hero-area/hero-area'
import { Skills } from '../../components/skills/skills.component.jsx'
import { Footer } from '../../components/footer/footer.component'


export const AboutPage = () => {
    useEffect(() => {
        document.title = 'About Rahul Nikam';
    }, []);

    return(
        <div className='about_page'>
            <Header />
            <HeroArea whichPage='aboutPage'/>
            <Skills />
            <Footer />
        </div>
    )
}