<template v-once>
    <div v-if="nameInfo" class="flex flex-col justify-between min-h-screen items-center bg-black">
        <div class="w-screen max-w-full h-full grow flex flex-col items-center justify-center p-2 ">
            <a v-if="imageNft" class="m-4"
                :href="(nameInfo.addresses.stars ? 'https://www.stargaze.zone/profile/' + nameInfo.addresses.stars + '/all' : 'https://' + stargazeName + '.stars.page')"><img
                    v-if="imageNft && nameInfo.imageNFTMime != 'video/mp4'" target="_blank" :src="imageNft" width="192"
                    height="192" :alt="nameInfo.name + '\'s profile NFT'" class="w-48 rounded-md " /></a>
            <a v-if="imageNft && nameInfo.imageNFTMime == 'video/mp4'" class="m-4"
                :href="(nameInfo.addresses.stars ? 'https://www.stargaze.zone/profile/' + nameInfo.addresses.stars + '/all' : 'https://' + stargazeName + '.stars.page')">
                <video height="192" :alt="nameInfo.name + '\'s profile NFT'" class="w-48 rounded-md " autoplay muted loop
                    preload="auto">
                    <source :src="imageNft" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </a>
            <div class="m-1 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 text-white mb-4 text-2xl font-semibold font-sans text-center">
                {{
                    nameInfo.name
                }}</div>
            <a v-if="nameInfo.records.twitter" :href="'https://twitter.com/' + nameInfo.records.twitter" target="_blank"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">
                <img src="~/assets/twitter.svg" class="h-6 w-6" width="180" height="180" />
                <p class="w-full flex flex-row justify-center items-center"> @{{
                    nameInfo.records.twitter
                }} <svg v-if="nameInfo.verifiedRecordKeys.includes('twitter')" viewBox="0 0 24 24"
                        aria-label="Twitter Verified Account" role="img" class="fill-[#ec4899] w-6 h-6 ml-1">
                        <g>
                            <path
                                d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z">
                            </path>
                        </g>
                    </svg>
                </p>
            </a>
            <a v-if="nameInfo.records.discord" @click.prevent="copyClipboard(nameInfo.records.discord)"
                class="cursor-pointer w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">

                <img src="~/assets/discord.svg" class="h-6 w-6" width="180" height="180" />
                <p class="w-full "> {{
                    nameInfo.records.discord
                }}</p>
            </a>
            <a v-if="nameInfo.records.telegram" :href="('https://t.me/' + nameInfo.records.telegram)" target="_blank"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">

                <img src="~/assets/telegram.svg" class="h-6 w-6" width="180" height="180" />
                <p class="w-full "> @{{
                    nameInfo.records.telegram
                }}</p>
            </a>

            <a v-if="nameInfo.addresses.stars" target="_blank"
                :href="('https://www.stargaze.zone/profile/' + nameInfo.addresses.stars + '/all')"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">

                <img src="~/assets/stargaze-mini.svg" class="h-6 w-6" width="180" height="180" />

                <p class="w-full"> {{
                    nameInfo.addresses.stars.slice(0, 8) + "..." + nameInfo.addresses.stars.slice(-8)
                }}</p>
            </a>
            <a v-if="nameInfo.addresses.cosmos" target="_blank"
                :href="('https://www.mintscan.io/cosmos/account/' + nameInfo.addresses.cosmos)"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">

                <img class="w-6 h-6" src="~/assets/cosmos.svg" />

                <p class="w-full"> {{
                    nameInfo.addresses.cosmos.slice(0, 8) + "..." + nameInfo.addresses.cosmos.slice(-8)
                }}</p>
            </a>

            <div class="m-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 text-white my-4 text-lg font-sans text-center"
                v-if="createdNfts.length > 0">
                Created collections:</div>
            <div v-if="createdNfts.length > 0" class="flex flex-row p-1 justify-center w-full max-w-[610px] flex-wrap">

                <a v-for="createdNft in createdNfts" :key="createdNft.collection_addr"
                    :href="createdNft.percent_minted == 1 ? ('https://www.stargaze.zone/marketplace/' + createdNft.collection_addr) : ('https://www.stargaze.zone/launchpad/' + createdNft.contract_addr)"
                    class=" m-1 flex flex-col py-4 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors w-full max-w-[30%] min-w-[190px]">
                    <nuxt-img v-if="createdNft && createdNft.image" :src="prefixToGateway(createdNft.image)"
                        :alt="createdNft.name + 'collection preview'" height="120" fit="cover"
                        :modifiers="{ animated: true }" />
                    <p class="w-full mt-4"> {{
                        createdNft.name
                    }}</p>
                    <p v-if="createdNft.percent_minted != 1" class="text-xs pt-2 text-[#ec4899]">Not minted out yet</p>
                </a>
            </div>

        </div>
        <a class="m-4 text-center text-white border-pink-800 text-sm font-medium border-2 rounded-md p-2"
            href="https://stargaze.zone/names">
            Get your .stars.page, mint a Stargaze Name.
        </a>
    </div>
    <div class="flex flex-col justify-between h-screen items-center bg-black" v-else>
        <div class="w-screen max-w-auto h-full  flex flex-col items-center justify-center p-2 ">
            <img src="~/assets/sad-face.svg" provider="ipx" class="w-48 rounded-md m-4" />
            <div class="m-1 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 text-white mb-4 text-2xl font-semibold font-sans text-center">
                No name found</div>


            <a href="https://stargaze.zone/names"
                class="w-full m-1 flex flex-row md:w-1/2 lg:w-1/3 xl:w-1/4 py-2 items-center border-zinc-800 px-4 text-sm font-medium text-white border rounded-md font-sans text-center hover:bg-zinc-800 transition-colors">
                <img src="~/assets/stargaze-mini.svg" class="h-6 w-6" width="180" height="180" />


                <p class="w-full"> Register "{{ stargazeName }}" on Stargaze</p>
            </a>


        </div>
        <a class="m-4 text-center text-white border-pink-800 text-sm font-medium border-2 rounded-md p-2"
            href="https://stargaze.zone/names">
            Get your .stars.page, mint a Stargaze Name.
        </a>
    </div>
</template>
<script setup>

import { toBech32, fromBech32 } from "@cosmjs/encoding"
import mime from "mime/lite";

let host = useState("hostname", () => (headers.host) || window.location.host)
let stargazeName = shallowRef(host.value.split(".")[0])
let lcdEndpoint = 'https://rest.stargaze-apis.com';

let nameInfo = shallowRef(await fetchNameInfo(stargazeName.value))
let imageNft = prefixToGateway(nameInfo?.value?.imageNFT)


let createdNfts = await useFetch(`https://metabase.constellations.zone/api/public/card/a7be4444-f1f2-4da5-8bc7-edff96c736bd/query/json?parameters=%5B%7B%22type%22%3A%22category%22%2C%22value%22%3A%22${nameInfo.value?.stargazeAddress}%22%2C%22target%22%3A%5B%22variable%22%2C%5B%22template-tag%22%2C%22address%22%5D%5D%2C%22id%22%3A%229fc00a15-029c-0c64-2f06-ec1a67595dff%22%7D%5D`).then(fetchRes => fetchRes.data)

function prefixToGateway(uri) {
    if (!uri) { return null }
    let protocol = (["ipfs://", "ar://", "https://", "http://"]).find(p => uri.startsWith(p))
    if (!protocol) { return null }
    let gateway = ({
        'ipfs://': 'https://ipfs-gw.stargaze-apis.com/ipfs/',
        "ar://": "https://arweave.net/",
        "https://": "https://",
        "http://": "http://"
    })[protocol]
    let contentIdentifier = uri.slice(protocol.length)
    return gateway + contentIdentifier
}
async function fetchNameInfo(name) {
    let networks = ['stars', 'akash', 'osmo', 'cosmos', 'stride', 'juno', 'secret', 'cro', 'persistence', 'agoric', 'axelar', 'umee', 'gravity']

    let queryResponse = await useFetch(`https://info.stargaze.zone/api/v1/name/${name}.json`, { key: `name-${name}` }).then(fetchRes => fetchRes?.data?.value)


    let imageNFTMime = mime.getType(queryResponse.name.image_url)


    if (!queryResponse) {
        return null;
    }

    return {
        name: name + ".stars",
        owner: queryResponse.name.owner_addr,
        addresses: queryResponse.name.associated_addr ? Object.fromEntries(networks.map(network => [network, toBech32(network, fromBech32(queryResponse.name.associated_addr).data)])) : [],
        stargazeAddress: queryResponse.name.associated_addr,
        imageNFT: queryResponse.name.image_url,
        imageNFTMime,
        records: queryResponse.records.reduce((pv, cv) => {
            return { ...pv, [cv.record_name]: cv.record_value }
        }, {}),
        verifiedRecordKeys: queryResponse.records.filter(r => r.verified).map(r => r.record_name)
    }

}
function copyClipboard(text) {
    navigator.clipboard.writeText(text || "")
}
useHead({
    title: nameInfo?.value?.name || "Stargaze Pages",
    meta: [
        { hid: 'og:title', name: 'og:title', content: nameInfo?.value?.name || "Stargaze Pages" },
        { hid: 'og:image', name: 'og:image', content: prefixToGateway(nameInfo?.value?.imageNFT) },
        { hid: 'og:description', name: 'og:description', content: nameInfo?.value?.name + "'s personal site on Stargaze Pages." },
        { hid: 'og:type', name: 'og:type', content: "website" },
        { hid: 'og:url', name: 'og:url', content: 'https://' + stargazeName.value + ".stars.page" },
        { hid: 'theme-color', name: 'theme-color', content: "#ec4899" },
    ]

})
</script>
