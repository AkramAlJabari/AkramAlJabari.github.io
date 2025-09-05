let config = {
  title: `أكرم الجعبري - مبرمج وستريمر`,
  name: `أكرم الجعبري`,
  sections: {
    home: `الرئيسيه`,
    about: `عني`,
    skills: `المهارات`,
    projects: `المشاريع`,
    discord: `خوادم الديسكورد`
  },
  heroTitle: `مرحبًا، أنا أكرم الجعبري`,
  heroSubtitle: `مطور ، مبرمج ، ستريمر`,
  socialLinks: [
    {
      icon: `fab fa-linkedin`,
      link: `https://www.linkedin.com/in/akram-aljabari`
    },
    {
      icon: `fab fa-paypal`,
      link: `http://paypal.me/AkramAljabari`
    },
    {
      icon: `fab fa-github`,
      link: `https://github.com/AkramAlJabari`
    },
    {
      icon: `fab fa-facebook`,
      link: `https://web.facebook.com/Akram.M.AlJabari`
    },
    {
      icon: `fab fa-instagram`,
      link: `https://www.instagram.com/vm._.j`
    },
    {
      svg: `<svg style="width: 22px;height: 22px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg>`,
      link: `https://x.com/virus_m_j`
    },
    {
      svg: `<svg style="width: 21px;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M37 .036h164.448v113.621h54.71v-56.82h54.731V.036h164.448v170.777h-54.73v56.82h-54.711v56.8h54.71v56.82h54.73V512.03H310.89v-56.82h-54.73v-56.8h-54.711v113.62H37V.036z" fill="#fff" /></svg>`,
      link: `https://kick.com/virusaljabari`
    },
    {
      icon: `fab fa-youtube`,
      link: `https://www.youtube.com/@virusaljabari`
    },
    {
      icon: `fab fa-discord`,
      link: `https://discord.com/users/608224231322419202`
    },
    {
      icon: `fab fa-tiktok`,
      link: `https://www.tiktok.com/@virusaljabari`
    },
    {
      icon: `fas fa-envelope`,
      link: `mailto:akramm3810@gmail.com`
    }
  ],
  //About
  aboutText: `أنا أكرم الجعبري ، المعروف بلقبي فايروس (Virus) ، عمري ${Math.floor((new Date() - new Date('2006-11-08')) / (1000 * 60 * 60 * 24 * 365.25))} عامًا من الأردن وأصولي فلسطينيه من الخليل ...أدرس نظم المعلومات الحاسوبيه في جامعة آل البيت في الأردن ، وأهتم بمجال البرمجه والبث المباشر.`,
  aboutStats: [
    {
      title: `سنوات الخبره`,
      value: Math.floor((new Date() - new Date('2022-05-16')) / (1000 * 60 * 60 * 24 * 365.25))
    },
    {
      title: `المشاريع المكتمله`,
      value: ``
    },
    {
      title: `المشاهدات على يوتيوب`,
      value: `3K+`
    },
    {
      title: `المتابعين على كيك`,
      value: `200+`
    }
  ],
  //Skills
  skillsCards: [
    {
      icon: `fas fa-code`,
      title: `التجارب البرمجيه`,
      description: `HTML , CSS , JavaScript , C++ , Lua , Bootstrap , Discord.js , Express.js , Node.js , Python`
    },
    {
      icon: `fas fa-database`,
      title: `قواعد البيانات`,
      description: `MySQL , MongoDB , Firebase`
    },
    {
      icon: `fas fa-video`,
      title: `إنشاء المحتوى`,
      description: `يوتيوب ، <a href='https://kick.com' target='_blank' style='color: #00e701;'>كيك</a>`
    }
  ],
  //Projects
  projectLinkText: `عرض المشروع`,
  projectFixText: `قريبًا ...`,
  projectsCards: [
    {
      image: `assets/img/projects/adirwebsite.png`,
      title: `موقع أدير`,
      description: `موقع أدير لإدارة متجرك بشكل كامل (مخزون ، منتجات ، عملائك ، موظفينك ، وأيضا كاشير يعمل على الهواتف) والمزيد من المميزات`,
      link: false,
    },
    {
      image: `assets/img/projects/northquerybot.png`,
      title: `بوت ربط نورث`,
      description: `بوت ديسكورد لسيرفر نورث للحياه الواقعيه في MTA:SA يربط بين اللعبه والديسكورد بحيث يعرض معلومات اللاعبين وإشعار اللاعب بتحديثات حسابه وأيضًا يقوم بتفعيل اللاعبين تلقائياً في الديسكورد`,
      link: `https://discord.gg/VTUZMw2bKG`,
    },
    {
      image: `assets/img/projects/northticketbot.png`,
      title: `بوت تكتات نورث`,
      description: `بوت ديسكورد لسيرفر نورث للحياه الواقعيه في MTA:SA يسهل عملية التواصل بين اللاعبين والإداره يتم حل مشاكل اللاعبين  والرد على الاستفسارات بشكل أسرع`,
      link: `https://discord.gg/VTUZMw2bKG`,
    },
    {
      image: `assets/img/projects/hidayabotwebsite.png`,
      title: `موقع هِدايه بوت`,
      description: `بوت هِدايه الإسلامي لإحياء وإبقاء ذكر الله (يحتوي الموقع على لوحة تحكم بالبوت ، وبعض المواضيع الإسلاميه)`,
      link: `https://discord.gg/TMAVqSxK4C`,
    }
  ],
  //Discord Servers
  inviteText: `انضم للخادم`,
  memberText: `عضو`,
  discordServersCards: [
    {
      image: `assets/img/servers/virusaljabari.png`,
      title: `Virus AlJabari`,
      description: `مجتمع ديسكورد الخاص بمتابعيني`,
      members: `60`,
      inviteLink: `https://discord.gg/uvkq5dTqeY`,
      roleMe: `المالك`
    },
    {
      image: `assets/img/servers/3d_mys.png`,
      title: `3D MESTERY`,
      description: `خادم ديسكورد لبيع وشراء مابات وسكنات وسكربتات  لعبة MTA وبوتات الديسكورد`,
      members: `2K`,
      inviteLink: `https://discord.gg/7Q4yjnXQmH`,
      roleMe: `مسؤول برمجة البوتات`
    },
    {
      image: `assets/img/servers/ykwn.png`,
      title: `يخوان`,
      description: `مجتمع لجروب \`يخوان\` على الفيسبوك يتخصص في الألعاب والبطولات والفعاليات`,
      members: `2K`,
      inviteLink: `https://discord.gg/th5AzgMkQg`,
      roleMe: `مؤسس & مدير`
    },
    {
      image: `assets/img/servers/thenorth.png`,
      title: `THE NORTH`,
      description: `خادم نورث للحياه الواقعيه في MTA:SA`,
      members: `14K`,
      inviteLink: `https://discord.gg/VTUZMw2bKG`,
      roleMe: `مبرمج بوتات`
    },
    {
      image: `assets/img/servers/hidayabot.png`,
      title: `Hidaya Bot`,
      description: `الخادم الرسمي لهِدايه بوت`,
      members: `600`,
      inviteLink: `https://discord.gg/TMAVqSxK4C`,
      roleMe: `مبرمج مواقع`
    }
  ],
  //Footer
  copyright: `جميع الحقوق محفوظه`,
}
config.aboutStats.find(stat => stat.title == `المشاريع المكتمله`).value = config.projectsCards.length + `+`;