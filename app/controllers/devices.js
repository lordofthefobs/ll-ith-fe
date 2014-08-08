export default Ember.ArrayController.extend({
	actions : {
		update : function(device) {
			$.post("http://localhost:5555/device/update/" + device.id, { device_name: device.name });
		}
	}
});