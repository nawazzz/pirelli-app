import React, { Component } from 'react'
import { VStack, Text, Flex, Box, Image, HStack } from '@chakra-ui/react'
import {Icon} from '@chakra-ui/icons'

class HomepageBookingComponent extends React.Component {
    render() {
        return(
            <VStack w='100%' px={{base: '60px', md: '120px'}}>
                <Flex w='100%' px='20px' flexDir='column' justifyContent='center' gap='8'>
                    <Flex flexDir='column' justifyContent='center'>
                        <Flex fontSize='40px' lineHeight='3rem' fontWeight='600'  justifyContent='center' >
                            <Text color='black' whiteSpace={{base: 'nowrap', md: 'none'}}>Prenotare online è facile e </Text>
                            <Text color='#B3B6B9' px='10px'> veloce </Text>
                        </Flex>
                        <Text textAlign='center'>Cerca il rivenditore più vicino a te, decidi l'acquisto di un pneumatico o prenota direttamente il servizio e l'appuntamento desiderato.</Text>
                    </Flex>
                    <Flex pt='10' pb='6' gap='6' w='100%' mx='auto' justifyContent='center' flexDir={{base: 'column', md: 'row'}}>
                        <Flex w={{base: '', md:'282px'}}>
                            <Flex flexDir='column' alignItems='center' gap='6'>
                                <Icon viewBox="0 0 45 45" w='70px' h='70px' >
                                    <g clipPath="url(#clip0_11536_230)">
                                        <path
                                        d="M40.8357 22.5033C40.8357 32.6277 32.6245 40.8389 22.5 40.8389C12.3755 40.8389 4.16434 32.6277 4.16434 22.5033C4.16434 12.3788 12.3755 4.1676 22.5 4.1676C32.6245 4.1676 40.8357 12.3788 40.8357 22.5033Z"
                                        stroke="#1E2329"
                                        fill="none"
                                        strokeWidth="1.5"
                                        />
                                        <path
                                        d="M33.5545 15.1026C29.4822 8.99737 21.2245 7.34981 15.1126 11.4288C9.00734 15.5012 7.35979 23.7589 11.4388 29.8708C15.5112 35.976 23.7689 37.6236 29.8808 33.5446C35.9927 29.4722 37.6336 21.2145 33.5545 15.1026Z"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        />
                                        <path
                                        d="M24.2339 21.3309L24.3036 21.4357C24.8542 22.3805 24.5796 23.6088 23.6577 24.2249C22.7006 24.8646 21.3995 24.606 20.759 23.6485C20.1178 22.6834 20.3784 21.3884 21.3356 20.7486C22.2925 20.109 23.5932 20.3674 24.2339 21.3309Z"
                                        stroke="#1E2329"
                                        fill="none"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        />
                                        <path
                                        d="M17.3647 26.1372C17.1455 26.5756 16.7004 27.4525 16.4811 27.891C15.7437 29.3525 15.1458 29.0602 14.2091 27.7183C13.299 26.4029 12.6147 24.483 12.5748 22.7358C12.535 21.0483 12.8406 20.5169 14.3021 21.2543C14.7406 21.4735 15.6175 21.9186 16.0559 22.1379C17.5175 22.8753 18.1087 24.6756 17.3713 26.1372H17.3647Z"
                                        stroke="#1E2329"
                                        fill="none"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        />
                                        <path
                                        d="M17.3913 18.6567C16.9063 18.5969 15.9297 18.4707 15.4448 18.4109C13.8238 18.205 13.8902 17.5407 14.8469 16.212C15.7769 14.9099 17.358 13.6277 18.9857 12.9966C20.5601 12.3921 21.1647 12.4983 20.9654 14.1193C20.9056 14.6109 20.7794 15.5809 20.7196 16.0658C20.5136 17.6868 19.0189 18.8494 17.3979 18.6501L17.3913 18.6567Z"
                                        stroke="#1E2329"
                                        fill="none"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        />
                                        <path
                                        d="M24.9979 31.9103C23.4633 32.3687 21.4238 32.4085 19.7563 31.9103C18.142 31.4253 17.7301 30.9603 18.886 29.811C19.2315 29.4655 19.929 28.7746 20.2745 28.4225C21.4304 27.2666 23.3238 27.2666 24.4797 28.4225C24.8252 28.768 25.5227 29.4655 25.8682 29.811C27.0241 30.9669 26.5591 31.4452 24.9979 31.9103Z"
                                        stroke="#1E2329"
                                        fill="none"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        />
                                        <path
                                        d="M24.2871 16.0726C24.2273 15.5809 24.1077 14.611 24.0479 14.1261C23.8486 12.5051 24.4531 12.3921 26.0276 13.0033C27.6552 13.6344 29.2297 14.9233 30.1598 16.2254C31.1098 17.554 31.1762 18.2184 29.5552 18.4177C29.0703 18.4775 28.0937 18.597 27.6087 18.6568C25.9811 18.8561 24.493 17.6935 24.2937 16.0726H24.2871Z"
                                        stroke="#1E2329"
                                        fill="none"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        />
                                        <path
                                        d="M30.8108 27.5854C29.8808 28.9274 29.2762 29.2197 28.5388 27.7515C28.3196 27.313 27.8745 26.4361 27.6552 25.9977C26.9178 24.5361 27.5091 22.7424 28.9706 22.005C29.4091 21.7858 30.286 21.3407 30.7245 21.1214C32.186 20.384 32.4916 20.9221 32.4518 22.6095C32.4052 24.3501 31.721 26.27 30.8108 27.5854Z"
                                        stroke="#1E2329"
                                        fill="none"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11536_230">
                                        <rect width="38" height="37.9934" fill="white" transform="translate(3.5 3.5033)" />
                                        </clipPath>
                                    </defs>
                                </Icon>
                                <Box textAlign='center' wordBreak='break-word' >
                                    <Text fontSize='1.5rem' lineHeight='2rem' fontWeight='600' mb='1'>Seleziona i pneumatici</Text>
                                    <Text>Scopri i pneumatici perfetti per il tuo veicolo. Basta inserire i dati del veicolo o le dimensioni degli pneumatici e ti aiuteremo a trovare le opzioni migliori per le tue esigenze. Che si tratti di pneumatici estivi, invernali o quattro stagioni, abbiamo la soluzione giusta per te.</Text>
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex justifyContent='center' w={{base: '', md:'282px'}}>
                            <Flex flexDir='column' alignItems='center' gap='6'>
                                <Icon viewBox="0 0 45 45" w='70px' h='70px'>
                                    <g clipPath="url(#clip0_11536_252)">
                                        <path
                                        d="M12.932 20.0201C12.3696 19.3718 11.9987 19.2005 11.2941 18.7786C10.5833 18.3566 9.98992 18.2037 9.45836 18.2404C8.284 18.3321 7.4125 19.384 6.25049 20.7111C5.1503 21.9771 4.13663 23.1758 4.11809 24.295C4.11191 24.7353 4.27261 25.1512 4.61874 25.5732C4.97723 26.0074 5.94145 26.5701 6.14542 26.6863C7.23943 27.3345 8.46324 27.6526 9.62525 27.5608C10.7749 27.4752 11.8565 26.9859 12.6848 26.0319C14.2794 24.1971 14.2115 21.4817 12.932 20.0139V20.0201Z"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M15.3116 22.6132C17.4626 24.1299 20.3058 24.5641 23.2664 24.613L27.5374 29.0409L32.3461 25.4937C37.9089 26.4906 40.7398 29.2855 40.8819 35.5297V41.9574"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M10.2433 27.4752C12.8146 29.7136 16.4798 31.1753 19.4714 32.1416V41.9513"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M10.9232 18.5828L13.5563 16.3567C12.9506 15.1702 12.6044 13.8247 12.6044 12.4059C12.6044 7.57439 16.5602 3.66028 21.4431 3.66028C26.326 3.66028 30.2817 7.57439 30.2817 12.4059C30.2817 17.2373 26.3198 21.1514 21.4431 21.1514C19.9968 21.1514 18.637 20.809 17.4317 20.1974L13.5316 24.6497"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M21.4431 6.14331C17.9509 6.14331 15.12 8.94434 15.12 12.3998C15.12 15.8552 17.9509 18.6562 21.4431 18.6562C24.9353 18.6562 27.7661 15.8552 27.7661 12.3998C27.7661 8.94434 24.9353 6.14331 21.4431 6.14331Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M21.4431 8.73645C19.3972 8.73645 17.7345 10.3816 17.7345 12.4059"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M25.1331 20.3564C26.499 21.4389 28.2297 22.0871 30.121 22.0871C34.5342 22.0871 38.1067 18.5461 38.1067 14.1855C38.1067 9.82498 34.528 6.28394 30.121 6.28394C29.3917 6.28394 28.6932 6.38179 28.0195 6.55915"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M33.4278 36.7162V41.9574"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11536_252">
                                        <rect width="38" height="38.9148" fill="red" transform="translate(3.5 3.0426)" />
                                        </clipPath>
                                    </defs>
                                </Icon>
                                <Box textAlign='center' wordBreak='break-word'>
                                    <Text fontSize='1.5rem' lineHeight='2rem' fontWeight='600' mb='1'>Trova il tuo rivenditore</Text>
                                    <Text>Cerca il tuo centro Driver. Se hai già depositato i tuoi pneumatici presso di noi, puoi trovarli inserendo il tuo numero di targa.</Text>
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex w={{base: '', md:'282px'}} justifyContent='center'>
                            <Flex flexDir='column' alignItems='center' gap='6'>
                                <Icon viewBox="0 0 45 45" w='70px' h='70px' >
                                    <g clipPath="url(#clip0_11536_262)">
                                        <path
                                        d="M22.1147 25.3896C23.0565 26.307 23.4785 27.9338 23.5213 28.8573C23.558 29.6952 23.5519 30.5697 24.1818 31.2058L31.1049 38.2145C32.0834 39.2052 33.6858 39.2052 34.6704 38.2267L38.8597 34.068C39.8505 33.0833 39.8566 31.4871 38.872 30.5024L31.9489 23.4876C31.3618 22.8944 30.5545 22.8332 29.7839 22.7721C28.8054 22.6987 27.3804 22.4785 25.9921 21.5"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M20.8793 18.2403L15.0326 12.3936L13.4547 9.54978L10.0911 7.43372L8.11566 9.403L10.2195 12.7789L13.045 14.3446L18.91 20.2096"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M29.2702 31.6034L33.3861 35.7193"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M32.2119 28.6555L36.3278 32.7714"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M31.1905 16.3138L18.1639 29.3405C18.8672 31.5055 18.3902 33.909 16.9102 35.6336C16.427 36.1902 15.8521 36.6733 15.1916 37.0525C15.1366 37.0831 15.0693 37.0831 15.0143 37.0525C14.9592 37.0219 14.9225 36.9669 14.9164 36.9057L14.5067 32.6675L9.9932 33.0161L10.4213 37.4867C10.4213 37.5479 10.3968 37.6029 10.354 37.6396C10.3051 37.6763 10.2439 37.6946 10.1889 37.6763C9.82196 37.5723 8.51929 37.2176 7.30837 36.0006C4.89874 33.5787 4.74585 29.683 6.95977 27.096C8.69665 25.0716 11.4304 24.3133 13.9562 25.1328L26.9768 12.1123C26.622 10.2531 27.2948 8.34496 28.7259 7.11568C29.313 6.60807 29.998 6.24724 30.7502 6.0393C30.8114 6.02095 30.8725 6.0393 30.9153 6.076C30.9642 6.11269 30.9887 6.17385 30.9826 6.22889L30.6401 9.86779L34.1812 10.1369L34.5053 6.68758C34.5114 6.62642 34.5481 6.56526 34.6031 6.53468C34.6582 6.5041 34.7255 6.5041 34.7866 6.53468C35.3126 6.84047 35.7774 7.21965 36.1749 7.67833C38.0708 9.89225 37.8139 13.2315 35.6061 15.1335C34.3769 16.1854 32.7745 16.6135 31.1844 16.3077L31.1905 16.3138Z"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11536_262">
                                        <rect
                                            width="35.4349"
                                            height="34.1567"
                                            fill="white"
                                            transform="translate(4.78255 5.42163)"
                                        />
                                        </clipPath>
                                    </defs>
                                </Icon>
                                <Box textAlign='center' wordBreak='break-word'>
                                    <Text fontSize='1.5rem' lineHeight='2rem' fontWeight='600' mb='1'>Scegli il servizio di cui hai bisogno</Text>
                                    <Text>Richiedi un preventivo selezionando tutti i servizi di cui il tuo veicolo ha bisogno: pagherai direttamente in officina.</Text>
                                </Box> 
                            </Flex>                           
                        </Flex>
                        <Flex w={{base: '', md:'282px'}}>
                            <Flex flexDir='column' alignItems='center' gap='6'>
                                <Icon viewBox="0 0 45 45" w='70px' h='70px' >
                                    <g clipPath="url(#clip0_11536_269)">
                                        <path
                                        d="M22.5031 9.5498C21.5123 9.5498 20.705 10.3571 20.705 11.3478C20.705 12.3386 21.5123 13.152 22.5031 13.152C23.4938 13.152 24.3011 12.3447 24.3011 11.3478C24.3011 10.351 23.4938 9.5498 22.5031 9.5498Z"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        />
                                        <path
                                        d="M38.1962 7.03015H6.80381C6.17219 7.03015 5.66016 7.54218 5.66016 8.1738V36.8263C5.66016 37.4579 6.17219 37.9699 6.80381 37.9699H38.1962C38.8278 37.9699 39.3398 37.4579 39.3398 36.8263V8.1738C39.3398 7.54218 38.8278 7.03015 38.1962 7.03015Z"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        />
                                        <path
                                        d="M5.66016 15.47H39.3398"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        />
                                        <path
                                        d="M16.2344 18.8582H10.3999V24.6926H16.2344V18.8582Z"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M25.4203 18.8582H19.5858V24.6926H25.4203V18.8582Z"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M34.6001 18.8582H28.7656V24.6926H34.6001V18.8582Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M16.2344 27.9951H10.3999V33.8296H16.2344V27.9951Z"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M25.4203 27.9951H19.5858V33.8296H25.4203V27.9951Z"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M34.6001 27.9951H28.7656V33.8296H34.6001V27.9951Z"
                                        fill="none"
                                        stroke="#1E2329"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        />
                                        <path
                                        d="M31.108 21.7754H32.2639"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_11536_269">
                                        <rect
                                            width="34.9028"
                                            height="32.163"
                                            fill="white"
                                            transform="translate(5.04858 6.41858)"
                                        />
                                        </clipPath>
                                    </defs>
                                </Icon>
                                <Box textAlign='center' wordBreak='break-word'>
                                    <Text fontSize='1.5rem' lineHeight='2rem' fontWeight='600' mb='1'>Seleziona il giorno e l'ora</Text>
                                    <Text>Visualizza la durata dell'appuntamento e scegli l'orario migliore per portarci l'auto.</Text>
                                </Box>
                            </Flex>
                        </Flex>                        
                    </Flex>
                </Flex>
            </VStack>
        )
    }
}
export default HomepageBookingComponent;