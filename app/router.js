/**
 * @class
 * @name Router
 * @extends Ember.Router
 * @see {@link http://emberjs.com/api/classes/Ember.Router.html|Ember.Router}
 */
var Router = Ember.Router.extend();

Router.map(function() {
	this.resource("devices");
	this.route("rules");
});

export default Router;