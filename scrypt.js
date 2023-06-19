// JSON 1
// The one and only task in this article concerns accessing JSON data and using it in your page. JSON data about some mother cats and their kittens is available in sample.json. The JSON is loaded into the page as a text string and made available in the catString parameter of the displayCatInfo() function. Your task is to fill in the missing parts of the displayCatInfo() function to store:

// The names of the three mother cats, separated by commas, in the motherInfo variable.
// The total number of kittens, and how many are male and female, in the kittenInfo variable.
// The values of these variables are then printed to the screen inside paragraphs.
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_JSON

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
 
  
  let catInfo = JSON.parse(catString);
  console.log(catInfo);

let motherNames= catInfo.map(cat => cat.name).join(", ");

let motherInfo = `The mother cats are called ${motherNames}`;
console.log(motherInfo);

let total =0;
catInfo.forEach(cat => total+= cat.kittens.length);
console.log(total);

let male = 0;
let female=0;
let kittens = [];
catInfo.forEach(cat => {
    kittens.push(...cat.kittens);    
        
});
for( let kitten of kittens){
   
    if (kitten.gender === "m"){
          male ++;}
    else{
          female ++;
        }
}
kittenInfo = `The total number of kittens is ${total}, ${male} of them are males and ${female} of them are females.`
console.log(kittens);   
console.log(male);
// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;

  let body = document.body;
  body.appendChild(para1);
  body.appendChild(para2);
}
