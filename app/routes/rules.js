export default Ember.Route.extend({
	model : function() {
		return $.post("http://localhost:5555/devices/list", null, null, "json");
	}
});