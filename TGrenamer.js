chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  
  var text = item.filename; 
  var label;
  
  if (item.filename = "nbt506searchresults.csv"){
    label = chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
                              var url = tabs[0].url;
                              });
    suggest({filename:label, 
            conflict_action: 'overwrite',
            conflictAction: 'overwrite'});
  }
  
  suggest({filename:text, 
          conflict_action: 'overwrite',
          conflictAction: 'overwrite'});
    
});
