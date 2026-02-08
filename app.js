
function showForm(){
 document.getElementById("form").classList.remove("hidden");
}

// date → custom message map

const messages = {
"11-1":`Happy Birthday Brother 💙
You always stand like a shield for us.
Stay strong and keep winning.
Family is lucky to have you.`,

"19-2":`Happy Birthday Dear Bestie 🎉
Har moment tmhare sath bestest hota hai😄.
Best friends forever ,no upgrade needed.
Happy Birthday, bestie today is yours.`,

"14-3":`Happy Birthday Mom 🌸
Aap meri biggest blessing ho.
Har dua aur har strength aapse hi mili.
Love you more than words.`,

"29-4":`Happy Birthday Me 😄
Main limited edition hoon.
Dream big, shine louder.
This year = next level glow.`,

"19-6":`Happy Birthday Sis 💜
Built-in best friend for life.
Fights bhi, love bhi unlimited.
Always on my team.`,

"24-6":`Happy Birthday Bestest Cousin 🎀
Family by blood, friend by heart.
Har gathering tumse bright hoti hai.
Stay awesome always.`,

"7-7":`Happy Birthday Dad ⭐
Real life superhero ho aap.
Silent support, biggest power.
Respect always.`,

"17-9":`Some people are just different🌹.
You’re one of those rare vibes.
Stay unforgettable.Always be happy .
May Allah bless you Forever.`,

"27-9":`Some people are just different🌹.
You’re one of those rare vibes.
Stay unforgettable.May Allah bless you Forever.`,

"17-11":`Happy Birthday Mussarat Anni 🌺
Grace, warmth, and kindness.
You bring calm wherever you go.
Stay blessed always.`
};


function checkBirthday(){

 const name = document.getElementById("name").value || "Friend";
 const d = document.getElementById("day").value;
 const m = document.getElementById("month").value;
 const key = `${d}-${m}`;

 const out = document.getElementById("out");

 if(messages[key]){
   out.innerHTML = `🎉 Happy Birthday ${name}!<br>${messages[key]}`;
   out.innerHTML = `🎉 Happy Birthday ${name}!<br>${messages[key].replace(/\n/g,"<br>")}`;

   launchConfetti();
   
 } else {
   out.innerHTML = `💜 ${name}, you are special — have a magical day!`;
 }
}

function launchConfetti(){
 for(let i=0;i<100;i++){
  const c=document.createElement("div");
  c.className="confetti";
  c.style.left=Math.random()*100+"vw";
  c.style.background=`hsl(${Math.random()*360},100%,60%)`;
  c.style.animationDuration=(Math.random()*3+2)+"s";
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),5000);
 }
}

// floating balloons
const balloons=["🎈","🎈","🎀","💖","✨"];
setInterval(()=>{
 const b=document.createElement("div");
 b.className="balloon";
 b.innerText=balloons[Math.floor(Math.random()*balloons.length)];
 b.style.left=Math.random()*100+"vw";
 b.style.animationDuration=(6+Math.random()*4)+"s";
 document.body.appendChild(b);
 setTimeout(()=>b.remove(),9000);
},800);




