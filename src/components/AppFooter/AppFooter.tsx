import React from 'react'
import {Footer} from "antd/es/layout/layout";
import {BaseProps} from "antd/es/_util/PurePanel";

export default function AppFooter({children, ...props}: React.PropsWithChildren<BaseProps>) {
    const footerStyle: React.CSSProperties = {
        padding: 0,
        backgroundColor: 'var(--color-background)',
        ...props.style
    }
    return (
        <Footer {...props} style={footerStyle}>{children}</Footer>
    )
}
