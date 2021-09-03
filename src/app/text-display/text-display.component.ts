import { Component, OnInit } from '@angular/core';
import {Random} from '../random';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnInit {

  words: string[] = [];

  outputText: string = "";

  constructor() {
    let f = new Random();
    for(let i = 0; i<10;i++){
      (this.words)[i] = f.getRandomWord();
      this.outputText += " " + (this.words)[i];
    }
}

  ngOnInit(): void {
  }

}
