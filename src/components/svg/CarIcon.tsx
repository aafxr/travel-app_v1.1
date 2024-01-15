import React from "react";

export default function CarIcon(props:React.SVGProps<SVGSVGElement>){
    return (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.5 5C18.16 5 18.72 5.42 18.92 6.01L21 12V20C21 20.55 20.55 21 20 21H19C18.45 21 18 20.55 18 20V19H6V20C6 20.55 5.55 21 5 21H4C3.45 21 3 20.55 3 20V12L5.08 6.01C5.29 5.42 5.84 5 6.5 5H17.5ZM5 14.5C5 15.33 5.67 16 6.5 16C7.33 16 8 15.33 8 14.5C8 13.67 7.33 13 6.5 13C5.67 13 5 13.67 5 14.5ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM6.5 6.5L5 11H19L17.5 6.5H6.5Z" fill="currentColor"/>
        </svg>
    )
}