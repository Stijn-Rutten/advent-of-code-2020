import { ReportRepair } from "./day-1/report-repair";
import { PasswordValidator } from "./day-2/password-validator";


/// Day 1:
const reportRepair = new ReportRepair();
console.log("Solution day 1-1:", reportRepair.findTheTwoNumbers());
console.log("Solution day 1-2:", reportRepair.findTheThreeNumbers());


/// Day 2:
const passwordValidator = new PasswordValidator();
console.log("Solution day 2-1:", passwordValidator.getNoOfValidPasswordsByCharacterCount());
console.log("Solution day 2-2:", passwordValidator.getNoOfValidPasswordsByCharacterIndex());