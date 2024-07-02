import React from 'react';
import {S} from './Menu_Styles'

const menuItems: Array<string> = ['home', 'works', 'about-me', 'contacts']
export const Menu: React.FC = () => {
    return (
        <ul>
            {menuItems.map((link: string) =>
                <li>
                    <S.NavLink to={link} smooth={true} offset={-100}><span>#</span>{link}</S.NavLink>
                </li>
            )}
        </ul>
    );
};