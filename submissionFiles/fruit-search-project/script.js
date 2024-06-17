const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//search logic
function search(string) {
	const results = [];

	for (let fruit of fruits) {
		if (fruit.toLowerCase().includes(string.toLowerCase())) {
			results.push(fruit)
		}
	}

	return results;
}

//handle the searching
function searchHandler(event) {
	const inputValue = event.target.value;
	const results = search(inputValue)
	showSuggestions(results, inputValue);
}


//show suggested word
function showSuggestions(results, inputValue) {
	suggestions.innerHTML = "";
	//loop through array and add list element to UL
	for (let result of results) {
		const suggestion = document.createElement("li");
		suggestion.innerText = result;
		suggestions.appendChild(suggestion);
	}

	if (inputValue === "") {
		suggestions.innerHTML = "";
	}
}


//use suggested word
function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);