// export const IconSvg = (props: Props) => {
//   switch (props.name) {
//     case 'logo': {
//       return (
//         <svg
//           fill={'none'}
//           height={'100%'}
//           viewBox={'0 0 512 118'}
//           width={'100%'}
//           xmlns={'http://www.w3.org/2000/svg'}
//         >
//           <path
//             d={
//               'M232.273 80.8695C228.071 80.8695 224.261 79.9638 220.844 78.1525C217.466 76.3019 214.795 73.7621 212.831 70.5333C210.906 67.2651 209.944 63.5835 209.944 59.4884C209.944 55.3933 210.906 51.7313 212.831 48.5025C214.795 45.2343 217.466 42.6946 220.844 40.8833C224.261 39.0326 228.09 38.1073 232.332 38.1073C235.907 38.1073 239.127 38.7373 241.995 39.9973C244.901 41.2574 247.336 43.0687 249.3 45.4312L243.173 51.1013C240.384 47.8725 236.928 46.2581 232.804 46.2581C230.251 46.2581 227.972 46.829 225.969 47.9709C223.966 49.0735 222.395 50.6288 221.256 52.637C220.156 54.6451 219.606 56.9289 219.606 59.4884C219.606 62.0478 220.156 64.3316 221.256 66.3398C222.395 68.3479 223.966 69.923 225.969 71.0649C227.972 72.1674 230.251 72.7187 232.804 72.7187C236.928 72.7187 240.384 71.0846 243.173 67.8164L249.3 73.4865C247.336 75.8884 244.901 77.7194 241.995 78.9794C239.088 80.2394 235.848 80.8695 232.273 80.8695Z'
//             }
//             fill={'white'}
//           />
//           <path
//             d={
//               'M273.723 80.8695C267.832 80.8695 263.236 79.2354 259.937 75.9672C256.677 72.699 255.047 68.0329 255.047 61.9691V38.8161H264.591V61.6147C264.591 69.0173 267.655 72.7187 273.782 72.7187C276.767 72.7187 279.045 71.8327 280.616 70.0608C282.187 68.2495 282.973 65.4341 282.973 61.6147V38.8161H292.4V61.9691C292.4 68.0329 290.75 72.699 287.451 75.9672C284.191 79.2354 279.615 80.8695 273.723 80.8695Z'
//             }
//             fill={'white'}
//           />
//           <path
//             d={
//               'M332.114 58.6615C334.471 59.4096 336.317 60.6697 337.652 62.4416C338.988 64.1741 339.655 66.3201 339.655 68.8795C339.655 72.5021 338.241 75.2978 335.413 77.2666C332.625 79.196 328.54 80.1607 323.159 80.1607H301.831V38.8161H321.98C327.008 38.8161 330.857 39.7808 333.528 41.7102C336.238 43.6396 337.593 46.2581 337.593 49.5657C337.593 51.5738 337.102 53.3654 336.12 54.9405C335.178 56.5155 333.842 57.7558 332.114 58.6615ZM311.317 46.0218V55.7674H320.802C323.159 55.7674 324.946 55.3539 326.164 54.527C327.381 53.7001 327.99 52.4795 327.99 50.8651C327.99 49.2507 327.381 48.0497 326.164 47.2622C324.946 46.4353 323.159 46.0218 320.802 46.0218H311.317ZM322.452 72.9549C324.966 72.9549 326.851 72.5415 328.108 71.7146C329.404 70.8877 330.052 69.608 330.052 67.8754C330.052 64.4497 327.519 62.7369 322.452 62.7369H311.317V72.9549H322.452Z'
//             }
//             fill={'white'}
//           />
//           <path
//             d={
//               'M374.042 71.3011H354.894L351.241 80.1607H341.461L359.843 38.8161H369.269L387.71 80.1607H377.694L374.042 71.3011ZM371.037 64.0363L364.497 48.2072L357.958 64.0363H371.037Z'
//             }
//             fill={'white'}
//           />
//           <path
//             d={'M398.46 46.6125H385.263V38.8161H421.202V46.6125H408.005V80.1607H398.46V46.6125Z'}
//             fill={'white'}
//           />
//           <path
//             d={
//               'M445.735 80.8695C441.453 80.8695 437.585 79.9441 434.128 78.0935C430.711 76.2428 428.021 73.7031 426.057 70.4742C424.132 67.206 423.17 63.5441 423.17 59.4884C423.17 55.4327 424.132 51.7904 426.057 48.5616C428.021 45.2934 430.711 42.734 434.128 40.8833C437.585 39.0326 441.453 38.1073 445.735 38.1073C450.016 38.1073 453.865 39.0326 457.282 40.8833C460.699 42.734 463.39 45.2934 465.354 48.5616C467.318 51.7904 468.3 55.4327 468.3 59.4884C468.3 63.5441 467.318 67.206 465.354 70.4742C463.39 73.7031 460.699 76.2428 457.282 78.0935C453.865 79.9441 450.016 80.8695 445.735 80.8695ZM445.735 72.7187C448.17 72.7187 450.369 72.1674 452.333 71.0649C454.297 69.923 455.829 68.3479 456.929 66.3398C458.068 64.3316 458.637 62.0478 458.637 59.4884C458.637 56.9289 458.068 54.6451 456.929 52.637C455.829 50.6288 454.297 49.0735 452.333 47.9709C450.369 46.829 448.17 46.2581 445.735 46.2581C443.299 46.2581 441.1 46.829 439.136 47.9709C437.172 49.0735 435.621 50.6288 434.482 52.637C433.382 54.6451 432.832 56.9289 432.832 59.4884C432.832 62.0478 433.382 64.3316 434.482 66.3398C435.621 68.3479 437.172 69.923 439.136 71.0649C441.1 72.1674 443.299 72.7187 445.735 72.7187Z'
//             }
//             fill={'white'}
//           />
//           <path
//             d={
//               'M501.749 80.1607L493.796 68.6433H493.324H485.017V80.1607H475.473V38.8161H493.324C496.977 38.8161 500.139 39.4264 502.81 40.647C505.52 41.8677 507.601 43.6002 509.055 45.8446C510.508 48.0891 511.235 50.7469 511.235 53.8183C511.235 56.8896 510.488 59.5474 508.996 61.7919C507.543 63.9969 505.461 65.6901 502.751 66.8713L512.001 80.1607H501.749ZM501.572 53.8183C501.572 51.4951 500.826 49.7232 499.334 48.5025C497.841 47.2425 495.661 46.6125 492.794 46.6125H485.017V61.024H492.794C495.661 61.024 497.841 60.394 499.334 59.134C500.826 57.874 501.572 56.1021 501.572 53.8183Z'
//             }
//             fill={'white'}
//           />
//           <path d={'M0 38.8654H9.52948V80.0726H0V38.8654Z'} fill={'white'} />
//           <path
//             d={'M27.8311 46.6359H14.6545V38.8654H50.5371V46.6359H37.3606V80.0726H27.8311V46.6359Z'}
//             fill={'white'}
//           />
//           <path d={'M110.4 38.8654H119.942V80.0726H110.4V38.8654Z'} fill={'white'} />
//           <path
//             d={
//               'M167.546 38.8654V80.0726H159.711L139.153 55.054V80.0726H129.728V38.8654H137.622L158.121 63.8841V38.8654H167.546Z'
//             }
//             fill={'white'}
//           />
//           <path
//             clipRule={'evenodd'}
//             d={
//               'M114.476 21.3822C118.018 21.3822 120.89 24.2543 120.89 27.7965C120.89 31.3387 118.018 34.2108 114.476 34.2108C110.934 34.2108 108.062 31.3387 108.062 27.7965C108.062 24.2543 110.934 21.3822 114.476 21.3822Z'
//             }
//             fill={'#FF0808'}
//             fillRule={'evenodd'}
//           />
//           <path
//             clipRule={'evenodd'}
//             d={
//               'M63.7774 52.473C67.4278 52.473 70.3861 55.3442 70.3861 58.8873C70.3861 62.4304 67.4278 65.3016 63.7774 65.3016C60.1271 65.3016 57.1687 62.4304 57.1687 58.8873C57.1687 55.3442 60.1271 52.473 63.7774 52.473Z'
//             }
//             fill={'white'}
//             fillRule={'evenodd'}
//           />
//           <path
//             clipRule={'evenodd'}
//             d={
//               'M138.986 112.882C168.802 112.882 192.973 88.7115 192.973 58.8952C192.973 29.0788 168.802 4.90793 138.986 4.90793C109.169 4.90793 84.9983 29.0788 84.9983 58.8952C84.9983 88.7115 109.169 112.882 138.986 112.882ZM138.986 117.79C171.512 117.79 197.881 91.4221 197.881 58.8952C197.881 26.3683 171.512 0 138.986 0C106.459 0 80.0903 26.3683 80.0903 58.8952C80.0903 91.4221 106.459 117.79 138.986 117.79Z'
//             }
//             fill={'white'}
//             fillRule={'evenodd'}
//           />
//         </svg>
//       )
//     }
//     case 'logUot': {
//       return (
//         <svg
//           fill={'none'}
//           height={'100%'}
//           viewBox={'0 0 16 16'}
//           width={'100%'}
//           xmlns={'http://www.w3.org/2000/svg'}
//         >
//           <path
//             d={
//               'M4.66669 3.99996C4.8435 3.99996 5.01307 3.92972 5.13809 3.8047C5.26312 3.67967 5.33335 3.5101 5.33335 3.33329C5.33335 3.15648 5.26312 2.98691 5.13809 2.86189C5.01307 2.73686 4.8435 2.66663 4.66669 2.66663H3.33335C3.15654 2.66663 2.98697 2.73686 2.86195 2.86189C2.73693 2.98691 2.66669 3.15648 2.66669 3.33329V12.6666C2.66669 12.8434 2.73693 13.013 2.86195 13.138C2.98697 13.2631 3.15654 13.3333 3.33335 13.3333H4.66669C4.8435 13.3333 5.01307 13.2631 5.13809 13.138C5.26312 13.013 5.33335 12.8434 5.33335 12.6666C5.33335 12.4898 5.26312 12.3202 5.13809 12.1952C5.01307 12.0702 4.8435 12 4.66669 12H4.00002V3.99996H4.66669Z'
//             }
//             fill={'white'}
//           />
//           <path
//             d={
//               'M13.88 7.61338L12 4.94672C11.898 4.80299 11.7433 4.70548 11.5697 4.67549C11.396 4.64551 11.2176 4.6855 11.0733 4.78672C11.0012 4.83724 10.9399 4.90154 10.8927 4.97592C10.8456 5.05029 10.8137 5.13326 10.7988 5.22004C10.784 5.30681 10.7864 5.39568 10.8061 5.4815C10.8257 5.56732 10.8622 5.64839 10.9133 5.72005L12.06 7.33338H6.66667C6.48986 7.33338 6.32029 7.40362 6.19526 7.52864C6.07024 7.65367 6 7.82324 6 8.00005C6 8.17686 6.07024 8.34643 6.19526 8.47145C6.32029 8.59648 6.48986 8.66672 6.66667 8.66672H12L10.8 10.2667C10.7475 10.3368 10.7093 10.4165 10.6875 10.5013C10.6658 10.5861 10.661 10.6743 10.6734 10.761C10.6857 10.8477 10.7151 10.931 10.7597 11.0064C10.8043 11.0817 10.8633 11.1475 10.9333 11.2C11.0487 11.2866 11.1891 11.3334 11.3333 11.3334C11.4368 11.3334 11.5389 11.3093 11.6315 11.263C11.724 11.2167 11.8046 11.1495 11.8667 11.0667L13.8667 8.40005C13.952 8.28729 13.9994 8.15031 14.0018 8.00889C14.0041 7.86748 13.9615 7.72897 13.88 7.61338Z'
//             }
//             fill={'white'}
//           />
//         </svg>
//       )
//     }
//     default:
//       return <svg></svg>
//   }
// }

const icons = {
  logOut: (
    <svg
      fill={'none'}
      height={'100%'}
      viewBox={'0 0 16 16'}
      width={'100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M4.66669 3.99996C4.8435 3.99996 5.01307 3.92972 5.13809 3.8047C5.26312 3.67967 5.33335 3.5101 5.33335 3.33329C5.33335 3.15648 5.26312 2.98691 5.13809 2.86189C5.01307 2.73686 4.8435 2.66663 4.66669 2.66663H3.33335C3.15654 2.66663 2.98697 2.73686 2.86195 2.86189C2.73693 2.98691 2.66669 3.15648 2.66669 3.33329V12.6666C2.66669 12.8434 2.73693 13.013 2.86195 13.138C2.98697 13.2631 3.15654 13.3333 3.33335 13.3333H4.66669C4.8435 13.3333 5.01307 13.2631 5.13809 13.138C5.26312 13.013 5.33335 12.8434 5.33335 12.6666C5.33335 12.4898 5.26312 12.3202 5.13809 12.1952C5.01307 12.0702 4.8435 12 4.66669 12H4.00002V3.99996H4.66669Z'
        }
        fill={'white'}
      />
      <path
        d={
          'M13.88 7.61338L12 4.94672C11.898 4.80299 11.7433 4.70548 11.5697 4.67549C11.396 4.64551 11.2176 4.6855 11.0733 4.78672C11.0012 4.83724 10.9399 4.90154 10.8927 4.97592C10.8456 5.05029 10.8137 5.13326 10.7988 5.22004C10.784 5.30681 10.7864 5.39568 10.8061 5.4815C10.8257 5.56732 10.8622 5.64839 10.9133 5.72005L12.06 7.33338H6.66667C6.48986 7.33338 6.32029 7.40362 6.19526 7.52864C6.07024 7.65367 6 7.82324 6 8.00005C6 8.17686 6.07024 8.34643 6.19526 8.47145C6.32029 8.59648 6.48986 8.66672 6.66667 8.66672H12L10.8 10.2667C10.7475 10.3368 10.7093 10.4165 10.6875 10.5013C10.6658 10.5861 10.661 10.6743 10.6734 10.761C10.6857 10.8477 10.7151 10.931 10.7597 11.0064C10.8043 11.0817 10.8633 11.1475 10.9333 11.2C11.0487 11.2866 11.1891 11.3334 11.3333 11.3334C11.4368 11.3334 11.5389 11.3093 11.6315 11.263C11.724 11.2167 11.8046 11.1495 11.8667 11.0667L13.8667 8.40005C13.952 8.28729 13.9994 8.15031 14.0018 8.00889C14.0041 7.86748 13.9615 7.72897 13.88 7.61338Z'
        }
        fill={'white'}
      />
    </svg>
  ),
  logo: (
    <svg
      fill={'none'}
      height={'100%'}
      viewBox={'0 0 512 118'}
      width={'100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M232.273 80.8695C228.071 80.8695 224.261 79.9638 220.844 78.1525C217.466 76.3019 214.795 73.7621 212.831 70.5333C210.906 67.2651 209.944 63.5835 209.944 59.4884C209.944 55.3933 210.906 51.7313 212.831 48.5025C214.795 45.2343 217.466 42.6946 220.844 40.8833C224.261 39.0326 228.09 38.1073 232.332 38.1073C235.907 38.1073 239.127 38.7373 241.995 39.9973C244.901 41.2574 247.336 43.0687 249.3 45.4312L243.173 51.1013C240.384 47.8725 236.928 46.2581 232.804 46.2581C230.251 46.2581 227.972 46.829 225.969 47.9709C223.966 49.0735 222.395 50.6288 221.256 52.637C220.156 54.6451 219.606 56.9289 219.606 59.4884C219.606 62.0478 220.156 64.3316 221.256 66.3398C222.395 68.3479 223.966 69.923 225.969 71.0649C227.972 72.1674 230.251 72.7187 232.804 72.7187C236.928 72.7187 240.384 71.0846 243.173 67.8164L249.3 73.4865C247.336 75.8884 244.901 77.7194 241.995 78.9794C239.088 80.2394 235.848 80.8695 232.273 80.8695Z'
        }
        fill={'white'}
      />
      <path
        d={
          'M273.723 80.8695C267.832 80.8695 263.236 79.2354 259.937 75.9672C256.677 72.699 255.047 68.0329 255.047 61.9691V38.8161H264.591V61.6147C264.591 69.0173 267.655 72.7187 273.782 72.7187C276.767 72.7187 279.045 71.8327 280.616 70.0608C282.187 68.2495 282.973 65.4341 282.973 61.6147V38.8161H292.4V61.9691C292.4 68.0329 290.75 72.699 287.451 75.9672C284.191 79.2354 279.615 80.8695 273.723 80.8695Z'
        }
        fill={'white'}
      />
      <path
        d={
          'M332.114 58.6615C334.471 59.4096 336.317 60.6697 337.652 62.4416C338.988 64.1741 339.655 66.3201 339.655 68.8795C339.655 72.5021 338.241 75.2978 335.413 77.2666C332.625 79.196 328.54 80.1607 323.159 80.1607H301.831V38.8161H321.98C327.008 38.8161 330.857 39.7808 333.528 41.7102C336.238 43.6396 337.593 46.2581 337.593 49.5657C337.593 51.5738 337.102 53.3654 336.12 54.9405C335.178 56.5155 333.842 57.7558 332.114 58.6615ZM311.317 46.0218V55.7674H320.802C323.159 55.7674 324.946 55.3539 326.164 54.527C327.381 53.7001 327.99 52.4795 327.99 50.8651C327.99 49.2507 327.381 48.0497 326.164 47.2622C324.946 46.4353 323.159 46.0218 320.802 46.0218H311.317ZM322.452 72.9549C324.966 72.9549 326.851 72.5415 328.108 71.7146C329.404 70.8877 330.052 69.608 330.052 67.8754C330.052 64.4497 327.519 62.7369 322.452 62.7369H311.317V72.9549H322.452Z'
        }
        fill={'white'}
      />
      <path
        d={
          'M374.042 71.3011H354.894L351.241 80.1607H341.461L359.843 38.8161H369.269L387.71 80.1607H377.694L374.042 71.3011ZM371.037 64.0363L364.497 48.2072L357.958 64.0363H371.037Z'
        }
        fill={'white'}
      />
      <path
        d={'M398.46 46.6125H385.263V38.8161H421.202V46.6125H408.005V80.1607H398.46V46.6125Z'}
        fill={'white'}
      />
      <path
        d={
          'M445.735 80.8695C441.453 80.8695 437.585 79.9441 434.128 78.0935C430.711 76.2428 428.021 73.7031 426.057 70.4742C424.132 67.206 423.17 63.5441 423.17 59.4884C423.17 55.4327 424.132 51.7904 426.057 48.5616C428.021 45.2934 430.711 42.734 434.128 40.8833C437.585 39.0326 441.453 38.1073 445.735 38.1073C450.016 38.1073 453.865 39.0326 457.282 40.8833C460.699 42.734 463.39 45.2934 465.354 48.5616C467.318 51.7904 468.3 55.4327 468.3 59.4884C468.3 63.5441 467.318 67.206 465.354 70.4742C463.39 73.7031 460.699 76.2428 457.282 78.0935C453.865 79.9441 450.016 80.8695 445.735 80.8695ZM445.735 72.7187C448.17 72.7187 450.369 72.1674 452.333 71.0649C454.297 69.923 455.829 68.3479 456.929 66.3398C458.068 64.3316 458.637 62.0478 458.637 59.4884C458.637 56.9289 458.068 54.6451 456.929 52.637C455.829 50.6288 454.297 49.0735 452.333 47.9709C450.369 46.829 448.17 46.2581 445.735 46.2581C443.299 46.2581 441.1 46.829 439.136 47.9709C437.172 49.0735 435.621 50.6288 434.482 52.637C433.382 54.6451 432.832 56.9289 432.832 59.4884C432.832 62.0478 433.382 64.3316 434.482 66.3398C435.621 68.3479 437.172 69.923 439.136 71.0649C441.1 72.1674 443.299 72.7187 445.735 72.7187Z'
        }
        fill={'white'}
      />
      <path
        d={
          'M501.749 80.1607L493.796 68.6433H493.324H485.017V80.1607H475.473V38.8161H493.324C496.977 38.8161 500.139 39.4264 502.81 40.647C505.52 41.8677 507.601 43.6002 509.055 45.8446C510.508 48.0891 511.235 50.7469 511.235 53.8183C511.235 56.8896 510.488 59.5474 508.996 61.7919C507.543 63.9969 505.461 65.6901 502.751 66.8713L512.001 80.1607H501.749ZM501.572 53.8183C501.572 51.4951 500.826 49.7232 499.334 48.5025C497.841 47.2425 495.661 46.6125 492.794 46.6125H485.017V61.024H492.794C495.661 61.024 497.841 60.394 499.334 59.134C500.826 57.874 501.572 56.1021 501.572 53.8183Z'
        }
        fill={'white'}
      />
      <path d={'M0 38.8654H9.52948V80.0726H0V38.8654Z'} fill={'white'} />
      <path
        d={'M27.8311 46.6359H14.6545V38.8654H50.5371V46.6359H37.3606V80.0726H27.8311V46.6359Z'}
        fill={'white'}
      />
      <path d={'M110.4 38.8654H119.942V80.0726H110.4V38.8654Z'} fill={'white'} />
      <path
        d={
          'M167.546 38.8654V80.0726H159.711L139.153 55.054V80.0726H129.728V38.8654H137.622L158.121 63.8841V38.8654H167.546Z'
        }
        fill={'white'}
      />
      <path
        clipRule={'evenodd'}
        d={
          'M114.476 21.3822C118.018 21.3822 120.89 24.2543 120.89 27.7965C120.89 31.3387 118.018 34.2108 114.476 34.2108C110.934 34.2108 108.062 31.3387 108.062 27.7965C108.062 24.2543 110.934 21.3822 114.476 21.3822Z'
        }
        fill={'#FF0808'}
        fillRule={'evenodd'}
      />
      <path
        clipRule={'evenodd'}
        d={
          'M63.7774 52.473C67.4278 52.473 70.3861 55.3442 70.3861 58.8873C70.3861 62.4304 67.4278 65.3016 63.7774 65.3016C60.1271 65.3016 57.1687 62.4304 57.1687 58.8873C57.1687 55.3442 60.1271 52.473 63.7774 52.473Z'
        }
        fill={'white'}
        fillRule={'evenodd'}
      />
      <path
        clipRule={'evenodd'}
        d={
          'M138.986 112.882C168.802 112.882 192.973 88.7115 192.973 58.8952C192.973 29.0788 168.802 4.90793 138.986 4.90793C109.169 4.90793 84.9983 29.0788 84.9983 58.8952C84.9983 88.7115 109.169 112.882 138.986 112.882ZM138.986 117.79C171.512 117.79 197.881 91.4221 197.881 58.8952C197.881 26.3683 171.512 0 138.986 0C106.459 0 80.0903 26.3683 80.0903 58.8952C80.0903 91.4221 106.459 117.79 138.986 117.79Z'
        }
        fill={'white'}
        fillRule={'evenodd'}
      />
    </svg>
  ),
  showPass:(<svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_5661_2350)">
        <path d="M18.225 9.58334C17.6917 8.65834 14.7583 4.01667 9.77501 4.16667C5.16667 4.28334 2.50001 8.33334 1.77501 9.58334C1.70187 9.71002 1.66336 9.85372 1.66336 10C1.66336 10.1463 1.70187 10.29 1.77501 10.4167C2.30001 11.325 5.10834 15.8333 10.0167 15.8333H10.225C14.8333 15.7167 17.5083 11.6667 18.225 10.4167C18.2981 10.29 18.3367 10.1463 18.3367 10C18.3367 9.85372 18.2981 9.71002 18.225 9.58334ZM10.1833 14.1667C6.59167 14.25 4.25001 11.175 3.51667 10C4.35001 8.65834 6.52501 5.91667 9.85834 5.83334C13.4333 5.74167 15.7833 8.82501 16.525 10C15.6667 11.3417 13.5167 14.0833 10.1833 14.1667Z" fill="white"/>
        <path d="M10 7.08334C9.42315 7.08334 8.85924 7.2544 8.3796 7.57489C7.89995 7.89538 7.52612 8.3509 7.30536 8.88385C7.08461 9.4168 7.02685 10.0032 7.13939 10.569C7.25193 11.1348 7.52971 11.6545 7.93762 12.0624C8.34552 12.4703 8.86522 12.7481 9.431 12.8606C9.99678 12.9732 10.5832 12.9154 11.1162 12.6947C11.6491 12.4739 12.1046 12.1001 12.4251 11.6204C12.7456 11.1408 12.9167 10.5769 12.9167 10C12.9167 9.22646 12.6094 8.4846 12.0624 7.93762C11.5154 7.39063 10.7736 7.08334 10 7.08334ZM10 11.25C9.75279 11.25 9.51111 11.1767 9.30555 11.0393C9.09999 10.902 8.93977 10.7068 8.84516 10.4784C8.75055 10.25 8.7258 9.99862 8.77403 9.75615C8.82226 9.51367 8.94131 9.29094 9.11613 9.11613C9.29094 8.94131 9.51367 8.82226 9.75615 8.77403C9.99862 8.7258 10.25 8.75055 10.4784 8.84516C10.7068 8.93977 10.902 9.09999 11.0393 9.30555C11.1767 9.51111 11.25 9.75278 11.25 10C11.25 10.3315 11.1183 10.6495 10.8839 10.8839C10.6495 11.1183 10.3315 11.25 10 11.25Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_5661_2350">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  search:(<svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_5661_2450)">
        <path d="M17.2583 16.075L14.425 13.25C15.3392 12.0854 15.8352 10.6472 15.8333 9.16667C15.8333 7.84813 15.4423 6.5592 14.7098 5.46287C13.9773 4.36654 12.9361 3.51206 11.7179 3.00747C10.4997 2.50289 9.15927 2.37087 7.86607 2.6281C6.57286 2.88534 5.38497 3.52027 4.45262 4.45262C3.52027 5.38497 2.88534 6.57286 2.6281 7.86607C2.37087 9.15927 2.50289 10.4997 3.00747 11.7179C3.51206 12.9361 4.36654 13.9773 5.46287 14.7098C6.5592 15.4423 7.84813 15.8333 9.16667 15.8333C10.6472 15.8352 12.0854 15.3392 13.25 14.425L16.075 17.2583C16.1525 17.3364 16.2446 17.3984 16.3462 17.4407C16.4477 17.4831 16.5567 17.5048 16.6667 17.5048C16.7767 17.5048 16.8856 17.4831 16.9871 17.4407C17.0887 17.3984 17.1809 17.3364 17.2583 17.2583C17.3364 17.1809 17.3984 17.0887 17.4407 16.9871C17.4831 16.8856 17.5048 16.7767 17.5048 16.6667C17.5048 16.5567 17.4831 16.4477 17.4407 16.3462C17.3984 16.2446 17.3364 16.1525 17.2583 16.075ZM4.16667 9.16667C4.16667 8.17776 4.45991 7.21106 5.00932 6.38882C5.55873 5.56657 6.33962 4.92571 7.25325 4.54727C8.16688 4.16883 9.17222 4.06982 10.1421 4.26274C11.112 4.45567 12.0029 4.93187 12.7022 5.63114C13.4015 6.3304 13.8777 7.22131 14.0706 8.19122C14.2635 9.16112 14.1645 10.1665 13.7861 11.0801C13.4076 11.9937 12.7668 12.7746 11.9445 13.324C11.1223 13.8734 10.1556 14.1667 9.16667 14.1667C7.84059 14.1667 6.56882 13.6399 5.63114 12.7022C4.69345 11.7645 4.16667 10.4928 4.16667 9.16667Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_5661_2450">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  clear:(<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_5661_2449)">
        <path d="M8.94 7.99998L11.8067 5.13998C11.9322 5.01445 12.0027 4.84418 12.0027 4.66665C12.0027 4.48911 11.9322 4.31885 11.8067 4.19331C11.6811 4.06778 11.5109 3.99725 11.3333 3.99725C11.1558 3.99725 10.9855 4.06778 10.86 4.19331L8 7.05998L5.14 4.19331C5.01446 4.06778 4.8442 3.99725 4.66667 3.99725C4.48913 3.99725 4.31887 4.06778 4.19333 4.19331C4.0678 4.31885 3.99727 4.48911 3.99727 4.66665C3.99727 4.84418 4.0678 5.01445 4.19333 5.13998L7.06 7.99998L4.19333 10.86C4.13085 10.922 4.08125 10.9957 4.04741 11.0769C4.01356 11.1582 3.99613 11.2453 3.99613 11.3333C3.99613 11.4213 4.01356 11.5085 4.04741 11.5897C4.08125 11.6709 4.13085 11.7447 4.19333 11.8066C4.25531 11.8691 4.32904 11.9187 4.41028 11.9526C4.49152 11.9864 4.57866 12.0038 4.66667 12.0038C4.75467 12.0038 4.84181 11.9864 4.92305 11.9526C5.00429 11.9187 5.07802 11.8691 5.14 11.8066L8 8.93998L10.86 11.8066C10.922 11.8691 10.9957 11.9187 11.0769 11.9526C11.1582 11.9864 11.2453 12.0038 11.3333 12.0038C11.4213 12.0038 11.5085 11.9864 11.5897 11.9526C11.671 11.9187 11.7447 11.8691 11.8067 11.8066C11.8692 11.7447 11.9187 11.6709 11.9526 11.5897C11.9864 11.5085 12.0039 11.4213 12.0039 11.3333C12.0039 11.2453 11.9864 11.1582 11.9526 11.0769C11.9187 10.9957 11.8692 10.922 11.8067 10.86L8.94 7.99998Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_5661_2449">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
}

type IconName = keyof typeof icons

type Props = {
  name: IconName
}

export const IconSvg = (props: Props) => {
  return icons[props.name] || null
}
