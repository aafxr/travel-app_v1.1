import React, {forwardRef} from "react";
import clsx from "clsx";

import './Container.css'


interface ContainerProps extends React.PropsWithChildren<React.HTMLProps<HTMLButtonElement>> {
    className?: string
}

/**
 * компонент, задает базовые отступы по бокам
 */
export default forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
    const {children, className} = props

    return <div ref={ref} className={clsx('container', className)}>
        {children}
    </div>
})

