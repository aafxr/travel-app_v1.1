import React from 'react';

function RouteIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="swap_calls_24px">
                <path id="icon/communication/swap_calls_24px" d="M18 4L14 8H17V15C17 16.1 16.1 17 15 17C13.9 17 13 16.1 13 15V8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8V15H2L6 19L10 15H7V8C7 6.9 7.9 6 9 6C10.1 6 11 6.9 11 8V15C11 17.21 12.79 19 15 19C17.21 19 19 17.21 19 15V8H22L18 4Z" fill="currentColor" />
            </g>
        </svg>
    );
}

export default RouteIcon;