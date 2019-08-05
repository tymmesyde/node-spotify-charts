const request = require('request');
const moment = require('moment');
const csv = require('csvtojson');

const BASE_URL = "https://spotifycharts.com";

function req(path, limit) {
    return new Promise(resolve => {
        if(limit < 0) resolve(null);
        request(`${BASE_URL}/${path}/download`, async (error, res, body) => {
            if(error) return resolve(null);
            const json = await csv({ noheader: false, headers: ['rank', 'name', 'artist', 'streams', 'url'], output: 'json', checkType: true }).fromString((path.includes('viral') ? body : trimFirstLine(body)));
            resolve(json.slice(0, limit));
        });
    });
}

function trimFirstLine(txt) {
    let trimmed = txt.split('\n');
    trimmed.splice(0, 1);
    return trimmed.join('\n');
}

exports.getTopDailyGlobal = (limit = 200) => {
    return req('regional/global/daily/latest', limit);
}

exports.getTopGlobalByDate = (date = null, limit = 200) => {
    if(moment(date, "YYYY-MM-DD", true).isValid()) return req(`regional/global/daily/${date}`, limit);
    else return Promise.resolve(null);
}

exports.getTopWeeklyGlobal = (limit = 200) => {
    return req('regional/global/weekly/latest', limit);
}

exports.getViralDailyGlobal = (limit = 50) => {
    return req('viral/global/daily/latest', limit);
}

exports.getViralWeeklyGlobal = (limit = 50) => {
    return req('viral/global/weekly/latest', limit);
}
