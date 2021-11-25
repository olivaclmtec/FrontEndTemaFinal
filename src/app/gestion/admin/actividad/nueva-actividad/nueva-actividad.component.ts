import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fury-nueva-actividad',
  templateUrl: './nueva-actividad.component.html',
  styleUrls: ['./nueva-actividad.component.scss']
})
export class NuevaActividadComponent implements OnInit {

  //Variable publica donde almacenaremos el contenido del quill-editor
  public htmlContent: any;

  constructor() { }

  ngOnInit(): void {
  }

  //configuracion del qill-editor
  public modulesQuill = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ font: [] }],
      [{ color: [] }, { background: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ align: [] }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered'}, { list: 'bullet' }],
      ['link'/*, 'image', 'video'*/],
      ['clean'],
    ],
  };

  //se activa cada vez que se modifique el quill-editor
  onChangedEditor(event: any): void {
    if (event.html) {
        this.htmlContent = event.html;
      }
  }

}

