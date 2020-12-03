import { AOCExercise } from '../aoc-exercise';

export class MapAnalyzer extends AOCExercise {
  private readonly _map: string[][] = [];

  constructor() {
    super(3);

    for (let i = 0; i < this._input.length; i++) {
      this._map[i] = Array.from(this._input[i]);
    }
  }

  calculateTrees(slopeX: number, slopeY: number): number {
    let x = 0;
    let y = 0;

    let trees = 0;

    while (y < this._map.length) {
      if (this._map[y][x] === '#') {
        trees++;
      }
      x += slopeX;
      x = x % 31;

      y += slopeY;
    }

    return trees;
  }

  calculateTreesInBatch(): number {
    let sum = this.calculateTrees(1, 1);
    sum *= this.calculateTrees(3, 1);
    sum *= this.calculateTrees(5, 1);
    sum *= this.calculateTrees(7, 1);
    sum *= this.calculateTrees(1, 2);
    return sum;
  }
}
