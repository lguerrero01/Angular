import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/destinoViaje.model';
import { DestinosApiClient } from '../models/destinos-api-client.model';

// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-lista-destino',
  templateUrl: './lista-destino.component.html',
  styleUrls: ['./lista-destino.component.css']
})
export class ListaDestinoComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;

  // destinos: DestinoViaje[];
  constructor(public destinosApiClient: DestinosApiClient) {
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    console.log("entra en la funcion", this.destinosApiClient.getAll());
    this.onItemAdded.emit(d);

  }

  elegido(e: DestinoViaje) {
    this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);
  }

}
