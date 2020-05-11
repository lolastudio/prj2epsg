const data = require('./data.json');

function fromPRJ(prj) {
    return get(prj, 'prj').epsg;
}

function fromEPSG(epsg) {
    return get(epsg, 'epsg').prj;
}

function get(prj, type = 'prj') {
    if (prj) {
        if (typeof prj == 'object') {
            if (prj.buffer && prj.buffer.byteLength) return (findBy(prj.toString(), type) || {});
            else {
                console.log('[prj2epsg] Invalid object');
                return undefined;
            }
        }
        else {
            return (findBy(prj.toString(), type) || {});
        }
    }
    else {
        return {}
    }
}

function findBy(prj, type) {
    for (let i = 0; i < data.length; i++) {
        if (data[i][type] == prj) return data[i];
    }
}

module.exports = {
    fromPRJ,
    fromEPSG,
    get
}