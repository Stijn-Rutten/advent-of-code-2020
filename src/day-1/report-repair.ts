
import fs from 'fs';

export class ReportRepair {
    private readonly _numbers: number[] = [];
    constructor() {
        const file = fs.readFileSync('./src/day-1/assets/expense-report.txt').toString();
        this._numbers = file.trim().split(/\n/g).map(x => +x);
    }
    findTheTwoNumbers(): number {
        for (const number of this._numbers) {
            const rest = 2020 - number;
            const includesRest = this._numbers.includes(rest);
            if (includesRest) {
                return number * rest;
            }
        }

        return 0;
    }

    findTheThreeNumbers(): number {
        for (let i = 0; i < this._numbers.length; i++) {
            const ni = this._numbers[i];
            for (let j = i + 1; j < this._numbers.length; j++) {
                const nj = this._numbers[j];
                for (let k = j + 1; k < this._numbers.length; k++) {
                    const nk = this._numbers[k];
                    if (ni + nj + nk === 2020) {
                        return ni * nj * nk;
                    }
                }
            }
        }
        return 0;
    }
}