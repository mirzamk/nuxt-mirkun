export default defineEventHandler(async () => {

    // // handle query params
    // const { name } = getQuery(event)

    // // handle post data
    // const { age } = await readBody(event)

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_W1TyJv2ILTV4nmvBhmLLR83m6dPcwNbo67DkE0PV&currencies=')

    return data

})