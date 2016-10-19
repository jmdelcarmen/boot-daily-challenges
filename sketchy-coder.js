var name = prompt(`Hi there. What's you're name?` );
var coder = prompt(`It's nice meeting you ${name}. Are you a programmer? (Yes/No)`);
var lang = ''; firstLang = ''; number = 0;
var text = document.getElementsByTagName('p');

if (coder.toLowerCase() === 'yes' ) {
  lang = prompt(`Really? What language do you code in?`);
} else {
  firstLang = prompt(`Ohhh it's alright. It's never too late to start. There's Python, JavaScript, and Ruby. What programming language would you like to start with?`)
}



if (lang !== '') {
  alert(`Really? I code in ${lang} too. They have a great community.`);
  number = parseInt(prompt(`It was nice talking to you. Let's catch up again some time. What's you number so I can call you whenever?`));
  if (number !== 0) {
    alert(`Great! Thanks. I was nice meeting you, ${name}. I'll see you soon`);
    text[0].innerHTML = `<p>I'll see you at the ${lang} conference, ${name}. </p>`
  }
  else {
    number = parseInt(prompt(`What the hell man?! Gimme your number!`));
    alert(`Great! Thanks. I was nice meeting you, ${name}. I'll see you soon`);
    text[0].innerHTML = `<p>I'll see you at the ${lang} conference, ${name}. </p>`
  }
} else if (firstLang !== '') {
  alert(`That's great! I also started out coding in ${firstLang}, and I really enjoy the community.`);
  alert(`I should take you to one of their conferences some time. It's an awesome experience.`);
  number = parseInt(prompt(`Yeah, I'll let you know when the next one is coming up. Give me your number, so I can give you a call when I some news.`));
  alert(`Great! It's nice meeting you ${name}. I'll see you next time. `);
  text[0].innerHTML = `<p>I'll see you at the ${firstLang} conference, ${name}. </p>`
}
