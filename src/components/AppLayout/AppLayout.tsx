import React from 'react'
import {BaseProps} from "antd/es/_util/PurePanel";
import {Layout} from "antd";

export default function AppLayout({children, ...props}: React.PropsWithChildren<BaseProps>) {
    const layoutStyle: React.CSSProperties = {
        height: '100vh',
        ...props.style
    }
    return (
        <Layout {...props} style={layoutStyle}>{children}</Layout>
    )
}
