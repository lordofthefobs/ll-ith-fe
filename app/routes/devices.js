export default Ember.Route.extend({
	model : function() {
		return [
			{
				name: "a",
				mac: "10:10:10:10:10:10"
			},  {
				name: "b", 
				mac: "10:10:10:10:10:20"
			}
		];
	}
});
