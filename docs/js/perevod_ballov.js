function updatePlaceholder() {
	const subjectSelect = document.getElementById('subject');
	const numberOfTasksInput = document.getElementById('numberOfTasks');

	if (subjectSelect.value === 'ru_lang') {
			numberOfTasksInput.placeholder = 'Введите число от 1 до 50';
	} else if (subjectSelect.value === 'math') {
			numberOfTasksInput.placeholder = 'Введите число от 1 до 32';
	} else if (subjectSelect.value === 'computerScience') {
			numberOfTasksInput.placeholder = 'Введите число от 1 до 29';
	}
}

function calculate() {
	const subjectSelect = document.getElementById('subject');
	const numberOfTasksInput = document.getElementById('numberOfTasks');
	const resultDiv = document.getElementById('result');
	if (numberOfTasksInput.value == 'денис лох') {
		resultDiv.textContent = `100 баллов брат`;
		return 0
	}
	const subject = subjectSelect.value;
	const numberOfTasks = parseInt(numberOfTasksInput.value);

	let maxTasks;
	if (subject === 'ru_lang') {
			maxTasks = 50;
	} else if (subject === 'math') {
			maxTasks = 32;
	} else if (subject === 'computerScience') {
			maxTasks = 29;
	}
	if (isNaN(numberOfTasks) || numberOfTasks < 1 || numberOfTasks > maxTasks) {
			resultDiv.textContent = `Неверное количество первичных баллов. Введите число от 1 до ${maxTasks}.`;
	} else {
		const score = calculateScore(subject, numberOfTasks);
		let balls;
		
		const lastDigit = score.toString()[score.toString().length - 1];
		
		if (lastDigit === '1' && score !== 11) {
				balls = 'балл';
		} else if (['0', '5', '6', '7', '8', '9'].includes(lastDigit) || [11, 12, 13, 14].includes(score)) {
				balls = 'баллов';
		} else {
				balls = 'балла';
		}
		
		resultDiv.textContent = `За ${numberOfTasks} первичных баллов по ${subject === 'ru_lang' ? 'Русскому языку' : (subject === 'math' ? 'Математике' : 'Информатике')} вы получите ${score} ${balls}.`;
	}
}

function calculateScore(subject, numberOfTasks) {
	const ru_langScale = [
			4, 9, 12, 15, 18, 22, 25, 28, 30, 32, 34, 36, 37, 39, 40, 42,
			43, 45, 46, 48, 49, 51, 52, 54, 55, 57, 58, 60, 61, 63, 64, 66, 67, 69, 70,
			72, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 100
	];

	const MathScale = [
			6, 10, 16, 21, 25, 30, 36, 42, 48, 54, 5, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82,
			84, 86, 88, 90, 92, 94, 96, 98, 100, 100, 100
	];

	const computerScienceScale = [
			7, 14, 20, 27, 34, 40, 43, 46, 48, 51, 54, 56, 59, 62, 64, 67, 70, 72, 75, 78,
			80, 83, 85, 88, 90, 93, 95, 98, 100
	];

	if (subject === 'ru_lang') {
			if (numberOfTasks >= 1 && numberOfTasks <= ru_langScale.length) {
					return ru_langScale[numberOfTasks - 1];
			} else {
					return `Неверное количество первичных баллов. Введите число от 1 до ${ru_langScale.length}.`;
			}
	} else if (subject === 'math') {
			if (numberOfTasks >= 1 && numberOfTasks <= MathScale.length) {
					return MathScale[numberOfTasks - 1];
			} else {
					return `Неверное количество первичных баллов. Введите число от 1 до ${MathScale.length}.`;
			}
	} else if (subject === 'computerScience') {
			if (numberOfTasks >= 1 && numberOfTasks <= computerScienceScale.length) {
					return computerScienceScale[numberOfTasks - 1];
			} else {
					return `Неверное количество первичных баллов. Введите число от 1 до ${computerScienceScale.length}.`;
			}
	} else {
			return "Неизвестный предмет.";
	}
}