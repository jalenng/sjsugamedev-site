import styles from './FAQ.module.css';

import Container from "../../components/Container";
import Question from './Question';

const questions = [	
	{
		question: "Who is allowed to join this club?",
		answer: "Anybody with a passion for playing and developing video games! We’re accepting of all, whether you're an SJSU student or not. We’ve even had middle and high school students join us in the past."
	},
	{
		question: "Do I need experience in game development to join the club?",
		answer: "Nope! You don't need any art, programming, or game development experience to join us. We'll point you in the right direction, and we'll teach you the basics of what you need to know."
	},
	{
		question: "How do I join?",
		answer: "Come to one of our meetings and get acquainted with the officers! Most announcements are sent through Discord and emails, so conisder joining our Discord server and email list! Stay connected by following us on our social media platforms at the bottom of this webpage."
	},
	{
		question: "When and where does Game Dev Club meet up?",
		answer: "Our meetings are held in the Innovation Center, located in the Lower Level of SJSU Library. We meet every Thursday at 7:30 pm during the fall and spring semesters. Come on by and say hi to us!"
	},
	{
		question: "How will you help me develop a game?",
		answer: "TODO"
	},
	{
		question: "When are teams formed?",
		answer: "We usually help people find groups sometime in the first few weeks of the semester."
	},
	{
		question: "How do I form or join a team?",
		answer: "Ask a group if you can join them. Even if you don’t ask to join or form a group, we can help place you in a group. You may also invite others to work with you for any upcoming game jams."
	},
	{
		question: "I work alone. Is that a problem?",
		answer: "Not at all! However, we highly encourage you to work with a team to lessen your workload and gain experience working in a team."
	},
	{
		question: "What in the world is a game jam?",
		answer: "A game jam is a multiday event in which you or your team develop a video game that usually caters to a given theme. "
	},
	{
		question: "What happens if my team and/or I cannot finish developing a video game in the time span of the game jam?",
		answer: "Don’t worry about it! The purpose is to help you gain experience in any form we can, regardless of failure or success. The truth is, there are teams who aren’t able to finish a game within that time span due to other obligations."
	},
	{
		question: "What are the rules of the club?",
		answer: <span>All our rules are listed in our <a href='https://sjsugamedev.com/sjsugdc_constitution_2019-20.pdf'>code of conduct</a>.</span>
	},
	{
		question: "Is there a membership fee for the club?",
		answer: "Nope!"
	}
]

function createQuestion(question, index) {
	return (
		<Question key={index} question={question.question}>
			{question.answer}
		</Question>
	)
}

function FAQ() {
	return (
		<Container
			isPadded={true}
			backgroundColor='#fafafa'
			className={styles['container']}
		>
			<h2>FAQ</h2>

			{questions.map(createQuestion)}
		</Container>
	);
}

export default FAQ