const app = Vue.createApp({
    data() {
        return {
            resources: [
                {topic: 'Cybersecurity', source: 'resources/pico-icon.png', sitename: 'PicoCTF', link: 'https://picoctf.org/', text: 'Learning resource and platform to practice for CTFs. I used this to prepare for my first CTF in 2022.'},
                {topic: 'Cybersecurity', source: 'resources/htb-icon.png', sitename: 'HackTheBox', link: 'https://www.hackthebox.com/', text: 'Another platform to practice for CTFs. I subsequently also started using this platform later in the year.'},
                {topic: 'Cheatsheet', source: 'resources/overapi-icon.png', sitename: 'OverAPI', link: 'https://overapi.com/', text: 'One-stop platform for coding cheatsheets. Personally don\'t necessarily find all of them useful, though.'},
                {topic: 'Korean', source: 'resources/shk-icon.png', sitename: 'SayHiKorean', link: 'https://sayhikorean.blogspot.com/', text: 'Fun fact: I taught myself Korean since I was in primary school. This is my favourite resource for learning Korean grammar.'}
            ],

            ctfs: [
                {name: 'Grey Cat The Flag 2022', link: 'https://ctf.nusgreyhats.org/', rank:'148 / 455', writeup:'https://medium.com/@yoongsofties/my-first-ctf-as-an-unprepared-noob-621f0befe966'},
                {name: 'STACK The Flags 2022', link: 'https://jts.tech.gov.sg/', rank:'72 / 223', writeup:'https://medium.com/@yoongsofties/my-second-ctf-as-a-slightly-less-unprepared-noob-a0b56ef95007'},
                {name: 'SPIRITCYBER-22', link: 'https://wis.ntu.edu.sg/webexe88/owa/REGISTER_NTU.REGISTER?EVENT_ID=OA22100610102757', rank:'3 / 13', writeup:'https://medium.com/@yoongsofties/spiritcyber-22-writeup-589f9e171b8f'},
                {name: 'Grey Cat The Flag 2023', link: 'https://ctf.nusgreyhats.org/', rank:'140 / 454', writeup:'https://medium.com/@yoongsofties/grey-cat-the-flag-2023-writeup-ea13830ac805'},
                {name: 'SEETF 2023', link: 'https://seetf.sg/seetf/about', rank:'138 / 431', writeup:'https://medium.com/@yoongsofties/seetf-2023-writeup-769de53f19ba'},
                {name: 'TISC 2023', link: 'https://www.csit.gov.sg/events/tisc/tisc-2023', rank:'-', writeup:'https://chiseled-part-43f.notion.site/TISC-2023-439050d10f114ede84db9f1ac488b07f'},
                {name: 'ASCIS 2023', link: 'https://ascis.vnisa.org.vn/en/overview/', rank:'-', writeup:'https://chiseled-part-43f.notion.site/ASCIS-CTF-2023-11ccc140c70b4288a8f6ed432c316f30'},
                // {name: '', link: '', rank:'', writeup:''},
            ],

            hackathons: [
                {name: 'SUTD What The Hack 2022', link: 'https://www.sutdwth.com/', rank:'-', project: 'https://devpost.com/software/drain-sweeper?ref_content=user-portfolio&ref_feature=in_progress'},
            ],
        };
    },
})

// mount the app
app.mount('#app')
