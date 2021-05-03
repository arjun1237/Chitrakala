import keys from './keys'
export default async function getLocation(){
    let ipFetch =  await fetch(`https://geolocation-db.com/json/${keys.geolocation}`);
    let ipData = await ipFetch.json()
    let cityFetch = await fetch(`http://api.ipstack.com/${ipData.IPv4}?access_key=${keys.ipStack}&format=1`)
    let cityData = await cityFetch.json()

    return cityData.city
}