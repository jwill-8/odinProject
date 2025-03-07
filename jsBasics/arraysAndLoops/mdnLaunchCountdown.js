/* 
Loop from 10 down to 0. We've provided you with an initializer — let i = 10;.

For each iteration, create a new paragraph and append it to the output 
<div>, which we've selected using 
const output = document.querySelector('.output');. 
In comments, we've provided you with three code lines that need to 
be used somewhere inside the loop:

const para = document.createElement('p'); — creates a new paragraph.
output.appendChild(para); — appends the paragraph to the output <div>.
para.textContent = — makes the text inside the paragraph equal to 
whatever you put on the right-hand side, after the equals sign.
Different iteration numbers require different text to 
be put in the paragraph for that iteration (you'll need a conditional 
statement and multiple para.textContent = lines):

If the number is 10, print "Countdown 10" to the paragraph.
If the number is 0, print "Blast off!" to the paragraph.
For any other number, print just the number to the paragraph.
Remember to include an iterator! However, in this example we are counting 
down after each iteration, not up, so you don't want i++ — 
how do you iterate downwards?
*/
for (let i = 10; i >= 0; i--) {
  let textContent;

  if (i === 10) {
    textContent = "Countdown 10";
  } else if (i === 0) {
    textContent = "Blast off!";
  } else {
    textContent = i.toString();
  }

  const output = document.querySelector(".output");

  const para = document.createElement("p");

  output.appendChild(para);

  para.textContent = textContent;
}