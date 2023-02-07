import React from "react";

interface Props {}

const Error: React.FC<Props> = ({}) => {
  return (
    <>
      <style>
        {`
             @keyframes float {
               0% {
                 transform: translateY(-2px);
               }
               50% {
                 transform: translateY(5px);
               }
               100% {
                 transform: translateY(-2px);
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
          <g filter="url(#filter0_d_4_2)">
            <path
              d="M226.235 149.698C192.007 183.922 188.628 327.189 188.628 327.189L277.62 286.115L359.767 231.351C359.767 231.351 253.617 142.087 226.235 149.698Z"
              fill="url(#paint0_radial_4_2)"
            />
          </g>
          <path
            d="M236.544 176.587C216.008 224.516 205.699 307.145 205.699 307.145C205.699 307.145 237.398 279.586 260.464 266.071C283.181 252.761 322.074 238.689 322.074 238.689C322.074 238.689 244.17 158.79 236.544 176.587Z"
            fill="url(#paint1_radial_4_2)"
          />
          <g filter="url(#filter1_d_4_2)">
            <path
              d="M777.36 149.701C811.588 183.925 818.47 320.864 818.47 320.864L725.974 286.118L654.14 225.01C654.14 225.01 749.978 142.09 777.36 149.701Z"
              fill="url(#paint2_radial_4_2)"
            />
          </g>
          <path
            d="M767.052 176.591C787.589 224.521 797.898 307.149 797.898 307.149C797.898 307.149 766.199 279.59 743.133 266.076C720.416 252.765 681.523 238.693 681.523 238.693C681.523 238.693 759.427 158.794 767.052 176.591Z"
            fill="url(#paint3_radial_4_2)"
          />
          <g filter="url(#filter2_dii_4_2)">
            <path
              d="M223.758 747.395C133.456 663.487 110.212 563.781 133.877 443.289C147.58 373.52 172.931 329.903 222.856 279.277C300.734 200.306 497.061 205.3 497.061 205.3C497.061 205.3 692.617 198.341 777.346 272.431C835.482 323.268 859.367 368.082 876.921 443.289C904.832 562.869 887.282 663.484 796.98 747.392C718.181 820.613 517.055 820.087 517.055 820.087C517.055 820.087 302.557 820.616 223.758 747.395Z"
              fill="url(#paint4_linear_4_2)"
            />
          </g>
          <g filter="url(#filter3_dii_4_2)">
            <path
              d="M224.152 376.294C250.644 315.638 314.387 271.23 381.594 259.882C381.594 259.882 415.128 257.356 436.358 259.942C458.241 262.606 469.194 271.364 491.122 273.633C507.077 275.283 516.241 275.287 532.196 273.633C554.127 271.358 565.074 262.575 586.96 259.903C608.189 257.311 641.725 259.844 641.725 259.844C708.931 271.191 772.674 315.6 799.167 376.256C819.61 423.061 807.693 442.039 805.996 493.086C803.627 564.381 819.241 587.718 785.435 650.534C764.522 689.393 739.302 718.552 696.467 746.341C636.604 785.176 581.354 787.523 504.791 787.53C428.231 787.537 372.978 785.214 313.115 746.379C270.28 718.591 245.06 689.432 224.147 650.573C190.341 587.757 205.955 564.42 203.586 493.125C201.889 442.078 203.708 423.1 224.152 376.294Z"
              fill="url(#paint5_radial_4_2)"
            />
          </g>
          <g filter="url(#filter4_ddi_4_2)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M453 620.5C453 600.894 468.941 585 488.604 585H525.396C545.059 585 561 600.894 561 620.5C561 640.106 545.059 656 525.396 656H488.604C468.941 656 453 640.106 453 620.5Z"
              fill="#030113"
            />
          </g>
          <g filter="url(#filter5_ddi_4_2)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M488.678 471.917C488.588 478.036 493.475 483.069 499.594 483.16L513.285 483.362C519.404 483.453 524.437 478.566 524.528 472.447C524.618 466.328 519.731 461.294 513.612 461.204L499.921 461.001C493.802 460.911 488.768 465.798 488.678 471.917Z"
              fill="#2F0530"
            />
          </g>
          <g filter="url(#filter6_ddi_4_2)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M606.747 397.93C612.605 392.072 622.102 392.072 627.96 397.93L656.817 426.787L685.674 397.93C691.532 392.072 701.03 392.072 706.887 397.93C712.745 403.788 712.745 413.285 706.887 419.143L678.03 448L706.887 476.857C712.745 482.715 712.745 492.212 706.887 498.07C701.03 503.928 691.532 503.928 685.674 498.07L656.817 469.213L627.96 498.07C622.102 503.928 612.605 503.928 606.747 498.07C600.889 492.212 600.889 482.715 606.747 476.857L635.604 448L606.747 419.143C600.889 413.285 600.889 403.788 606.747 397.93Z"
              fill="#2F0530"
            />
          </g>
          <g filter="url(#filter7_ddi_4_2)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M306.07 397.93C311.928 392.072 321.426 392.072 327.283 397.93L356.14 426.787L384.997 397.93C390.855 392.072 400.353 392.072 406.211 397.93C412.069 403.788 412.069 413.285 406.211 419.143L377.354 448L406.211 476.857C412.069 482.715 412.069 492.212 406.211 498.07C400.353 503.928 390.855 503.928 384.997 498.07L356.14 469.213L327.283 498.07C321.426 503.928 311.928 503.928 306.07 498.07C300.212 492.212 300.212 482.715 306.07 476.857L334.927 448L306.07 419.143C300.212 413.285 300.212 403.788 306.07 397.93Z"
              fill="#2F0530"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_4_2"
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
                result="effect1_dropShadow_4_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4_2"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_4_2"
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
                result="effect1_dropShadow_4_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4_2"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_dii_4_2"
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
                result="effect1_dropShadow_4_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4_2"
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
                result="effect2_innerShadow_4_2"
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
                in2="effect2_innerShadow_4_2"
                result="effect3_innerShadow_4_2"
              />
            </filter>
            <filter
              id="filter3_dii_4_2"
              x="200"
              y="228.735"
              width="612.987"
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
                result="effect1_dropShadow_4_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4_2"
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
                result="effect2_innerShadow_4_2"
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
                in2="effect2_innerShadow_4_2"
                result="effect3_innerShadow_4_2"
              />
            </filter>
            <filter
              id="filter4_ddi_4_2"
              x="446"
              y="578"
              width="122"
              height="89"
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
                result="effect1_dropShadow_4_2"
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
                in2="effect1_dropShadow_4_2"
                result="effect2_dropShadow_4_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4_2"
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
                result="effect3_innerShadow_4_2"
              />
            </filter>
            <filter
              id="filter5_ddi_4_2"
              x="478.677"
              y="453"
              width="55.8522"
              height="42.3634"
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
                result="effect1_dropShadow_4_2"
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
                in2="effect1_dropShadow_4_2"
                result="effect2_dropShadow_4_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4_2"
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
                result="effect3_innerShadow_4_2"
              />
            </filter>
            <filter
              id="filter6_ddi_4_2"
              x="582.354"
              y="386.536"
              width="148.927"
              height="150.927"
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
                result="effect1_dropShadow_4_2"
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
                in2="effect1_dropShadow_4_2"
                result="effect2_dropShadow_4_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4_2"
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
                result="effect3_innerShadow_4_2"
              />
            </filter>
            <filter
              id="filter7_ddi_4_2"
              x="281.677"
              y="386.536"
              width="148.927"
              height="150.927"
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
                result="effect1_dropShadow_4_2"
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
                in2="effect1_dropShadow_4_2"
                result="effect2_dropShadow_4_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_4_2"
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
                result="effect3_innerShadow_4_2"
              />
            </filter>
            <radialGradient
              id="paint0_radial_4_2"
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
              id="paint1_radial_4_2"
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
              id="paint2_radial_4_2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(725.981 190.28) rotate(54.1623) scale(151.996 407.448)"
            >
              <stop stopColor="#6741A6" />
              <stop offset="1" stopColor="#75387E" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_4_2"
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
              id="paint4_linear_4_2"
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
              id="paint5_radial_4_2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(503.205 354.573) rotate(97.679) scale(614.768 4769.55)"
            >
              <stop stopColor="#FECF60" />
              <stop offset="1" stopColor="#FA9848" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export { Error };
