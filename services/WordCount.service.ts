import { WordStatsDto } from '../models/WordStats.dto';

export class WordCountService {
	static cleanString = (inputString: string): string => {
		// Trim string
		const trimString = inputString.trim();

		// Remove fullstops and commas
		const noPunctuaionString = trimString.replace(/[.,]/g, '');

		// Transform string to lowercase
		const stringToLowerCase = noPunctuaionString.toLowerCase();

		return stringToLowerCase;
	};

	static parseStringToArray = (inputString: string): Array<string> => {
		const cleanString = WordCountService.cleanString(inputString);

		return cleanString.split(/\s+/);
	};

	static HasAtLeastALetter = (inputString: string): boolean => {
		const regex = /[a-zA-Z]/;

		return regex.test(inputString);
	};

	static stringHandler = (inputString: string): Array<WordStatsDto> => {
		const rowsToAdd = new Array<WordStatsDto>();

		if (inputString === '') return rowsToAdd;
		if (!WordCountService.HasAtLeastALetter(inputString)) return rowsToAdd;

		const inputArray = WordCountService.parseStringToArray(inputString);

		inputArray.forEach(currWord => {
			const foundIndex = rowsToAdd.findIndex(row => row.word == currWord);

			if (foundIndex !== -1) {
				rowsToAdd[foundIndex].count += 1;
				return;
			}

			const newWordStats = {
				id: rowsToAdd.length + 1,
				word: currWord,
				count: 1,
			};

			rowsToAdd.push(newWordStats);
		});

		return rowsToAdd;
	};
}
