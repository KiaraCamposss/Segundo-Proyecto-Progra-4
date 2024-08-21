document.addEventListener('DOMContentLoaded', function() {

    var chartDom = document.getElementById('miGrafico');
    var myChart = echarts.init(chartDom);

    fetch('../JSON/grafico.json') //Solicitar archivo JSON 

        .then(response => response.json())  //Convierte la respuesta de fetch en un JSON
        
        .then(data => {     
            
            //Adaptar los datos al tipo de gráfico
            //data: [{ value: 1048, name: 'Search Engine' }]

            
            let pieData = data.categories.map((category, index) => {
                return { value: data.percentages[index], name: category };
            });
        

               //Option  
            
               option = {
                tooltip: {
                  trigger: 'item'
                },
                legend: {
                  top: '5%',
                  left: 'center'
                },
                series: [
                  {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'], //['radio interno', 'radio externo']
                    avoidLabelOverlap: false,
                    label: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                      }
                    },
                    labelLine: {
                      show: false
                    },
                    data: pieData
                  }
                ]
              };        


            myChart.setOption(option);

            // Función para hacer que el gráfico sea responsivo
            window.addEventListener('resize', function () {
              myChart.resize();
              });
            
        });//.then(data)
        
});//document.addEvent  