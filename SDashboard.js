//This variable declaration is for the PieCharts
var tools = document.getElementById('myChart').getContext('2d');
//This variable declaration is for the BarGraphs
var performance = document.getElementById('performance').getContext('2d');

//Defining the body for the tools variable (piecharts)
 var myChart = new Chart(tools, { 
 				type: 'polarArea', 
 				data: { 
 								labels: ['Html', 'CSS', 'JavaScript'], 
 								datasets: [{
 												 label: '# of Votes', 
 												 data: [5000,3000,2500], 										
 												 		 backgroundColor: [ 
 												 				'rgba(255, 99, 132, 1)', 																'rgba(54, 162, 235, 1)', 																'rgba(255, 206, 86, 1)'
 												], 
 												
 										  }] 
 									}, 
 									options: { 
 									//Making the piecharts responsive
 													responsive: true,
 								 } 
 			});
 
 //Defining the body for myChart variable (bargraphs)		
 			var myChart = new Chart(performance, { 
 			  type: 'bar',
 			  data: {
 			  				 labels: ['October', 'November', 'December', 'January', 'February', 'March'], 
 			  				 datasets: [{
 			  				 				 label: 'Performance of Students', 
 			  				 				 data: [12, 19, 21, 27, 31, 0], 													backgroundColor: [ 
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
 			 
/*  Toggling the navgation menu*/
let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function () {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
