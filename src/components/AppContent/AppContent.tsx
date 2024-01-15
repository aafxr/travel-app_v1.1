import React from 'react'
import {BaseProps} from "antd/es/_util/PurePanel";
import {Content} from "antd/es/layout/layout";

export default function AppContent({children, ...props}: React.PropsWithChildren<BaseProps>) {
    const contentStyle: React.CSSProperties = {
        padding: 0,
        overflowX: "auto",
        backgroundColor: 'var(--color-background)',
        ...props.style
    }
    return (
        <Content {...props} style={contentStyle}>{children}</Content>
    )
}
