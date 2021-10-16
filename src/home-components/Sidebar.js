import React from 'react'
import Accordion from '../global-components/Accordion'

export default function Sidebar({sidebar}) {
    return (
        <div 
            className={sidebar 
                ? 'sidebar open p-l-5' 
                : 'sidebar close p-l-5'}>
            <Accordion title='Getting started' index='0'>
                <ul className='list-type-none'>
                    <li>
                        <a className='link' href="/intro">
                            Introduction
                        </a>
                    </li>
                </ul>
            </Accordion>
            <Accordion title='Content' index='1'>
                <ul className='list-type-none'>
                    <li>
                        <a className='link' href="/content/colors">
                            Colors
                        </a>
                    </li>
                    <li>
                        <a className='link' href="/content/css-variables">
                            CSS Variables
                        </a>
                    </li>
                    <li>
                        <a className='link' href="/content/fonts">
                            Fonts
                        </a>
                    </li>
                    <li>
                        <a className='link' href="/content/typography">
                            Typography
                        </a>
                    </li>
                </ul>
            </Accordion>
            <Accordion title='Components' index='2'>
                <ul className='list-type-none'>
                    <li>
                        <a href="/components/alerts" className="link">
                            Alerts
                        </a>
                    </li>
                    <li>
                        <a href="/components/avatar" className="link">
                            Avatars
                        </a>
                    </li>
                    <li>
                        <a href="/components/Badges-Pills" className="link">
                            Badges and Pills
                        </a>
                    </li>
                    <li>
                        <a href="/components/breadcrumb" className="link">
                            Breadcrumb
                        </a>
                    </li>
                    <li>
                        <a href="/components/boxshadow" className="link">
                            Box Shadows
                        </a>
                    </li>
                    <li>
                        <a href="/components/container" className="link">
                            Container
                        </a>
                    </li>
                    <li>
                        <a href="/components/helper-classes" className="link">
                            Helper Classes
                        </a>
                    </li>
                    <li>
                        <a href="/components/list-group" className="link">
                            List Groups
                        </a>
                    </li>
                    <li>
                        <a href="/components/pagination" className="link">
                            Pagination
                        </a>
                    </li>
                    <li>
                        <a href="/components/ribbons" className="link">
                            Ribbons
                        </a>
                    </li>
                </ul>
            </Accordion>
            <Accordion title='Cards' index='3'>
                <ul className='list-type-none'>
                    <li>
                        <a href="/cards/basic" className="link">
                            Basic cards
                        </a>
                    </li>
                    <li>
                        <a href="/cards/coloured" className="link">
                            Coloured cards
                        </a>
                    </li>
                    <li>
                        <a href="/cards/image-cards" className="link">
                            Image cards
                        </a>
                    </li>
                    <li>
                        <a href="/cards/skeleton-cards" className="link">
                            Skeleton cards
                        </a>
                    </li>
                </ul>
            </Accordion>
            <Accordion title='Buttons' index='4'>
                <ul className='list-type-none'>
                    <li>
                        <a href="/buttons/basic" className="link">
                            Basic Buttons
                        </a>
                    </li>
                    <li>
                        <a href="/buttons/button-group" className="link">
                            Button Groups
                        </a>
                    </li>
                    <li>
                        <a href="/buttons/flat-styled" className="link">
                            Flat buttons
                        </a>
                    </li>
                    <li>
                        <a href="/buttons/outlined" className="link">
                            Outlined and Rounded
                        </a>
                    </li>
                </ul>
            </Accordion>
            <Accordion title='Forms' index='5'>
                <ul className='list-type-none'>
                    <li>
                        <a href="/forms/basic" className="link">
                            Basic Forms
                        </a>
                    </li>
                    <li>
                        <a href="/forms/checks-radios" className="link">
                            Checks & Radio
                        </a>
                    </li>
                    <li>
                        <a href="/forms/input-group" className="link">
                            Input Groups
                        </a>
                    </li>
                    <li>
                        <a href="/forms/others" className="link">
                            Other elements
                        </a>
                    </li>
                </ul>
            </Accordion>
            <Accordion title='Tables' index='6'>
                <ul className='list-type-none'>
                    <li>
                        <a href="/tables/basic" className="link">
                            Basic Tables
                        </a>
                    </li>
                    <li>
                        <a href="/tables/basic-two" className="link">
                            Basic Tables - 2
                        </a>
                    </li>
                    <li>
                        <a href="/tables/coloured" className="link">
                            Coloured Tables
                        </a>
                    </li>
                </ul>
            </Accordion>
            <Accordion title='Examples' index='8'>
                <ul className='list-type-none'>
                </ul>
            </Accordion>
        </div>
    )
}
