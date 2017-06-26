// var Places = function(locations, marker) {
// 	this.title = ko.observable(locations.title);
// 	this.location = ko.observable(locations.location);
// 	this.type = ko.observable(locations.type);
// 	this.marker = data.marker;
// }

var ViewModel = function() {
	var self = this;
	
	self.categories = ["All", "Attractions", "Beaches"];
	self.availablePlaces = ko.observableArray();
	self.selectedPlaces = ko.observable();
	self.locationList= ko.observableArray(locations);
	//self.filter = ko.observable(locations.type);
	self.filteredPlaces = ko.computed(function() {
		//var listPlaces = self.places();
		//self.availablePlaces.push(new Category())
		// for (var i=0; i < listPlaces.length; i++) {
		//  if (self.selectedPlaces.type === "All") {
		//  	return listPlaces;
		//  }
		// if (self.selectedPlaces === "Attractions") {
		//  	listPlaces[i].isVisible(true);
		//  	listPlaces[i].marker.setVisible(true);
		//  }
		//  else if(self.selectedPlaces === "Beaches") {
		//  	listPlaces[i].isVisible(true);
		//  	listPlaces[i].marker.setVisible(true);
		//  }
 	// };
	});
}

var viewModel = new ViewModel();
ko.applyBindings(viewModel);