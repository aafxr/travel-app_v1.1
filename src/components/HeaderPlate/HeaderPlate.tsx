import React from 'react'
import clsx from "clsx";

import './HeaderPlate.css'

type HeaderPlateProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

export default function HeaderPlate({children, ...props}: HeaderPlateProps) {
    const className = clsx('header-plate', props.className)

    return (
        <div {...props} className={className}>{children}</div>
    )
}
