$(function () {
	var chart = new Highcharts.Chart({
	
	    chart: {
	        renderTo: 'container',
	        type: 'gauge',
	        plotBorderWidth: 1,
	        height: 200
	    },
	
	    title: {
	        text: 'VU meter'
	    },
	    
	    pane: [{
	        startAngle: -45,
	        endAngle: 45,
	        background: null,
	        center: ['25%', '145%'],
	        size: 300
	    }, {
	    	startAngle: -45,
	    	endAngle: 45,
	    	background: null,
	        center: ['75%', '145%'],
	        size: 300
	    }],	    		        
	
	    yAxis: [{
	        min: -20,
	        max: 6,
	        minorTickPosition: 'outside',
	        tickPosition: 'outside',
	        labels: {
	        	rotation: 'auto',
	        	distance: 20
	        },
	        plotBands: [{
	        	from: 0,
	        	to: 6,
	        	color: '#C02316',
	        	innerRadius: '100%',
	        	outerRadius: '105%'
	        }],
	        pane: 0,
	        title: {
	        	text: 'VU<br/><span style="font-size:8px">Channel A</span>',
	        	y: -40
	        }
	    }, {
	        min: -20,
	        max: 6,
	        minorTickPosition: 'outside',
	        tickPosition: 'outside',
	        labels: {
	        	rotation: 'auto',
	        	distance: 20
	        },
	        plotBands: [{
	        	from: 0,
	        	to: 6,
	        	color: '#C02316',
	        	innerRadius: '100%',
	        	outerRadius: '105%'
	        }],
	        pane: 1,
	        title: {
	        	text: 'VU<br/><span style="font-size:8px">Channel B</span>',
	        	y: -40
	        }
	    }],
	    
	    plotOptions: {
	    	gauge: {
	    		dataLabels: {
	    			enabled: false
	    		},
	    		dial: {
	    			radius: '100%'
	    		}
	    	}
	    },
	    	
	
	    series: [{
	        data: [-20],
	        yAxis: 0
	    }, {
	        data: [-20],
	        yAxis: 1
	    }]
	
	},
	
	// Let the music play
	function(chart) {
	    setInterval(function() {
	        var left = chart.series[0].points[0],
	            right = chart.series[1].points[0],
	            newVal, 
	            inc = (Math.random() - 0.5) * 3;
	
	        newVal =  left.y + inc;
	        if (newVal < -20 || newVal > 6) {
	            newVal = left.y - inc;
	        }
	
	        left.update(newVal, false);
	        right.update(newVal, false);
	        chart.redraw();
	
	    }, 500);
	
	});
});