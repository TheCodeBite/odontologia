import { Component, OnInit } from '@angular/core';
import { __generator } from 'tslib';


//PDF
import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  pdf(){
    html2canvas(document.getElementById('contenido'),{
      allowTaint: true,
      useCORS: false,
      scale: 1
    }).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img, 'JPEG', 0, 20);
      doc.save('receta.pdf');
    })
  }

}
