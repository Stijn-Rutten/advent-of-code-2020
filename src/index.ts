import { ReportRepair } from './day-1/report-repair';
import { PasswordValidator } from './day-2/password-validator';
import { MapAnalyzer } from './day-3/map-analyzer';

/// Day 1:
const reportRepair = new ReportRepair();
console.log('Solution day 1-1:', reportRepair.findTheTwoNumbers());
console.log('Solution day 1-2:', reportRepair.findTheThreeNumbers());

/// Day 2:
const passwordValidator = new PasswordValidator();
console.log('Solution day 2-1:', passwordValidator.getNoOfValidPasswordsByCharacterCount());
console.log('Solution day 2-2:', passwordValidator.getNoOfValidPasswordsByCharacterIndex());

/// Day 3:
const mapAnalyzer = new MapAnalyzer();
console.log('Solution day 3-1:', mapAnalyzer.calculateTrees(3, 1));
console.log('Solution day 3-2:', mapAnalyzer.calculateTreesInBatch());
