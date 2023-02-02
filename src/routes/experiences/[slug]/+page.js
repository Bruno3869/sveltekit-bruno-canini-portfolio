/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const objectRes = await fetch(`https://api.cosmicjs.com/v2/buckets/brunocaninicom-production/objects?query=%7B%22type%22%3A%22experiences-professionnelles%22%2C%22slug%22%3A%22${params.slug}%22%7D&pretty=true&read_key=JH62zjIxZU3v6MIp4sCzP4F4iFXADarjQx75S2DBF9cAut6WQ5&props=`);
    const objetData = await objectRes.json();
    const items = objetData.objects
   
    return { items };
  }