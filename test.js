const prj2epsg = require('./index.js');
let prj = 'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]';
if(prj2epsg.fromPRJ(prj) != '4326') return process.exit(-1);
if(prj2epsg.fromEPSG(4326) != prj) return process.exit(-1);

console.log('OK')
process.exit(0);