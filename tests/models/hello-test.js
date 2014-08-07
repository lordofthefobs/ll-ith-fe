import HelloModel from "ith_fe/models/hello";

/**
 * @method
 * @description Example qunit test method for comparing model key and expected value.
 * @see {@link http://api.qunitjs.com/equal/} 
 */
test("say hello world", function() {
   expect(1);
   equal("world", HelloModel.create().get("hello"), "Hello should say world");
});
