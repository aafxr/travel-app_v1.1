import React from 'react'
import {Button} from "antd";
import {ButtonProps} from "antd/es/button/button";

import './FooterButton.css'
import clsx from "clsx";

interface FooterButtonProps extends React.PropsWithChildren<ButtonProps>{
    children: React.ReactNode
}

export default function FooterButton({children, ...props}: FooterButtonProps) {
    const className = clsx('footer-button', props.className)
    return (
        <Button type={'primary'} block {...props} className={className} >{children}</Button>
    )
}
