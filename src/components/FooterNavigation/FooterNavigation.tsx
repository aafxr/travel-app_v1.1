import clsx from "clsx";
import React from 'react'
import {useNavigate} from "react-router-dom";

import './FooterNavigation.css'
import HomeIcon from "../svg/HomeIcon";
import EventsIcon from "../svg/EventsIcon";
import RouteIcon from "../svg/RouteIcon";
import FavoriteIcon from "../svg/FavoriteIcon";
import UserIcon from "../svg/UserIcon";

type FooterNavigationGroupPorps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

export function FooterNavigationGroup({children, ...props}:FooterNavigationGroupPorps) {
    const className = clsx('footer-navigation', props.className)

    return (
        <div className={className}>{children}</div>
    )
}

interface FooterNavigationItemPorps extends React.HTMLAttributes<HTMLDivElement>{
    to: string
    title: string
    icon:JSX.Element
}

export function FooterNavigationItem({to,icon, title, ...props}:FooterNavigationItemPorps){
    const navigate = useNavigate()
    const current = to === window.location.pathname
    const className = clsx('footer-navigation-item',{current}, props.className)

    function handleClick(){
        if(!current){
            navigate(to)
        }
    }

    return (
        <div className={className} onClick={handleClick}>
            <div>{icon}</div>
            <span>{title}</span>
        </div>
    )
}


export default function FooterNavigation(){
    return(
        <FooterNavigationGroup>
            <FooterNavigationItem to={'/'} title={'Главная'} icon={<HomeIcon/>}/>
            <FooterNavigationItem to={'/events/'} title={'События'} icon={<EventsIcon/>}/>
            <FooterNavigationItem to={'/routes/'} title={'Маршруты'} icon={<RouteIcon/>}/>
            <FooterNavigationItem to={'/favorite/'} title={'Избранное'} icon={<FavoriteIcon/>}/>
            <FooterNavigationItem to={'/profile/'} title={'Профиль'} icon={<UserIcon/>}/>
        </FooterNavigationGroup>
    )
}

