/**
 * Entry point for grunt
 */
module.exports = function(grunt) {

   // load all npm grunt tasks
   require("load-grunt-config")(grunt, {
      configPath : require("path").join(__dirname, "/tasks/options"),
      loadGruntTasks : true,
      init : true
   });

   // load all tasks registered in the /tasks directory
   grunt.loadTasks("tasks");
};
