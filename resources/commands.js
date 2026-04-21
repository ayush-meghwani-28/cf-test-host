!function(){
  function showTaskpane(event) {
    Office.addin.showAsTaskpane().then(function() {
      event.completed();
    }).catch(function(err) {
      console.error(err);
      event.completed();
    });
  }
  function hideTaskpane(event) {
    Office.addin.hide().then(function() {
      event.completed();
    }).catch(function(err) {
      console.error(err);
      event.completed();
    });
  }
  Office.onReady(function() {
    Office.actions.associate("SHOWTASKPANE", showTaskpane);
    Office.actions.associate("HIDETASKPANE", hideTaskpane);
  });
}();
