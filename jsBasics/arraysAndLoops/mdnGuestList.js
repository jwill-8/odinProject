const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here

for (let i of people) {

    if (i === "Phil" || i === "Lola") {
        refused.textContent += `${i}, `;
    } else {
        admitted.textContent += `${i}, `;  
    }
}

// to dump last " " +, slice from start of str to length - 2 
refused.textContent = refused.textContent.slice(0,refused.textContent.length - 2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length - 2) + '.';
