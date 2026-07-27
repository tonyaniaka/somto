// =====================
// Unlock Date
// =====================
const unlockDate = new Date("July 29, 2026 00:00:00").getTime();

// Elements
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");

const countdownScreen = document.getElementById("countdownScreen");
const birthdayScreen = document.getElementById("birthdayScreen");

const hearts = document.getElementById("hearts");

// Funny messages
const messages = [

"😂 Nice try, beautiful.",

"Still locked... ❤️",

"I know you're curious 🥹",

"Patience is beautiful too 💕",

"Almost there...",

"I made this with love ❤️",

"Come back on your birthday 🎂"

];

let clickCount = 0;


// =====================
// Floating Hearts
// =====================

function createHeart(){

const heart = document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💕","💖","💗","💞"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(5+Math.random()*6)+"s";

heart.style.fontSize=(18+Math.random()*20)+"px";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,500);


// =====================
// Countdown
// =====================

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = unlockDate-now;

if(distance<=0){

clearInterval(timer);

days.innerHTML="00";
hours.innerHTML="00";
minutes.innerHTML="00";
seconds.innerHTML="00";

message.innerHTML="🎉 Your gift is ready!";

openBtn.innerHTML="Open My Birthday Gift ❤️";

openBtn.onclick=openGift;

return;

}

days.innerHTML=Math.floor(distance/(1000*60*60*24));

hours.innerHTML=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

minutes.innerHTML=Math.floor((distance%(1000*60*60))/(1000*60));

seconds.innerHTML=Math.floor((distance%(1000*60))/1000);

},1000);


// =====================
// Early Click
// =====================

openBtn.addEventListener("click",function(){

if(new Date().getTime()<unlockDate){

message.innerHTML=messages[clickCount%messages.length];

clickCount++;

}

});




// =============================
// LOVE LETTER
// =============================

const music = document.getElementById("music");

const typing = document.getElementById("typing");

const continueBtn = document.getElementById("continueBtn");

const loveLetter = `HEY LOVE 🥹💕

I don't even know how to start this without my chest tightening.. but here it goes.

Sometimes I look at you and wonder if you truly understand what you mean to me. Not the simple version, not the "I love you" people throw around... but the kind that changed the way my heart beats, the way my days feel, the way my world moves.

You came into my life quietly, but somehow you became the loudest part of my heart.

And lately, I've been carrying this fear...
The fear of losing you.

The fear of waking up one day and realizing I was just another passing chapter in your book while you became the whole story in mine.

I know I'm not perfect.

I know I've made mistakes.

But the truth is...

I've never cared about someone the way I care about you.

You're not just my girlfriend.

You're the person I want to tell my good news to.

The person I run to when I'm breaking inside.

You're the calm in my storms, even when you don't realize it.

And if you ever felt even once that you are not enough, that you don't matter, I want you to read
these words again and again: You are my heart in human form.

I don't want anyone else.

I don't even look at the world the same, since you walked into mine

And if you ever cried thinking 1 don't love you.. swear those are the tears l'd cross oceans to wipe away.
I'm here,

I choose you.

Not because I'm lonely.

Not because I need someone.

But because your soul feels like home.

And I don't want to lose the only place I've ever truly felt safe.

❤️ Happy Birthday My Love ❤️`;


// =============================
// OPEN GIFT
// =============================

function openGift(){

countdownScreen.style.display="none";

birthdayScreen.style.display="flex";

// Play music

music.play().catch(()=>{

console.log("Music will start after user interaction.");

});

typeLetter();

}


// =============================
// TYPING EFFECT
// =============================

let i=0;

function typeLetter(){

if(i<loveLetter.length){

typing.innerHTML+=loveLetter.charAt(i);

typing.scrollTop=typing.scrollHeight;

i++;

setTimeout(typeLetter,90);

}else{

continueBtn.style.display="inline-block";

}

}


// =============================
// CONTINUE BUTTON
// =============================

continueBtn.onclick=function(){

alert("❤️ Thank you for reading. Happy Birthday, My Love. ❤️");

};


// ======================================
// FINAL POLISH
// ======================================

// Fade Effect
function fadeOut(element){

    element.style.transition="1.2s";

    element.style.opacity="0";

    setTimeout(function(){

        element.style.display="none";

    },1200);

}

function fadeIn(element){

    element.style.display="flex";

    element.style.opacity="0";

    element.style.transition="1.2s";

    setTimeout(function(){

        element.style.opacity="1";

    },100);

}


// Upgrade openGift()
function openGift(){

    fadeOut(countdownScreen);

    setTimeout(function(){

        fadeIn(birthdayScreen);

        music.play().catch(()=>{});

        typeLetter();

        birthdayHearts();

    },1300);

}



// Gift Shake
const gift=document.getElementById("gift");

gift.addEventListener("click",function(){

    if(new Date().getTime()<unlockDate){

        gift.style.animation="none";

        gift.offsetHeight;

        gift.style.animation="shake .5s";

        setTimeout(function(){

            gift.style.animation="floatGift 2s infinite";

        },500);

    }

});



// Falling Hearts After Opening
function birthdayHearts(){

    setInterval(function(){

        let heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-30px";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        heart.style.zIndex="999";

        heart.style.transition="6s linear";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.style.top="110vh";

            heart.style.opacity="0";

        },50);

        setTimeout(function(){

            heart.remove();

        },6500);

    },500);

}



// Romantic Ending
continueBtn.onclick=function(){

    typing.innerHTML +=

    "<br><br><center><h2 style='color:#ff69b4;'>❤️ I Love You Forever ❤️</h2></center>";

    continueBtn.style.display="none";

};
