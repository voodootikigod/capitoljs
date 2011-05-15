dojo.addOnLoad( function() { 
  var d = new Date();
  var txt = "day"
  if (d.getHours() <= 4 || d.getHours() > 17 ) {
    txt = "evening";
  } else if (d.getHours() < 12 ) {
    txt = "morning";
  } else { 
    txt = "afternoon"
  } 
  dojo.byId("time").innerHTML = txt;
});

