import { WordStatsDto } from '../models/WordStats.dto';

export class WordCountService {
	static parseStringToArray = (inputString: string): Array<string> => {
		const trimString = inputString.trim();
		const lowerCaseString = trimString.toLowerCase();

		return lowerCaseString.split(' ');
	};

	static processInput = (inputString: string): Array<WordStatsDto> => {
		const rowsToAdd = new Array<WordStatsDto>();
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
