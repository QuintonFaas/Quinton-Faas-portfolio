const chatbotInput = document.getElementById("chatbot-input");
const chatbotSend = document.getElementById("chatbot-send");
const chatbotClear = document.getElementById("chatbot-clear");
const chatbotMessages = document.getElementById("chatbot-messages");
const initialChatbotMessages = chatbotMessages ? chatbotMessages.innerHTML : "";

const portfolioAnswers = [
	{
		keywords: ["experience", "work", "job"],
		answer: "Quinton has experience as an IT Lecturer, Technical Trainer, and Software Engineer.",
	},
	{
		keywords: ["skill", "programming", "language", "technology"],
		answer: "His skills include C#, JavaScript, Python, Dart, MySQL, HTML, CSS, Flutter, Django, ASP.NET, Git, and software engineering fundamentals.",
	},
	{
		keywords: ["education", "degree", "study", "qualification"],
		answer: "You can find Quinton's education history in the Education section of this portfolio.",
	},
	{
		keywords: ["contact", "email", "phone", "reach"],
		answer: "You can contact Quinton at quintonmadiba007@gmail.com or 0720191906. His Contact section also includes his location and languages.",
	},
	{
		keywords: ["lecturer", "teaching", "student", "mentoring"],
		answer: "Quinton focuses on practical teaching, student mentoring, curriculum development, and helping students build real-world software engineering skills.",
	},
];

const getChatbotAnswer = (question) => {
	const normalizedQuestion = question.toLowerCase();
	const matchedAnswer = portfolioAnswers.find((item) =>
		item.keywords.some((keyword) => normalizedQuestion.includes(keyword)),
	);

	return matchedAnswer
		? matchedAnswer.answer
		: "I can answer questions about Quinton's experience, skills, education, teaching, or contact details.";
};

const addChatbotMessage = (message, type) => {
	const messageElement = document.createElement("div");
	messageElement.className = `chatbot-message ${type}`;
	messageElement.innerHTML = `
		<div class="message-content">
			<i class="fas ${type === "user" ? "fa-user" : "fa-robot"}" aria-hidden="true"></i>
			<p></p>
		</div>
	`;
	messageElement.querySelector("p").textContent = message;
	chatbotMessages.appendChild(messageElement);
	chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
};

const sendChatbotMessage = () => {
	const question = chatbotInput.value.trim();
	if (!question) return;

	addChatbotMessage(question, "user");
	chatbotInput.value = "";

	window.setTimeout(() => {
		addChatbotMessage(getChatbotAnswer(question), "bot");
	}, 250);
};

if (chatbotInput && chatbotSend && chatbotClear && chatbotMessages) {
	chatbotSend.addEventListener("click", sendChatbotMessage);
	chatbotClear.addEventListener("click", () => {
		chatbotMessages.innerHTML = initialChatbotMessages;
		chatbotInput.value = "";
		chatbotInput.focus();
	});
	chatbotInput.addEventListener("keydown", (event) => {
		if (event.key === "Enter") sendChatbotMessage();
	});
}
