import { VStack, Flex, Text } from '@chakra-ui/react';
import React, { Component } from 'react'
import { ArrowForwardIcon, Icon } from '@chakra-ui/icons'

class ServiceSectionComponent extends React.Component {
    render() {
        return(
            <VStack w='100%' px={{base: '60px', md: '120px'}} mx='auto' maxW='1440px'>
                <Flex w='100%' flexDir='column' justifyContent='flex-start' >
                    <Flex fontSize='60px' fontWeight='600' gap='3' w='100%'  lineHeight='3.75rem'>
                        Scopri i
                        <Text as='span' color='#B3B6B9'>servizi</Text>
                    </Flex>
                    <Flex w='100%' gap='6' justifyContent='flex-start' py='10' h='100%' flexDir={{base: 'column', md: 'row'}}>
                        <Flex w={{base: 'none', md:'384px'}} p='5' gap='5'  border='1px solid' borderColor='#C8CBCD' borderRadius='lg' overflow='hidden' alignItems='center' flexDirection='column' >
                            <Flex w='100%'>
                                <Icon viewBox="0 0 45 45" w='70px' height='70px' color='#FFDD00'>
                                    <path
                                        d="M25.3437 26.4844C26.4432 26.4844 27.3356 25.592 27.3356 24.4925V23.6851H28.451C28.6529 25.4751 30.172 26.8721 32.0152 26.8721C33.853 26.8721 35.3721 25.4751 35.5687 23.6851H37.1037C38.1501 23.6851 39 22.8352 39 21.7888V18.3044C39 16.6684 37.8314 15.2661 36.2273 14.9634L33.3271 14.4216C32.3657 14.2357 31.4946 13.7789 30.8094 13.099L26.6451 8.98241C26.0077 8.35033 25.1578 7.99976 24.2548 7.99976H12.5054C11.4431 7.99976 10.4338 8.50436 9.80175 9.34361L5.83924 14.565C5.29214 15.298 5 16.1638 5 17.0774V21.7942C5 22.8406 5.84987 23.6904 6.89627 23.6904H8.42603C8.62787 25.4805 10.147 26.8774 11.9902 26.8774C13.828 26.8774 15.3471 25.4805 15.5437 23.6904H16.6591V24.4978C16.6591 25.5973 17.5515 26.4897 18.651 26.4897H18.9219L21.1209 27.6104L18.8369 28.7737C18.3057 29.1296 18.8316 29.4801 18.8369 29.4855L21.1209 30.6487L18.8369 31.812C18.1729 32.1679 18.8316 32.5184 18.8369 32.5237L21.1209 33.687L18.9219 34.8078H6.32792C5.59491 34.8078 5 35.4027 5 36.1357C5 36.8687 5.59491 37.4636 6.32792 37.4636H37.6668C38.3998 37.4636 38.9947 36.8687 38.9947 36.1357C38.9947 35.4027 38.3998 34.8078 37.6668 34.8078H25.0728L22.8738 33.687L25.1578 32.5237C25.1631 32.5184 25.8058 32.1679 25.1578 31.812L22.8738 30.6487L25.1578 29.4855C25.1631 29.4801 25.7368 29.1296 25.1578 28.7737L22.8738 27.6104L25.0728 26.4897H25.3437V26.4844ZM32.0098 26.0754C30.4695 26.0754 29.2212 24.8271 29.2212 23.2867C29.2212 21.7464 30.4695 20.4981 32.0098 20.4981C33.5449 20.4981 34.7932 21.7464 34.7932 23.2867C34.7932 24.8271 33.5449 26.0754 32.0098 26.0754ZM5.79675 21.7942V17.0774C5.79675 16.3444 6.03046 15.6432 6.47664 15.0537L10.4391 9.83228C10.9225 9.18957 11.6927 8.80713 12.5054 8.80713H24.2495C24.94 8.80713 25.588 9.07271 26.0767 9.55607L30.2411 13.6726C31.0378 14.4641 32.0523 14.9952 33.1731 15.213L36.0733 15.7548C37.3056 15.9832 38.1979 17.0615 38.1979 18.3097V21.7942C38.1979 22.3997 37.7039 22.8937 37.0984 22.8937H35.5633C35.3668 21.1036 33.8477 19.7067 32.0098 19.7067C30.1667 19.7067 28.6476 21.1036 28.4457 22.8937H15.5437C15.3471 21.1036 13.828 19.7067 11.9902 19.7067C10.147 19.7067 8.62787 21.1036 8.42603 22.8937H6.89627C6.29074 22.8937 5.79675 22.3997 5.79675 21.7942ZM11.9902 26.0754C10.4498 26.0754 9.20153 24.8271 9.20153 23.2867C9.20153 21.7464 10.4498 20.4981 11.9902 20.4981C13.5252 20.4981 14.7735 21.7464 14.7735 23.2867C14.7735 24.8271 13.5252 26.0754 11.9902 26.0754ZM17.4559 24.4925V23.6851H26.5388V24.4925C26.5388 25.1511 26.0023 25.6876 25.3437 25.6876H18.651C17.9923 25.6876 17.4559 25.1511 17.4559 24.4925ZM38.1979 36.1197C38.1979 36.4119 37.9589 36.6509 37.6668 36.6509H6.32792C6.03578 36.6509 5.79675 36.4119 5.79675 36.1197C5.79675 35.8276 6.03578 35.5886 6.32792 35.5886H37.6668C37.9589 35.5886 38.1979 35.8276 38.1979 36.1197ZM23.3146 34.7918H20.6747L21.9973 34.1225L23.3146 34.7918ZM24.1008 32.1572L21.9973 33.2249L19.8939 32.1572L21.9973 31.0896L24.1008 32.1572ZM24.1008 29.1243L21.9973 30.1919L19.8939 29.1243L21.9973 28.0513L24.1008 29.1243ZM21.9973 27.1589L20.68 26.4897H23.32L21.9973 27.1589Z"
                                        fill="#1E2329"
                                    />
                                    <path
                                        d="M29.8161 15.9728C29.9861 15.9728 30.1401 15.8612 30.1933 15.7019C30.2464 15.5372 30.1933 15.3566 30.0552 15.2557C29.7896 15.0539 29.5346 14.8414 29.3115 14.6183L25.1472 10.5018C24.9082 10.2627 24.5895 10.1353 24.2548 10.1353H12.5054C12.1123 10.1353 11.7299 10.3212 11.4909 10.6399L7.92674 15.3407C7.83644 15.4629 7.82051 15.6222 7.88956 15.7603C7.95861 15.8984 8.09672 15.9834 8.24544 15.9834H29.8161V15.9728ZM24.5841 11.0648L28.7432 15.176H19.4318V10.9267H24.2495C24.377 10.9267 24.4938 10.9745 24.5841 11.0648ZM12.1283 11.1179C12.2186 11.0011 12.3567 10.932 12.5054 10.932H18.6298V15.1813H9.05282L12.1283 11.1179Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M29.3115 14.6183C29.5346 14.8414 29.7895 15.0539 30.0551 15.2557C30.1932 15.3567 30.2463 15.5372 30.1932 15.7019C30.1401 15.8613 29.9861 15.9728 29.8161 15.9728V15.9834H8.24541C8.09668 15.9834 7.95858 15.8984 7.88953 15.7603C7.82048 15.6222 7.83641 15.4629 7.92671 15.3407L11.4908 10.6399C11.7299 10.3212 12.1123 10.1353 12.5054 10.1353H24.2548C24.5894 10.1353 24.9081 10.2628 25.1471 10.5018L29.3115 14.6183ZM25.2179 10.4311C25.2178 10.431 25.2179 10.4311 25.2179 10.4311L29.3818 14.5472C29.6004 14.7658 29.8518 14.9755 30.115 15.1756C30.2896 15.3038 30.3538 15.53 30.2884 15.7326C30.2323 15.9009 30.0873 16.0268 29.9161 16.0625V16.0834H8.24541C8.05817 16.0834 7.88579 15.9765 7.80009 15.8051C7.71386 15.6326 7.7341 15.4331 7.84629 15.2813L7.84702 15.2803L11.4108 10.5799C11.4108 10.58 11.4109 10.5798 11.4108 10.5799C11.6692 10.2356 12.0816 10.0353 12.5054 10.0353H24.2548C24.6151 10.0353 24.9595 10.1728 25.2179 10.4311ZM24.5134 11.1355C24.4421 11.0642 24.3507 11.0267 24.2495 11.0267H19.5318V15.0761H28.4997L24.5134 11.1355ZM24.5841 11.0648C24.4938 10.9745 24.377 10.9267 24.2495 10.9267H19.4318V15.1761H28.7431L24.5841 11.0648ZM12.2074 11.1791C12.2073 11.1792 12.2075 11.179 12.2074 11.1791L9.25388 15.0814H18.5297V11.032H12.5054C12.3882 11.032 12.279 11.0866 12.2074 11.1791ZM12.1282 11.1179C12.2185 11.0011 12.3566 10.932 12.5054 10.932H18.6297V15.1814H9.05279L12.1282 11.1179Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M21.749 17.1711H20.352C20.1066 17.1711 19.9036 17.3741 19.9036 17.6194C19.9036 17.8648 20.1066 18.0678 20.352 18.0678H21.749C21.9943 18.0678 22.1973 17.8648 22.1973 17.6194C22.1973 17.3741 21.9943 17.1711 21.749 17.1711Z"
                                        fill="#1E2329"
                                        stroke="#1E2329"
                                        strokeWidth="0.1"
                                    />
                                    <path
                                        d="M11.2043 17.1711H9.80737C9.56198 17.1711 9.359 17.3741 9.359 17.6194C9.359 17.8648 9.56198 18.0678 9.80737 18.0678H11.2043C11.4497 18.0678 11.6527 17.8648 11.6527 17.6194C11.6527 17.3741 11.4497 17.1711 11.2043 17.1711Z"
                                        fill="#1E2329"
                                        stroke="#1E2329"
                                        strokeWidth="0.1"
                                    />
                                    <path
                                        d="M32.0107 21.4307C30.9844 21.4307 30.1547 22.2659 30.1547 23.2867C30.1547 24.3076 30.9898 25.1426 32.0107 25.1426C33.0316 25.1426 33.8666 24.3076 33.8666 23.2867C33.8666 22.2658 33.0316 21.4307 32.0107 21.4307ZM32.0107 24.2512C31.4806 24.2512 31.0515 23.8221 31.0515 23.292C31.0515 22.7619 31.4806 22.3328 32.0107 22.3328C32.5408 22.3328 32.9699 22.7619 32.9699 23.292C32.9699 23.8219 32.5356 24.2512 32.0107 24.2512Z"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="0.1"
                                    />
                                    <path
                                        d="M11.9912 21.4097C10.9544 21.4097 10.1087 22.2554 10.1087 23.2922C10.1087 24.3291 10.9544 25.1748 11.9912 25.1748C13.0282 25.1748 13.8684 24.3289 13.8684 23.2922C13.8684 22.2501 13.0227 21.4097 11.9912 21.4097ZM11.9912 24.2727C11.4503 24.2727 11.0054 23.8328 11.0054 23.2869C11.0054 22.746 11.4453 22.3012 11.9912 22.3012C12.5318 22.3012 12.9717 22.7407 12.9717 23.2869C12.9717 23.8331 12.5318 24.2727 11.9912 24.2727Z"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="0.1"
                                    />
                                </Icon>
                            </Flex>
                            <Flex minH='190px' h='100%' alignItems='center' gap='5'>
                                <Flex flexDir='column' gap='2'>
                                    <Text fontSize='24px' fontWeight='600' lineHeight='32px'>Check-up dell'auto</Text>
                                    <Text fontSize='16px' fontWeight='500'>Quando si è alla guida, la sicurezza viene prima di tutto: non bisogna mai sottovalutare la corretta manutenzione del veicolo.</Text>
                                </Flex>     
                                <Flex 
                                    alignItems='center' 
                                    bg='#DEE0E1'
                                    w='44px'
                                    h='44px'
                                    borderRadius='lg'
                                    cursor='pointer'
                                    minH='44px'
                                    minW='44px'
                                    justifyContent='center'
                                >
                                    <ArrowForwardIcon w='4' h='6' />
                                </Flex> 
                            </Flex>                                                 
                        </Flex>
                        <Flex w={{base: 'none', md:'384px'}} p='5' gap='5'  border='1px solid' borderColor='#C8CBCD' borderRadius='lg' overflow='hidden' alignItems='center' flexDirection='column' >
                            <Flex w={'100%'}>
                                <Icon viewBox="0 0 45 45" w='70px' h='70px' color='#FFDD00'>
                                    <path
                                        d="M31.788 5.67273L31.7879 5.67288L28.7968 8.65988L28.3926 8.25576C27.8507 7.71385 26.9692 7.71385 26.4273 8.25576L25.4096 9.27344L23.7742 7.63803C23.1636 7.02746 22.3466 6.69057 21.4835 6.69057H11.5252C9.73558 6.69057 8.28289 8.14327 8.28289 9.93286V35.8526C8.28289 37.6422 9.73558 39.0949 11.5252 39.0949H30.0405C31.8301 39.0949 33.2828 37.6422 33.2828 35.8526V18.4899C33.2828 17.6226 32.9459 16.8097 32.3353 16.1992L30.6999 14.5638L31.7176 13.5461C31.9798 13.2839 32.1261 12.9354 32.1261 12.5613C32.1261 12.1873 31.9798 11.8388 31.7176 11.5766L31.3135 11.1725L33.9417 8.54426H35.6C35.8557 8.54426 36.0646 8.33531 36.0646 8.07967V5.45951C36.0646 5.20387 35.8557 4.99492 35.6 4.99492H35.5959H33.4276C32.809 4.99492 32.2284 5.23656 31.788 5.67273ZM33.4276 5.92409H35.1313V7.61509H33.7427C33.6169 7.61509 33.5012 7.66638 33.414 7.74902L33.413 7.74996L30.6499 10.513L29.4562 9.3193L32.447 6.33259C32.4471 6.33252 32.4471 6.33245 32.4472 6.33239C32.7118 6.07186 33.06 5.92409 33.4276 5.92409ZM32.3536 18.4899V35.8485C32.3536 37.1227 31.3147 38.1616 30.0405 38.1616H11.5252C10.251 38.1616 9.21205 37.1227 9.21205 35.8485V9.93286C9.21205 8.65868 10.251 7.61974 11.5252 7.61974H21.4835C22.1004 7.61974 22.6805 7.85909 23.1189 8.29745L31.6759 16.8544C32.1143 17.2928 32.3536 17.8729 32.3536 18.4899ZM31.0582 12.8867L30.0778 13.867L26.1063 9.89555L27.0867 8.91518C27.2662 8.7357 27.5579 8.7357 27.7374 8.91518L28.4712 9.64899L30.3244 11.5022L31.0582 12.236C31.2376 12.4155 31.2376 12.7072 31.0582 12.8867Z"
                                        fill="#1E2329"
                                        stroke="#1E2329"
                                        strokeWidth="0.1"
                                    />
                                    <path
                                        d="M21.2142 9.46819H12.4541C11.6885 9.46819 11.065 10.0917 11.065 10.8573V13.635C11.065 14.4006 11.6885 15.0241 12.4541 15.0241H25.8451C26.0305 15.0241 26.2026 14.9131 26.2728 14.7362C26.3472 14.5632 26.3045 14.3636 26.1707 14.2298L21.544 9.60306C21.4555 9.51457 21.3389 9.46819 21.2142 9.46819ZM12.4541 14.0949C12.1998 14.0949 11.9942 13.8893 11.9942 13.635V10.8573C11.9942 10.603 12.1998 10.3974 12.4541 10.3974H21.0236L24.7211 14.0949H12.4541Z"
                                        fill="#1E2329"
                                        stroke="#1E2329"
                                        strokeWidth="0.1"
                                    />
                                    <path
                                        d="M20.3096 19.5178C20.2086 19.5172 20.109 19.541 20.0191 19.587C19.9293 19.633 19.8518 19.7 19.7933 19.7822C19.3966 20.3489 15.9084 25.3985 15.9084 27.5833C15.9084 28.7522 16.3728 29.8733 17.1993 30.6998C18.0259 31.5264 19.1469 31.9907 20.3159 31.9907C21.4848 31.9907 22.6058 31.5264 23.4324 30.6998C24.2589 29.8733 24.7233 28.7522 24.7233 27.5833C24.7233 25.3985 21.2351 20.3489 20.8384 19.7822C20.7787 19.6982 20.6992 19.6302 20.607 19.5841C20.5148 19.5379 20.4126 19.5152 20.3096 19.5178ZM20.3096 30.6748C19.4843 30.6749 18.6921 30.351 18.1033 29.7729C17.5145 29.1947 17.1763 28.4084 17.1614 27.5833C17.1614 26.387 18.9181 23.3459 20.3096 21.287C21.6947 23.3711 23.4577 26.4122 23.4577 27.5833C23.4428 28.4084 23.1046 29.1947 22.5158 29.7729C21.927 30.351 21.1348 30.6749 20.3096 30.6748Z"
                                        fill="currentColor"
                                    />
                                </Icon>
                            </Flex>
                            <Flex minH='190px' h='100%' alignItems='center' gap='5'>
                                <Flex flexDir='column' gap='2'>
                                    <Text fontSize='24px' fontWeight='600' lineHeight='32px'>Cambio olio</Text>
                                    <Text fontSize='16px' fontWeight='500'>Il cambio olio non è un'attività da sottovalutare: nel tempo, l'olio perde di qualità e scende di livello e questo rischia di causare danni molto gravi.</Text>
                                </Flex>     
                                <Flex 
                                    alignItems='center' 
                                    bg='#DEE0E1'
                                    w='44px'
                                    h='44px'
                                    borderRadius='lg'
                                    cursor='pointer'
                                    minH='44px'
                                    minW='44px'
                                    justifyContent='center'
                                >
                                    <ArrowForwardIcon w='4' h='6' />
                                </Flex> 
                            </Flex>                                                 
                        </Flex>
                        <Flex w={{base: 'none', md:'384px'}} p='5' gap='5'  border='1px solid' borderColor='#C8CBCD' borderRadius='lg' overflow='hidden' alignItems='center' flexDirection='column' >
                            <Flex w={'100%'}>
                                <Icon viewBox="0 0 45 45" w='70px' h='70px' color='#FFDD00'>
                                    <g clipPath="url(#clip0_9856_486)">
                                        <path
                                        d="M13.9053 37.45H21.9331"
                                        stroke="#1E2329"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M19.5255 15.775L24.3422 15.775"
                                        stroke="#1E2329"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M13.9053 27.8167H21.9331"
                                        stroke="#1E2329"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M13.9053 32.6333H21.9331"
                                        stroke="#1E2329"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M29.9609 23H13.9053V37.45"
                                        stroke="#1E2329"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="transparent"
                                        />
                                        <path
                                        d="M21.9338 37.4499H7.48383V16.3995C7.48396 15.8269 7.63721 15.2647 7.9277 14.7713C8.21819 14.2778 8.63534 13.871 9.13594 13.593L20.3748 7.34899C20.852 7.08385 21.3888 6.9447 21.9346 6.9447C22.4805 6.9447 23.0173 7.08385 23.4944 7.34899L34.7333 13.593C35.2336 13.8712 35.6504 14.2781 35.9406 14.7716C36.2308 15.265 36.3838 15.8271 36.3838 16.3995V22.9999"
                                        stroke="#1E2329"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="transparent"
                                        />
                                        <path
                                        d="M28.356 27.8167H36.3838C36.8096 27.8167 37.218 27.9858 37.5191 28.2869C37.8202 28.588 37.9894 28.9964 37.9894 29.4222V37.45C37.9894 37.8758 37.8202 38.2842 37.5191 38.5853C37.218 38.8864 36.8096 39.0555 36.3838 39.0555H28.356C27.9302 39.0555 27.5218 38.8864 27.2207 38.5853C26.9196 38.2842 26.7505 37.8758 26.7505 37.45V29.4222C26.7505 28.9964 26.9196 28.588 27.2207 28.2869C27.5218 27.9858 27.9302 27.8167 28.356 27.8167Z"
                                        stroke="currentColor"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="transparent"
                                        />
                                        <path
                                        d="M34.2832 32.2413L31.8893 34.6288L30.4539 33.1966"
                                        stroke="currentColor"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_9856_486">
                                        <rect width="32.8667" height="34" fill="white" transform="translate(6.06665 6)" />
                                        </clipPath>
                                    </defs>
                                </Icon>
                            </Flex>
                            <Flex minH='190px' h='100%' alignItems='center' gap='5'>
                                <Flex flexDir='column' gap='2'>
                                    <Text fontSize='24px' fontWeight='600' lineHeight='32px'>Cambio olio</Text>
                                    <Text fontSize='16px' fontWeight='500'>Il cambio olio non è un'attività da sottovalutare: nel tempo, l'olio perde di qualità e scende di livello e questo rischia di causare danni molto gravi.</Text>
                                </Flex>     
                                <Flex 
                                    alignItems='center' 
                                    bg='#DEE0E1'
                                    w='44px'
                                    h='44px'
                                    borderRadius='lg'
                                    cursor='pointer'
                                    minH='44px'
                                    minW='44px'
                                    justifyContent='center'
                                >
                                    <ArrowForwardIcon w='4' h='6' />
                                </Flex> 
                            </Flex>                                                 
                        </Flex>
                    </Flex>
                </Flex>
            </VStack>
        )
    }
}
export default ServiceSectionComponent;