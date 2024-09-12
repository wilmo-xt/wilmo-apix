const request = require('request');
const cheerio = require('cheerio');

async function getHTML(url, config = {}) {
    return new Promise((resolve, reject) => {
        request({
            url,
            ...config
        }, (error, res, body) => {
            if (error) return reject(error);
            try {
                body = JSON.parse(body);
            } catch { }
            resolve(body);
        });
    });
}

function userAgent() {
    const oos = ['Macintosh; Intel Mac OS X 10_15_7', 'Macintosh; Intel Mac OS X 10_15_5', 'Macintosh; Intel Mac OS X 10_11_6', 'Macintosh; Intel Mac OS X 10_6_6', 'Macintosh; Intel Mac OS X 10_9_5', 'Macintosh; Intel Mac OS X 10_10_5', 'Macintosh; Intel Mac OS X 10_7_5', 'Macintosh; Intel Mac OS X 10_11_3', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_6_8', 'Macintosh; Intel Mac OS X 10_10_2', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_11_5', 'Windows NT 10.0; Win64; x64', 'Windows NT 10.0; WOW64', 'Windows NT 10.0'];
    return `Mozilla/5.0 (${oos[Math.floor(Math.random() * oos.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 3) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
}

async function scrapeMyInstants(q) {
    try {
        const searchResults = await getHTML('https://www.myinstants.com/pt/search/?name=' + encodeURIComponent(q), {
            method: 'GET',
            headers: {
                "user-Agent": userAgent(),
                'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
            }
        });
        const cache = [];
        const $ = cheerio.load(searchResults);
        $('#instants_container > .instants.result-page > .instant').each((i, elem) => {
            const title = $(elem).find('button.small-button').attr('title').replaceAll("Tocar o som de ", '');
            const audio = "https://www.myinstants.com" + $(elem).find('button.small-button').attr('onclick').replaceAll("play('", '').split("',")[0];
            cache.push({ title, audio });
        });
        return cache;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    scrapeMyInstants
};
