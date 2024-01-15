import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ConfigProvider, ThemeConfig} from "antd";

import Main from "./pages/Main";

import './App.css';

function App() {
    const style = getComputedStyle(document.body)
    const primaryColor = style.getPropertyValue('--color-primary')
    const colorBG = style.getPropertyValue('--color-background')
    const brSmall = parseInt(style.getPropertyValue('--border-radius-small'))
    const brRegular = parseInt(style.getPropertyValue('--border-radius-regular'))
    const colorBackground = style.getPropertyValue('--color-background')


    const theme: ThemeConfig = {

        components: {
            Button: {
                borderRadius: brSmall,
                paddingContentVertical: 16,
                paddingContentHorizontal: 0,
            },
            Input: {
                paddingContentVertical: 12,
                paddingContentHorizontal:16,
                borderRadius: brSmall
            }
        },
        token: {
            motion: false,
            colorPrimary: primaryColor,
            colorBgBase: colorBG,
            borderRadius: brRegular,
        }
    }

    return (
        <ConfigProvider theme={theme}>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
            </Routes>
        </ConfigProvider>
    );
}

export default App;
