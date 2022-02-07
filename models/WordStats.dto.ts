export class WordStatsDto {
	id: number;
	word: string;
	count: number;

	constructor(wordStats: WordStatsDto) {
		this.id = wordStats.id;
		this.word = wordStats.word;
		this.count = wordStats.count;
	}
}
