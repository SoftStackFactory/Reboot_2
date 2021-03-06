import { Component, ViewChild, OnInit } from '@angular/core';
import { InputsProvider } from './../../providers/inputs/inputs';
import { Chart } from 'chart.js'
import 'chartjs-plugin-datalabels'

@Component({
  selector: 'chart',
  templateUrl: 'chart.html'
})
export class ChartComponent implements OnInit {
  @ViewChild('canvas') canvas
  text: string;
  data:any
  chart: any
  status;
  constructor(public input:InputsProvider) { }


  updateChart = (values) =>{
      this.chart.destroy();
      this.drawChart(values)
  }
  drawChart(values){
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'polarArea',
      data: {
        labels: ["Career", "Finance", "Personal \n Growth", "Health", "Family", "Relationships", "Social life", "Attitude"],
        datasets: [
          {
            backgroundColor:["rgba(0,0,255, .6)", "rgba(255,0,0, .6)", "rgba(128,0,128, .6)", "rgba(0,128,0, .6)", "rgba(255,165,0, .6)", "rgba(0,128,128, .6)", "rgba(255,0,255, .6)", "rgba(0,255,0, .6)"],
            borderColor: "black",
            data: values
          }
        ]
      },
      options: {
        layout: {
          padding: {
            top: 5,
            bottom: 5
          },
        },

        legend: {
          display: false
        },


        plugins: {
          datalabels: {
            textAlign: 'center',
            anchor: 'start',
            align: 'end',
            offset: function (context) {
              let chartWidth = context.chart.width;
              return chartWidth / 3.5 - 60;
            },
            backgroundColor: ["rgba(0,0,255, .2)", "rgba(255,0,0, .2)", "rgba(128,0,128, .2)", "rgba(0,128,0, .2)", "rgba(255,165,0, .2)", "rgba(0,128,128, .2)", "rgba(255,0,255, .2)", "rgba(0,255,0, .2)"],
            borderColor: 'black',
            rotation: function (context) {
              if (context.dataIndex === 0 || context.dataIndex === 1 || context.dataIndex === 6 || context.dataIndex === 7) { return 45 / 2 + (45 * context.dataIndex) }
              else { return 45 / 2 + (45 * context.dataIndex) + 180 }
            },
            borderRadius: 5,
            borderWidth: 0,
            color: 'black',
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 60);
              return {
                size: size,
                weight: 600,
                font: 'Lato'
              };
            },
            formatter: function (value, context) {
                return (context.chart.data.labels[context.dataIndex] + ' ' + context.chart.data.datasets[0].data[context.dataIndex]);
               }
          }
        },
      }
    });
  }

  ngOnInit() {
    this.drawChart(this.input.initValue)
    Chart.defaults.polarArea.animation.animateRotate = false;
    Chart.defaults.polarArea.animation.animateScale = false;
    Chart.defaults.polarArea.scale.ticks.min=0;
    Chart.defaults.polarArea.scale.ticks.max=10;

  }
  ngAfterViewInit(){

    this.status = this.input.currentStatus.subscribe((res)=>{
      console.log(res)
      this.data = res;
      this.updateChart(res)
    })
  }
  ionViewDidLeave(){
   this.status.unsubscribe();
  }
}
