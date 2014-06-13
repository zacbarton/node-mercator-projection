exports.fromLatLngToPoint = fromLatLngToPoint;
exports.fromPointToLatLng = fromPointToLatLng;

var TILE_SIZE = 256;
var pixelOrigin_ = {x: TILE_SIZE / 2, y: TILE_SIZE / 2};
var pixelsPerLonDegree_ = TILE_SIZE / 360;
var pixelsPerLonRadian_ = TILE_SIZE / (2 * Math.PI);
	
function _bound(value, opt_min, opt_max) {
	if (opt_min != null) value = Math.max(value, opt_min);
	if (opt_max != null) value = Math.min(value, opt_max);
	return value;
}

function _degreesToRadians(deg) {
	return deg * (Math.PI / 180);
}

function _radiansToDegrees(rad) {
	return rad / (Math.PI / 180);
}

function fromLatLngToPoint(latLng, opt_point) {
	var point = {x: null, y: null};
	var origin = pixelOrigin_;
	
	point.x = origin.x + latLng.lng * pixelsPerLonDegree_;
	
	// Truncating to 0.9999 effectively limits latitude to 89.189. This is
	// about a third of a tile past the edge of the world tile.
	var siny = _bound(Math.sin(_degreesToRadians(latLng.lat)), -0.9999, 0.9999);
	point.y = origin.y + 0.5 * Math.log((1 + siny) / (1 - siny)) * -pixelsPerLonRadian_;
	
	return point;
};

function fromPointToLatLng(point) {
	var origin = pixelOrigin_;
	var lng = (point.x - origin.x) / pixelsPerLonDegree_;
	var latRadians = (point.y - origin.y) / -pixelsPerLonRadian_;
	var lat = _radiansToDegrees(2 * Math.atan(Math.exp(latRadians)) - Math.PI / 2);
	
	return {lat: lat, lng: lng};
};