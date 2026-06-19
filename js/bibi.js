window.addEventListener('DOMContentLoaded', () => {
  const info = document.querySelector('.bb-info')
  const main = document.getElementById('bb-main')
  const template = document.getElementById('bibi-template')

  if (info) {
    info.innerHTML = '<svg style="width:1.20em;height:1.20em;top:5px;fill:currentColor;overflow:hidden;position:relative"><use xlink:href="#icon-chat"></use></svg> 我的唠叨'
  }

  if (!main || !template) return

  const items = Array.from(template.content.querySelectorAll('.bb-card'))

  if (!items.length) {
    main.innerHTML = '<div class="bb-empty">这里还没有唠叨。打开 <code>source/personal/bb/index.md</code>，按页面里的模板添加自己的内容。</div>'
    return
  }

  items.forEach(item => main.appendChild(item.cloneNode(true)))
})
