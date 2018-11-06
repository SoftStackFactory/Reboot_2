import { Component, ViewChild, OnInit } from '@angular/core';
import { InputsProvider } from './../../providers/inputs/inputs';
import { Chart } from 'chart.js'
import 'chartjs-plugin-datalabels';
import 'chartjs-plugin-labels';

@Component({
  selector: 'chart',
  templateUrl: 'chart.html'
})
export class ChartComponent implements OnInit {
  @ViewChild('canvas') canvas;
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
          labels: [
            {
              render: 'label',
              fontColor: '#000',
              fontSize: 14,
              position: 'outside',
              arc: true
            },
          ]
        }
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