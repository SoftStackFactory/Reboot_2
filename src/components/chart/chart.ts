import { Component, ViewChild, OnInit } from '@angular/core';
import { InputsProvider } from './../../providers/inputs/inputs';
import { Chart } from 'chart.js'


@Component({
  selector: 'chart',
  templateUrl: 'chart.html'
})
export class ChartComponent implements OnInit {
  @ViewChild('canvas') canvas;
  text: string;
  data:any
  chart: any
  
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
          }
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
              return chartWidth / 4.0 - 60;
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
          }
        }
      }
    });
  }
  
  ngOnInit() { 
    this.drawChart(this.input.initValue)
    console.log('on init load')
  }
  ngAfterViewInit(){
    
    let status = this.input.currentStatus.subscribe((res)=>{
      this.data = res;
      console.log(res)
      this.updateChart(res)
    })
  }
}