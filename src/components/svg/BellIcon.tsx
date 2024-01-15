/**
 * @param {boolean} badge
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
import React from "react";

interface BellIconProps extends React.SVGProps<SVGSVGElement>{
    badge?: boolean
}

export default function BellIcon({badge = false, ...props}: BellIconProps){
    return(
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17H9V18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18V17Z" stroke="currentCollor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 17H19C19.5523 17 20 16.5523 20 16V15.4142C20 15.149 19.8946 14.8947 19.7071 14.7071L19.1963 14.1963C19.0706 14.0706 19 13.9001 19 13.7224V10C19 6.134 15.866 2.99999 12 3C8.134 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.9294 14.0706 4.80372 14.1963L4.29289 14.7071C4.10536 14.8947 4 15.149 4 15.4142V16C4 16.5523 4.44772 17 5 17Z" stroke="currentCollor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            {badge && <circle cx="17" cy="5" r="4" fill="#FF0909" stroke='none'/>}
        </svg>
    )
}