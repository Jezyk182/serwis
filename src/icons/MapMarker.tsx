export const MapMarker = ({ size = "28px", color = 'white', ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 384 512" 
    width={size} 
    height={size} 
    fill={color}
    {...props}
  >
    <path xmlns="http://www.w3.org/2000/svg" fill="white" d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67c-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80s-80 35.817-80 80s35.817 80 80 80z"/>
  </svg>
);
