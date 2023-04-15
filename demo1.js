var ctx = document.getElementById('myChart').getContext('2d');
var performance = document.getElementById('performance').getContext('2d');
 var myChart = new Chart(ctx, { 
 				type: 'polarArea', 
 				data: { 
 								labels: ['Html', 'CSS', 'JavaScript'], 
 								datasets: [{
 												 label: '# of Votes', 
 												 data: [3000,2000,1000], 										
 												 		 backgroundColor: [ 
 												 				'rgba(255, 99, 132, 1)', 																'rgba(54, 162, 235, 1)', 																'rgba(255, 206, 86, 1)'
 												], 
 												
 										  }] 
 									}, 
 									options: { 
 													responsive: true,
 								 } 
 			});
 			
 			var myChart = new Chart(performance, { 
 			  type: 'bar',
 			  data: {
 			  				 labels: ['October', 'November', 'December', 'January', 'February', 'March'], 
 			  				 datasets: [{
 			  				 				 label: 'Performance of Students', 
 			  				 				 data: [12, 19, 23, 7, 1, 0], 													backgroundColor: [ 
 			  				 				 				'rgba(255, 99, 132, 1)', 																'rgba(54, 162, 235, 1)', 
 			  				 				 				'rgba(255, 206, 86, 1)', 																'rgba(75, 192, 192, 1)', 
 			  				 				 				'rgba(153, 102, 255, 1)', 																'rgba(255, 159, 64, 1)'
 			  				 				 ], 
 			  				 	 }]
 			  			 }, 
 			  			 options: {
 			  			 				responsive: true,
 			  			 }
 			 });
