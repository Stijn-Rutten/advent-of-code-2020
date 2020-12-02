import { match } from 'assert';
import fs from 'fs';

interface PasswordConfig {
    requiredCharacter: {
        character: string,
        requirementOne: number,
        requirementTwo: number
    };
    password: string;
}

export class PasswordValidator {
    private readonly _file: string;
    private get _passwordConfigs(): PasswordConfig[] {
        return this._file.trim().split(/\n/g).map(x => this._convertStringToPasswordConfig(x)) as PasswordConfig[];
    }
    constructor() {
        this._file = fs.readFileSync('./src/day-2/assets/passwords.txt').toString();
    }

    getNoOfValidPasswordsByCharacterCount(): number {
        let validPasswords = 0;

        for (const passwordConfig of this._passwordConfigs) {
            const letterCount = this._getCharacterCountInPassword(passwordConfig.password, passwordConfig.requiredCharacter.character);
            if (letterCount >= passwordConfig.requiredCharacter.requirementOne && letterCount <= passwordConfig.requiredCharacter.requirementTwo) {
                validPasswords++;
            }
        }

        return validPasswords;
    }

    getNoOfValidPasswordsByCharacterIndex(): number {
        let validPasswords = 0;

        for (const passwordConfig of this._passwordConfigs) {
            
            const requiredCharacter = passwordConfig.requiredCharacter;
            const matchFirstRequirement = passwordConfig.password.charAt(requiredCharacter.requirementOne - 1) === requiredCharacter.character;
            const matchSecondRequirement = passwordConfig.password.charAt(requiredCharacter.requirementTwo - 1) === requiredCharacter.character;

            if ((matchFirstRequirement || matchSecondRequirement) && (matchFirstRequirement !== matchSecondRequirement)) {
                validPasswords++;
            }
        }

        return validPasswords;
    }



    private _getCharacterCountInPassword(password: string, character: string): number {
        let letterCount = 0;
        for (let i = 0; i < password.length; i++) {
            if (password.charAt(i) === character) {
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
                    requirementOne: +match[1],
                    requirementTwo: +match[2],
                    character: match[3]

                },
                password: match[4]
            }
        }

        return undefined;
    }
}
