const {writeFileSync, mkdirSync} = require('fs')


require("dotenv").config();

const targetPath = "./src/environtments/environtments.ts";
const envFileContent = `

export const environtment = {
    mapbox_key: "${process.env["MAPBOX_KEY"]}",
    otra: "PROPIEDAD",
};
`;

mkdirSync('.src/environtments', {recursive: true});

writeFileSync(targetPath, envFileContent);