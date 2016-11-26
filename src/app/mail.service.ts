import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id:0, text:'mensaje uno'},
    {id:1, text:'mensaje dos'},
    {id:2, text:'mensaje tres'}
  ];

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id
        ? {id, text}
        : m
    )
  }

  constructor() { }

}
