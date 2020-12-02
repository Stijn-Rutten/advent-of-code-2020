import fs from 'fs';

interface PasswordConfig {
    requiredCharacter: {
        character: string,
        minimum: number,
        maximum: number
    };
    password: string;
}

export class PasswordValidator {
    readonly _passwordConfigs: PasswordConfig[] = [];

    constructor() {
        const file = fs.readFileSync('./src/day-2/assets/passwords.txt').toString();
        this._passwordConfigs = file.trim().split(/\n/g).map(x => this._convertStringToPasswordConfig(x)) as PasswordConfig[];
    }

    getNoOfValidPasswords(): number {
        let validPasswords = 0;

        for(const passwordConfig of this._passwordConfigs) {
            const letterCount = this._getCharacterCountInPassword(passwordConfig.password, passwordConfig.requiredCharacter.character);
            if (letterCount >= passwordConfig.requiredCharacter.minimum && letterCount <= passwordConfig.requiredCharacter.maximum) {
                validPasswords++;
            }
        }

        return validPasswords;
    }

    private _getCharacterCountInPassword(password: string, character: string): number {
        let letterCount = 0;
        for (let i = 0; i < password.length; i++) {
            if(password.charAt(i) === character) {
                letterCount++;
            }
        }

        return letterCount;
    }

    private _convertStringToPasswordConfig(passwordString: string): PasswordConfig | undefined {
        const regex = /(\d+)-(\d+)\W(\w):\W(\w+)/;

        var match = regex.exec(passwordString);
        if (match) {
            return {
                requiredCharacter: {
                    minimum: +match[1],
                    maximum: +match[2],
                    character: match[3]

                },
                password: match[4]
            }
        }

        return undefined;
    }
}
