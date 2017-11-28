(function(){
  var ApplicationController = require('./src/ApplicationController');
  var applicationcontroller = new ApplicationController();

  var filePath = 'BookTextFile.txt';
  applicationcontroller.runApplication(filePath);
})();
