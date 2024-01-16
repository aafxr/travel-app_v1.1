import React from 'react'

interface TextProps extends React.PropsWithChildren<React.CSSProperties>{

}

export default function Text({children, ...props}: TextProps) {
    return (
        <div style={{...props}}>{children}</div>
    )
}
