import React, {PropsWithChildren} from 'react'
import {BasicProps, Header} from "antd/es/layout/layout";

export default function AppHeader({children, ...props}: PropsWithChildren<BasicProps>) {
    // const style = getComputedStyle(document.body)
    // const colorBackground = style.getPropertyValue('--color-background')

    const headerStyle: React.CSSProperties = {
        padding: 0,
        height: 'auto',
        lineHeight: 'inherit',
        backgroundColor: 'var(--color-background)',
        ...props.style
    }

    return (
        <Header {...props} style={headerStyle}>{children}</Header>
    )
}
