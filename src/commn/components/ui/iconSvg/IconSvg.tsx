import { AvatarDefault } from '@/assets/image/avaDefault/AvatarDefault'
import { CheckEmailIcon } from '@/assets/image/checkEmail/CheckEmailIcon'
import { ClearIcon } from '@/assets/image/clear/ClearIcon'
import { ErrorRouteIcon } from '@/assets/image/errorRote/ErrorRouteIcon'
import { LearnIcon } from '@/assets/image/learn/LearnIcon'
import { LogoIcon } from '@/assets/image/logo/LogoIcon'
import { NotFileIcon } from '@/assets/image/notFIle/NotFileIcon'
import { ProfileIcon } from '@/assets/image/profile/ProfileIcon'
import { SettingIcon } from '@/assets/image/setting/SettingIcon'
import { ShowPassIcon } from '@/assets/image/showPass/ShowPassIcon'
import { SuccessfullyEmail } from '@/assets/image/successfullyEmail/SuccessfullyEmail'
import { TickIcon } from '@/assets/image/tick/TickIcon'

const icons = {
  arrow: (
    <svg
      fill={'none'}
      height={'12'}
      viewBox={'0 0 12 12'}
      width={'12'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M9.77078 7.25718C9.77101 7.374 9.73032 7.48722 9.65578 7.57718C9.61381 7.62781 9.56226 7.66966 9.50408 7.70033C9.44591 7.73101 9.38226 7.74991 9.31677 7.75594C9.25128 7.76198 9.18525 7.75504 9.12244 7.73552C9.05964 7.716 9.00131 7.68428 8.95078 7.64218L6.27078 5.40218L3.58578 7.56218C3.53464 7.60371 3.47579 7.63473 3.41262 7.65344C3.34945 7.67216 3.28321 7.6782 3.21769 7.67123C3.15218 7.66426 3.08869 7.64442 3.03087 7.61283C2.97305 7.58124 2.92204 7.53854 2.88078 7.48718C2.83526 7.43544 2.80093 7.37486 2.77994 7.30923C2.75894 7.2436 2.75174 7.17434 2.75878 7.10579C2.76583 7.03724 2.78696 6.97089 2.82086 6.9109C2.85476 6.85091 2.9007 6.79857 2.95578 6.75718L5.95578 4.34218C6.04525 4.26864 6.15747 4.22843 6.27328 4.22843C6.3891 4.22843 6.50132 4.26864 6.59078 4.34218L9.59078 6.84218C9.65129 6.89234 9.69912 6.95605 9.7304 7.02816C9.76167 7.10026 9.77551 7.17872 9.77078 7.25718Z'
        }
        fill={'white'}
      />
    </svg>
  ),
  avatar: <AvatarDefault />,
  backTo: (
    <svg
      fill={'none'}
      height={'100%'}
      viewBox={'0 0 12 10'}
      width={'100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M10.6667 4.33335H2.76008L5.18008 1.42669C5.29324 1.29054 5.34768 1.11502 5.33143 0.938739C5.31518 0.762454 5.22956 0.599847 5.09341 0.486688C4.95727 0.373529 4.78175 0.319087 4.60547 0.335341C4.42918 0.351594 4.26657 0.43721 4.15341 0.573354L0.820081 4.57335C0.797655 4.60517 0.777601 4.63859 0.760081 4.67335C0.760081 4.70669 0.760081 4.72669 0.713415 4.76002C0.683197 4.83646 0.667375 4.91783 0.666748 5.00002C0.667375 5.08221 0.683197 5.16358 0.713415 5.24002C0.713415 5.27335 0.713415 5.29335 0.760081 5.32669C0.777601 5.36145 0.797655 5.39487 0.820081 5.42669L4.15341 9.42669C4.2161 9.50194 4.29459 9.56246 4.38331 9.60394C4.47203 9.64542 4.56881 9.66685 4.66675 9.66669C4.82252 9.66699 4.97347 9.61274 5.09341 9.51336C5.16092 9.45739 5.21672 9.38865 5.25762 9.31109C5.29852 9.23352 5.32372 9.14865 5.33177 9.06134C5.33982 8.97402 5.33057 8.88597 5.30454 8.80223C5.27851 8.7185 5.23622 8.64072 5.18008 8.57335L2.76008 5.66669H10.6667C10.8436 5.66669 11.0131 5.59645 11.1382 5.47143C11.2632 5.3464 11.3334 5.17683 11.3334 5.00002C11.3334 4.82321 11.2632 4.65364 11.1382 4.52862C11.0131 4.40359 10.8436 4.33335 10.6667 4.33335Z'
        }
        fill={'white'}
      />
    </svg>
  ),
  checkEmail: <CheckEmailIcon />,
  clear: <ClearIcon />,
  close: (
    <svg
      fill={'none'}
      height={'100%'}
      viewBox={'0 0 14 14'}
      width={'100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z'
        }
        fill={'white'}
      />
    </svg>
  ),
  delete: (
    <svg
      fill={'none'}
      height={'100%'}
      viewBox={'0 0 16 16'}
      width={'100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M14 4.00108H10.6667V2.88775C10.651 2.46096 10.4668 2.05779 10.1544 1.76661C9.84195 1.47543 9.42683 1.32001 9 1.33442H7C6.57316 1.32001 6.15804 1.47543 5.84561 1.76661C5.53319 2.05779 5.34897 2.46096 5.33333 2.88775V4.00108H1.99999C1.82318 4.00108 1.65361 4.07132 1.52859 4.19634C1.40357 4.32137 1.33333 4.49094 1.33333 4.66775C1.33333 4.84456 1.40357 5.01413 1.52859 5.13915C1.65361 5.26418 1.82318 5.33441 1.99999 5.33441H2.66666V12.6677C2.66666 13.1982 2.87738 13.7069 3.25245 14.082C3.62752 14.457 4.13623 14.6677 4.66666 14.6677H11.3333C11.8638 14.6677 12.3725 14.457 12.7475 14.082C13.1226 13.7069 13.3333 13.1982 13.3333 12.6677V5.33441H14C14.1768 5.33441 14.3464 5.26418 14.4714 5.13915C14.5964 5.01413 14.6667 4.84456 14.6667 4.66775C14.6667 4.49094 14.5964 4.32137 14.4714 4.19634C14.3464 4.07132 14.1768 4.00108 14 4.00108ZM6.66666 2.88775C6.66666 2.78108 6.80666 2.66775 7 2.66775H9C9.19333 2.66775 9.33333 2.78108 9.33333 2.88775V4.00108H6.66666V2.88775ZM12 12.6677C12 12.8446 11.9298 13.0141 11.8047 13.1392C11.6797 13.2642 11.5101 13.3344 11.3333 13.3344H4.66666C4.48985 13.3344 4.32028 13.2642 4.19526 13.1392C4.07023 13.0141 3.99999 12.8446 3.99999 12.6677V5.33441H12V12.6677Z'
        }
        fill={'white'}
      />
    </svg>
  ),
  edit: (
    <svg
      fill={'none'}
      height={'100%'}
      viewBox={'0 0 16 16'}
      width={'100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M12.6667 13.3345H3.33334C3.15653 13.3345 2.98696 13.4047 2.86193 13.5297C2.73691 13.6548 2.66667 13.8243 2.66667 14.0011C2.66667 14.178 2.73691 14.3475 2.86193 14.4725C2.98696 14.5976 3.15653 14.6678 3.33334 14.6678H12.6667C12.8435 14.6678 13.0131 14.5976 13.1381 14.4725C13.2631 14.3475 13.3333 14.178 13.3333 14.0011C13.3333 13.8243 13.2631 13.6548 13.1381 13.5297C13.0131 13.4047 12.8435 13.3345 12.6667 13.3345Z'
        }
        fill={'white'}
      />
      <path
        d={
          'M3.33333 12.0012H3.39333L6.17333 11.7479C6.47786 11.7175 6.76269 11.5834 6.98 11.3679L12.98 5.36787C13.2129 5.12185 13.3387 4.79355 13.33 4.4549C13.3212 4.11625 13.1786 3.79488 12.9333 3.56121L11.1067 1.73454C10.8683 1.5106 10.5559 1.38211 10.2289 1.37351C9.90191 1.3649 9.58319 1.47679 9.33333 1.68787L3.33333 7.68787C3.11784 7.90518 2.98367 8.19001 2.95333 8.49454L2.66667 11.2745C2.65769 11.3722 2.67036 11.4706 2.70377 11.5628C2.73719 11.655 2.79053 11.7387 2.86 11.8079C2.92229 11.8697 2.99617 11.9185 3.0774 11.9517C3.15862 11.9849 3.2456 12.0017 3.33333 12.0012ZM10.18 2.66787L12 4.48787L10.6667 5.78787L8.88 4.00121L10.18 2.66787ZM4.24667 8.60787L8 4.88121L9.8 6.68121L6.06667 10.4145L4.06667 10.6012L4.24667 8.60787Z'
        }
        fill={'white'}
      />
    </svg>
  ),
  errorRote: <ErrorRouteIcon />,
  learn: <LearnIcon />,
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
  logo: <LogoIcon />,
  notFile: <NotFileIcon />,
  okEmail: <SuccessfullyEmail />,
  pageTurn: (
    <svg
      fill={'none'}
      height={'100%'}
      viewBox={'0 0 16 16'}
      width={'100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <g clipPath={'url(#clip0_5928_3026)'}>
        <path
          d={'M10.2733 11.06L7.21998 8L10.2733 4.94L9.33331 4L5.33331 8L9.33331 12L10.2733 11.06Z'}
          fill={'#808080'}
        />
      </g>
      <defs>
        <clipPath id={'clip0_5928_3026'}>
          <rect fill={'white'} height={'16'} width={'16'} />
        </clipPath>
      </defs>
    </svg>
  ),
  play: (
    <svg
      fill={'none'}
      height={'16'}
      viewBox={'0 0 16 16'}
      width={'16'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M7.99992 1.33337C6.68138 1.33337 5.39245 1.72437 4.29612 2.45691C3.19979 3.18945 2.34531 4.23064 1.84072 5.44882C1.33614 6.66699 1.20412 8.00744 1.46135 9.30064C1.71859 10.5938 2.35353 11.7817 3.28588 12.7141C4.21823 13.6464 5.40611 14.2814 6.69932 14.5386C7.99253 14.7958 9.33297 14.6638 10.5511 14.1592C11.7693 13.6547 12.8105 12.8002 13.5431 11.7038C14.2756 10.6075 14.6666 9.31858 14.6666 8.00004C14.6666 7.12456 14.4942 6.25766 14.1591 5.44882C13.8241 4.63998 13.333 3.90505 12.714 3.286C12.0949 2.66694 11.36 2.17588 10.5511 1.84084C9.74231 1.50581 8.8754 1.33337 7.99992 1.33337ZM7.99992 13.3334C6.94509 13.3334 5.91394 13.0206 5.03688 12.4345C4.15982 11.8485 3.47623 11.0156 3.07256 10.041C2.6689 9.06648 2.56328 7.99412 2.76907 6.95956C2.97485 5.92499 3.48281 4.97468 4.22869 4.2288C4.97457 3.48292 5.92487 2.97497 6.95944 2.76919C7.99401 2.5634 9.06636 2.66902 10.0409 3.07268C11.0154 3.47635 11.8484 4.15994 12.4344 5.037C13.0205 5.91406 13.3333 6.94521 13.3333 8.00004C13.3333 9.41453 12.7714 10.7711 11.7712 11.7713C10.771 12.7715 9.41441 13.3334 7.99992 13.3334Z'
        }
        fill={'white'}
      />
      <path
        d={
          'M8.22666 4.96667C8.06331 4.81613 7.85932 4.71692 7.64004 4.68136C7.42077 4.6458 7.19588 4.67547 6.99333 4.76667C6.7967 4.84621 6.62825 4.98257 6.5095 5.15832C6.39075 5.33407 6.32709 5.54123 6.32666 5.75334V10.2467C6.32709 10.4588 6.39075 10.6659 6.5095 10.8417C6.62825 11.0174 6.7967 11.1538 6.99333 11.2333C7.13784 11.2989 7.29464 11.333 7.45333 11.3333C7.73927 11.3321 8.01467 11.2252 8.22666 11.0333L10.6667 8.78667C10.7758 8.68674 10.8629 8.56519 10.9226 8.42976C10.9822 8.29433 11.013 8.14798 11.013 8C11.013 7.85203 10.9822 7.70568 10.9226 7.57025C10.8629 7.43482 10.7758 7.31327 10.6667 7.21334L8.22666 4.96667ZM7.66666 9.73334V6.26667L9.53999 8L7.66666 9.73334Z'
        }
        fill={'white'}
      />
    </svg>
  ),
  profile: <ProfileIcon />,
  search: (
    <svg
      fill={'none'}
      height={'100%'}
      viewBox={'0 0 20 20'}
      width={'100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <g clipPath={'url(#clip0_5661_2450)'}>
        <path
          d={
            'M17.2583 16.075L14.425 13.25C15.3392 12.0854 15.8352 10.6472 15.8333 9.16667C15.8333 7.84813 15.4423 6.5592 14.7098 5.46287C13.9773 4.36654 12.9361 3.51206 11.7179 3.00747C10.4997 2.50289 9.15927 2.37087 7.86607 2.6281C6.57286 2.88534 5.38497 3.52027 4.45262 4.45262C3.52027 5.38497 2.88534 6.57286 2.6281 7.86607C2.37087 9.15927 2.50289 10.4997 3.00747 11.7179C3.51206 12.9361 4.36654 13.9773 5.46287 14.7098C6.5592 15.4423 7.84813 15.8333 9.16667 15.8333C10.6472 15.8352 12.0854 15.3392 13.25 14.425L16.075 17.2583C16.1525 17.3364 16.2446 17.3984 16.3462 17.4407C16.4477 17.4831 16.5567 17.5048 16.6667 17.5048C16.7767 17.5048 16.8856 17.4831 16.9871 17.4407C17.0887 17.3984 17.1809 17.3364 17.2583 17.2583C17.3364 17.1809 17.3984 17.0887 17.4407 16.9871C17.4831 16.8856 17.5048 16.7767 17.5048 16.6667C17.5048 16.5567 17.4831 16.4477 17.4407 16.3462C17.3984 16.2446 17.3364 16.1525 17.2583 16.075ZM4.16667 9.16667C4.16667 8.17776 4.45991 7.21106 5.00932 6.38882C5.55873 5.56657 6.33962 4.92571 7.25325 4.54727C8.16688 4.16883 9.17222 4.06982 10.1421 4.26274C11.112 4.45567 12.0029 4.93187 12.7022 5.63114C13.4015 6.3304 13.8777 7.22131 14.0706 8.19122C14.2635 9.16112 14.1645 10.1665 13.7861 11.0801C13.4076 11.9937 12.7668 12.7746 11.9445 13.324C11.1223 13.8734 10.1556 14.1667 9.16667 14.1667C7.84059 14.1667 6.56882 13.6399 5.63114 12.7022C4.69345 11.7645 4.16667 10.4928 4.16667 9.16667Z'
          }
          fill={'white'}
        />
      </g>
      <defs>
        <clipPath id={'clip0_5661_2450'}>
          <rect fill={'white'} height={'20'} width={'20'} />
        </clipPath>
      </defs>
    </svg>
  ),
  setting: <SettingIcon />,
  showPass: <ShowPassIcon />,
  starActive: (
    <svg
      fill={'none'}
      height={'100%'}
      viewBox={'0 0 14 14'}
      width={'100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M10.7067 13.5C10.6 13.5004 10.4949 13.4753 10.4 13.4266L6.99999 11.6466L3.59999 13.4266C3.48959 13.4847 3.36511 13.5106 3.24071 13.5014C3.11631 13.4923 2.99698 13.4484 2.89628 13.3748C2.79558 13.3012 2.71755 13.2008 2.67107 13.085C2.62459 12.9693 2.61151 12.8428 2.63333 12.72L3.29999 8.96664L0.553328 6.29997C0.467633 6.21446 0.406842 6.10722 0.377479 5.98977C0.348117 5.87232 0.351291 5.74909 0.386661 5.63331C0.425301 5.51482 0.496379 5.40954 0.591828 5.32941C0.687277 5.24928 0.803276 5.19751 0.926661 5.17997L4.72666 4.62664L6.39999 1.20664C6.45458 1.09393 6.53982 0.998868 6.64594 0.932356C6.75205 0.865843 6.87476 0.830566 6.99999 0.830566C7.12523 0.830566 7.24794 0.865843 7.35405 0.932356C7.46017 0.998868 7.5454 1.09393 7.59999 1.20664L9.29333 4.61997L13.0933 5.17331C13.2167 5.19084 13.3327 5.24262 13.4282 5.32275C13.5236 5.40288 13.5947 5.50816 13.6333 5.62664C13.6687 5.74242 13.6719 5.86565 13.6425 5.9831C13.6131 6.10055 13.5524 6.20779 13.4667 6.29331L10.72 8.95997L11.3867 12.7133C11.4105 12.8383 11.398 12.9675 11.3507 13.0856C11.3035 13.2037 11.2234 13.3059 11.12 13.38C10.9993 13.4646 10.8539 13.5068 10.7067 13.5Z'
        }
        fill={'#E6AC39'}
      />
    </svg>
  ),
  starInActive: (
    <svg
      fill={'none'}
      height={'100%'}
      viewBox={'0 0 14 14'}
      width={'100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M10.7067 13.5C10.6 13.5004 10.4949 13.4753 10.4 13.4266L6.99999 11.6466L3.59999 13.4266C3.48959 13.4847 3.36511 13.5106 3.24071 13.5014C3.11631 13.4923 2.99698 13.4484 2.89628 13.3748C2.79558 13.3012 2.71755 13.2008 2.67107 13.085C2.62459 12.9693 2.61151 12.8428 2.63333 12.72L3.29999 8.96664L0.553328 6.29997C0.467633 6.21446 0.406842 6.10722 0.377479 5.98977C0.348117 5.87232 0.351291 5.74909 0.386661 5.63331C0.425301 5.51482 0.496379 5.40954 0.591828 5.32941C0.687277 5.24928 0.803276 5.19751 0.926661 5.17997L4.72666 4.62664L6.39999 1.20664C6.45458 1.09393 6.53982 0.998868 6.64594 0.932356C6.75205 0.865843 6.87476 0.830566 6.99999 0.830566C7.12523 0.830566 7.24794 0.865843 7.35405 0.932356C7.46017 0.998868 7.5454 1.09393 7.59999 1.20664L9.29333 4.61997L13.0933 5.17331C13.2167 5.19084 13.3327 5.24262 13.4282 5.32275C13.5236 5.40288 13.5947 5.50816 13.6333 5.62664C13.6687 5.74242 13.6719 5.86565 13.6425 5.9831C13.6131 6.10055 13.5524 6.20779 13.4667 6.29331L10.72 8.95997L11.3867 12.7133C11.4105 12.8383 11.398 12.9675 11.3507 13.0856C11.3035 13.2037 11.2234 13.3059 11.12 13.38C10.9993 13.4646 10.8539 13.5068 10.7067 13.5ZM6.99999 10.2333C7.10686 10.2306 7.21258 10.2559 7.30666 10.3066L9.81999 11.64L9.33999 8.83331C9.32137 8.72614 9.32925 8.61604 9.36295 8.51262C9.39665 8.4092 9.45514 8.3156 9.53333 8.23997L11.5333 6.28664L8.73333 5.87331C8.63065 5.85263 8.53429 5.80806 8.45205 5.7432C8.36982 5.67834 8.30402 5.59501 8.25999 5.49997L6.99999 2.99997L5.73999 5.49997C5.69176 5.59578 5.62112 5.67853 5.53408 5.7412C5.44703 5.80387 5.34615 5.84462 5.23999 5.85997L2.43999 6.27331L4.43999 8.22664C4.51818 8.30226 4.57667 8.39587 4.61037 8.49929C4.64407 8.60271 4.65195 8.71281 4.63333 8.81997L4.15333 11.5933L6.66666 10.26C6.77316 10.2204 6.88856 10.2112 6.99999 10.2333Z'
        }
        fill={'#E6AC39'}
      />
    </svg>
  ),
  tick: <TickIcon />,
}

export type IconName = keyof typeof icons

type IconSvgType = {
  name: IconName
}

export const IconSvg = (props: IconSvgType) => {
  return icons[props.name] || null
}
