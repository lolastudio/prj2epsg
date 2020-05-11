# prj2epsg
Node.js module for converting .prj files and projcs / geogcs strings to EPSG codes

- Install

```sh
npm i prj2epsg
```

- From .prj file

```javascript
const prj2epsg = require('prj2epsg');
const fs = require('fs');

fs.readFile('./myproj.prj', (err, data) => {
    if(!err) prj2epsg.fromPRJ(data);
});
```

- From GEOGCS / PROJCS string

```javascript
const prj2epsg = require('prj2epsg');
let prj = 'GEOGCS[\"GCS_WGS_1984\",DATUM[\"WGS_1984\",SPHEROID[\"WGS_84\",6378137,298.257223563]],PRIMEM[\"Greenwich\",0],UNIT[\"Degree\",0.017453292519943295]]';

prj2epsg.fromPRJ(prj) // 4326
```

- Methods

| Method | Arguments | Description |
| ----------- | ----------- | ----------- |
| get | projection (String, File), type ('prj', 'epsg') | returns full data object |
| fromPRJ | projection (String, File) | returns epsg code without prefix |
| fromEPSG | projection (String, File) | returns prj projcs / geogcs string |
