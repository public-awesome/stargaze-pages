<template>
    <div v-if="nameInfo" class="flex flex-col justify-between h-screen items-center bg-black">
        <div class="w-screen max-w-auto h-full  flex flex-col items-center justify-center p-2 ">
            <a v-if="imageNftLink" :href="imageNftLink" class="m-4"><nuxt-img :src="imagePictureUrl" width="192" :alt="nameInfo.name+'\'s profile NFT'"
                    class="w-48 rounded-md " /></a>
            <div
                class="m-1 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 text-white mb-4 text-2xl font-semibold font-sans text-center">
                {{
                        nameInfo.name
                }}</div>
            <a v-if="nameInfo.records.twitter" :href="'https://twitter.com/' + nameInfo.records.twitter"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 248 204">
                    <path fill="#1d9bf0"
                        d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z" />
                </svg>
                <p class="w-full "> @{{
                        nameInfo.records.twitter
                }}</p>
            </a>
            <a v-if="nameInfo.records.discord" href="https://discord.com"
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
            <p class="w-full "> {{
                    nameInfo.records.discord
            }}</p>
            </a>
            <a v-if="nameInfo.records.telegram" :href="('https://t.me/' + nameInfo.records.telegram)"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">

                <svg class="w-6 h-6" id="Livello_1" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240 240">
                    <defs>
                        <linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#1d93d2" />
                            <stop offset="1" stop-color="#38b0e3" />
                        </linearGradient>
                    </defs>

                    <circle cx="120" cy="120" r="120" fill="url(#linear-gradient)" />
                    <path
                        d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z"
                        fill="#c8daea" />
                    <path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763"
                        fill="#a9c6d8" />
                    <path
                        d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z"
                        fill="#fff" />
                </svg>
                <p class="w-full "> @{{
                        nameInfo.records.telegram
                }}</p>
            </a>

            <a v-if="nameInfo.addresses.stars"
                :href="('https://www.stargaze.zone/profile/' + nameInfo.addresses.stars+'/all')"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">

                <svg class="h-6 w-6" width="180" height="180" viewBox="0 0 180 180" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M90 172C135.287 172 172 135.287 172 90C172 44.7127 135.287 8 90 8C44.7127 8 8 44.7127 8 90C8 135.287 44.7127 172 90 172ZM180 90C180 139.706 139.706 180 90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90Z"
                        fill="white" />
                    <path
                        d="M106.69 22.47L110.32 72.88L159.38 85L112.56 104.03L116.19 154.44L83.6301 115.79L36.8101 134.83L63.5001 91.91L30.9301 53.26L79.9901 65.39L106.69 22.47Z"
                        fill="white" />
                </svg>

                <p class="w-full"> {{
                        nameInfo.addresses.stars.slice(0, 8) + "..." + nameInfo.addresses.stars.slice(-8)
                }}</p>
            </a>
            <a v-if="nameInfo.addresses.cosmos"
                :href="('https://www.mintscan.io/cosmos/account/' + nameInfo.addresses.cosmos)"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">

                <svg class="w-6 h-6" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2500 2500">

                    <circle cx="1250" cy="1250" r="1250" style="fill:#2e3148" />
                    <circle cx="1250" cy="1250" r="725.31" style="fill:#1b1e36" />
                    <path
                        d="M1252.57,159.47c-134.93,0-244.34,489.4-244.34,1093.11s109.41,1093.11,244.34,1093.11,244.34-489.4,244.34-1093.11S1387.5,159.47,1252.57,159.47ZM1269.44,2284c-15.43,20.58-30.86,5.14-30.86,5.14-62.14-72-93.21-205.76-93.21-205.76-108.69-349.79-82.82-1100.82-82.82-1100.82,51.08-596.24,144-737.09,175.62-768.36a19.29,19.29,0,0,1,24.74-2c45.88,32.51,84.36,168.47,84.36,168.47,113.63,421.81,103.34,817.9,103.34,817.9,10.29,344.65-56.94,730.45-56.94,730.45C1341.92,2222.22,1269.44,2284,1269.44,2284Z"
                        style="fill:#6f7390" />
                    <path
                        d="M2200.72,708.59c-67.18-117.08-546.09,31.58-1070,332s-893.47,638.89-826.34,755.92,546.09-31.58,1070-332,893.47-638.89,826.34-755.92h0ZM366.36,1780.45c-25.72-3.24-19.91-24.38-19.91-24.38C378,1666.36,478.4,1572.84,478.4,1572.84c249.43-268.36,913.79-619.65,913.79-619.65,542.54-252.42,711.06-241.77,753.81-230a19.29,19.29,0,0,1,14,20.58c-5.14,56-104.17,157-104.17,157C1746.71,1209.36,1398,1397.58,1398,1397.58c-293.83,180.5-661.93,314.09-661.93,314.09-280.09,100.93-369.7,68.78-369.7,68.78h0Z"
                        style="fill:#6f7390" />
                    <path
                        d="M2198.35,1800.41c67.7-116.77-300.93-456.79-823-759.47S374.43,587.76,306.79,704.73s300.93,456.79,823.3,759.47S2130.71,1917.39,2198.35,1800.41ZM351.65,749.85c-10-23.71,11.11-29.42,11.11-29.42C456.22,702.78,587.5,743,587.5,743c357.15,81.33,994,480.25,994,480.25,490.33,343.11,565.53,494.24,576.8,537.14a19.29,19.29,0,0,1-10.7,22.43c-51.13,23.41-188.07-11.47-188.07-11.47-422.07-113.17-759.62-320.52-759.62-320.52-303.29-163.58-603.19-415.28-603.19-415.28-227.88-191.87-245-285.44-245-285.44Z"
                        style="fill:#6f7390" />
                    <circle cx="1250" cy="1250" r="128.6" style="fill:#b7b9c8" />
                    <ellipse cx="1777.26" cy="756.17" rx="74.59" ry="77.16" style="fill:#b7b9c8" />
                    <ellipse cx="552.98" cy="1018.52" rx="74.59" ry="77.16" style="fill:#b7b9c8" />
                    <ellipse cx="1098.25" cy="1965.02" rx="74.59" ry="77.16" style="fill:#b7b9c8" />
                </svg>

                <p class="w-full"> {{
                        nameInfo.addresses.cosmos.slice(0, 8) + "..." + nameInfo.addresses.cosmos.slice(-8)
                }}</p>
            </a>

            <div
                class="m-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 text-white my-4 text-lg font-sans text-center" v-if="createdNfts.length>0">
                Created collections:</div>
                <div  v-if="createdNfts.length>0" class="flex flex-row p-1 justify-center w-[200px] md:w-1/2 lg:w-1/3  flex-wrap">

                    <a v-for="createdNft in createdNfts" :key="createdNft.sg721_addr" :href="'https://www.stargaze.zone/marketplace/' + createdNft.sg721_addr"
                class=" m-1 flex flex-col py-4 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors min-w-[120px]">
                <nuxt-img :src="prefixToGateway(createdNft.image)" width="120" class="w-[120px]"/>
                <p class="w-full mt-4"> {{
                        createdNft.name
                }}</p>
            </a>
                </div>
                 
        </div>
        <div class="m-4 text-center">
            <p class="text-zinc-400 my-1 text-center">Made with 💜 by </p>
            <a href="https://stargaze.zone"><svg width="124" height="30" viewBox="0 0 124 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="justify-self-end">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.51686 8.22623H13.9122V3.0142H8.61996C3.36208 2.87042 2.50295 3.7331 2.36058 9.5562V11.0299C2.29676 16.242 3.36208 17.7157 7.24535 17.6079H8.20757V21.7775H2.46858V26.9895H8.17321C12.297 26.9895 12.572 26.9177 13.6029 25.6596C14.2902 24.5093 14.4277 23.7545 14.5308 20.2319V18.7581C14.5308 13.6899 13.4998 12.324 9.61655 12.3959H8.51686V8.22623ZM24.1531 8.22615H26.9367V3.01412H15.2182V8.22615H18.0018V26.9895H24.1531V8.22615ZM34.4232 26.9895H28.2718V7.90264C28.3405 3.66113 29.1309 3.01412 34.4624 3.01412H36.9711C42.2977 3.01412 43.0881 3.62518 43.1568 7.90264V26.9895H37.0055V21.9212H34.4281V26.9895H34.4232ZM37.0006 16.6013V10.275C37.0006 8.72938 36.5882 8.04642 35.6947 8.04642C34.8012 8.04642 34.4232 8.76532 34.4232 10.275V16.6013H37.0006ZM60.2658 7.65099C60.094 3.51731 59.338 2.90625 54.7674 3.01408H45.3857V26.9894H51.5371V17.6078H52.3275C53.6333 17.6437 54.1488 18.2548 54.1145 19.7645V22.9636C54.1145 24.653 54.2519 25.947 54.5956 26.9894H60.7469C60.472 25.983 60.2658 24.5452 60.2658 22.9636V19.2612C60.3346 16.5654 59.4754 15.4151 56.898 14.6962C59.4754 14.4805 60.3689 12.9709 60.2658 9.19663V7.65099ZM54.1488 10.3469C54.1488 12.0363 53.8395 12.3957 52.3962 12.3957H51.5371V8.22611H52.3962C53.7021 8.22611 54.1488 8.76529 54.1488 10.3469ZM77.1443 21.6697C77.213 26.4503 76.4914 27.0974 71.0617 26.9895H68.5186C62.6765 27.0614 62.2642 26.6301 62.3329 20.5194L62.2985 18.6503V11.4613C62.3623 3.66119 62.8778 2.97823 68.5137 3.01418H77.1394V8.90916C76.4177 8.54971 74.6995 8.2981 72.6719 8.22621H70.5069C68.6168 8.22621 68.445 8.40593 68.445 10.4189V18.9378C68.4106 21.454 68.5824 21.7415 69.9914 21.7775H70.988V15.9903C70.988 15.0198 70.8162 14.1931 70.5069 13.2945H77.1394V21.6697H77.1443ZM79.2356 26.9895H85.3869V21.9212H87.9643V26.9895H94.1157V7.90264C94.047 3.62518 93.2566 3.01412 87.93 3.01412H85.4213C80.0947 3.01412 79.3043 3.66113 79.2356 7.90264V26.9895ZM87.9643 10.275V16.6013H85.3869V10.275C85.3869 8.76532 85.765 8.04642 86.6585 8.04642C87.552 8.04642 87.9643 8.72938 87.9643 10.275ZM108.137 3.01412L103.016 21.7774H108.515L107.827 26.9895H95.5246L100.714 8.22615H95.5934L96.315 3.01412H108.137ZM115.972 8.2261H121.642V3.01406H115.903C110.542 2.94217 109.958 3.66108 109.821 10.7063V18.3626C109.786 21.8852 110.061 24.4733 110.542 25.3C111.47 26.8456 111.814 26.9535 115.903 26.9894H121.642V21.7774H115.972V17.6077H121.642V12.3957H115.972V8.2261Z"
                        fill="url(#paint0_linear_88_123)" />
                    <defs>
                        <linearGradient id="paint0_linear_88_123" x1="2.47665" y1="-1.09231" x2="127.568" y2="16.8828"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFF59E" />
                            <stop offset="0.635417" stop-color="#81EFD9" />
                            <stop offset="1" stop-color="#6B9BE3" />
                        </linearGradient>
                    </defs>
                </svg>
            </a>
        </div>
    </div>
<div class="flex flex-col justify-between h-screen items-center bg-black" v-else>
    <div class="w-screen max-w-auto h-full  flex flex-col items-center justify-center p-2 ">
           <nuxt-img src="sad-face.svg" provider="ipx"
                    class="w-48 rounded-md m-4" />
            <div
                class="m-1 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 text-white mb-4 text-2xl font-semibold font-sans text-center">
                No name found</div>
         

            <a 
                href="https://stargaze.zone/names"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">

                <svg class="h-6 w-6" width="180" height="180" viewBox="0 0 180 180" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M90 172C135.287 172 172 135.287 172 90C172 44.7127 135.287 8 90 8C44.7127 8 8 44.7127 8 90C8 135.287 44.7127 172 90 172ZM180 90C180 139.706 139.706 180 90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90Z"
                        fill="white" />
                    <path
                        d="M106.69 22.47L110.32 72.88L159.38 85L112.56 104.03L116.19 154.44L83.6301 115.79L36.8101 134.83L63.5001 91.91L30.9301 53.26L79.9901 65.39L106.69 22.47Z"
                        fill="white" />
                </svg>

                <p class="w-full"> Register "{{stargazeName}}" on Stargaze</p>
            </a>


        </div>
        <div class="m-4 text-center">
            <p class="text-zinc-400 my-1 text-center">Made with 💜 by </p>
            <a href="https://stargaze.zone"><svg width="124" height="30" viewBox="0 0 124 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="justify-self-end">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.51686 8.22623H13.9122V3.0142H8.61996C3.36208 2.87042 2.50295 3.7331 2.36058 9.5562V11.0299C2.29676 16.242 3.36208 17.7157 7.24535 17.6079H8.20757V21.7775H2.46858V26.9895H8.17321C12.297 26.9895 12.572 26.9177 13.6029 25.6596C14.2902 24.5093 14.4277 23.7545 14.5308 20.2319V18.7581C14.5308 13.6899 13.4998 12.324 9.61655 12.3959H8.51686V8.22623ZM24.1531 8.22615H26.9367V3.01412H15.2182V8.22615H18.0018V26.9895H24.1531V8.22615ZM34.4232 26.9895H28.2718V7.90264C28.3405 3.66113 29.1309 3.01412 34.4624 3.01412H36.9711C42.2977 3.01412 43.0881 3.62518 43.1568 7.90264V26.9895H37.0055V21.9212H34.4281V26.9895H34.4232ZM37.0006 16.6013V10.275C37.0006 8.72938 36.5882 8.04642 35.6947 8.04642C34.8012 8.04642 34.4232 8.76532 34.4232 10.275V16.6013H37.0006ZM60.2658 7.65099C60.094 3.51731 59.338 2.90625 54.7674 3.01408H45.3857V26.9894H51.5371V17.6078H52.3275C53.6333 17.6437 54.1488 18.2548 54.1145 19.7645V22.9636C54.1145 24.653 54.2519 25.947 54.5956 26.9894H60.7469C60.472 25.983 60.2658 24.5452 60.2658 22.9636V19.2612C60.3346 16.5654 59.4754 15.4151 56.898 14.6962C59.4754 14.4805 60.3689 12.9709 60.2658 9.19663V7.65099ZM54.1488 10.3469C54.1488 12.0363 53.8395 12.3957 52.3962 12.3957H51.5371V8.22611H52.3962C53.7021 8.22611 54.1488 8.76529 54.1488 10.3469ZM77.1443 21.6697C77.213 26.4503 76.4914 27.0974 71.0617 26.9895H68.5186C62.6765 27.0614 62.2642 26.6301 62.3329 20.5194L62.2985 18.6503V11.4613C62.3623 3.66119 62.8778 2.97823 68.5137 3.01418H77.1394V8.90916C76.4177 8.54971 74.6995 8.2981 72.6719 8.22621H70.5069C68.6168 8.22621 68.445 8.40593 68.445 10.4189V18.9378C68.4106 21.454 68.5824 21.7415 69.9914 21.7775H70.988V15.9903C70.988 15.0198 70.8162 14.1931 70.5069 13.2945H77.1394V21.6697H77.1443ZM79.2356 26.9895H85.3869V21.9212H87.9643V26.9895H94.1157V7.90264C94.047 3.62518 93.2566 3.01412 87.93 3.01412H85.4213C80.0947 3.01412 79.3043 3.66113 79.2356 7.90264V26.9895ZM87.9643 10.275V16.6013H85.3869V10.275C85.3869 8.76532 85.765 8.04642 86.6585 8.04642C87.552 8.04642 87.9643 8.72938 87.9643 10.275ZM108.137 3.01412L103.016 21.7774H108.515L107.827 26.9895H95.5246L100.714 8.22615H95.5934L96.315 3.01412H108.137ZM115.972 8.2261H121.642V3.01406H115.903C110.542 2.94217 109.958 3.66108 109.821 10.7063V18.3626C109.786 21.8852 110.061 24.4733 110.542 25.3C111.47 26.8456 111.814 26.9535 115.903 26.9894H121.642V21.7774H115.972V17.6077H121.642V12.3957H115.972V8.2261Z"
                        fill="url(#paint0_linear_88_123)" />
                    <defs>
                        <linearGradient id="paint0_linear_88_123" x1="2.47665" y1="-1.09231" x2="127.568" y2="16.8828"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFF59E" />
                            <stop offset="0.635417" stop-color="#81EFD9" />
                            <stop offset="1" stop-color="#6B9BE3" />
                        </linearGradient>
                    </defs>
                </svg>
            </a>
        </div>
</div>
</template>
<script setup>

import { toBech32, fromBech32 } from "@cosmjs/encoding"
import { Buffer } from "buffer";
let host=useState("hostname",()=>(headers.host)||window.location.host)
let stargazeName = ref(host.value.split(".")[0])
let lcdEndpoint = 'https://rest.stargaze-apis.com';

let nameInfo = ref(await fetchNameInfo(stargazeName.value))
let imageNft = nameInfo?.value?.imageNFT
let imageNftInfo = nameInfo.value?await _queryNameContract(nameInfo.value.imageNFT.collection, {
    "all_nft_info": {
        "token_id": imageNft.token_id
    }
}):null
let imageMetaUrlRaw = imageNftInfo ? imageNftInfo?.data.info.token_uri : null
let imageNftLink = ref(imageNftInfo ? "https://stargaze.zone/media/" + imageNft.collection + "/" + imageNft.token_id : null)
let imageMetaUrl = prefixToGateway(imageMetaUrlRaw)
let nuxtDataImageMeta=useNuxtData(imageMetaUrl)?.data.value
let imageMeta = imageMetaUrl ? (nuxtDataImageMeta?nuxtDataImageMeta:await useFetch(imageMetaUrl,{key:imageMetaUrl}).then(fetchRes=>fetchRes?.data.value)): null
let imagePictureUrl = ref(prefixToGateway(imageMeta?.image))
let createdNftsNuxtData=useNuxtData(`collections-created-${nameInfo.value.stargazeAddress}`)

let createdNfts=nameInfo.value?(createdNftsNuxtData.data.value?createdNftsNuxtData.data:await useFetch(`https://metabase.constellations.zone/api/public/card/a7be4444-f1f2-4da5-8bc7-edff96c736bd/query/json?parameters=%5B%7B%22type%22%3A%22category%22%2C%22value%22%3A%22${nameInfo.value.stargazeAddress}%22%2C%22target%22%3A%5B%22variable%22%2C%5B%22template-tag%22%2C%22address%22%5D%5D%2C%22id%22%3A%229fc00a15-029c-0c64-2f06-ec1a67595dff%22%7D%5D`,
{key:`collections-${nameInfo.value.stargazeAddress}`}).then(fetchRes=>fetchRes.data)):ref([])

async function _queryNameContract(contractAddress, query) {

    let encodedQuery = Buffer.from(JSON.stringify(query)).toString("base64")
    let nuxtData=useNuxtData(`${lcdEndpoint}/cosmwasm/wasm/v1/contract/${contractAddress}/smart/${encodedQuery}`)?.data.value
    let response = nuxtData?nuxtData:await useFetch(`${lcdEndpoint}/cosmwasm/wasm/v1/contract/${contractAddress}/smart/${encodedQuery}`,{key:`${lcdEndpoint}/cosmwasm/wasm/v1/contract/${contractAddress}/smart/${encodedQuery}`}).then(fetchRes=>fetchRes?.data.value)
  
    return response
    

}
function prefixToGateway(uri) {
    if(!uri){return null}
    let protocol = (["ipfs://", "ar://"]).find(p => uri.startsWith(p))
    let gateway = ({
        'ipfs://': 'https://ipfs-gw.stargaze-apis.com/ipfs/',
        "ar://": "https://arweave.net/"
    })[protocol]

    let contentIdentifier = uri.slice(protocol.length)
    return gateway + contentIdentifier
}
async function fetchNameInfo(name) {
    let networks= ['stars', 'akash', 'osmo', 'cosmos', 'stride', 'juno', 'secret', 'cro', 'persistence', 'agoric', 'axelar', 'umee', 'gravity']
        let queryResponse = await _queryNameContract("stars1fx74nkqkw2748av8j7ew7r3xt9cgjqduwn8m0ur5lhe49uhlsasszc5fhr", {
            "all_nft_info": {
                "token_id": name
            }
        })
   
        if (!queryResponse?.data) {
            return null;
        }
        return {
            name: name + ".stars",
            owner: queryResponse.data.access.owner,
            addresses: queryResponse?.data?.info?.token_uri ? Object.fromEntries(networks.map(network => [network, toBech32(network, fromBech32(queryResponse.data.info.token_uri).data)])) : [],
            stargazeAddress: queryResponse.data.info.token_uri,
            imageNFT: queryResponse.data.info.extension.image_nft,
            records: queryResponse.data.info.extension.records.reduce((pv, cv) => {
                return { ...pv, [cv.name]: cv.value }
            }, {})
        }

    }
    useHead({
     title: nameInfo?.value?.name||"Stargaze Pages",

  

    })
</script>
