export const prerender = true;

import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
    const objectRes = await fetch('https://api.cosmicjs.com/v2/buckets/brunocaninicom-production/objects?pretty=true&query=%7B%22type%22%3A%22experiences-professionnelles%22%7D&read_key=JH62zjIxZU3v6MIp4sCzP4F4iFXADarjQx75S2DBF9cAut6WQ5&limit=20&props=')
    const objetData = await objectRes.json()
    const objects = objetData.objects

    if (objects) {
        return { objects };
    }

    throw error(404, 'Not found');
  }
