import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime }from 'rxjs/operators'

@Component({
  selector: 'app-pais-buscar',
  templateUrl: './pais-buscar.component.html',
  styleUrls: ['./pais-buscar.component.css']
})
export class PaisBuscarComponent implements OnInit{


  @Output () onEnter: EventEmitter<string> = new EventEmitter();
  @Output () onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  termino: string = "";

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
    })
  }

  buscar(){

    this.onEnter.emit(this.termino);

  }
  teclaPresionada(){

   this.debouncer.next(this.termino);
  }



}
