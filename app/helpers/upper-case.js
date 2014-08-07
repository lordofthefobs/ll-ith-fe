/**
 * @method
 * @name upper-case
 * @see {@link http://emberjs.com/api/classes/Ember.Handlebars.helpers.html}
 * @description Example of a hendlebars helper definition, which will return the string uppercased
 */
export default Ember.Handlebars.makeBoundHelper(function(word) {
   return word.toUpperCase();
});