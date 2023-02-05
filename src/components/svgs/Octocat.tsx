import React from "react";

interface Props {
  scale?: number;
}

const Octocat: React.FC<Props> = ({ scale }) => {
  return (
    <svg
      width={77 * (scale || 1.0)}
      height={60 * (scale || 1.0)}
      viewBox="0 0 77 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1365_47)">
        <path
          d="M18.7468 4.03607C16.2468 6.53582 16 17 16 17L22.5 14L28.5 10C28.5 10 20.7468 3.4802 18.7468 4.03607Z"
          fill="url(#paint0_radial_1365_47)"
        />
        <path
          d="M19.5 6C18 9.50074 17.2471 15.5359 17.2471 15.5359C17.2471 15.5359 19.5623 13.5231 21.2471 12.5359C22.9063 11.5637 25.7471 10.5359 25.7471 10.5359C25.7471 10.5359 20.057 4.70009 19.5 6Z"
          fill="url(#paint1_radial_1365_47)"
        />
        <path
          d="M59.0003 4.03605C61.5003 6.5358 62.0029 16.5378 62.0029 16.5378L55.2471 14L50.0003 9.53664C50.0003 9.53664 57.0003 3.48018 59.0003 4.03605Z"
          fill="url(#paint2_radial_1365_47)"
        />
        <path
          d="M58.2471 6C59.7471 9.50074 60.5 15.5359 60.5 15.5359C60.5 15.5359 58.1847 13.5231 56.5 12.5359C54.8407 11.5637 52 10.5359 52 10.5359C52 10.5359 57.6901 4.70009 58.2471 6Z"
          fill="url(#paint3_radial_1365_47)"
        />
        <g filter="url(#filter0_dii_1365_47)">
          <path
            d="M18.5652 47.6914C11.9695 41.5627 10.2718 34.2802 12.0003 25.4794C13.0011 20.3835 14.8528 17.1977 18.4993 13.5C24.1875 7.73191 38.5272 8.0967 38.5272 8.0967C38.5272 8.0967 52.8107 7.58839 58.9993 13C63.2456 16.7131 64.9901 19.9863 66.2723 25.4794C68.3109 34.2136 67.029 41.5625 60.4334 47.6911C54.6779 53.0392 39.9876 53.0007 39.9876 53.0007C39.9876 53.0007 24.3207 53.0394 18.5652 47.6914Z"
            fill="url(#paint4_linear_1365_47)"
          />
        </g>
        <g filter="url(#filter1_dii_1365_47)">
          <path
            d="M18.6179 20.5864C20.553 16.1561 25.2087 12.9125 30.1175 12.0837C30.1175 12.0837 32.5669 11.8992 34.1175 12.088C35.7159 12.2827 36.5159 12.9223 38.1175 13.088C39.2829 13.2086 39.9522 13.2089 41.1175 13.088C42.7194 12.9219 43.519 12.2804 45.1175 12.0852C46.6681 11.8959 49.1175 12.0809 49.1175 12.0809C54.0263 12.9097 58.682 16.1533 60.6171 20.5836C62.1103 24.0023 61.2398 25.3884 61.1159 29.1169C60.9429 34.3243 62.0833 36.0289 59.6141 40.6169C58.0867 43.4552 56.2446 45.585 53.1159 47.6147C48.7435 50.4512 44.708 50.6226 39.1159 50.6231C33.524 50.6236 29.4883 50.454 25.1159 47.6175C21.9872 45.5878 20.1451 43.458 18.6176 40.6197C16.1485 36.0317 17.2889 34.3272 17.1158 29.1197C16.9919 25.3913 17.1248 24.0051 18.6179 20.5864Z"
            fill="url(#paint5_radial_1365_47)"
          />
        </g>
        <g filter="url(#filter2_ddi_1365_47)">
          <path
            d="M33 34C33.5 36.5 35.465 39.3678 38.4995 39.5C41.6753 39.6383 44.0005 37 44.4999 34"
            stroke="#030113"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <g filter="url(#filter3_ddi_1365_47)">
          <path
            d="M54.5 26.0309C53.3169 23.9618 51.7719 22.8759 49.5 23.0307C47.2789 23.182 45.6936 24.4149 45 26.5303"
            stroke="#2F0530"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <g filter="url(#filter4_ddi_1365_47)">
          <path
            d="M39.5 28.0148L38.5 28"
            stroke="#2F0530"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <g filter="url(#filter5_ddi_1365_47)">
          <path
            d="M23 26.0309C24.1831 23.9618 25.7281 22.8759 28 23.0307C30.2211 23.182 31.8064 24.4149 32.5 26.5303"
            stroke="#2F0530"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <g filter="url(#filter6_dii_1365_47)">
          <path
            d="M42.5004 10C42.7384 14.172 49.5204 19.0014 49.5204 19.0014C49.5204 19.0014 60.0183 13.501 58.5183 8.50098C57.9628 6.6495 56.9195 5.35002 55.0183 5.00098C53.1275 4.65384 50.5204 7.00143 50.5204 7.00143C50.5204 7.00143 49.369 3.93745 47.0186 4.00097C43.8651 4.0862 42.3207 6.85056 42.5004 10Z"
            fill="url(#paint6_linear_1365_47)"
          />
        </g>
        <path
          d="M43 9.50223C43 9.50223 44.7456 6.90758 46.4991 6.50894C48.2526 6.1103 51 8.5 51 8.5C51 8.5 52.2613 7.16455 54 7C55.603 6.8483 58 7.99962 58 7.99962C58 7.99962 57.0028 5.77263 55.5 5.49977C54.0929 5.24429 52.6164 5.69316 51.4922 6.5772C51.1952 6.81073 50.7508 7.16154 50.5 7.49978C50.5 7.49978 49.1377 4.75225 47.5001 4.49843C46.0305 4.27067 44.971 4.872 44 5.9983C43.0708 7.07606 43 9.50223 43 9.50223Z"
          fill="url(#paint7_radial_1365_47)"
          fillOpacity="0.5"
        />
        <g filter="url(#filter7_dii_1365_47)">
          <path
            d="M6.51363 41.0048C8.50002 45.2671 17.6014 47.4911 17.6014 47.4911C17.6014 47.4911 26.2849 37.3687 22.6344 32.7665C21.2826 31.0623 19.6507 30.1383 17.5178 30.5653C15.3965 30.9899 13.6489 34.5299 13.6489 34.5299C13.6489 34.5299 11.169 31.8063 8.73838 32.8517C5.47731 34.2541 5.01411 37.7872 6.51363 41.0048Z"
            fill="url(#paint8_linear_1365_47)"
          />
        </g>
        <path
          d="M6.82852 40.2765C6.82852 40.2765 7.57268 36.837 9.23975 35.69C10.9068 34.5429 14.7743 35.8968 14.7743 35.8968C14.7743 35.8968 15.5366 33.9754 17.2857 33.0793C18.8983 32.2531 21.8837 32.4583 21.8837 32.4583C21.8837 32.4583 19.9137 30.5455 18.229 30.8862C16.6516 31.2052 15.295 32.2894 14.488 33.6818C14.2748 34.0496 13.9563 34.6014 13.835 35.0594C13.835 35.0594 11.2666 32.7546 9.44884 33.1713C7.81773 33.5452 6.96054 34.6152 6.41453 36.197C5.89206 37.7107 6.82852 40.2765 6.82852 40.2765Z"
          fill="url(#paint9_radial_1365_47)"
          fillOpacity="0.5"
        />
        <g filter="url(#filter8_dii_1365_47)">
          <path
            d="M52.5244 43.0897C52.066 47.3623 58.1366 53.3997 58.1366 53.3997C58.1366 53.3997 69.7099 49.5802 69.0268 44.2558C68.7738 42.2842 67.9333 40.7908 66.063 40.1178C64.2029 39.4484 61.1641 41.3928 61.1641 41.3928C61.1641 41.3928 60.5099 38.0911 58.1146 37.7613C54.901 37.3188 52.8704 39.8643 52.5244 43.0897Z"
            fill="url(#paint10_linear_1365_47)"
          />
        </g>
        <path
          d="M53.1145 42.6685C53.1145 42.6685 55.3207 40.3289 57.1666 40.2186C59.0125 40.1083 61.3991 42.9937 61.3991 42.9937C61.3991 42.9937 62.9027 41.8504 64.6943 41.9751C66.3461 42.0901 68.5848 43.6603 68.5848 43.6603C68.5848 43.6603 67.9467 41.2336 66.4678 40.7047C65.0831 40.2094 63.5098 40.4171 62.221 41.1255C61.8805 41.3126 61.3708 41.5939 61.0596 41.895C61.0596 41.895 60.1383 38.879 58.5194 38.3468C57.0667 37.8692 55.8909 38.3015 54.7168 39.2813C53.5933 40.2189 53.1145 42.6685 53.1145 42.6685Z"
          fill="url(#paint11_radial_1365_47)"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_1365_47"
          x="7.36816"
          y="7.08398"
          width="63.792"
          height="53.917"
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
          <feOffset dy="4" />
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
          <feOffset dx="1" dy="-1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
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
          <feOffset dx="6" dy="0.5" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0586285 0 0 0 0 0.0332292 0 0 0 0 0.1375 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_1365_47"
            result="effect3_innerShadow_1365_47"
          />
        </filter>
        <filter
          id="filter1_dii_1365_47"
          x="15"
          y="9"
          width="48.4805"
          height="43.623"
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
          <feOffset dy="-3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
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
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
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
          id="filter2_ddi_1365_47"
          x="31.3"
          y="32.3"
          width="14.9"
          height="9.30537"
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
          <feOffset dy="0.6" />
          <feGaussianBlur stdDeviation="0.25" />
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
          <feGaussianBlur stdDeviation="0.35" />
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
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
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
          id="filter3_ddi_1365_47"
          x="43.3"
          y="21.3161"
          width="12.9"
          height="7.31465"
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
          <feOffset dy="0.6" />
          <feGaussianBlur stdDeviation="0.25" />
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
          <feGaussianBlur stdDeviation="0.35" />
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
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
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
          id="filter4_ddi_1365_47"
          x="36.8"
          y="26.3"
          width="4.4"
          height="3.81465"
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
          <feOffset dy="0.6" />
          <feGaussianBlur stdDeviation="0.25" />
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
          <feGaussianBlur stdDeviation="0.35" />
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
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
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
          id="filter5_ddi_1365_47"
          x="21.3"
          y="21.3161"
          width="12.9"
          height="7.31465"
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
          <feOffset dy="0.6" />
          <feGaussianBlur stdDeviation="0.25" />
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
          <feGaussianBlur stdDeviation="0.35" />
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
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
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
          id="filter6_dii_1365_47"
          x="39.4863"
          y="2"
          width="22.1787"
          height="21.0015"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.309804 0 0 0 0 0.180392 0 0 0 0 0.47451 0 0 0 0.5 0"
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
          <feOffset dx="0.2" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.9875 0 0 0 0 0.400267 0 0 0 0 0.0699479 0 0 0 1 0"
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
          <feOffset dy="-2.6" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.72549 0 0 0 0 0.121569 0 0 0 0 0.278431 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_1365_47"
            result="effect3_innerShadow_1365_47"
          />
        </filter>
        <filter
          id="filter7_dii_1365_47"
          x="2.69629"
          y="28.4619"
          width="23.834"
          height="23.0293"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.309804 0 0 0 0 0.180392 0 0 0 0 0.47451 0 0 0 0.5 0"
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
          <feOffset dx="0.2" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.9875 0 0 0 0 0.400267 0 0 0 0 0.0699479 0 0 0 1 0"
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
          <feOffset dy="-2.5" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.768627 0 0 0 0 0.12549 0 0 0 0 0.317647 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_1365_47"
            result="effect3_innerShadow_1365_47"
          />
        </filter>
        <filter
          id="filter8_dii_1365_47"
          x="49.5"
          y="35.7109"
          width="22.5557"
          height="21.689"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.309804 0 0 0 0 0.180392 0 0 0 0 0.47451 0 0 0 0.5 0"
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
          <feOffset dx="0.2" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.9875 0 0 0 0 0.400267 0 0 0 0 0.0699479 0 0 0 1 0"
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
          <feOffset dy="-2.5" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.768627 0 0 0 0 0.12549 0 0 0 0 0.317647 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_1365_47"
            result="effect3_innerShadow_1365_47"
          />
        </filter>
        <radialGradient
          id="paint0_radial_1365_47"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(22.5 7) rotate(125.838) scale(11.1018 29.76)"
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
          gradientTransform="translate(22.5 7.5) rotate(117.897) scale(9.61769 8.40629)"
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
          gradientTransform="translate(55.2471 7) rotate(54.1623) scale(11.1018 29.76)"
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
          gradientTransform="translate(55.2471 7.5) rotate(62.1027) scale(9.61769 8.40629)"
        >
          <stop stopColor="#28216D" />
          <stop offset="1" stopColor="#6B3287" />
        </radialGradient>
        <linearGradient
          id="paint4_linear_1365_47"
          x1="37.5"
          y1="9"
          x2="33.2849"
          y2="44.5338"
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
          gradientTransform="translate(39 19) rotate(97.679) scale(44.9027 348.368)"
        >
          <stop stopColor="#FECF60" />
          <stop offset="1" stopColor="#FA9848" />
        </radialGradient>
        <linearGradient
          id="paint6_linear_1365_47"
          x1="50.8321"
          y1="4"
          x2="49"
          y2="19"
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
          gradientTransform="translate(47.5 -2) rotate(66.2505) scale(13.6565 40.5515)"
        >
          <stop stopColor="#D9D9D9" stopOpacity="0.37" />
          <stop offset="0.0001" stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint8_linear_1365_47"
          x1="12.7247"
          y1="31.2623"
          x2="16"
          y2="42"
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
          gradientTransform="translate(14 24) rotate(97.5947) scale(15.1327 44.935)"
        >
          <stop stopColor="#D9D9D9" stopOpacity="0.37" />
          <stop offset="0.0001" stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint10_linear_1365_47"
          x1="61.9838"
          y1="38.4"
          x2="59.4764"
          y2="48.3474"
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
          gradientTransform="translate(66.4106 33.3202) rotate(128.706) scale(13.8285 41.0624)"
        >
          <stop stopColor="#D9D9D9" stopOpacity="0.37" />
          <stop offset="0.0001" stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_1365_47">
          <rect width="77" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { Octocat };
