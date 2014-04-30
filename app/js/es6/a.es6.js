/* jshint unused:false */
/* global _:true*/

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    let params = $('#parameters').val().split(',').map(n=>n.trim());
    let [begin, end, step] = params;
    let numbers = _.range(begin, end, step);
    let _numbers = _(numbers).map(n=>Math.pow(n,4)).filter(n=>n%2!==0).forEach(n=>$('#divs').append(`<div>${n}</div>`));
  }



})();
