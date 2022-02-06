import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { TextField } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { ChangeEvent, useState } from 'react';
import { WordStatsDto } from '../models/WordStats.dto';
import { IHomeProps } from '../models/HomeProps.interface';
import { WordCountService } from '../services/WordCount.service';

const WordCountPage: NextPage<IHomeProps> = ({ columns }) => {
	const [wordsStats, setWordsStats] = useState(new Array<WordStatsDto>());

	const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const inputString: string = event.target.value;
		const rowsToAdd: Array<WordStatsDto> = WordCountService.processInput(inputString);

		setWordsStats(rowsToAdd);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Word Count Challenge</title>
				<meta name='description' content='A small app to count the words in sentences.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Word Counter</h1>
				<h2 className={styles.subtitle}>Made With Next.js and Typescript</h2>

				<div className={styles.grid}>
					<div className={styles.box}>
						<TextField id='input-text' label='Write or Paste a Sentence' multiline rows='10' onChange={onChange} fullWidth className={styles.textfield} />
					</div>
					<div className={styles.box}>
						<DataGrid rows={wordsStats} columns={columns} pageSize={10} rowsPerPageOptions={[10]} className={styles.datatable} />
					</div>
				</div>
			</main>
		</div>
	);
};
//			<TextareaAutosize minRows={5} placeholder='Write or Paste a Sentence' onChange={onChange} className={styles.box} />;

export const getStaticProps: GetStaticProps = async () => {
	const columns: GridColDef[] = [
		{ field: 'word', headerName: 'Word', width: 250, headerAlign: 'center' },
		{ field: 'count', headerName: 'Count', width: 250, headerAlign: 'center' },
	];

	return {
		props: {
			columns: columns,
		},
	};
};

export default WordCountPage;
