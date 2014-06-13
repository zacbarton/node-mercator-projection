var merc = require('../');

describe('MercatorProjection', function() {
	
	// ll
	it('ll returns an object', function(done) {
		merc.fromLatLngToPoint({lat: -27.470127, lng: 153.0147027}).should.be.an.Object;
		done();
	});
	
	it('ll returns both xy keys', function(done) {
		merc.fromLatLngToPoint({lat: -27.470127, lng: 153.0147027}).should.have
			.keys('x', 'y');
		done();
	});
	
	it('ll returns expected xy', function(done) {
		merc.fromLatLngToPoint({lat: -27.470127, lng: 153.0147027}).should.have
			.properties({x: 236.81045525333332, y: 148.32879785796487});
		done();
	});
	
	// xy
	it('xy returns an object', function(done) {
		merc.fromPointToLatLng({x: 236.81045525333332, y: 148.32879785796487}).should.be.an.Object;
		done();
	});
	
	it('xy returns both ll keys', function(done) {
		merc.fromPointToLatLng({x: 236.81045525333332, y: 148.32879785796487}).should.have
			.keys('lat', 'lng');
		done();
	});
	
	it('xy returns expected ll', function(done) {
		var ll = merc.fromPointToLatLng({x: 236.81045525333332, y: 148.32879785796487});
		ll.lat.should.approximately(-27.470127, 0.01);
		ll.lng.should.approximately(153.0147027, 0.01);
		done();
	});
	
});