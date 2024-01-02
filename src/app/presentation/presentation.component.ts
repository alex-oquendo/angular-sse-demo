import { Component, OnInit } from '@angular/core';
import { IMessage, SseService } from '../services/sse.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit{

  messages: IMessage[] = [];
  text:string = '';

  emitterId = 'example';

  constructor(private sseService: SseService, private apiService: ApiService){}

  ngOnInit(): void {
    this.sseService.mensajes$.subscribe(message => this.messages.push(message));
    this.sseService.createEventSource(this.emitterId);
  }

  onClick() {
    this.apiService.SendMessage({
      message: this.text,
      id: this.emitterId
    }).subscribe();
    this.text = '';
  }
}
