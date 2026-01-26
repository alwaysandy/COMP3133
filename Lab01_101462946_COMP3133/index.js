const fs = require('fs');
const csv = require('csv-parser');

try {
    fs.unlinkSync("canada.txt");
    fs.unlinkSync("usa.txt");
} catch {
    console.log("Could not find files canada.txt, usa.txt");
}

fs.writeFileSync("canada.txt", "country,year,population");
fs.writeFileSync("usa.txt", "country,year,population");

fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        if (row["country"] === "Canada") {
            fs.appendFileSync("canada.txt", `\n${row["country"]},${row["year"]},${row["population"]}`);
        }


        if (row["country"] === "United States") {
            fs.appendFileSync("usa.txt", `\n${row["country"]},${row["year"]},${row["population"]}`);
        }
    });