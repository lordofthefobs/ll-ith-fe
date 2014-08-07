/**
 * @class
 * @name IndexRoute
 * @extends Ember.Route
 * @see {@link http://emberjs.com/api/classes/Ember.Route.html|Ember.Route}
 * @description Main index route.
 *
 */
export default Ember.Route.extend({

   /**
    * @method model
    * @memberOf IndexRoute
    * @instance
    * @see {@link http://emberjs.com/api/classes/Ember.Route.html#method_model|Ember.Route.model()}
    * @description A hook you can implement to convert the URL into the model for this route.
    */
   model: function() {
      return {
         "example" : "I heart Ember."
      };
   },

   /**
    * @method renderTemplate
    * @memberOf IndexRoute
    * @instance
    * @see {@link http://emberjs.com/api/classes/Ember.Route.html#method_renderTemplate|Ember.Route.renderTemplate}
    * @description A hook you can use to render the template for the current route.
    */
   renderTemplate : function() {
      this.render("index", { 
         outlet : "content_main" 
      });
   }
});