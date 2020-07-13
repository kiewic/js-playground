const https = require('https');
const fs = require('fs');
const puppeteer = require('puppeteer');
const _ = require('lodash');

const searchTerms = [
  'Route',
  'Determine',
  'Determined',
  'Undermine',
  'Maintain',
  'Jewel',
  'Jewelry',
  'Variety',
  'Occur',
  'Occurrences',
  'Spouse',
  'Genre',
  'Gender',
  'Evenly',
  'Capability',
  'Awareness',
  'Theatre',
  'Aluminium',
  'Drooling',
  'Thaw',
  'Couch',
  'Coach',
  'Yeast',
  'Wheat',
  'Theory',
  'Vary',
  'Annual',
  'Negate',
  'Apparent',
  'Figuratively',
  'Alternately',
  'Perishable',
  'Actively',
  'Stabilize',
  'Minor',
  'Gorgeous',
  'Figuratively',
  'Abide',
  'Chandelier',
  'Interest',
  'Interesting',
  'Ivory',
  'Laboratory',
  'Miniature',
  'Miserable',
  'Mystery',
  'Opera',
  'Practically',
  'Preference',
  'Respiratory',
  'Reverence',
  'Separate',
  'Separately',
  'Several',
  'Sophomore',
  'Temperature',
  'Toward',
  'Traveling',
  'Vegetable',
  'Veterinarian',
  'Virtually',
  'Wednesday',
  'Accidentally',
  'Actually',
  'Aspirin',
  'Average',
  'Barbara',
  'Margaret',
  'Basically',
  'Beverage',
  'Broccoli',
  'Business',
  'Camera',
  'Catholic',
  'Chocolate',
  'Comfortable',
  'Deliberately',
  'Desperate',
  'Diamond',
  'Diaper',
  'Difference',
  'Different',
  'Discovery',
  'Elementary',
  'Evening',
  'Every',
  'Extraordinary',
  'Family',
  'Favorite',
  'Federal',
  'General',
  'Generally',
  'Calvary',
  'Colonel',
  'February',
  'Hurricane',
  'Creaking',
];

(async () => {
  const browser = await puppeteer.launch();

  for (const searchTerm of searchTerms) {
    try {
      const page = await browser.newPage();
      const url = `https://www.bing.com/search?q=define+${encodeURIComponent(searchTerm)}`;
      await page.goto(url);

      const audioSrc = await page.evaluate(() => {
        // Note 1: here you can use querySelectorAll()
        // Note 2: eval can't return non-serializable data, so, you need to JSON.stringify() to receive objects.
        return document.querySelector('audio[preload]').src;
      });
      console.log(audioSrc);

      // await page.screenshot({ path: 'example.png' });

      const request = https.get(audioSrc, function (response) {
        console.log(response.headers['content-type']);
        console.log(response.headers['content-length']);
        const file = fs.createWriteStream(`${_.camelCase(searchTerm)}.mp3`);
        response.pipe(file);
      });
    }
    catch (error) {
      console.log(`Error downloading ${searchTerm}`);
      console.error(error);
    }
  }

  await browser.close();
})();
