/** Command-line tool to generate Markov text. */

const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require('./markov');

/** Generate text from a file */
async function makeTextFromFile(path) {
    try {
        const text = fs.readFileSync(path, 'utf8');
        const mm = new MarkovMachine(text);
        console.log(mm.makeText());
    } catch (err) {
        console.error(`Error reading file: ${path}`, err.message);
        process.exit(1);
    }
}

/** Generate text from a URL */
async function makeTextFromURL(url) {
    try {
        const response = await axios.get(url);
        const mm = new MarkovMachine(response.data);
        console.log(mm.makeText());
    } catch (err) {
        console.error(`Error fetching URL: ${url}`, err.message);
        process.exit(1);
    }
}

/** Parse command line arguments and generate text */
function main() {
    const args = process.argv.slice(2);

    if (args.length !== 2) {
        console.error('Usage: node makeText.js [file|url] [path|url]');
        process.exit(1);
    }

    const [method, source] = args;

    if (method === 'file') {
        makeTextFromFile(source);
    } else if (method === 'url') {
        makeTextFromURL(source);
    } else {
        console.error('Method must be either "file" or "url"');
        process.exit(1);
    }
}

// Execute the script
main();