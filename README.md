# ntubus

[![npm version](https://badge.fury.io/js/ntubus.svg)](https://badge.fury.io/js/ntubus)
[![npm version](https://img.shields.io/npm/v/ntubus.svg)](https://www.npmjs.com/package/ntubus)
[![npm license](https://img.shields.io/npm/l/ntubus.svg)](https://www.npmjs.com/package/ntubus)

> NTU Bus API

# Installation

```bash
$ npm install --save ntubus
```

## Usage

```javascript
var bus = new NTUBus();
bus.init()
.then(function(){
    return bus.getBlueBus();
})
.then(function(data){
    console.log(data);
    /*
       { external_id: null,
         id: 44479,
         name: "Bus Campus Loop - Blue (CL-B) [Singapore]: LWN Library, Opp. NIE - LWN Library, Opp. NIE",
         name_en: null,
         name_ru: null,
         nameslug: null,
         resource_uri: "/routes/apigeo/routevariantvehicle/44479/",
         routename: "Campus Loop - Blue (CL-B)None",
         vehicles: [
          { bearing: 177,
            device_ts: "2016-09-08T17:55:37",
            enterprise: {
                enterprise_id: 410,
                enterprise_name: "NTU"
            },
            lat: "1.347276000000",
            lon: "103.686573000000",
            park: {
                park_id: 426,
                park_name: "NTU Bus park"
            },
            position: {
                bearing: 246,
                device_ts: 1473349146,
                lat: "1.339908000000",
                lon: "103.681670000000",
                speed: 10,
                ts: 1473349204
            },
            projection: {
                edge_distance: "2.223",
                edge_id: 386633,
                edge_projection: "520.890",
                edge_start_node_id: 333292,
                edge_stop_node_id: 333293,
                lat: "1.347275607863",
                lon: "103.686553007485",
                orig_lat: "1.347276000000",
                orig_lon: "103.686573000000",
                routevariant_id: 44479,
                ts: 1473346548
            },
            registration_code: "PC 992 G",
            routevariant_id: 44479,
            speed: "18.15",
            stats: {
                avg_speed: "18.50",
                bearing: 246,
                cumm_speed_10: "18.32",
                cumm_speed_2: "18.15",
                device_ts: 1473349146,
                lat: "1.339908000000",
                lon: "103.681670000000",
                speed: 10,
                ts: 1473349204,
            },
            ts: "2016-09-08T17:55:48",
            vehicle_id: 31138,
        }
     ],
     *   via: null
     * }
     *
     */
});
```

## Method

All public method returns [Bluebird Promise](https://github.com/petkaantonov/bluebird/)

### bus.init()

Initialize bus object

### bus.getCLB()

Get Information of Campus Loop Blue

### bus.getCampusLoopBlue()

Get Information of Campus Loop Blue

### bus.getBlueBus()

Get Information of Campus Loop Blue

### bus.getCLR()

Get Information of Campus Loop Red

### bus.getCampusLoopRed()

Get Information of Campus Loop Red

### bus.getRedBus()

Get Information of Campus Loop Red

### bus.getCampusRider()

Get Information of Campus Rider

### bus.getGreenBus()

Get Information of Campus Rider

### bus.getCampusWeekendRider()

Get Information of Campus Weekend Rider

### bus.getBrownBus()

Get Information of Campus Weekend Rider

## Credits

All requests are made via [request-promise](https://github.com/request/request-promise).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

# License
MIT
