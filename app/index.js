var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  greeting: function () {
    console.log('The LeanStack Webapp Generator');
  }
});
