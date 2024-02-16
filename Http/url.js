// let url = 'https://app.greenscreens.ai/rates?originCityState=Wausau%20WI&destinationCityState=Evansville%20IN&transportType=VAN';
let url = 'https://app.greenscreens.ai/rates';

const finURL = new URLSearchParams({
    originCityState : 'Denver CO',
    destinationCityState: 'Alsip IL',
    transportType: 'VAN'
});
// console.log('url: ', url + (finURL.toString()));

// const finURL = new URL(url);
// finURL.searchParams.set('originCityState', 'Denver CO');
// finURL.searchParams.set('destinationCityState', 'Alsip IL');
// finURL.searchParams.set('transportType', 'VAN');

console.log('url: ', finURL.toString());