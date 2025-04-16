const translations = {
  ar: {
    name: "أكرم الجعبري",
    home: "الرئيسيه",
    about: "عني",
    skills: "المهارات",
    projects: "المشاريع",
    discord: "خوادم الديسكورد",
    title: "أكرم الجعبري - مبرمج وستريمر",
    heroTitle: "مرحبًا، أنا أكرم الجعبري",
    heroSubtitle: "مطور ، مبرمج ، ستريمر",
    //About
    aboutTitle: "عني",
    aboutText: `أنا أكرم الجعبري ، المعروف بلقبي فايروس ( Virus ) ، عمري ${Math.floor((new Date() - new Date("2006-11-08")) / (1000 * 60 * 60 * 24 * 365.25))} عامًا من الأردن وأصولي فلسطينيه من الخليل ... أدرس نظم المعلومات الحاسوبيه في جامعة آل البيت في الأردن ، وأهتم بمجال البرمجه والبث المباشر .`,
    aboutStats: [
      {
        title: "سنوات الخبره",
        value: "2+"
      },
      {
        title: "المشاريع المكتمله",
        value: "5+"
      },
      {
        title: "المشاهدات على يوتيوب",
        value: "2K+"
      },
      {
        title: "المتابعين على كيك",
        value: "90+"
      }
    ],
    //Skills
    skillsTitle: "مهاراتي",
    skillsCards: [
      {
        icon: "fa-code",
        title: "التجارب البرمجيه",
        description: "HTML , CSS , JavaScript , C++ , Lua , Bootstrap , Discord.js , Express.js , Node.js"
      },
      {
        icon: "fa-database",
        title: "قواعد البيانات",
        description: "MySQL , MongoDB , Firebase"
      },
      {
        icon: "fa-video",
        title: "إنشاء المحتوى",
        description: "يوتيوب ، <a href='https://kick.com' target='_blank' style='color: #00e701;'>كيك</a>"
      }
    ],
    //Projects
    projectsTitle: "مشاريعي",
    projectLinkText: "عرض المشروع",
    projectFixText: "قريبًا",
    projectsCards: [
      {
        image: "assets/img/projects/hidayabotwebsite.png",
        title: "موقع هِدايه بوت",
        description: "بوت هِدايه الإسلامي لإحياء وإبقاء ذكر الله (يحتوي الموقع على لوحة تحكم بالبوت ، وبعض المواضيع الإسلاميه)",
        link: "http://5.9.12.94:14756",
      },
      {
        image: "assets/img/projects/adirwebsite.png",
        title: "موقع أدير",
        description: "موقع أدير لإدارة متجرك بشكل كامل (مخزون ، منتجات ، عملائك ، موظفينك ، وأيضا كاشير يعمل على الهواتف) والمزيد من المميزات",
        link: false,
      },
      {
        image: "assets/img/projects/northquerybot.png",
        title: "بوت ربط نورث",
        description: "بوت ديسكورد لسيرفر نورث للحياه الواقعيه في MTA:SA يربط بين اللعبه والديسكورد بحيث يعرض معلومات اللاعبين وإشعار اللاعب بتحديثات حسابه وأيضًا يقوم بتفعيل اللاعبين تلقائياً في الديسكورد",
        link: "https://discord.gg/VTUZMw2bKG",
      },
      {
        image: "assets/img/projects/northticketbot.png",
        title: "بوت تكتات نورث",
        description: "بوت ديسكورد لسيرفر نورث للحياه الواقعيه في MTA:SA يسهل عملية التواصل بين اللاعبين والإداره يتم حل مشاكل اللاعبين  والرد على الاستفسارات بشكل أسرع",
        link: "https://discord.gg/VTUZMw2bKG",
      }
    ],
    //Discord Servers
    discordTitle: "خوادم الديسكورد",
    inviteText: "انضم للخادم",
    memberText: "عضو",
    discordServersCards: [
      {
        image: "assets/img/servers/anubisgroup.png",
        title: "@ Anubis Group #3k",
        description: "نحن في Anubis Cyber Force، فريق عربي متخصص في الأمن السيبراني واختبارات الاختراق. نعتبر أنفسنا درعًا رقميًا لحماية الفضاء الإلكتروني لـ الوطن العربي ، حيث نعمل على تطوير مهاراتنا وتقديم أعلى مستويات الأمان الإلكتروني. هدفنا هو أن نرتقي بالعلم المصري ونضعه في مصاف الدول الرائدة في مجال الأمان السيبراني.",
        members: "120",
        inviteLink: "https://discord.gg/7r58fTtq7z",
        roleMe: "Anubis Cyber Team"
      },
      {
        image: "assets/img/servers/royaltime.png",
        title: "GTA SA : Royal Time RolePlay",
        description: "خادم رويال تايم للحياه الواقعيه في MTA:SA",
        members: "1.5K",
        inviteLink: "https://discord.gg/vw8RuzsvEt",
        roleMe: "مبرمج & مشرف_إداري"
      },
      {
        image: "assets/img/servers/virusaljabari.png",
        title: "Virus AlJabari",
        description: "مجتمع ديسكورد الخاص بمتابعيني",
        members: "20",
        inviteLink: "https://discord.gg/uvkq5dTqeY",
        roleMe: "المالك"
      },
      {
        image: "assets/img/servers/lamsatech.png",
        title: "Lamsa Tech",
        description: "شركه برمجه متخصصه في تطوير البرمجيات ، تصميم المواقع ، برمجة بوتات الديسكورد ، وتسعى لمساعدة عملائها على تحقيق اهدافهم الرقميه",
        members: "500",
        inviteLink: "https://discord.gg/4EpCj3ARnb",
        roleMe: "مالك & مبرمج"
      },
      {
        image: "assets/img/servers/ykwn.png",
        title: "يخوان",
        description: "مجتمع لجروب \"يخوان\" على الفيسبوك يتخصص في الألعاب والبطولات والفعاليات",
        members: "1.5K",
        inviteLink: "https://discord.gg/th5AzgMkQg",
        roleMe: "مؤسس & مدير"
      },
      {
        image: "assets/img/servers/moragaming.jpg",
        title: "Mora Gaming",
        description: "يوتيوبر صاعد في مجال صناعة المحتوى يختص بلعبة MTA:SA",
        members: "1K",
        inviteLink: "https://discord.gg/vpAdvkpXsm",
        roleMe: "مبرمج بوتات"
      },
      {
        image: "assets/img/servers/thenorth.png",
        title: "THE NORTH",
        description: "خادم نورث للحياه الواقعيه في MTA:SA",
        members: "12K",
        inviteLink: "https://discord.gg/VTUZMw2bKG",
        roleMe: "مبرمج بوتات"
      },
      {
        image: "assets/img/servers/hidayabot.png",
        title: "Hidaya Bot",
        description: "الخادم الرسمي لهِدايه بوت",
        members: "600",
        inviteLink: "https://discord.gg/TMAVqSxK4C",
        roleMe: "مبرمج مواقع"
      },
      {
        image: "assets/img/servers/turbonest.jpg",
        title: "TurboNest Hosting",
        description: "استضافه خوادم",
        members: "200",
        inviteLink: "https://discord.gg/MG4SGeUQ6N",
        roleMe: "المدير المالي للمشروع"
      }
    ],
    //Footer
    copyright: "جميع الحقوق محفوظه",
  },
  en: {
    name: "Akram AlJabari",
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    discord: "Discord Servers",
    title: "Akram AlJabari - Programmer & Streamer",
    heroTitle: "Hello, I'm Akram AlJabari",
    heroSubtitle: "Developer , Programmer , Streamer",
    //About
    aboutTitle: "About Me",
    aboutText: `I'm Akram AlJabari , also known as Virus , I'm ${Math.floor((new Date() - new Date("2006-11-08")) / (1000 * 60 * 60 * 24 * 365.25))} years old from Jordan , with Palestinian roots from Hebron ... I study Computer Information Systems at Al al-Bayt University in Jordan , and I'm interested in programming and live streaming .`,
    aboutStats: [
      {
        title: "Years of Experience",
        value: "2+"
      },
      {
        title: "Completed Projects",
        value: "5+"
      },
      {
        title: "YouTube Views",
        value: "2K+"
      },
      {
        title: "Kick Followers",
        value: "90+"
      }
    ],
    //Skills
    skillsTitle: "My Skills",
    skillsCards: [
      {
        icon: "fa-code",
        title: "Software Experiments",
        description: "HTML , CSS , JavaScript , C++ , Lua , Bootstrap , Discord.js , Express.js , Node.js"
      },
      {
        icon: "fa-database",
        title: "Databases",
        description: "MySQL , MongoDB , Firebase"
      },
      {
        icon: "fa-video",
        title: "Content Creation",
        description: "YouTube , <a href='https://kick.com' target='_blank' style='color: #00e701;'>Kick</a>"
      }
    ],
    //Projects
    projectsTitle: "My Projects",
    projectLinkText: "View Project",
    projectFixText: "Coming Soon",
    projectsCards: [
      {
        image: "assets/img/projects/hidayabotwebsite.png",
        title: "Hidaya Bot Website",
        description: "Hidayah Islamic Bot for Reviving and Preserving the Remembrance of Allah (The website includes a bot control panel and various Islamic topics)",
        link: "http://5.9.12.94:14756",
      },
      {
        image: "assets/img/projects/adirwebsite.png",
        title: "Adir Website",
        description: "A Complete Solution for Managing Your Store (Inventory, Products, Customers, Employees, and a Mobile-Friendly POS) with More Features",
        link: false,
      },
      {
        image: "assets/img/projects/northquerybot.png",
        title: "North Query Bot",
        description: "A Discord bot for the North roleplay server in MTA:SA that connects the game and the Discord server, displaying player information and notifying players of updates to their accounts, and also automatically activating players in the Discord",
        link: "https://discord.gg/VTUZMw2bKG",
      },
      {
        image: "assets/img/projects/northticketbot.png",
        title: "North Ticket Bot",
        description: "A Discord bot for the North roleplay server in MTA:SA it facilitates communication between players and the administration . Player problems are resolved and inquiries are answered faster",
        link: "https://discord.gg/VTUZMw2bKG",
      }
    ],
    //Discord Servers
    discordTitle: "Discord Servers",
    inviteText: "Join Server",
    memberText: "Members",
    discordServersCards: [
      {
        image: "assets/img/servers/anubisgroup.png",
        title: "@ Anubis Group #3k",
        description: "We are Anubis Cyber Force, an Arab team specialized in cybersecurity and penetration testing. We consider ourselves a digital shield protecting the cyberspace of the Arab world, continuously working to develop our skills and deliver the highest levels of cybersecurity. Our goal is to elevate Egyptian expertise and position it among the leading nations in the field of cybersecurity.",
        members: "120",
        inviteLink: "https://discord.gg/7r58fTtq7z",
        roleMe: "Anubis Cyber Team"
      },
      {
        image: "assets/img/servers/royaltime.png",
        title: "GTA SA : Royal Time RolePlay",
        description: "RoyalTime server for roleplay MTA:SA",
        members: "1.5K",
        inviteLink: "https://discord.gg/vw8RuzsvEt",
        roleMe: "Developer & Curator_Administration"
      },
      {
        image: "assets/img/servers/virusaljabari.png",
        title: "Virus AlJabari",
        description: "My follower's discord community",
        members: "20",
        inviteLink: "https://discord.gg/uvkq5dTqeY",
        roleMe: "Owner"
      },
      {
        image: "assets/img/servers/lamsatech.png",
        title: "Lamsa Tech",
        description: "A programming company specialized in software development, website design, and Discord bot programming, and seeks to help its clients achieve their digital goals",
        members: "500",
        inviteLink: "https://discord.gg/4EpCj3ARnb",
        roleMe: "Owner & Developer"
      },
      {
        image: "assets/img/servers/ykwn.png",
        title: "يخوان",
        description: "A community for the \"Yakhwan\" Facebook group specializing in games, tournaments, and events",
        members: "1.5K",
        inviteLink: "https://discord.gg/th5AzgMkQg",
        roleMe: "Founder & Manager"
      },
      {
        image: "assets/img/servers/moragaming.jpg",
        title: "Mora Gaming",
        description: "Rising YouTuber specializing in MTA:SA",
        members: "1K",
        inviteLink: "https://discord.gg/vpAdvkpXsm",
        roleMe: "Bots Developer"
      },
      {
        image: "assets/img/servers/thenorth.png",
        title: "THE NORTH",
        description: "The North server for roleplay MTA:SA",
        members: "12K",
        inviteLink: "https://discord.gg/VTUZMw2bKG",
        roleMe: "Bots Developer"
      },
      {
        image: "assets/img/servers/hidayabot.png",
        title: "Hidaya Bot",
        description: "Official server of Hedaya Bot",
        members: "600",
        inviteLink: "https://discord.gg/TMAVqSxK4C",
        roleMe: "Webs Developer"
      },
      {
        image: "assets/img/servers/turbonest.jpg",
        title: "TurboNest Hosting",
        description: "Hosting servers",
        members: "200",
        inviteLink: "https://discord.gg/MG4SGeUQ6N",
        roleMe: "Project CFO"
      }
    ],
    //Footer
    copyright: "All Rights Reserved",
  }
}