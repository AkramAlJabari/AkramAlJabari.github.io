$(document).ready(function () {
  document.title = config.title;
  $(`.logo`).text(config.name)
  $.each(config.sections, function (key, value) {
    $(`.hideMobile`).append(`<li><a href="#${key}">${value}</a></li>`)
    $(`#${key} h2`).text(value)
  })
  $(`.hero h1`).text(config.heroTitle)
  $(`.hero p`).text(config.heroSubtitle)
  $.each(config.socialLinks, function (key, value) {
    $(`.social-links`).append(`<a target="_blank" href="${value.link}" class="social-link">${value.icon ? `<i class="${value.icon}">` : value.svg}</i></a>`)
  })
  $(`.about-text`).text(config.aboutText)
  $.each(config.aboutStats, function (key, value) {
    $(`.about-stats`).append(`<div class="stat"><h3>${value.title}</h3><p>${value.value}</p></div>`)
  })
  $.each(config.skillsCards, function (key, value) {
    $(`.skills-grid`).append(`<div class="skill-card"><i class="${value.icon}"></i><h3>${value.title}</h3><p>${value.description}</p></div>`)
  })
  $.each(config.projectsCards.sort((a, b) => { return (a.link == false) ? 1 : (b.link == false ? -1 : 0) }), function (key, value) {
    $(`.projects-grid`).append(`<div class="project-card"><img src="${value.image}" alt="${value.title}"><h3>${value.title}</h3><p>${value.description}</p><a ${value.link ? `href="${value.link}" target="_blank"` : ``} class="project-link ${value.link ? `` : `dis-btn`}">${value.link ? config.projectLinkText : config.projectFixText}</a></div>`)
  })
  $.each(config.discordServersCards, function (key, value) {
    $(`.discord-servers`).append(`<div class="discord-server-card"><img src="${value.image}" alt="${value.title}"><h3>${value.title}</h3><p>${value.description}</p><div class="server-stats"><span><i class="fas fa-users"></i> ${value.members}+ ${config.memberText}</span><span><i class="fas fa-shield-alt"></i> ${value.roleMe}</span></div><a href="${value.inviteLink}" target="_blank" class="discord-invite">${config.inviteText}</a></div>`)
  })
  $(`footer div`).html(`${config.copyright} & © ${new Date().getFullYear()} Akram AlJabari`)

  function scrollActive() {
    $(`section[id]`).each(function () {
      if ($(window).scrollTop() > ($(this).offset().top - 100) && $(window).scrollTop() <= ($(this).offset().top - 100) + $(this).outerHeight()) $(`.nav-links a[href*=${$(this).attr(`id`)}]`).addClass(`active`)
      else $(`.nav-links a[href*=${$(this).attr(`id`)}]`).removeClass(`active`)
    })
  }
  $(window).on(`scroll`, scrollActive)
  scrollActive()

  $(`a[href^="#"]`).click(function (e) {
    e.preventDefault()
    if ($($(this).attr(`href`)).length) {
      $(`html, body`).animate({
        scrollTop: $($(this).attr(`href`)).offset().top
      }, 600)
    }
  })

  $(window).on(`scroll`, function () {
    if ($(this).scrollTop() > 50) $(`.navbar`).css(`background-color`, `#1a252f`)
    else $(`.navbar`).css(`background-color`, `#2c3e50`)
  })

  $(`.project-card img, .discord-server-card img`).click(function () {
    $(`.image-modal img`).attr(`src`, $(this).attr(`src`))
    $(`.image-modal`).addClass(`active`)
  })
  $(`.image-modal .close-modal`).click(function () {
    $(`.image-modal`).removeClass(`active`)
  })
  $(`.image-modal`).click(function (e) {
    if (e.target == this) $(this).removeClass(`active`)
  })
  $(document).on(`keydown`, function (e) {
    if (e.key == `Escape` && $(`.image-modal`).hasClass(`active`)) $(`.image-modal`).removeClass(`active`)
  })
})