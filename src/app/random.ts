export class Random {

  possible = "abscdefghijklmnopqrstuvwxyz";
  maxWordCount = 8;

  public getRandomWord(){
    return this.makeRandom(Math.random()*this.maxWordCount, this.possible);
  }

  private makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += this.possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}
