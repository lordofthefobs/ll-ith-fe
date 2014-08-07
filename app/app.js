import Resolver from "ember/resolver";
import loadInitializers from "ember/load-initializers";
import router from "ith_fe/router";

var App =  Ember.Application.create({
   modulePrefix: "ith_fe",
   Resolver: Resolver,
   Router: Ember.Router.extend({
      router: router
   })
});

loadInitializers(App, "ith_fe");

export default App;