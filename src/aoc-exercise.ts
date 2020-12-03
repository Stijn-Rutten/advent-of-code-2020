import fs from 'fs';

export class AOCExercise {
  protected readonly _input: string[];
  constructor(day: number) {
    const file = fs.readFileSync(`./assets/day-${day}.txt`).toString();
    this._input = file.trim().split(/\n/g);
  }
}
