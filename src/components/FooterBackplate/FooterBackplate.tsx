import React from 'react'

import './FooterBackplate.css'
import clsx from "clsx";

interface FooterBackplateProps extends React.PropsWithChildren{
    shadow?: boolean
}

export default function FooterBackplate({children, shadow = false}:FooterBackplateProps) {
    const className = clsx(
        {
            'footer-backplate': true,
            'shadow' : shadow
        }
    )
    return (
        <div className={className}>{children}</div>
    )
}
