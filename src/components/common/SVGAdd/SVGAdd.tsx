type SVGType = {
    fill: string;
    width?: number;
    height?: number;
}

const SVGAdd = ({fill = "black", width = 32, height = 32} : SVGType) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill={fill} transform="rotate(0)">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <title></title> 
            <g id="Complete"> 
                <g data-name="add" id="add-2"> <g> 
                <line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line> 
                <line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line> 
            </g> 
            </g> 
            </g> 
            </g>
        </svg>
    )
}


export default SVGAdd;