# Spotify Charts

Get the latest Spotify Charts from https://spotifycharts.com

## Install

Run
`npm i spotify-charts`

## Usage

```js
const options = {
    type: 'regional',
    region: 'br',
    daily: true,
    date: '2019-05-04',
    limit: 20
};

SpotifyCharts.getCharts(options).then(res => {
    console.log(res);
});
```

You will get an array of objects that looks like this:

```js
[
    {
        rank: 1,
        name: "What Is Love",
        artist: "Haddaway",
        streams: 34567,
        url: "https://open.spotify.com/track/id-something"
    },
    {...}
]

```

### Methods

#### getCharts

```js
SpotifyCharts.getCharts(options).then(res => {
    console.log(res);
});
```

##### Options

```js
{
    type: 'viral', // Default: 'regional'; 'regional' = Top 200
    region: 'fr', // Default: 'global'; Format: See getRegions
    daily: false, // Default: true; false = Weekly
    date: '2019-08-01', // Default: null; Format: 'YYYY-MM-DD'
    limit: 10, // Default: 200
}
```

#### getTopDailyGlobal

Get the latest daily Top 200 global

```js
SpotifyCharts.getTopDailyGlobal(200).then(res => {
    console.log(res);
});
```

#### getTopWeeklyGlobal

Get the latest weekly Top 200 global

```js
SpotifyCharts.getTopWeeklyGlobal(200).then(res => {
    console.log(res);
});
```

#### getViralDailyGlobal

Get the latest daily Viral 50 global

```js
SpotifyCharts.getViralDailyGlobal(50).then(res => {
    console.log(res);
});
```

#### getViralWeeklyGlobal

Get the latest weekly Viral 50 global

```js
SpotifyCharts.getViralWeeklyGlobal(50).then(res => {
    console.log(res);
});
```

#### getRegions

Get an array of all available regions for `options.region` in `getCharts`

```js
SpotifyCharts.getRegions().then(res => {
    console.log(res);
});
```