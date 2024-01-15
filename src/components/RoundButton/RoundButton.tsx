import React from 'react'
import {Button} from "antd";
import {ButtonProps} from "antd/es/button/button";

import './RoundButton.css'
import clsx from "clsx";

export enum RoundButtonColors {
    'green' = '#52CF37',
    'orange' = '#FF8E09',
    'grey' = '#F0F0F0',
    'light-orange' = '#FFF3E4'
}

interface RoundButtonProps extends React.PropsWithChildren<ButtonProps> {
    color?: RoundButtonColors

}

export default function RoundButton({color, ...props}: RoundButtonProps) {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: color,
        color: color === RoundButtonColors.grey ? '#1E1E1E' : '#fff',
        ...props.style
    }

    const className = clsx('round-button', props.className)

    return (
        <Button className={className} style={buttonStyle} shape={'round'} >RoundButton</Button>
    )
}
