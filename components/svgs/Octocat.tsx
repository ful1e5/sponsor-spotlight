import React from "react";

interface Props {}

const Octocat: React.FC<Props> = ({}) => {
  return (
    <>
      <style>
        {`
            @keyframes float {
              0% {
                transform: translateY(5px);
              }
              50% {
                transform: translateY(-1px);
              }
              100% {
                transform: translateY(5px);
              }
            }
         `}
      </style>
      <div
        id="cover"
        style={{
          maxWidth: "100px",
          margin: "0px 5px",
          paddingRight: "10px",
          animation: "float 5s ease-in-out infinite",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1365_47)">
            <g filter="url(#filter0_d_1365_47)">
              <path
                d="M226.235 149.698C192.007 183.922 188.628 327.189 188.628 327.189L277.62 286.115L359.767 231.351C359.767 231.351 253.617 142.087 226.235 149.698Z"
                fill="url(#paint0_radial_1365_47)"
              />
            </g>
            <path
              d="M236.544 176.587C216.008 224.516 205.699 307.145 205.699 307.145C205.699 307.145 237.398 279.586 260.464 266.071C283.181 252.761 322.074 238.689 322.074 238.689C322.074 238.689 244.17 158.79 236.544 176.587Z"
              fill="url(#paint1_radial_1365_47)"
            />
            <g filter="url(#filter1_d_1365_47)">
              <path
                d="M777.36 149.701C811.587 183.925 818.469 320.864 818.469 320.864L725.974 286.118L654.14 225.01C654.14 225.01 749.977 142.09 777.36 149.701Z"
                fill="url(#paint2_radial_1365_47)"
              />
            </g>
            <path
              d="M767.053 176.591C787.589 224.52 797.898 307.149 797.898 307.149C797.898 307.149 766.199 279.59 743.133 266.076C720.416 252.765 681.523 238.693 681.523 238.693C681.523 238.693 759.427 158.794 767.053 176.591Z"
              fill="url(#paint3_radial_1365_47)"
            />
            <g filter="url(#filter2_dii_1365_47)">
              <path
                d="M223.758 747.395C133.456 663.487 110.212 563.781 133.877 443.289C147.58 373.52 172.931 329.903 222.856 279.277C300.734 200.306 497.061 205.3 497.061 205.3C497.061 205.3 692.617 198.341 777.346 272.431C835.482 323.268 859.367 368.082 876.921 443.289C904.832 562.869 887.282 663.484 796.98 747.392C718.181 820.613 517.055 820.087 517.055 820.087C517.055 820.087 302.557 820.616 223.758 747.395Z"
                fill="url(#paint4_linear_1365_47)"
              />
            </g>
            <g filter="url(#filter3_dii_1365_47)">
              <path
                d="M224.474 376.294C250.967 315.638 314.709 271.23 381.916 259.882C381.916 259.882 415.45 257.356 436.68 259.942C458.564 262.606 469.517 271.364 491.445 273.633C507.4 275.283 516.563 275.287 532.518 273.633C554.449 271.358 565.396 262.575 587.283 259.903C608.512 257.311 642.047 259.844 642.047 259.844C709.254 271.191 772.996 315.6 799.489 376.256C819.932 423.061 808.015 442.039 806.319 493.086C803.949 564.381 819.563 587.718 785.757 650.534C764.845 689.393 739.624 718.552 696.789 746.341C636.926 785.176 581.676 787.523 505.113 787.53C428.554 787.537 373.301 785.214 313.438 746.379C270.603 718.591 245.382 689.432 224.469 650.573C190.664 587.757 206.277 564.42 203.908 493.125C202.212 442.078 204.03 423.1 224.474 376.294Z"
                fill="url(#paint5_radial_1365_47)"
              />
            </g>
            <g filter="url(#filter4_ddi_1365_47)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M419.204 549.084C425.204 547.883 431.042 551.775 432.242 557.776C435.312 573.128 442.931 589.658 454.28 602.38C465.541 615.004 480.016 623.434 497.154 624.18C533.305 625.754 561.659 595.578 567.893 558.129C568.898 552.093 574.606 548.014 580.642 549.019C586.679 550.024 590.758 555.732 589.753 561.768C582.312 606.467 546.996 648.533 496.189 646.32C471.781 645.257 452.03 633.15 437.742 617.132C423.542 601.213 414.286 580.998 410.511 562.122C409.311 556.121 413.203 550.284 419.204 549.084Z"
                fill="#030113"
              />
            </g>
            <g filter="url(#filter5_ddi_1365_47)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M485.61 477.637C485.519 483.756 490.406 488.79 496.525 488.88L510.216 489.082C516.335 489.173 521.369 484.286 521.459 478.167C521.55 472.048 516.663 467.014 510.544 466.924L496.853 466.721C490.734 466.631 485.7 471.518 485.61 477.637Z"
                fill="#2F0530"
              />
            </g>
            <g filter="url(#filter6_ddi_1365_47)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M318.981 428.279C309.807 434.006 301.609 443.193 294.095 456.335C291.058 461.648 284.289 463.492 278.976 460.455C273.663 457.417 271.819 450.648 274.857 445.335C283.54 430.149 294.018 417.739 307.246 409.48C320.635 401.121 336.066 397.504 353.685 398.704C388.597 401.083 414.169 420.97 425.071 454.222C426.977 460.037 423.809 466.296 417.994 468.203C412.179 470.11 405.919 466.941 404.013 461.126C395.923 436.452 378.085 422.579 352.178 420.814C338.692 419.895 327.994 422.652 318.981 428.279Z"
                fill="#2F0530"
              />
            </g>
            <g filter="url(#filter7_ddi_1365_47)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M682.037 428.279C691.212 434.006 699.409 443.193 706.924 456.335C709.961 461.648 716.73 463.492 722.043 460.455C727.355 457.417 729.199 450.648 726.162 445.335C717.479 430.149 707.001 417.739 693.773 409.48C680.384 401.121 664.952 397.504 647.334 398.704C612.422 401.083 586.85 420.97 575.948 454.222C574.041 460.037 577.21 466.296 583.025 468.203C588.84 470.11 595.1 466.941 597.006 461.126C605.096 436.452 622.934 422.579 648.84 420.814C662.327 419.895 673.024 422.652 682.037 428.279Z"
                fill="#2F0530"
              />
            </g>
            <g filter="url(#filter8_ddiii_1365_47)">
              <path
                d="M688.692 684.388C682.416 742.885 765.529 825.543 765.529 825.543C765.529 825.543 923.98 773.25 914.628 700.353C911.165 673.36 899.657 652.914 874.05 643.699C848.584 634.535 806.98 661.156 806.98 661.156C806.98 661.156 798.022 615.952 765.228 611.436C721.231 605.377 693.43 640.228 688.692 684.388Z"
                fill="url(#paint6_linear_1365_47)"
              />
            </g>
            <path
              d="M696.773 678.616C696.773 678.616 726.979 646.584 752.251 645.074C777.523 643.564 810.198 683.068 810.198 683.068C810.198 683.068 830.785 667.415 855.314 669.122C877.928 670.697 908.579 692.194 908.579 692.194C908.579 692.194 899.843 658.97 879.595 651.729C860.636 644.948 839.096 647.792 821.451 657.49C816.789 660.052 809.811 663.904 805.55 668.026C805.55 668.026 792.937 626.733 770.773 619.446C750.883 612.908 734.785 618.827 718.711 632.242C703.329 645.078 696.773 678.616 696.773 678.616Z"
              fill="url(#paint7_radial_1365_47)"
              fillOpacity="0.5"
            />
            <g filter="url(#filter9_ddiii_1365_47)">
              <path
                d="M59.7675 659.397C88.4401 717.906 215.127 746.252 215.127 746.252C215.127 746.252 332.682 603.67 280.863 540.902C261.675 517.659 238.817 505.302 209.385 511.794C180.114 518.251 156.862 567.765 156.862 567.765C156.862 567.765 121.77 530.706 88.3799 545.846C43.5828 566.158 38.1227 615.229 59.7675 659.397Z"
                fill="url(#paint8_linear_1365_47)"
              />
            </g>
            <path
              d="M63.9293 649.217C63.9293 649.217 73.307 601.367 96.091 585.025C118.875 568.683 172.819 586.392 172.819 586.392C172.819 586.392 182.86 559.568 206.848 546.679C228.964 534.797 270.377 536.832 270.377 536.832C270.377 536.832 242.568 510.867 219.322 516.042C197.556 520.888 179.056 536.275 168.253 555.783C165.399 560.936 161.137 568.667 159.58 575.046C159.58 575.046 123.374 543.811 98.3054 550.076C75.8102 555.698 64.2251 570.753 57.0894 592.815C50.2612 613.926 63.9293 649.217 63.9293 649.217Z"
              fill="url(#paint9_radial_1365_47)"
              fillOpacity="0.5"
            />
            <g filter="url(#filter10_ddiii_1365_47)">
              <path
                d="M544.299 225.543C547.849 286.075 646.371 355.995 646.371 355.995C646.371 355.995 798.571 275.938 776.69 203.421C768.587 176.568 753.418 157.737 725.822 152.716C698.378 147.723 660.603 181.847 660.603 181.847C660.603 181.847 643.824 137.415 609.721 138.391C563.966 139.701 541.62 179.848 544.299 225.543Z"
                fill="url(#paint10_linear_1365_47)"
              />
            </g>
            <path
              d="M551.534 218.304C551.534 218.304 576.803 180.614 602.237 174.789C627.672 168.964 667.594 203.576 667.594 203.576C667.594 203.576 685.865 184.169 711.09 181.741C734.346 179.502 769.155 196.153 769.155 196.153C769.155 196.153 754.633 163.861 732.821 159.937C712.397 156.262 690.983 162.81 674.691 175.664C670.387 179.059 663.947 184.16 660.315 189.074C660.315 189.074 640.484 149.238 616.716 145.593C595.387 142.322 580.026 151.072 565.963 167.437C552.505 183.098 551.534 218.304 551.534 218.304Z"
              fill="url(#paint11_radial_1365_47)"
              fillOpacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1365_47"
              x="168.628"
              y="129.237"
              width="211.139"
              height="217.951"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1365_47"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1365_47"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_1365_47"
              x="634.14"
              y="129.207"
              width="204.33"
              height="211.657"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1365_47"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1365_47"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_dii_1365_47"
              x="105.223"
              y="185.126"
              width="803.854"
              height="654.961"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1365_47"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1365_47"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="-10" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.569883 0 0 0 0 0.132569 0 0 0 0 0.691667 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="60" dy="5" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0586285 0 0 0 0 0.0332292 0 0 0 0 0.1375 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1365_47"
                result="effect3_innerShadow_1365_47"
              />
            </filter>
            <filter
              id="filter3_dii_1365_47"
              x="200.322"
              y="228.735"
              width="612.986"
              height="560.794"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.19103 0 0 0 0 0.111806 0 0 0 0 0.291667 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1365_47"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1365_47"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-30" />
              <feGaussianBlur stdDeviation="20" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.808333 0 0 0 0 0.498472 0 0 0 0 0.188611 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_1365_47"
                result="effect3_innerShadow_1365_47"
              />
            </filter>
            <filter
              id="filter4_ddi_1365_47"
              x="403.294"
              y="541.866"
              width="193.611"
              height="115.538"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0509804 0 0 0 0 0.0313725 0 0 0 0 0.156863 0 0 0 0.29 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0470588 0 0 0 0 0.027451 0 0 0 0 0.145098 0 0 0 0.45 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1365_47"
                result="effect2_dropShadow_1365_47"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1365_47"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.164042 0 0 0 0 0.108177 0 0 0 0 0.3875 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect3_innerShadow_1365_47"
              />
            </filter>
            <filter
              id="filter5_ddi_1365_47"
              x="475.608"
              y="458.72"
              width="55.8525"
              height="42.3633"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.403922 0 0 0 0 0.203922 0 0 0 0 0.517647 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0508316 0 0 0 0 0.0175694 0 0 0 0 0.0958333 0 0 0 0.6 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1365_47"
                result="effect2_dropShadow_1365_47"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1365_47"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.388235 0 0 0 0 0.2 0 0 0 0 0.501961 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect3_innerShadow_1365_47"
              />
            </filter>
            <filter
              id="filter6_ddi_1365_47"
              x="253.394"
              y="391.48"
              width="192.231"
              height="112.277"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="15" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.649909 0 0 0 0 0.378628 0 0 0 0 0.804167 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0508316 0 0 0 0 0.0175694 0 0 0 0 0.0958333 0 0 0 0.6 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1365_47"
                result="effect2_dropShadow_1365_47"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1365_47"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.388235 0 0 0 0 0.2 0 0 0 0 0.501961 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect3_innerShadow_1365_47"
              />
            </filter>
            <filter
              id="filter7_ddi_1365_47"
              x="555.394"
              y="391.48"
              width="192.231"
              height="112.277"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="15" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.649909 0 0 0 0 0.378628 0 0 0 0 0.804167 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0508316 0 0 0 0 0.0175694 0 0 0 0 0.0958333 0 0 0 0.6 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1365_47"
                result="effect2_dropShadow_1365_47"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1365_47"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.388235 0 0 0 0 0.2 0 0 0 0 0.501961 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect3_innerShadow_1365_47"
              />
            </filter>
            <filter
              id="filter8_ddiii_1365_47"
              x="668.354"
              y="590.75"
              width="266.673"
              height="264.793"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-2" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1365_47"
                result="effect2_dropShadow_1365_47"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1365_47"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="30" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.9875 0 0 0 0 0.400267 0 0 0 0 0.0699479 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect3_innerShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-25" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.768627 0 0 0 0 0.12549 0 0 0 0 0.317647 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1365_47"
                result="effect4_innerShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect4_innerShadow_1365_47"
                result="effect5_innerShadow_1365_47"
              />
            </filter>
            <filter
              id="filter9_ddiii_1365_47"
              x="27.4932"
              y="490.074"
              width="286.562"
              height="286.178"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-2" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1365_47"
                result="effect2_dropShadow_1365_47"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1365_47"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="30" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.9875 0 0 0 0 0.400267 0 0 0 0 0.0699479 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect3_innerShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="-25" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.768627 0 0 0 0 0.12549 0 0 0 0 0.317647 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1365_47"
                result="effect4_innerShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect4_innerShadow_1365_47"
                result="effect5_innerShadow_1365_47"
              />
            </filter>
            <filter
              id="filter10_ddiii_1365_47"
              x="524.084"
              y="118.375"
              width="274.758"
              height="267.62"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-2" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1365_47"
                result="effect2_dropShadow_1365_47"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1365_47"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="30" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.9875 0 0 0 0 0.400267 0 0 0 0 0.0699479 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect3_innerShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="-25" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.768627 0 0 0 0 0.12549 0 0 0 0 0.317647 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_1365_47"
                result="effect4_innerShadow_1365_47"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect4_innerShadow_1365_47"
                result="effect5_innerShadow_1365_47"
              />
            </filter>
            <radialGradient
              id="paint0_radial_1365_47"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(277.62 190.277) rotate(125.838) scale(151.996 407.448)"
            >
              <stop stopColor="#6741A6" />
              <stop offset="1" stopColor="#75387E" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_1365_47"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(277.618 197.125) rotate(117.897) scale(131.677 115.092)"
            >
              <stop stopColor="#28216D" />
              <stop offset="1" stopColor="#6B3287" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_1365_47"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(725.98 190.28) rotate(54.1623) scale(151.996 407.448)"
            >
              <stop stopColor="#6741A6" />
              <stop offset="1" stopColor="#75387E" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_1365_47"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(725.972 197.129) rotate(62.1027) scale(131.677 115.092)"
            >
              <stop stopColor="#28216D" />
              <stop offset="1" stopColor="#6B3287" />
            </radialGradient>
            <linearGradient
              id="paint4_linear_1365_47"
              x1="482.997"
              y1="217.667"
              x2="425.288"
              y2="704.165"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#693FA0" />
              <stop offset="1" stopColor="#3D1E78" />
            </linearGradient>
            <radialGradient
              id="paint5_radial_1365_47"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(503.527 354.573) rotate(97.679) scale(614.768 4769.55)"
            >
              <stop stopColor="#FECF60" />
              <stop offset="1" stopColor="#FA9848" />
            </radialGradient>
            <linearGradient
              id="paint6_linear_1365_47"
              x1="782.895"
              y1="611.207"
              x2="783.865"
              y2="756.376"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DC5A40" />
              <stop offset="1" stopColor="#A71C25" />
            </linearGradient>
            <radialGradient
              id="paint7_radial_1365_47"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(878.809 550.628) rotate(128.706) scale(189.328 562.189)"
            >
              <stop stopColor="#D9D9D9" stopOpacity="0.37" />
              <stop offset="0.0001" stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="paint8_linear_1365_47"
              x1="104.795"
              y1="535.196"
              x2="191.45"
              y2="670.622"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DC5A40" />
              <stop offset="1" stopColor="#A71C25" />
            </linearGradient>
            <radialGradient
              id="paint9_radial_1365_47"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(158.869 421.791) rotate(96.4747) scale(209.68 622.622)"
            >
              <stop stopColor="#D9D9D9" stopOpacity="0.37" />
              <stop offset="0.0001" stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="paint10_linear_1365_47"
              x1="627.642"
              y1="135.159"
              x2="653.271"
              y2="282.568"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DC5A40" />
              <stop offset="1" stopColor="#A71C25" />
            </linearGradient>
            <radialGradient
              id="paint11_radial_1365_47"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(714.86 57.2941) rotate(119.226) scale(195.13 579.417)"
            >
              <stop stopColor="#D9D9D9" stopOpacity="0.37" />
              <stop offset="0.0001" stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
            </radialGradient>
            <clipPath id="clip0_1365_47">
              <rect width="1000" height="1000" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};

export { Octocat };
