angular.module('exampleApp', [])
  .controller('exampleController', function() {
    var exCtrl = this;

    exCtrl.greeting = "Welcome!";

    exCtrl.peopleArr = [
      {name:'John', age:'22'},
      {name:'Amy', age:'23'}
    ];
   
    exCtrl.addPerson = function() {
      exCtrl.peopleArr.push({name:exCtrl.formEntryName, age:exCtrl.formEntryAge});
      exCtrl.formEntryName = '';
      exCtrl.formEntryAge = 0;
    };
 
  });


