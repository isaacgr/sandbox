window.addEventListener('load', function(){
  var tabsDict = {};
  var dateDict = {};
  var d = new Date();
  var time = getTime()
  var dateName = document.getElementById('file-name').placeholder = d.toLocaleDateString() + '-' + time;

  $('#save-window').on('click', function(){
    var button = $(this);
    console.log('Save Button Clicked');
    getWindowData();
  })

  $('#save-tab').on('click', function(){
    var button = $(this);
    console.log('Save Button Clicked');
    getTabData();
  })

  $('#save-all').on('click', function(){
    var button = $(this);
    console.log('Save Button Clicked');
    getAllData();
  })

  // FUNCTIONS
  function getTabData(){
    chrome.tabs.getSelected(function(tab){
      var tab = tab;
      var date = [];
      tabName = tab.title;
      tabURL = tab.url;
      dateDict[tabName] = tabURL
      date.push(dateDict);
      tabsDict[dateName] = date;
      var inputName = $("#file-name").val()
      if (inputName == null || inputName == ''){
        var fileName = dateName+'-current-tab';
      }
      else {
        var fileName = inputName;
      }
      saveData(tabsDict, fileName+'.json')
    })
  }

  function getWindowData(){
    chrome.tabs.query({currentWindow: true}, function(tabs){
      var tabs = tabs;
      var date = [];
      for (tab in Object.keys(tabs)){
        tabName = tabs[tab].title;
        tabURL = tabs[tab].url;
        dateDict[tabName] = tabURL;
      }
      date.push(dateDict)
      tabsDict[dateName] = date;
      var inputName = $("#file-name").val()
      if (inputName == null || inputName == ''){
        var fileName = dateName+'-all-tabs';
      }
      else {
        var fileName = inputName;
      }
      saveData(tabsDict, fileName+'.json')
    })
  }

  function getAllData(){
    var date = [];
    chrome.windows.getAll({populate:true},function(windows){
      windows.forEach(function(window){
        window.tabs.forEach(function(tab){
          tabName = tab.title;
          tabURL = tab.url;
          dateDict[tabName] = tabURL;
        });
      });
      date.push(dateDict)
      tabsDict[dateName] = date;
      var inputName = $("#file-name").val()
      if (inputName == null || inputName == ''){
        var fileName = dateName+'-all-windows';
      }
      else {
        var fileName = inputName;
      }
      saveData(tabsDict, fileName+'.json')
    });
  }

  function addZero(i) {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
  }

  function getTime() {
      var d = new Date();
      var h = addZero(d.getHours());
      var m = addZero(d.getMinutes());
      var s = addZero(d.getSeconds());
      var time = h + ":" + m + ":" + s;
      return time
  }

  var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
      var json = JSON.stringify(data, null, "\t"),
        blob = new Blob([json], {type: "octet/stream"}),
        url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    };
  }());

})
