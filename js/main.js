var ViewModel = function() {
	var self = this;
	
	//self.places = ko.observableArray(type);
	self.places = ko.observableArray();
	self.place = ko.observable('');
	self.locations= ko.observableArray(locations);

	self.filter = ko.observable('');
	self.filteredPlaces = ko.computed(function(){
		var filter = self.filter();
		 if (filter === "All") {

		 	//show all;
		 }
		 else if (filter === "Attractions"){
		 	//hide Beaches
		 }
		 else if (filter === "Beaches"){
		 	//hide Attractions
		 }
	}
)};
var viewModel = new ViewModel();
ko.applyBindings(viewModel);