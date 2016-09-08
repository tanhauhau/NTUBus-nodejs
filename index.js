var rp = require('request-promise');
var _map = require('lodash.map');
var _each = require('lodash.foreach');
var _partial = require('lodash.partial');

///////////////////////////
const PUBLIC_URL = 'https://baseride.com/maps/public/ntu/';
const REQUEST_URL = 'https://baseride.com/routes/apigeo/routevariantvehicle/';
const BLUE_BUS = 44479;
const RED_BUS = 44478;
const GREEN_BUS = 44480;
const BROWN_BUS = 44481;

var NTUBus = function(){
    this.cookie = {};
    this.init = init;
    this.getBus = getBus;
    this.getCLB = this.getCampusLoopBlue = this.getBlueBus = _partial(getBus, BLUE_BUS);
    this.getCLR = this.getCampusLoopRed = this.getRedBus = _partial(getBus, RED_BUS);
    this.getCampusRider = this.getGreenBus = _partial(getBus, GREEN_BUS);
    this.getCampusWeekendRider = this.getBrownBus = _partial(getBus, BROWN_BUS);
    this.BLUE_BUS = BLUE_BUS;
    this.RED_BUS = RED_BUS;
    this.GREEN_BUS = GREEN_BUS;
    this.BROWN_BUS = BROWN_BUS;

    //////////////////////////////
    function getCookie() {
        var options = { uri: PUBLIC_URL,
                        resolveWithFullResponse: true };
        return rp(options).then(response => {
            return _each(response.headers['set-cookie'], cookie => {
                var splittedCookie = cookie.split(';')[0].split('=');
                this.cookie[splittedCookie[0]] = splittedCookie[1];
            });
        });
    }

    function init(){
        return getCookie.apply(this);
    }

    function getBus(busId) {
        var cookie = _map(this.cookie, (value, key) => key + '=' + value).join('; ');
        var options = { uri: REQUEST_URL + busId + '/?format=json&junk=' + Math.random(),
                        header: {
                            cookie: cookie,
                        },
                    };
        return rp(options);
    }
};

module.exports = NTUBus;
