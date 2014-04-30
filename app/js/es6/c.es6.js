/* jshint unused:false */
/* global _:true*/
/* global AmCharts:true */
(function(){
  'use strict';

  $(document).ready(init);

  var words = [];
  var chart;

  function init(){
    makeTextArray();
    createWordsArray();
    generateGraph();
    populateGraph();
  }

  function makeTextArray(){
    var text = 'When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature\'s God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation. We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.';
    var textArray = text.toLowerCase().split(' ');
    var test = textArray.forEach(createWordsArray);
  }

  function createWordsArray(item){
    var word = {};

    var filter = words.filter(function(test){
      return test.name === item;
    });

    if(filter.length){
      filter[0].occurences += 1;
    } else {
      word.name = item;
      word.occurences = 1;
      words.push(word);
    }
  }

  function populateGraph(){
    words.forEach(x=>chart.dataProvider.push({name: x.name, occurences: x.occurences}));
  }


  function generateGraph(){
      chart = AmCharts.makeChart('chartdiv', {
          'type': 'serial',
          'theme': 'none',
          'dataProvider': [{}],
          'valueAxes': [{
              'gridColor':'#FFFFFF',
      		'gridAlpha': 0.2,
      		'dashLength': 0
          }],
          'gridAboveGraphs': true,
          'startDuration': 1,
          'graphs': [{
              'balloonText': '[[category]]: <b>[[value]]</b>',
              'fillAlphas': 0.8,
              'lineAlpha': 0.2,
              'type': 'column',
              'valueField': 'occurences'
          }],
          'chartCursor': {
              'categoryBalloonEnabled': false,
              'cursorAlpha': 0,
              'zoomable': false
          },
          'categoryField': 'name',
          'categoryAxis': {
              'gridPosition': 'start',
              'gridAlpha': 0
          },
      	'exportConfig':{
      	  'menuTop': 0,
      	  'menuItems': [{
            'icon': '/lib/3/images/export.png',
            'format': 'png'
            }]
      	}
      });
  }
})();
