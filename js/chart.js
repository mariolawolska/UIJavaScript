$(function() {

  'use strict';

  var doughnutPieData = {
    datasets: [{
      data: [30, 50, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Pink',
      'Blue',
      'Yellow',
    ]
  };

  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };
  
chartRegeneration();  

$( "#Pink" ).change(function() {
  chartRegeneration();
});
$( "#Blue" ).change(function() {
  chartRegeneration();
  });
$( "#Yellow" ).change(function() {
  chartRegeneration();
});

function chartRegeneration(){
  doughnutPieData.datasets[0].data[0] = $( "#Pink" ).val();
  doughnutPieData.datasets[0].data[1] = $( "#Blue" ).val();
  doughnutPieData.datasets[0].data[2] = $( "#Yellow" ).val();

    if ($("#doughnutChart").length) {
    var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }
}

});