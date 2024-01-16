import React from 'react'
import clsx from "clsx";
import {useNavigate} from "react-router-dom";

import ArrowBackIcon from "../svg/ArrowBackIcon";

import './HeaderTitle.css'

interface HeaderTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    to?: string
    arrow?: boolean,
    headerTitle: React.ReactNode
    menu?: React.ReactNode
    menuClick?: (e: React.MouseEvent<HTMLDivElement>) => unknown
}

export default function HeaderTitle({to, arrow, headerTitle, menu, menuClick, ...props}: HeaderTitleProps) {
    const navigate = useNavigate()
    const className = clsx('header-title', props.className)

    function handleArrowClick() {
        if (to) {
            navigate(to)
        } else {
            navigate(-1)
        }
    }

    function handleMenuClick(e: React.MouseEvent<HTMLDivElement>) {
        if (menuClick) menuClick(e)
    }

    return (
        <div {...props} className={className}>
            <div className={'header-title-side'} onClick={handleArrowClick}>
                {arrow && <div className='icon'><ArrowBackIcon/></div>}
            </div>
            <div className={'header-title-center'}>{headerTitle}</div>
            <div className={'header-title-icon'} onClick={handleMenuClick}>
                <div className='icon'>{menu}</div>
            </div>
        </div>
    )
}
