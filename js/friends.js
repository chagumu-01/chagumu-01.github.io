(function () {
  var GITHUB_REPO = 'chagumu-01/chagumu-01.github.io'
  var SITE_URL = 'https://chagumu.site/'

  function reorderSections() {
    var container = document.getElementById('article-container')
    var intro = document.getElementById('flk-page')
    var flink = container && container.querySelector('.flink')
    if (!container || !intro || !flink) return
    container.insertBefore(intro, flink)
  }

  function updateLinkCount() {
    var cards = document.querySelectorAll('#article-container .site-card')
    var countEl = document.getElementById('flk-count')
    if (!countEl) return
    if (!cards.length) {
      countEl.textContent = '名册还是空的，欢迎来做第一位朋友'
      return
    }
    countEl.textContent = '共 ' + cards.length + ' 家'
  }

  function bindRandomVisit() {
    var btn = document.getElementById('flk-random')
    if (!btn) return
    btn.addEventListener('click', function () {
      var links = Array.prototype.slice.call(
        document.querySelectorAll('#article-container .site-card')
      )
      if (!links.length) {
        alert('名册里还没有友链呢，欢迎你来申请第一个～')
        return
      }
      var target = links[Math.floor(Math.random() * links.length)]
      if (target && target.href) window.open(target.href, '_blank', 'noopener')
    })
  }

  function buildIssueUrl(data) {
    var siteshot =
      data.siteshot ||
      'https://image.thum.io/get/allowJPG/wait/20/width/600/crop/950/' + data.link
    var body =
      '想交换友链，信息如下：\n\n' +
      '站名：' +
      data.name +
      '\n' +
      '链接：' +
      data.link +
      '\n' +
      '头像：' +
      data.avatar +
      '\n' +
      '简介：' +
      data.descr +
      '\n' +
      '截图：' +
      siteshot +
      '\n' +
      '联系：' +
      (data.contact || '未留') +
      '\n\n' +
      '---\n' +
      '已在友链页添加了 ' +
      SITE_URL +
      '，辛苦审核啦～'
    var title = '[友链] ' + data.name
    return (
      'https://github.com/' +
      GITHUB_REPO +
      '/issues/new?title=' +
      encodeURIComponent(title) +
      '&body=' +
      encodeURIComponent(body)
    )
  }

  function bindForm() {
    var form = document.getElementById('flk-form')
    if (!form) return
    form.addEventListener('submit', function (event) {
      event.preventDefault()
      var formData = new FormData(form)
      var data = {
        name: (formData.get('name') || '').trim(),
        link: (formData.get('link') || '').trim(),
        avatar: (formData.get('avatar') || '').trim(),
        contact: (formData.get('contact') || '').trim(),
        descr: (formData.get('descr') || '').trim(),
        siteshot: (formData.get('siteshot') || '').trim()
      }
      if (!data.name || !data.link || !data.avatar || !data.descr) {
        alert('站名、地址、头像和简介都要填哦～')
        return
      }
      try {
        new URL(data.link)
        new URL(data.avatar)
        if (data.siteshot) new URL(data.siteshot)
      } catch (error) {
        alert('链接格式好像不太对，再检查一下？')
        return
      }
      window.open(buildIssueUrl(data), '_blank', 'noopener')
    })
  }

  function bindCopy() {
    var btn = document.getElementById('flk-copy')
    var code = document.getElementById('flk-clip-code')
    if (!btn || !code) return
    var defaultLabel = btn.textContent
    btn.addEventListener('click', function () {
      var text = code.textContent.trim()
      function done() {
        btn.textContent = '复制好啦'
        setTimeout(function () {
          btn.textContent = defaultLabel
        }, 1600)
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done)
        return
      }
      var area = document.createElement('textarea')
      area.value = text
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
      done()
    })
  }

  document.addEventListener('DOMContentLoaded', function () {
    reorderSections()
    updateLinkCount()
    bindRandomVisit()
    bindForm()
    bindCopy()
  })
})()
