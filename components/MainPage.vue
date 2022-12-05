<template>
    <div class="flex h-screen flex-col justify-center items-center p-2 bg-black">
        <div class="m-4 text-center w-full flex flex-col items-center">

            <img class="w-32" src="~/assets/pixel-star-transparent.png" />
            <p class="text-zinc-300 my-4 text-center text-xl ">Stargaze Pages</p>
        </div>
        <div class="w-screen max-w-auto  flex flex-col items-center justify-center p-2 ">
            <a href="https://stargaze.zone/names"
                class="bg-[#db2777] w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-[#be185d] transition-colors">
                <svg class="h-6 w-6" width="180" height="180" viewBox="0 0 180 180" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M90 172C135.287 172 172 135.287 172 90C172 44.7127 135.287 8 90 8C44.7127 8 8 44.7127 8 90C8 135.287 44.7127 172 90 172ZM180 90C180 139.706 139.706 180 90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90Z"
                        fill="white" />
                    <path
                        d="M106.69 22.47L110.32 72.88L159.38 85L112.56 104.03L116.19 154.44L83.6301 115.79L36.8101 134.83L63.5001 91.91L30.9301 53.26L79.9901 65.39L106.69 22.47Z"
                        fill="white" />
                </svg>
                <p class="w-full ">
                    Register .stars name
                </p>
            </a>

            <a href="https://discord.gg/stargaze"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">
                <svg class="h-6 w-6" width="256px" height="256px" viewBox="0 -28.5 256 256" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid">
                    <g>
                        <path
                            d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                            fill="#5865F2" fill-rule="nonzero"></path>
                    </g>
                </svg>
                <p class="w-full ">
                    Join discord
                </p>
            </a>
            <a href="https://twitter.com/StargazeZone"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 248 204">
                    <path fill="#1d9bf0"
                        d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z" />
                </svg>
                <p class="w-full "> Follow Twitter</p>
            </a>
            <a href="https://mirror.xyz/stargazezone.eth/FnFerE5-97VBOoVAN_-2cU2koIUDMErcPd0cGR3pPio"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">
                <svg viewBox="0 0 144 185" xmlns="http://www.w3.org/2000/svg"
                    class="_1sjywpl0 _1sjywpl1 bc5nciic bc5nci190 bc5nci4jc h-6 w-6">
                    <path
                        d="M0 71.6129C0 32.0622 32.0622 0 71.6129 0C111.164 0 143.226 32.0622 143.226 71.6129V174.118C143.226 180.128 138.354 185 132.343 185H10.8824C4.87222 185 0 180.128 0 174.118V71.6129Z"
                        fill="url(#markGradient)"></path>
                    <path clip-rule="evenodd"
                        d="M134.717 176.111V71.8216C134.717 36.8684 106.465 8.53326 71.6129 8.53326C36.7613 8.53326 8.50846 36.8684 8.50846 71.8216V176.111C8.50846 176.308 8.66719 176.467 8.86298 176.467H134.363C134.559 176.467 134.717 176.308 134.717 176.111ZM71.6129 0C32.0622 0 0 32.1556 0 71.8216V176.111C0 181.02 3.96809 185 8.86298 185H134.363C139.258 185 143.226 181.02 143.226 176.111V71.8216C143.226 32.1556 111.164 0 71.6129 0Z"
                        fill="white" fill-rule="evenodd"></path>
                    <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="markGradient" x1="18.435" x2="143.747"
                            y1="10.6666" y2="209.447">
                            <stop offset="0.265625" stop-color="blue"></stop>
                            <stop offset="0.734375" stop-color="white"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <p class="w-full "> Stargaze Names: A Cosmos IBC Name Service</p>
            </a>

        </div>
    </div>

</template>