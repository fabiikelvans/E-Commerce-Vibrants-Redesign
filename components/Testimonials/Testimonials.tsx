import React from 'react';
import {BadgeCheckIcon} from "@heroicons/react/outline";
import Button from "../Button/Button";

function Testimonials() {
    return (
        <div className='flex flex-col md:flex-row justify-between md:space-x-6 space-y-6 md:space-y-0 my-6'>
            <div className="flex flex-col rounded-xl items-center w-[100%] md:w-[50%] px-20 py-32 bg-[#FBFAFF]">
                <div className='animate-[spin_3s_ease-in_infinite]'>
                    <svg width="75" height="75" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#D8E0FF" offset="0%"></stop>
                                <stop stop-color="#D3C4FF" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M72.6457 39.8751L65.6732 39.255L65.8167 37.6414L71.4943 38.1463L71.6183 36.7518L72.9132 36.867L72.6457 39.8751Z" fill="url(#rainbow)"></path>
                        <path d="M64.5616 44.6434C64.7428 44.0924 65.0403 43.6464 65.4542 43.3052C65.868 42.9641 66.3721 42.7543 66.9663 42.6759C67.5647 42.606 68.2218 42.6886 68.9374 42.9239C69.6531 43.1591 70.2279 43.4814 70.6617 43.8907C71.0999 44.3084 71.3843 44.7773 71.5151 45.2975C71.6459 45.8177 71.6207 46.3533 71.4396 46.9043C71.2584 47.4553 70.9609 47.9014 70.547 48.2425C70.1331 48.5836 69.627 48.7892 69.0285 48.8591C68.4344 48.9375 67.7794 48.8591 67.0638 48.6238C66.3481 48.3886 65.7712 48.0621 65.3331 47.6444C64.8992 47.2351 64.6169 46.7704 64.4861 46.2502C64.3553 45.73 64.3805 45.1944 64.5616 44.6434ZM65.8631 45.0712C65.7299 45.4766 65.8 45.8505 66.0733 46.193C66.3446 46.5418 66.8445 46.8359 67.5728 47.0753C68.3011 47.3148 68.8779 47.3745 69.3033 47.2547C69.7266 47.1412 70.0048 46.8818 70.1381 46.4765C70.2692 46.0775 70.1992 45.7036 69.9279 45.3547C69.6545 45.0122 69.1536 44.7213 68.4253 44.4819C67.697 44.2425 67.1212 44.1795 66.6979 44.293C66.2725 44.4128 65.9943 44.6722 65.8631 45.0712Z" fill="url(#rainbow)"></path>
                        <path d="M61.3385 51.9245C61.6605 51.4421 62.0666 51.092 62.5568 50.8741C63.0469 50.6563 63.5887 50.5892 64.1822 50.6728C64.7775 50.7656 65.3884 51.0212 66.0149 51.4394C66.6415 51.8577 67.109 52.3221 67.4174 52.8327C67.7277 53.3524 67.8762 53.8804 67.8629 54.4166C67.8496 54.9528 67.6819 55.4621 67.3599 55.9445C67.0379 56.4269 66.6318 56.777 66.1416 56.9949C65.6515 57.2127 65.1088 57.2752 64.5135 57.1824C63.92 57.0988 63.31 56.8478 62.6835 56.4296C62.0569 56.0113 61.5885 55.5422 61.2782 55.0225C60.9698 54.5119 60.8222 53.9886 60.8355 53.4524C60.8488 52.9162 61.0165 52.4069 61.3385 51.9245ZM62.4779 52.6852C62.241 53.0401 62.2084 53.4191 62.3801 53.8223C62.5481 54.231 62.9509 54.6482 63.5885 55.0739C64.2261 55.4996 64.7659 55.7117 65.2078 55.7101C65.646 55.7141 65.9836 55.5387 66.2205 55.1838C66.4537 54.8345 66.4863 54.4555 66.3183 54.0467C66.1466 53.6435 65.742 53.2291 65.1043 52.8034C64.4667 52.3777 63.9288 52.1629 63.4906 52.1589C63.0487 52.1605 62.7111 52.3359 62.4779 52.6852Z" fill="url(#rainbow)"></path>
                        <path d="M59.5231 59.8119C59.9223 59.4891 60.3578 59.3598 60.8298 59.424C61.3008 59.4976 61.7207 59.7624 62.0896 60.2186C62.4585 60.6748 62.6275 61.1383 62.5966 61.6091C62.5648 62.0892 62.3492 62.4907 61.9501 62.8134C61.5509 63.1362 61.1158 63.2608 60.6448 63.1872C60.178 63.1189 59.7602 62.8566 59.3913 62.4004C59.0225 61.9442 58.8514 61.4781 58.878 61.0022C58.9089 60.5314 59.1239 60.1346 59.5231 59.8119ZM58.6572 65.3731L57.7318 66.1213L57.0475 57.6727L57.9728 56.9245L58.6572 65.3731ZM60.0387 60.4495C59.8624 60.592 59.7837 60.7757 59.8026 61.0005C59.8163 61.2295 59.9384 61.4865 60.1689 61.7716C60.3995 62.0568 60.6253 62.23 60.8463 62.2913C61.0622 62.3568 61.2582 62.3183 61.4345 62.1758C61.6056 62.0375 61.6822 61.8512 61.6643 61.6171C61.6506 61.3881 61.5306 61.1336 61.3042 60.8537C61.0779 60.5737 60.8521 60.4005 60.6268 60.334C60.4058 60.2727 60.2097 60.3112 60.0387 60.4495ZM53.7546 60.2324C54.0138 60.0228 54.2953 59.8938 54.599 59.8453C54.9018 59.8063 55.2024 59.8547 55.5009 59.9906C55.7994 60.1264 56.0702 60.3447 56.3133 60.6454C56.5564 60.9461 56.7132 61.2566 56.7836 61.5769C56.854 61.8972 56.8363 62.1987 56.7305 62.4814C56.6237 62.7735 56.4408 63.0243 56.1816 63.2339C55.7824 63.5567 55.3473 63.6813 54.8763 63.6077C54.4043 63.5436 53.9839 63.2834 53.615 62.8272C53.2462 62.371 53.0777 61.9028 53.1095 61.4227C53.1404 60.9519 53.3554 60.5551 53.7546 60.2324ZM54.2702 60.87C54.0939 61.0125 54.0152 61.1962 54.0341 61.421C54.052 61.6551 54.1741 61.9122 54.4004 62.1921C54.6268 62.4721 54.8505 62.6427 55.0715 62.704C55.2916 62.7747 55.4897 62.7388 55.666 62.5963C55.8371 62.458 55.9158 62.2743 55.9021 62.0453C55.8884 61.8163 55.7663 61.5593 55.5357 61.2742C55.3052 60.989 55.0794 60.8158 54.8583 60.7545C54.6373 60.6932 54.4412 60.7317 54.2702 60.87Z" fill="url(#rainbow)"></path>
                        <path d="M47.2758 69.9871L49.4356 69.393L49.7857 70.6657L43.9041 72.2835L43.554 71.0108L45.7138 70.4167L44.2074 64.9401L45.7694 64.5105L47.2758 69.9871Z" fill="url(#rainbow)"></path>
                        <path d="M35.8118 66.0188L37.1843 67.953L38.6742 67.9358L38.6516 65.9859L40.2715 65.9672L40.3526 72.9667L37.3228 73.0018C36.7028 73.009 36.165 72.9118 35.7093 72.7104C35.247 72.5091 34.8902 72.2199 34.6392 71.8428C34.3881 71.4657 34.2596 71.0171 34.2536 70.4972C34.2476 69.9772 34.369 69.5258 34.6179 69.1429C34.8603 68.7667 35.2102 68.476 35.6679 68.2706L34.0719 66.039L35.8118 66.0188ZM35.8935 70.4782C35.898 70.8715 36.0282 71.17 36.2839 71.3737C36.5397 71.5841 36.9109 71.6865 37.3975 71.6808L38.7174 71.6656L38.6892 69.2257L37.3693 69.241C36.8826 69.2466 36.5139 69.3576 36.263 69.5738C36.0122 69.7901 35.889 70.0915 35.8935 70.4782Z" fill="url(#rainbow)"></path>
                        <path d="M29.1529 65.0354C30.114 65.3116 30.7872 65.7929 31.1726 66.4794C31.5516 67.164 31.5994 67.9997 31.3159 68.9864L30.2333 72.754L28.6763 72.3066L29.7423 68.5967C30.0884 67.3921 29.7617 66.6462 28.7621 66.359C28.2752 66.2191 27.8621 66.2565 27.523 66.4712C27.182 66.6923 26.9222 67.1136 26.7436 67.7351L25.6776 71.445L24.1399 71.0031L25.2224 67.2356C25.5059 66.2488 25.9932 65.5669 26.6843 65.1897C27.3689 64.8107 28.1917 64.7593 29.1529 65.0354Z" fill="url(#rainbow)"></path>
                        <path d="M21.5858 61.96C22.0569 62.2501 22.4755 62.594 22.8413 62.9916C23.198 63.3913 23.4468 63.7755 23.5878 64.1442L22.4798 64.8946C22.3397 64.5499 22.1286 64.2125 21.8466 63.8822C21.5645 63.5519 21.2475 63.2784 20.8956 63.0617C20.5039 62.8205 20.1794 62.699 19.9222 62.6971C19.6615 62.701 19.4717 62.7994 19.3528 62.9924C19.2654 63.1343 19.2505 63.2857 19.3081 63.4464C19.3565 63.6093 19.4513 63.7734 19.5923 63.9385C19.7276 64.1001 19.9219 64.3059 20.1751 64.5558C20.5629 64.9433 20.8682 65.2802 21.0913 65.5663C21.3144 65.8524 21.4576 66.1794 21.5208 66.5471C21.5783 66.9114 21.4847 67.2922 21.24 67.6896C21.0268 68.0359 20.7409 68.2904 20.3822 68.4532C20.0201 68.6217 19.601 68.6728 19.125 68.6067C18.6433 68.5371 18.13 68.3345 17.585 67.999C17.2047 67.7647 16.8608 67.4903 16.5535 67.1758C16.2461 66.8612 16.0086 66.5349 15.841 66.1968L16.9117 65.4117C17.2701 66.063 17.7246 66.5582 18.2752 66.8973C18.6612 67.135 18.9863 67.2491 19.2506 67.2395C19.5091 67.2265 19.7013 67.1178 19.8272 66.9135C19.953 66.7091 19.9424 66.4912 19.7953 66.2597C19.639 66.0303 19.372 65.7328 18.9944 65.3671C18.6066 64.9796 18.3012 64.6428 18.0782 64.3566C17.8551 64.0705 17.713 63.7481 17.652 63.3895C17.5853 63.0275 17.6743 62.6477 17.919 62.2504C18.1287 61.9098 18.4175 61.657 18.7853 61.492C19.1439 61.3292 19.5641 61.2826 20.0458 61.3522C20.5275 61.4218 21.0408 61.6244 21.5858 61.96Z" fill="url(#rainbow)"></path>
                        <path d="M12.353 62.341L13.9196 63.9421L12.9761 64.8652L8.70998 60.5051L9.65348 59.582L11.22 61.183L15.2799 57.2107L16.4129 58.3686L12.353 62.341Z" fill="url(#rainbow)"></path>
                        <path d="M8.65528 50.2246L9.78419 49.58L12.4719 54.2866L6.39314 57.7578L3.76992 53.164L4.89883 52.5194L6.72368 55.715L8.04363 54.9613L6.43201 52.139L7.52618 51.5142L9.1378 54.3365L10.5446 53.5332L8.65528 50.2246Z" fill="url(#rainbow)"></path>
                        <path d="M1.71133 48.92L0.985014 45.8241C0.811428 45.0842 0.801189 44.3984 0.954296 43.7667C1.09939 43.1301 1.39176 42.5958 1.83142 42.164C2.26955 41.7257 2.82937 41.4266 3.51087 41.2667C4.19236 41.1068 4.82679 41.1257 5.41415 41.3235C5.99998 41.5147 6.50269 41.8624 6.92226 42.3666C7.33382 42.8658 7.6264 43.4853 7.79998 44.2253L8.5263 47.3212L1.71133 48.92ZM6.52341 44.6069C6.36353 43.9254 6.04816 43.4276 5.57731 43.1135C5.09845 42.7945 4.53449 42.7111 3.88545 42.8633C3.2364 43.0156 2.77162 43.3403 2.4911 43.8376C2.20257 44.3298 2.13825 44.9167 2.29813 45.5982L2.63617 47.0391L6.86145 46.0478L6.52341 44.6069Z" fill="url(#rainbow)"></path>
                        <path d="M7.17646 32.5002C7.08529 33.046 6.92454 33.5632 6.6942 34.052C6.45838 34.533 6.1963 34.9083 5.90796 35.1778L4.79525 34.4343C5.06167 34.1747 5.29469 33.852 5.4943 33.4663C5.69391 33.0806 5.82777 32.6838 5.89587 32.2762C5.97166 31.8225 5.96192 31.4761 5.86666 31.2372C5.76482 30.9971 5.60212 30.8584 5.37855 30.821C5.21416 30.7936 5.06838 30.8368 4.9412 30.9508C4.80855 31.057 4.69232 31.2066 4.59251 31.3994C4.4938 31.5857 4.37644 31.8432 4.24041 32.172C4.0276 32.6772 3.83072 33.087 3.64977 33.4015C3.46881 33.716 3.21993 33.9718 2.90311 34.1689C2.5874 34.3595 2.1994 34.4164 1.73911 34.3395C1.338 34.2725 0.994466 34.1036 0.708511 33.8328C0.415981 33.5608 0.210617 33.192 0.0924212 32.7261C-0.0246767 32.2537 -0.0305021 31.7019 0.0749449 31.0706C0.148538 30.6301 0.273088 30.2082 0.448595 29.8049C0.624102 29.4016 0.836851 29.0587 1.08684 28.776L2.21765 29.4718C1.74945 30.0492 1.46208 30.6569 1.35553 31.2947C1.28084 31.7418 1.2977 32.086 1.40612 32.3271C1.51563 32.5617 1.68875 32.6988 1.92547 32.7383C2.16219 32.7779 2.36005 32.6859 2.51905 32.4623C2.67257 32.2311 2.84751 31.8717 3.04388 31.3841C3.25668 30.8789 3.45357 30.4691 3.63452 30.1546C3.81547 29.8401 4.06052 29.587 4.36966 29.3953C4.6799 29.1971 5.06516 29.1364 5.52545 29.2133C5.91999 29.2792 6.26297 29.4514 6.5544 29.7299C6.84036 30.0007 7.04188 30.3723 7.15898 30.8447C7.27608 31.3171 7.2819 31.869 7.17646 32.5002Z" fill="url(#rainbow)"></path>
                        <path d="M8.44148 22.8619L7.09775 25.8211L8.20719 27.0058L7.52085 28.5173L2.43717 22.7822L3.0987 21.3254L10.7665 21.3697L10.0636 22.9175L8.44148 22.8619ZM7.11067 22.8177L4.21153 22.7203L6.1928 24.8391L7.11067 22.8177Z" fill="url(#rainbow)"></path>
                        <path d="M7.91162 15.6552L6.49688 17.3919L5.47347 16.5583L9.32611 11.8289L10.3495 12.6626L8.93478 14.3992L13.3385 17.9866L12.3154 19.2426L7.91162 15.6552Z" fill="url(#rainbow)"></path>
                        <path d="M11.759 9.43952L13.0075 8.40724L17.468 13.8021L16.2195 14.8344L11.759 9.43952Z" fill="url(#rainbow)"></path>
                        <path d="M21.4825 11.1164C20.9961 11.3801 20.4893 11.5714 19.9623 11.6902C19.4379 11.8 18.9808 11.8241 18.591 11.7624L18.4931 10.4278C18.8617 10.4782 19.2595 10.4636 19.6864 10.3838C20.1133 10.3041 20.5085 10.1657 20.8718 9.96874C21.2763 9.74954 21.5434 9.5289 21.6733 9.30685C21.8 9.07893 21.8093 8.86533 21.7013 8.66605C21.6219 8.51953 21.4981 8.43115 21.3301 8.40091C21.1647 8.36163 20.9753 8.36193 20.7619 8.4018C20.5543 8.4385 20.279 8.50428 19.9361 8.59915C19.4069 8.74194 18.9626 8.83867 18.6033 8.88933C18.2441 8.93999 17.8893 8.90101 17.539 8.7724C17.1946 8.6406 16.9112 8.36957 16.6888 7.95929C16.495 7.60177 16.417 7.22699 16.4547 6.83497C16.4893 6.43708 16.6539 6.04831 16.9486 5.66866C17.2492 5.28584 17.6808 4.94194 18.2434 4.63696C18.6361 4.4241 19.0454 4.26291 19.4714 4.15336C19.8973 4.04382 20.2986 4.00071 20.6752 4.02405L20.8218 5.34368C20.0785 5.32948 19.4227 5.47646 18.8541 5.78462C18.4556 6.00065 18.1945 6.22556 18.071 6.45934C17.9534 6.68994 17.9517 6.91074 18.0661 7.12174C18.1805 7.33274 18.3747 7.43221 18.6487 7.42017C18.9254 7.39908 19.3164 7.31605 19.8218 7.17106C20.351 7.02827 20.7953 6.93154 21.1545 6.88088C21.5138 6.83022 21.8641 6.86786 22.2053 6.99379C22.5524 7.11655 22.8372 7.38306 23.0596 7.79333C23.2502 8.145 23.3253 8.52136 23.2848 8.92243C23.2471 9.31446 23.0779 9.70188 22.7774 10.0847C22.4768 10.4675 22.0452 10.8114 21.4825 11.1164Z" fill="url(#rainbow)"></path>
                        <path d="M25.8508 2.84692L26.3143 4.63791L29.4509 3.82612L29.7767 5.08466L26.64 5.89645L27.2789 8.36511L25.7106 8.77101L23.9567 1.99428L29.078 0.668861L29.4037 1.9274L25.8508 2.84692Z" fill="url(#rainbow)"></path>
                        <path d="M37.3838 5.51844L34.1339 5.49335L33.5023 6.98852L31.8424 6.9757L35.0163 0L36.6163 0.0123525L39.6921 7.03631L37.9922 7.02318L37.3838 5.51844ZM36.8833 4.28454L35.794 1.59605L34.6633 4.2674L36.8833 4.28454Z" fill="url(#rainbow)"></path>
                        <path d="M44.0216 8.15234C43.336 7.95534 42.7569 7.62939 42.2841 7.17447C41.8196 6.71499 41.5026 6.17652 41.3332 5.55906C41.1721 4.93703 41.1872 4.29283 41.3787 3.62646C41.5702 2.96009 41.8984 2.40931 42.3633 1.97412C42.8365 1.53436 43.391 1.24627 44.0267 1.10986C44.6707 0.968889 45.3386 0.99782 46.0306 1.19666C46.6137 1.36419 47.1097 1.61768 47.5185 1.95712C47.9337 2.29839 48.2463 2.70728 48.4562 3.18378L47.1915 3.81924C46.8876 3.16312 46.3992 2.7384 45.7264 2.54508C45.3099 2.42541 44.9116 2.41154 44.5315 2.50346C44.1531 2.58897 43.8241 2.76842 43.5444 3.04181C43.2711 3.31703 43.0746 3.66289 42.9549 4.07937C42.8353 4.49585 42.8182 4.89325 42.9037 5.27158C42.9956 5.65175 43.1783 5.98169 43.4517 6.2614C43.7269 6.5347 44.0727 6.73119 44.4892 6.85086C45.162 7.04417 45.8023 6.94028 46.41 6.53918L47.1444 7.74906C46.7118 8.04786 46.2289 8.23165 45.6958 8.30045C45.1628 8.36925 44.6047 8.31988 44.0216 8.15234Z" fill="url(#rainbow)"></path>
                        <path d="M52.8888 5.43176L50.9687 4.27829L51.6484 3.14675L56.8775 6.28792L56.1977 7.41945L54.2775 6.26597L51.3527 11.135L49.964 10.3008L52.8888 5.43176Z" fill="url(#rainbow)"></path>
                        <path d="M59.6147 8.37812L60.8131 9.46826L56.1026 14.6462L54.9042 13.5561L59.6147 8.37812Z" fill="url(#rainbow)"></path>
                        <path d="M59.9986 19.1257C59.5841 18.5288 59.3383 17.9001 59.261 17.2395C59.1876 16.5844 59.2803 15.964 59.5392 15.3784C59.8074 14.7945 60.2235 14.3067 60.7875 13.9151C61.3515 13.5234 61.9512 13.3058 62.5865 13.2623C63.2311 13.2205 63.8476 13.3485 64.4357 13.6462C65.0277 13.9493 65.531 14.3993 65.9454 14.9962C66.3599 15.5931 66.6039 16.2191 66.6773 16.8742C66.7508 17.5293 66.6553 18.1516 66.3909 18.741C66.132 19.3266 65.7206 19.8152 65.1565 20.2069C64.5925 20.5985 63.9882 20.8153 63.3436 20.8571C62.7044 20.8951 62.0908 20.7652 61.5026 20.4676C60.9144 20.1699 60.4131 19.7226 59.9986 19.1257ZM61.1321 18.3386C61.3679 18.6781 61.6575 18.9315 62.0009 19.0988C62.3498 19.2624 62.7172 19.3238 63.1029 19.2832C63.4925 19.2481 63.8652 19.107 64.2211 18.8598C64.5771 18.6126 64.8395 18.3127 65.0085 17.96C65.1813 17.6127 65.2493 17.2489 65.2125 16.8687C65.1812 16.4846 65.0477 16.1228 64.8119 15.7833C64.5762 15.4438 64.2838 15.1923 63.9349 15.0288C63.5914 14.8615 63.2249 14.7954 62.8354 14.8305C62.4497 14.8711 62.0788 15.015 61.7229 15.2621C61.367 15.5093 61.1026 15.8065 60.9298 16.1537C60.7608 16.5065 60.692 16.8749 60.7233 17.2589C60.7601 17.6392 60.8964 17.9991 61.1321 18.3386Z" fill="url(#rainbow)"></path>
                        <path d="M71.8165 27.7709L65.1343 29.8562L64.7381 28.5866L67.7555 23.9889L63.6984 25.255L63.2218 23.7277L69.904 21.6424L70.3032 22.9215L67.2828 27.5096L71.3399 26.2435L71.8165 27.7709Z" fill="url(#rainbow)"></path>
                    </svg>
                </div>
                <h5 className='text-sm tracking-wide font-bold mt-6'>WELLNESS SIMPLIFIED</h5>
                <h1 className='my-6 text-2xl md:text-4xl font-bold text-[#262626]'>Feel the difference.</h1>
                <p className='text-center font-medium leading-7 mb-6'>
                    Our safe & effective patches are backed by our upfront promise and community.
                </p>
                <Button title='Shop Now' bordered={true}/>
            </div>

            <div className="w-[100%] md:w-[50%] bg-[#F2F6FF] rounded-xl px-20 py-12 flex flex-col space-y-8 md:space-y-0 justify-around">
                <div className='bg-white p-4 md:p-8 w-[80%] rounded-xl animate-pulse'>
                    <p className='font-semibold text-[#262626] text-[15px]'>I've never slept better and woke up feeling totally refreshed.🙌</p>
                </div>

                <div className='bg-white p-4 md:p-8 w-[80%] rounded-xl animate-pulse self-end'>
                    <p className='font-semibold text-[#262626] text-[15px]'>I felt so much more relaxed all day.💯</p>
                </div>

                <div className='bg-white p-4 md:p-8 w-[80%] rounded-xl animate-pulse'>
                    <p className='font-semibold text-[#262626] text-[15px]'>Amazing! I gave one to my mom for her back pain and she said it really works.🙏</p>
                </div>
            </div>
        </div>

    );
}

export default Testimonials;