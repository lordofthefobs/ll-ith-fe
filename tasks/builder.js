"use strict";

/**
 * Registers all build related tasks including compiling, testing, documentation, and development hosting
 */
module.exports = function(grunt) {

   grunt.registerTask("build", 
                      "build the debug target",
                      ["builder_compile:app:debug"]);

   grunt.registerTask("build:dist", 
                      "build the dist target",
                      ["builder_compile:app:dist"]);

   grunt.registerTask("build:docs", 
                      "build the documentation",
                      ["builder_compile:docs:debug"]);

   grunt.registerTask("test", 
                      "run the debug target tests in the browser",
                      ["builder_test:app:debug:browsers"]);

   grunt.registerTask("test:ci",
                      "run the debug tests in CI mode",
                      ["builder_compile:app:debug:with_tests", "builder_test:app:debug:ci"]);

   grunt.registerTask("test:dist",
                      "run the dist target tests in the browser",
                      ["builder_test:app:dist:browsers"]);

   grunt.registerTask("test:dist:ci",
                      "run the dist target tests in CI mode",
                      ["builder_compile:app:dist:with_tests", "builder_test:app:dist:ci"]);

   grunt.registerTask("server",
                      "serve the debug target to view in the browser w/ auto reload",
                      ["builder_compile:app:debug", 
                       "builder_server:app:debug", 
                       "builder_watch:app:debug"]);

   grunt.registerTask("server:mocks",
                      "serve the debug target w/ mocks to view in the browser w/ auto reload",
                      ["builder_compile:app:debug:with_mocks", 
                       "builder_server:app:debug", 
                       "builder_watch:app:debug:with_mocks"]);

   grunt.registerTask("server:dist",
                      "serve the dist target to view in the browser w/ auto reload",
                      ["builder_compile:app:dist",  
                       "builder_server:app:dist", 
                       "builder_watch:app:dist"]);

   grunt.registerTask("server:dist:mocks",
                      "serve the dist target w/ mocks to view in the browser w/ auto reload",
                      ["builder_compile:app:dist:with_mocks",  
                       "builder_server:app:dist", 
                       "builder_watch:app:dist:with_mocks"]);

   grunt.registerTask("server:docs",
                      "serve the docs to view in the browser w/ auto reload",
                      ["builder_compile:docs:debug", 
                       "builder_server:docs:debug", 
                       "builder_watch:docs:debug"]);
};