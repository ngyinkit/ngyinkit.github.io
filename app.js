const app = Vue.createApp({
    data() {
        return {
            projects: [
                {type: 'Internship', source: 'resources/peruse.jpg', name: 'Peruse', link: 'https://github.com/ngyinkit/Peruse', text: 'A collaboration with another intern during one of my internships. It is a PoC password scanner built using PySide6, SQLite, python-nmap, and THC-Hydra which scans for weak passwords on a network.'},
                {type: 'Personal', source: 'resources/naver.png', name: 'Naver Dictionary scraper', link: 'https://github.com/ngyinkit/naver-dict-scraper', text: 'A personal project to scrape wordlists in Naver Dictionary. It is a chrome extension that scrapes the words and definitions into a format that can be easily imported into Quizlet/Knowt.'},
                {type: 'School', source: 'resources/car.png', name: 'Car rental system', link: 'https://github.com/yonghongtn/ESD-Project', text: 'A school project for one of my software development modules. Built using Python FLask, Vue.js, Bootstrap, and MySQL, and containerized using Docker. It is a car rental system that allows users to rent cars.'},
                // {type: '', source: '', name: '', link: '', text: ''},
            ],

            ctfs: [
                {name: 'Grey Cat The Flag 2022', link: 'https://ctf.nusgreyhats.org/', rank:'148 / 455', writeup:'https://medium.com/@yoongsofties/my-first-ctf-as-an-unprepared-noob-621f0befe966'},
                {name: 'STACK The Flags 2022', link: 'https://jts.tech.gov.sg/', rank:'72 / 223', writeup:'https://medium.com/@yoongsofties/my-second-ctf-as-a-slightly-less-unprepared-noob-a0b56ef95007'},
                {name: 'SPIRITCYBER-22', link: 'https://wis.ntu.edu.sg/webexe88/owa/REGISTER_NTU.REGISTER?EVENT_ID=OA22100610102757', rank:'3 / 13', writeup:'https://medium.com/@yoongsofties/spiritcyber-22-writeup-589f9e171b8f'},
                {name: 'Grey Cat The Flag 2023', link: 'https://ctf.nusgreyhats.org/', rank:'140 / 454', writeup:'https://medium.com/@yoongsofties/grey-cat-the-flag-2023-writeup-ea13830ac805'},
                {name: 'SEETF 2023', link: 'https://seetf.sg/seetf/about', rank:'138 / 431', writeup:'https://medium.com/@yoongsofties/seetf-2023-writeup-769de53f19ba'},
                {name: 'TISC 2023', link: 'https://www.csit.gov.sg/events/tisc/tisc-2023', rank:'-', writeup:'https://chiseled-part-43f.notion.site/TISC-2023-439050d10f114ede84db9f1ac488b07f'},
                {name: 'ASCIS 2023', link: 'https://ascis.vnisa.org.vn/en/overview/', rank:'-', writeup:'https://chiseled-part-43f.notion.site/ASCIS-CTF-2023-11ccc140c70b4288a8f6ed432c316f30'},
                {name: 'CDDC 2024 (qualifiers)', link: 'https://www.dstabrainhack.com/activities/cyber-defenders-discovery-camp', rank:'75 (Uni)', writeup:'https://chiseled-part-43f.notion.site/CDDC-2024-qualifiers-37013e1a08554141a56735300874eec0'},
                {name: 'CISS 2024', link: 'https://itrust.sutd.edu.sg/ciss/', rank:'23 / 50', writeup:'https://chiseled-part-43f.notion.site/CISS-2024-1013de7545088043b210c79a0475b62b'},
                {name: 'TISC 2024', link: 'https://www.csit.gov.sg/events/tisc/tisc-2024', rank:'249/1310', writeup:'https://chiseled-part-43f.notion.site/TISC-2024-1013de7545088067b41aefb856b2b2d6'},
                // {name: '', link: '', rank:'', writeup:''},
            ],

            hackathons: [
                {name: 'SUTD What The Hack 2022', link: 'https://www.sutdwth.com/', rank:'N/A', project: 'https://devpost.com/software/drain-sweeper?ref_content=user-portfolio&ref_feature=in_progress'},
            ],
        };
    },
})

// mount the app
app.mount('#app')
