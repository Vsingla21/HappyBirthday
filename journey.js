document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const modal = document.getElementById('event-modal');
    const modalContent = document.getElementById('event-details');
    const span = document.getElementsByClassName('close')[0];
 
    const eventDetails = {
        '2019-07-20': {
            date: 'July 20, 2019',
            content: `
                <h2>The first day I saw you..</h2>
                <p>In those heavenly premises of room no. 425, heavenly was his aura. 'The most eligible bachelor of Department of Mathematics'!! Huh? Who? Where? And there you were absolutely ravishing in a blue T-shirt, majestically walking towards the front, having your own 'kukkad kamaal da' moment. And me? Well I was just gazing at your charms, totally smitten by the perfection you possessed. And then you uttered the first word; which every inch inch of my insides hated yet there was something so magical about it that I crushed hard and never pulled through it again.</p>
                <img src="cat1.jpg" alt="Event Image 1" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video1.mp4" type="video/mp4">
                </video>
            `
        },
        '2019-07-22': {
            date: 'July 22, 2019',
            content: `
                <h2>Meet Cute..</h2>
                <p>Room No. 421. You're probably gonna haunt me forever for this, aren't you? So there I was just freshly burdened with the new duties of being a CR! (ughhh) But then my favorite time of the day.. when you came with your friends. 'Who's the CR?', I stood up! "Take a number from Jayant over there. He'll tell you all you need to know about books, and study material. The nervous lil me, walked upto you; too scared to even begin the converstaion because maybe I wasn't yet done with admiring you from a difference. I gathered all my courage and asked you for the number; you gave me ofcourse! Now I had to save it right?? What's your name? What'd she say! "Jayant right?" <br> "Ye toh photocopy vale ka number hai, mera number bhi samay ke sath aajayega!" <br> OH NO! Vanshikaaaaa! have you everrr sounded any more desperate???? Chalo hogya meet cute! Karli baat? Karali beizzati? Chalo chlein vapas *cry* *laugh*</p>
                <img src="cat2.jpg" alt="Event Image 2" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video2.mp4" type="video/mp4">
                </video>
            `
        },
        '2019-09-03': {
            date: 'September 3, 2019',
            content: `
                <h2>Fresher's Party</h2>
                <p>Before this day, I never knew parties were fun. Most of the kids have had their fun much before, in school time and figured out what their party vibe is. But for me? this was the first time ever. Provided I created a few messes of my own, but my my.. every part of it that had "you" in it..!! From you giving me hints how we will be grilled, to co-ordinating your shirt with my outfit.. you did everything you could to 'flirt' with meh.. and me? I was nowhere less. I couldn't believe my guts that I had it in me to ask you to be my dance partner!! And you? You said yes! Music to my ears.</p>
                // <p>The next day, you so dashing-ly busy amongst your friends.. too cool to be true.. Paper dance round! I thought in my mind: "chlo awkward moment bach gya, I already asked you.." But nhi bhyii, aise kaise bach jaogi. Your meanesttt version was sitting literally in the midst of what felt like a 1000 unknown guys.. making me literally work for it. But then I can take up a challenge, can't I? So let's go, I put my hand forward and ask you for a dance.. and the crowd burst into hooting.. a MOMENT it was.. You finally stand up and we dance our hearts..closest ever.. just then you lift me up..OMG! butterfliessss!! Is this for real?</p>
                <p>Finally, we're selected! Third round: Dare! Kya mila?? POLE DANCE!!! Wait what???? And as if it wasn't bad enough; CHOOSE A SENIOR to be your pole. OFC! Why not! It will be you..soch kya rhe ho.. chlo na.. You my nakhro! finally there, nd done with it! Hash!! I WON!!!!! It was all you I know! </p>
                <p> The point is this was a day for so many first-time things and I am glad I had all those with you by my side! Spark to tha yaar!!</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2019-09-05': {
            date: 'September 5, 2019',
            content: `
                <h2>Teacher's Day Duet</h2>
                <p>It began from a voice note..I was flexing? rather not.. just trynna impress you by my voice.. Gaana to nhi yaad but I do remember you loved it. That is when you decided you'll make me your duet partner. Honestly, it was huge for me coz.. Yukti di thi vo!! She's a nightingale.. But you! You chose me that time. Haan vo alag baat hai ki she was with Sameer tab.. anyways.. So there we were, alone in classroons, rehearsing; on chats, talking more, flirting most coz of the newly created partnership and it came, the D-Day! Trust me, I am still sorry for screwing up the scale.. Damn it was funny hehe! But kuch bhi bolo, it was once in a lifetime sort of experience. And not to mention, my first duet with a guy!</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2019-09-26': {
            date: 'September 26, 2019',
            content: `
                <h2>Official Fresher's Party</h2>
                <p>The day of my official fresher’s. I hardly even saw you, let alone 2-3 pictures that we clicked in a group. But do you know what was special about this day? You selected my outfit! Before you I wasn’t comfortable sharing ‘choose from this’ pics to anyone. You, my love, you had something so magical.</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2019-10-04': {
            date: 'October 04, 2019',
            content: `
                <h2>Mathrix</h2>
                <p>Jab baat kapde coordinate krne ki chal rahi hai, so how can we forget Mathrix! You know, I was never the person to break the theme and stand out in gatherings.. but with you, maine ye bhi karliya. Do you remember wearing traditionals when the entire college wore formals! A vibe we were, nai? Ps. We got a few of the best photographs that day. Ps. 2: The highlight for me also included the fact that you asked me to participate with you in brainiacs and that’s exactly when we coined the term ‘partner’ for us! Though we performed really bad.. distracted the na yaar hum..hehe!</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2020-01-21': {
            date: 'January 21, 2020',
            content: `
                <h2>First Hug</h2>
                <p>Why am I mentioning my birthday?? Because baby, this was the day I finally got to hug you, with no hidden agendas (like the dance one), just purely heartfelt serenity-full hug. In front of the lab, the best moment of my day. You’ve always made my birthdays special, how do you do it?</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2020-08-27': {
            date: 'August 27, 2020',
            content: `
                <h2>Lockdown Vali Mulaqat</h2>
                <p>It was an awfully long while since we last met, CORONA ki kripa! But you know the best part about it? We grew closer.. on chats, on video calls, even our mails (J-B Night Talks, yaad h?) we did it all. Flirting like crazy was a different thing but the way you “held my back” through my emotional breakdown. I needed a friend, I needed someone to understand me, and you did everything, every part of it in the best possible way. I roughly gave you my heart during that phase only. So finally when you came to my place on this particular day, it was hardly a 15 minutes visit. Trust me, you were the first guy after Kartikey who came here. That day you were annoyed by the rain-drenched muddy riads ruiing your feet but amidst that you said something to me that totally won me over.. you said: "agar baat tumse milne ki hai, to ek nhi sau baar bhi mai aise raaste se aane ko taiyaar hun". Yuo, my love, always knew what to say to me, I couldn't help but draw a comparison and conclude how much better you were.</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2020-10-11': {
            date: 'October 11, 2020',
            content: `
                <h2>First Date</h2>
                <p>Our first date! Unofficial, but date! Hangout bola tha na humne? Vegas saw us together for the first time.. I somehow had hints that some other girl(yk who) is trying on you, but silly lil me was hella convinced that you're somehow just mine. So yeah, it was an amazing day and spent with fries, burgers and us!</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2020-11-09': {
            date: 'November 09, 2020',
            content: `
                <h2>Bitter-Sweet?</h2>
                <p>The first bump in our sweet journey. This was the evening of Monday, and after a while of flirting over anything and everything with you, things felt as though they're permanent.. But boom! You're dating someone else! It was as if all my excitement of seeing you the next day came smashing down and as if I was having a major existential crisis. And all I said was, please be good to her atleast.. Cried my heart out for hours and finally caught back to my senses.. The strangest of things followed. In a couple of days, Nov 14th, diwali! We talked as though nothing happened! Within the week that followed, we were back to our sweet phase.. and then ofcourse came......</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2020-12-03': {
            date: 'December 03, 2020',
            content: `
                <h2>First Kiss</h2>
                <p>This was the second time you visited my place. To my surprise, it was the most magical day! Honestly, I still don't trust my guts that it was me in those moments that day. Beginning with you helping me in my practical examination, we ended up sharing a blanket and watching TVD! (Finally not on meet anymore, haan?) But it was just then, that we were so magically driven towards each other, that your nose rubbed my cheeks and my lips turned to you, showing consent, we KISSED! Putting all facts and situations aside, in that moment, I was yours! With all my heart, I was yours! And I wished hard that I was yours.!</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2021-01-03': {
            date: 'January 03, 2021',
            content: `
                <h2>Second Date</h2>
                <p>This to-date continues to be my favourite day ever! Us and bangla sahib pehli baar.. you came for me, I went for you. Now this was our second date! (Unofficial again ofc! Coz.. hum aapke hai kon?) On the top of that, this was the first time I met mummy, papa and didi.. practically the first time I came to your home.. and the first time we made out! On the stairs, remember? Mmm..But you know my favourite part of the day? It was when we went inside the gurudwara and were both praying when out of nowhere, you took my hand, enclosed it within your palms and continued praying! That.. that moment is when I wished hard and literally begged to make this permanent. I don't know the reason but I will forever believe ki.. aap meri duaa ka asar ho! This followed by our long walk together in the lil drizzles made it a perfect day!</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2021-01-14': {
            date: 'January 14, 2021',
            content: `
                <h2>College Visit</h2>
                <p>By now, we were totally into each other. We could hardly stay away so why not meet? So let's go! Dduc ofc! We made out everywhere like crazy. Practically we were screwing around (in genz terms) but for some reason, everything felt really pure. Aur fun to vo tha hi, nahi? It suddenly stopped mattering that you already had a girlfriend! I saw you with me, as mine alone..</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2021-01-21': {
            date: 'January 21, 2021',
            content: `
                <h2>My Second Birthday with You</h2>
                <p>My birthday again! The day you gave me flowers for the first time.. you gave me that little lovely celebration that made it THE ABSOLUTE BEST birthday ever.. your charms continued to swoon me.. for instance, you tasting the pastry directly from my lips.. how hot can you be baby? This was the day you brought me a tshirt which I loveee btw! And me? I tried it on for you 🥺👉🏻👈🏻 and you and your reactions were the best! You again managed to make my birthday special na!</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        },
        '2021-01-26': {
            date: 'January 26, 2021',
            content: `
                <h2>I AM YOURS</h2>
                <p>YOU CHOSE REPUBLIC DAY! Why would you choose this! Anyways, this was the day of commitments. This was the beginning of forever. This was when our casual hangouts and unofficial dates, became real, became transparent, became official, and legal. You proposed to me.. I still feel blessed about it! And from this day forth, I was all yours! And you? Mine! ❤</p>
                <img src="cat3.jpg" alt="Event Image 3" style="width: 100%; height: auto;">
                <video controls style="width: 100%; height: auto;">
                    <source src="video3.mp4" type="video/mp4">
                </video>
            `
        }
    };

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            const date = item.getAttribute('data-date');
            const details = eventDetails[date];
            modalContent.innerHTML = `
                <h2>${details.date}</h2>
                ${details.content}
            `;
            modal.style.display = 'block';
        });
    });

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
