import {Component, OnInit} from '@angular/core';
import {Random} from '../random';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnInit {

  words: string[] = [];

  outputText: string = "";

  correctText: string = "";
  textToWrite: string = "";
  firstWord: string = "";

  correctCount: number = 0;
  falseCount: number = 0;

  constructor() {
    let f = new Random();
    for (let i = 0; i < 10; i++) {
      (this.words)[i] = f.getRandomWord();
      this.outputText += " " + (this.words)[i];
    }
    this.outputText = this.outputText.substring(1, this.outputText.length);
    this.textToWrite = this.outputText;
    this.firstWord = this.getFirstWord(this.textToWrite);
  }

  ngOnInit(): void {
  }

  coolStuff(event: Event) {
    //this.outputText+= (event.target as HTMLInputElement).value;
    let inputEvent = (event.target as HTMLInputElement);
    //inputEvent.value = "you're awesome ;) ";
    console.log(this.firstWord);


    if(inputEvent.value.indexOf(" ") != -1){

      if(inputEvent.value.trim() == this.firstWord) {
        this.textToWrite+= "good job";
        this.correctCount++;
      } else {
        console.log(this.firstWord + " is not " + inputEvent.value);
        this.textToWrite+= "kack noob";
        this.falseCount++;
      }
      inputEvent.value = "";
      this.textToWrite = this.textToWrite.substring(this.firstWord.length+1, this.textToWrite.length);
      this.correctText += this.firstWord +" ";
      this.firstWord = this.getFirstWord(this.textToWrite);
    }

  }

  getFirstWord(text: string) {
      let endofword = text.indexOf(" ");
      console.log(this.outputText)
      console.log(endofword)
      return text.substring(0, endofword);
  }

}
