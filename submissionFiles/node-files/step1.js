const fs = require('fs'
)

function cat(path) {
    const text = fs.readFileSync(path, 'utf8')
    return text;
}



console.log(cat('one.txt'))

//step 2

async function webCat(url) {
    const response = await axios.get(url)
    console.log(response)
}

if (path.startsWith('http')) {
    webCat(path);
} else {
    cat(path);
}
