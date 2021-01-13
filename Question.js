import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import questions from './data';

const Question = () => {
	const QuestionItem = ({ item }) => {
		const [expand, setExpand] = useState(false);
		if (expand === false) {
			return (
				<article className='question' key={item.id}>
					<header>
						<h4>{item.title}</h4>
						<button className='btn' onClick={() => setExpand(true)}>
							<AiOutlinePlus />
						</button>
					</header>
				</article>
			);
		}
		if (expand === true) {
			return (
				<article className='question' key={item.id}>
					<header>
						<h4>{item.title}</h4>
						<button
							className='btn'
							onClick={() => setExpand(false)}
						>
							<AiOutlineMinus />
						</button>
					</header>
					<p>{item.info}</p>
				</article>
			);
		}
	};

	return (
		<>
			<section className='info'>
				{questions.map((item, key) => {
					return <QuestionItem item={item} key={key} />;
				})}
			</section>
		</>
	);
};

export default Question;
