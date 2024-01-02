import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { Server } from '../shared/contants';

export interface IMessage {
  id: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class SseService {

  isOpen = false;
  mensajes$ = new Subject<IMessage>();

  constructor(private zone: NgZone) {}

  createEventSource(id: string) {
    const eventSource = new EventSource(`http://${Server.HOST}:${Server.PORT}${Server.URI}?id=${id}`);

    eventSource.onopen = event => {
      this.isOpen = true;
    };

    eventSource.onmessage = event => {
      this.zone.run(() => this.mensajes$.next(JSON.parse(event.data)))
    }

    eventSource.onerror = event => {
      console.error(event);
    }
  }
}
