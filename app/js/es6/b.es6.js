/* jshint unused:false */
/* global _:true*/

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(get);
  }

  function get(){
    $('#divs').empty();
    var zip = $('#zip').val();
    var url = 'http://api.wunderground.com/api/bd42f70292516b80/webcams/q/'+zip+'.json?callback=?';

    $.getJSON(url, function(data){
      data.webcams.forEach(x=>$('#divs').append('<img src="'+x.WIDGETCURRENTIMAGEURL+'">'));
    });
  }



})();
