export default Ember.ArrayController.extend({
	actions : {
		update : function() {
			$.post("localhost:5555/devices/update", this.get("model"));
		}
	}
});