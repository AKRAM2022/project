function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 
        var carve = 3;
        const canvas = $('#canvas-1')[0],
            ctx = canvas.getContext('2d'),
            gradient = ctx.createLinearGradient(90, -90, 90, 180);
        gradient.addColorStop(.5, '#B7B1F7');
        gradient.addColorStop(1, '#fff0');
        const myChart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: ['one', 'tow', 'three', 'four', 'five', 'sex', 'seven'],
                datasets: [{
                    data: [3, 4.5, 4, 6, 5, 7, 6],
                    fill: true,
                    backgroundColor: gradient,
                    borderWidth: carve,
                    borderColor: '#7E72F2',
                    pointRadius: 0,
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: false
                    }],
                    xAxes: [{
                        display: false
                    }],
                    pointLabels: {

                    }
                },
                legend: {
                    display: false
                }

            }
        });

        const canvas2 = $('#canvas-2')[0],
            ctx2 = canvas2.getContext('2d'),
            gradient2 = ctx2.createLinearGradient(90, -90, 90, 180);
        gradient2.addColorStop(.5, '#FFC089');
        gradient2.addColorStop(1, '#fff0');
        const myChart2 = new Chart(canvas2, {
            type: 'line',
            data: {
                labels: ['one', 'tow', 'three', 'four', 'five', 'sex'],
                datasets: [{
                    data: [1, 6, 2, 6, 2, 5],
                    fill: true,
                    backgroundColor: gradient2,
                    borderWidth: carve,
                    borderColor: '#FF9F43',
                    pointRadius: 0,
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: false
                    }],
                    xAxes: [{
                        display: false
                    }],
                    pointLabels: {

                    }
                },
                legend: {
                    display: false
                }

            }
        });

        const myBarChart2 = $('#cave-hight-1')
        var myBarChart = new Chart(myBarChart2, {
            type: 'bar',
            data: {
                labels: ['one', 'tow', 'three', 'four', 'five', 'sex', 'seven'],
                datasets: [{
                    barPercentage: 15,
                    barThickness: 2,
                    maxBarThickness: 2,
                    backgroundColor: '#F2F0FD',
                    hoverBackgroundColor: '#7E72F2',
                    data: [10, 20, 40, 30, 20, 10, 5],
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: false
                    }],
                    xAxes: [{
                        display: false
                    }],
                    pointLabels: {

                    }
                },
                legend: {
                    display: false
                }

            }
        });

        const canvas3 = $('#canvas-3'),
            scatterChart = new Chart(canvas3, {
                type: 'line',
                data: {
                    labels: ['one', 'tow', 'three', 'four', 'five', 'sex', 'seven'],
                    datasets: [{
                        borderWidth: 0,
                        backgroundColor: '#8C64D2',
                        hoverBackgroundColor: '#E95456',
                        data: [10, 20, 40, 30, 20, 10, 5],
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            display: false
                        }],
                        xAxes: [{
                            display: false
                        }],
                        pointLabels: {

                        }
                    },
                    legend: {
                        display: false
                    }

                }
            });

        const canvas4 = $('#canvas-4'),
            scatterChart2 = new Chart(canvas4, {
                type: 'polarArea',
                data: {
                    datasets: [{
                        data: [10, 20, 30],
                        backgroundColor: ['#F29292', '#FFBF85', '#9482FC'],
                    }],
                }
            });

        const canvas5 = $('#canvas-5'),
            myRadarChart5 = new Chart(canvas5, {
                type: 'radar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        data: [40, 10, 25, 50, 40, 20],
                        backgroundColor: '#21CFD3',
                    }, {
                        data: [30, 20, 40, 60, 50, 60],
                        backgroundColor: '#9EA5D9',
                    }],
                },
                options: {
                    legend: {
                        display: false
                    }
                }
            });
   
            // function openNav() {
            //     document.getElementById("mySidenav").style.width = "250px";
            //   }
              
            //   function closeNav() {
            //     document.getElementById("mySidenav").style.width = "0";
            //   }


var li_items = document.querySelectorAll(".sidebar ul li");
var hamburger = document.querySelector(".hamburger");
var wrapper = document.querySelector(".wrapper");
// var wrapper = document.querySelector(".addNew");


li_items.forEach((li_item)=>{
	li_item.addEventListener("mouseenter", ()=>{
		if(wrapper.classList.contains("click_collapse")){
			return;
		}
		else{
			li_item.closest(".wrapper").classList.remove("hover_collapse");
		}
	})
})

li_items.forEach((li_item)=>{
	li_item.addEventListener("mouseleave", ()=>{
		if(wrapper.classList.contains("click_collapse")){
			return;
		}
		else{
			li_item.closest(".wrapper").classList.add("hover_collapse");
		}
	})
})



hamburger.addEventListener("click", () => {
	hamburger.closest(".wrapper").classList.toggle("click_collapse");
	hamburger.closest(".wrapper").classList.toggle("hover_collapse");
})



// //open popep window
// let addNewButton = document.querySelector(".addNew");
// let addNewDiv = document.querySelector(".addNewContact");
// let close = document.querySelector(".close");

// function openLay(){
//    overlay.style.display = "block";
//    addNewDiv.style.display = "block";
// }
// function closeLay(){
//    overlay.style.display = "none";
//    addNewDiv.style.display = "none";
// }
// // addNewButton.addEventListener('click',openLay);
// close.addEventListener('click',closeLay);


