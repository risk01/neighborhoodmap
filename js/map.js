var map;
var markers = [];

var locations = [

	{title: 'Lighthouse Field State Beach', type: 'beach', location: {lat: 36.9516112, lng: -122.0304685}},
	{title: 'Main Beach', type: 'beach', location: {lat: 36.9633272, lng: -122.0210184}},
	{title: 'Natural Bridges State Beach', type: 'beach', location: {lat: 36.9529053, lng: -122.058943}},
	{title: 'Santa Cruz Beach Boardwalk', type: 'attraction', location: {lat: 36.964251, lng: -122.0210412}},
	{title: 'Santa Cruz Surfing Museum', type: 'attraction', location: {lat: 36.951449, lng: -122.0288687}},
	{title: 'Santa Cruz Wharf',	type: 'attraction', location: {lat: 36.9572769, lng: -122.0172773}},
	{title: 'Seabright State Beach', type: 'beach', location: {lat: 36.9630566, lng: -122.010142}},
	{title: 'Seymour Marine Discovery Center', type: 'attraction', location: {lat: 36.9507336, lng: -122.070863}},
	{title: 'The Mystery Spot',	type: 'attraction', location: {lat: 37.0168648, lng: -122.0046967}},
	{title: 'Walton Lighthouse', type: 'attraction', location: {lat: 36.9607206, lng: -122.0022065}}
];

// Initialize map function from Udacity Course
function initMap() {
	var styles = [
		{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#8a7fa6"},{"gamma":"1.10"}]},
		{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#444f67"},{"weight":"4.00"},{"gamma":"0.85"}]},
		{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"on"},{"weight":"1.00"},{"saturation":"-56"},{"lightness":"0"},{"gamma":"1.00"},{"hue":"#ff009b"}]},
		{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#a06d8c"}]},
		{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#444f67"}]},
		{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#444f67"}]},
		{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
		{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#4d9b6a"},{"gamma":"1.00"}]},
		{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"}]},
		{"featureType":"road","elementType":"geometry","stylers":[{"color":"#444f67"},{"gamma":"0.85"}]},
		{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#444f67"},{"gamma":"1.15"}]},
		{"featureType":"road","elementType":"labels.icon","stylers":[{"invert_lightness":true}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#a06d8c"},{"gamma":"1.00"}]},
		{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#a06d8c"}]},
		{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#a06d8c"}]},
		{"featureType":"water","elementType":"geometry","stylers":[{"color":"#444f67"},{"gamma":"0.80"}]}
		];

	map = new google.maps.Map(document.getElementById('map'), {
		//map of Santa Cruz area
		center: {lat: 36.986941, lng: -122.012498},
		zoom: 13,
		styles: styles,
		mapTypeControl: false
		//styles array from "https://snazzymaps.com/style/2120/barcelona-night"
	});

	var largeInfowindow = new google.maps.InfoWindow();
	var bounds = new google.maps.LatLngBounds();

	//Going over each location to place and drop each marker from Udacity Course
	for (var i = 0; i < locations.length; i++) {
		var position = locations[i].location;
		var title = locations[i].title;
		var marker = new google.maps.Marker({
			map: map,
			position: position,
			title: title,
			animation: google.maps.Animation.DROP,
			id: i
		});

		markers.push(marker);

		marker.addListener('click', function() {
			populateInfoWindow(this, largeInfowindow);
		});
		bounds.extend(markers[i].position);
	}
	//document.getElementById('show-list').addEventListener('click',showList);
	//document.getElementById('hide-list').addEventListener('click', hideList);
	map.fitBounds(bounds);
}

//from Udacity API course: Pop up window
function populateInfoWindow(marker, infowindow) {
	if (infowindow.marker != marker) {
		infowindow.marker = marker;
		infowindow.setContent('<div>' + marker.title + '</div>');
			// <br><a href= ' + wikiUrl + '></a>
			
		infowindow.open(map, marker);
		infowindow.addListener('closeclick', function() {
			infowindow.marker(null);
		});
		map.fitBounds(bounds);
	}
}

// function showAll() {
// 	var bounds = new google.maps.LatLngBounds();
// 	var all = locations[i].type.beach + locations[i].type.attract;
// 	// var attract = locations[i].type.beach;
// 	// var beach = locations[i].type.beach;
// 	for (var i= 0; i < markers.length; i++){
// 		if (markers[i] === markers.beach || ) {

// 		}
// 		markers[i].setMap(map);
// 		bounds.extend(markers[i].position);
// 	}
// 	map.fitBounds(bounds);
// }

// function showAttractions() {
// 	var attract = markers.attractions;
// 	for (var i=0; i < locations.length; i++) {
// 		if(markers[i].mall === true) {
// 			markers[i].setVisible(true);
// 		}
// 		else {
// 			markers[i].setVisible(false);
// 		}
// 		bounds.extend(markers[i].attract);
// 	}
// 	map.fitBounds(bounds);
// }

// function showBeaches() {
// 	for (var i=0; i < locations.length; i++) {
// 		if(markers[i].mall === true) {
// 			markers[i].setVisible(true);
// 		}
// 		else {
// 			markers[i].setVisible(false);
// 		}
// 		bounds.extend(markers[i].beach);
// 	}
// 	map.fitBounds(bounds);
// }

//Error Function in case maps doesn't load
function mapError() {
	alert("Oops. Something wrong with your maps.")
}