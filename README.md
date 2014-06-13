mercator-projection
========

Whenever the Google Maps API needs to translate a location in the world to a location on a map (the screen), it needs to first translate latitude and longitude values into a "world" coordinate. This translation is accomplished using the Mercator projection.

More details can be found [here](https://developers.google.com/maps/documentation/javascript/maptypes#WorldCoordinates).

Ported from [here](https://developers.google.com/maps/documentation/javascript/examples/map-coordinates).

Installation
--------

    $ npm install -g mercator-projection

Examples
--------

The following examples show you how to use mercator-projection.

```javascript
var merc = require('mercator-projection');

// translate a latlng to a xy
var xy = merc.fromLatLngToPoint({lat: -27.470127, lng: 153.0147027});
// {x: 236.81045525333332, y: 148.32879785796487}

// translate a xy to a latlng
var ll = merc.fromPointToLatLng({x: 236.81045525333332, y: 148.32879785796487})
// ~ {lat: -27.470127, lng: 153.0147027}
```

Running tests
----

    $ npm test