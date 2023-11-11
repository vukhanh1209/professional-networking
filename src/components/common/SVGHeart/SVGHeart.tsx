type SVGType = {
    fill: string;
    width?: number;
    height?: number;
}

const SVGHeart = ({fill = "white", width = 32, height = 32} : SVGType) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_1093)">
                <g clipPath="url(#clip1_1_1093)">
                    <path d="M28.7667 6.14666C28.0857 5.46533 27.2771 4.92485 26.3872 4.5561C25.4972 4.18735 24.5434 3.99756 23.58 3.99756C22.6167 3.99756 21.6628 4.18735 20.7729 4.5561C19.883 4.92485 19.0744 5.46533 18.3934 6.14666L16.98 7.55999L15.5667 6.14666C14.1911 4.77107 12.3254 3.99827 10.38 3.99827C8.43466 3.99827 6.56896 4.77107 5.19337 6.14666C3.81778 7.52225 3.04498 9.38795 3.04498 11.3333C3.04498 13.2787 3.81778 15.1444 5.19337 16.52L6.6067 17.9333L16.98 28.3067L27.3534 17.9333L28.7667 16.52C29.448 15.839 29.9885 15.0304 30.3573 14.1405C30.726 13.2505 30.9158 12.2966 30.9158 11.3333C30.9158 10.37 30.726 9.41613 30.3573 8.52619C29.9885 7.63624 29.448 6.82767 28.7667 6.14666Z" stroke="#ED1B2F" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_1_1093">
                    <rect width={width} height={height} fill={fill} transform="translate(0.980042)"/>
                </clipPath>
                <clipPath id="clip1_1_1093">
                    <rect width={width} height={height} fill={fill} transform="translate(0.980042)"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default SVGHeart;