import { useLayoutEffect, useState } from 'react'
import styles from './Cloud.module.scss'

export const Cloud = (props) => {
  const { position } = props
  const [positionClassName, setPositionClassName] = useState()

  useLayoutEffect(() => {
    position && position === 'left' && setPositionClassName(styles.left)
    position && position === 'right' && setPositionClassName(styles.right)
  })

  return (
    <svg
      className={`${styles.cloud} ${
        positionClassName ? positionClassName : ''
      }`}
      width='866'
      height='710'
      viewBox='0 0 866 710'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_i_1_28)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M321.61 707.502C428.813 722.995 382.026 617.708 434.813 588.571C498.936 553.178 847.313 627.596 865.813 530.105C865.813 361.747 639.953 363.059 615.313 291.287C591.426 221.706 545.459 108.821 494.313 55.9202C445.358 5.28475 317.313 -51.0191 245.813 55.9202C194.313 137.374 224.472 176.297 176.369 208.215C125.434 242.013 60.9491 260.121 32.1024 313.996C0.840328 372.382 -11.5409 447.064 16.3075 507.151C43.4126 565.635 117.517 579.228 171.424 614.604C221.872 647.71 261.259 707.843 321.61 707.502Z'
        />
      </g>
      <defs>
        <filter
          id='filter0_i_1_28'
          x='0.813354'
          y='-4.95056'
          width='865'
          height='718'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='15' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_1_28'
          />
        </filter>
      </defs>
    </svg>
  )
}
