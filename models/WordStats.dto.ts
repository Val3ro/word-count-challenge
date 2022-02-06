import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class WordStatsDto {
	@IsNotEmpty()
	@IsNumber()
	id: number;

	@IsNotEmpty()
	@IsString()
	word: string;

	@IsNotEmpty()
	@IsNumber()
	count: number;

	constructor(wordStats: WordStatsDto) {
		this.id = wordStats.id;
		this.word = wordStats.word;
		this.count = wordStats.count;
	}
}
