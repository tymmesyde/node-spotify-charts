const tape = require('tape');
const SpotifyCharts = require('..');

// Get top daily global charts
tape('it should return an array of objects with 200 length', t =>  {
    SpotifyCharts.getTopDailyGlobal().then(res => {
        basicTests(t, res, 200);
        t.end();
    });
});

tape('it should return a valid array of objects with 10 length', t =>  {
    SpotifyCharts.getTopDailyGlobal(10).then(res => {
        basicTests(t, res, 10);
        t.end();
    });
});

tape('it should return a null object', t =>  {
    SpotifyCharts.getTopDailyGlobal(-100).then(res => {
        t.equal(res, null, 'is null');
        t.end();
    });
});

// Get top global by date
tape('it should return an array of objects with 200 length', t => {
    SpotifyCharts.getTopGlobalByDate('2019-08-01').then(res => {
        basicTests(t, res, 200);
        t.end();
    });
});

tape('it should return a null object', t => {
    SpotifyCharts.getTopGlobalByDate().then(res => {
        t.equal(res, null, 'is null');
        t.end();
    });
});

// Get viral weekly global charts
tape('it should return an array of objects with 50 length', t =>  {
    SpotifyCharts.getViralWeeklyGlobal().then(res => {
        basicTests(t, res, 50);
        t.end();
    });
});


function basicTests(t, res, length) {
    t.ok(Array.isArray(res), 'is array');
    t.equal(typeof res[0], 'object', 'has objects');
    t.ok(res[0].rank, 'has valid data');
    t.equal(res.length, length, `is ${length} length`);
}