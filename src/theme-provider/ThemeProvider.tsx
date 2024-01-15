import React from 'react'
import {ConfigProvider, ThemeConfig} from "antd";

export default function ThemeProvider({children}: React.PropsWithChildren) {
    const style = getComputedStyle(document.body)
    const primaryColor = style.getPropertyValue('--color-primary')
    const colorBG = style.getPropertyValue('--color-background')
    const brSmall = parseInt(style.getPropertyValue('--border-radius-small'))
    const brRegular = parseInt(style.getPropertyValue('--border-radius-regular'))


    const theme: ThemeConfig = {

        components: {
            Button: {
                borderRadius: 8,
                paddingContentVertical: 16,
                paddingContentHorizontal: 0,
            },
            Input: {
                paddingContentVertical: 12,
                paddingContentHorizontal: 16,
                borderRadius: brSmall
            }
        },
        token: {
            // motion: false,
            colorPrimary: primaryColor,
            colorBgBase: colorBG,
            borderRadius: brRegular,
            fontSize: 16,
        }
    }

    return (
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
    )
}
