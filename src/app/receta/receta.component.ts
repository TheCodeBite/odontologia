import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';

//PDF
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../Conexion/paciente.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  
  key = '';

  receta: any;

  constructor(private _route: ActivatedRoute, private db: PacienteService) { }
  
  ngOnInit() {
    this.key = this._route.snapshot.paramMap.get('id');
    this.receta = this.db.getReceta(this.key)

    console.log(this.receta);
  }

  public captureScreen(){  
    html2canvas(document.getElementById('contenido'),{
      allowTaint: true,
      useCORS: false,
      scale: 1
    }).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jspdf();
      doc.addImage(img, 'JPEG', 0, 20);
      doc.save('receta.pdf');
    })
  }  

  

}
