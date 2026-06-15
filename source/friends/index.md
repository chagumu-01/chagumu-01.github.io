---
title: 友链
date: 2026-05-29 12:00:00
type: link
top_img: false
comments: false
---

<link rel="stylesheet" href="/css/friends.css">

<div class="flk" id="flk-page">
  <header class="flk-intro">
    <p class="flk-intro__tag">chagumu.site / links</p>
    <h1 class="flk-intro__title"><i class="fas fa-handshake" aria-hidden="true"></i> 路标亭</h1>
    <p class="flk-intro__lead">这里是我收藏的博客小站。都是我会再次点开、也愿意推荐给朋友的地方，数量不多，但每一条都很珍惜。</p>
  </header>

  <details class="flk-charter" open>
    <summary>交换友链前，麻烦先看这里～</summary>
    <div class="flk-charter__body">
      <p>如果你也想和我交换友链，请先把本站加到你的友链页，再来申请哦。希望你的博客有自己的文字或作品，这样我们才能更好地互相交流。</p>
      <p>我会不定期看看链接是否还能正常打开。如果换了域名或者暂时关站了，告诉我一声就好，我来帮你更新。</p>
    </div>
  </details>

  <div class="flk-roster-bar">
    <div>
      <h2 class="flk-roster-bar__title"><i class="fas fa-link" aria-hidden="true"></i> 名册</h2>
      <p class="flk-roster-bar__sub" id="flk-count">统计中</p>
    </div>
    <button type="button" class="flk-btn flk-btn--line" id="flk-random"><i class="fas fa-dice" aria-hidden="true"></i> 随机逛逛</button>
  </div>
</div>

<div class="flk-tail">
  <section class="flk-write" id="flk-write">
    <div class="flk-write__head">
      <h2><i class="fas fa-feather-alt" aria-hidden="true"></i> 也想和我交换友链吗？</h2>
      <p>填好下面的信息就好啦。我会帮你打开 GitHub 页面，草稿都准备好了，你核对一下提交就行。</p>
    </div>
    <form class="flk-form" id="flk-form" novalidate>
      <div class="flk-form__row">
        <label class="flk-field">
          <span>你的站名</span>
          <input type="text" name="name" placeholder="博客叫什么名字？" required>
        </label>
        <label class="flk-field">
          <span>站点地址</span>
          <input type="url" name="link" placeholder="https://你的域名" required>
        </label>
      </div>
      <div class="flk-form__row">
        <label class="flk-field">
          <span>头像链接</span>
          <input type="url" name="avatar" placeholder="https://…/avatar.png" required>
        </label>
        <label class="flk-field">
          <span>怎么联系你</span>
          <input type="text" name="contact" placeholder="邮箱、GitHub 或社交账号都可以">
        </label>
      </div>
      <label class="flk-field">
        <span>一句话介绍</span>
        <textarea name="descr" rows="2" placeholder="简单说说你的博客在写什么～" required></textarea>
      </label>
      <label class="flk-field">
        <span>预览图（可不填）</span>
        <input type="url" name="siteshot" placeholder="没有也没关系，我会尽量帮你补一张">
      </label>
      <div class="flk-form__foot">
        <button type="submit" class="flk-btn flk-btn--solid"><i class="fas fa-paper-plane" aria-hidden="true"></i> 生成申请草稿</button>
        <span class="flk-form__tip">信息只在你的浏览器里处理，不会保存到服务器</span>
      </div>
    </form>
  </section>

  <aside class="flk-clip">
    <h2><i class="fas fa-copy" aria-hidden="true"></i> 摘抄本</h2>
    <p>添加本站友链时，复制下面这段就好。</p>
    <pre class="flk-clip__code" id="flk-clip-code">{
  "title": "chagumu's blog",
  "url": "https://chagumu.site/",
  "avatar": "https://chagumu.site/assets/avatar.webp",
  "description": "总是学习，总在进步"
}</pre>
    <button type="button" class="flk-btn flk-btn--line" id="flk-copy"><i class="fas fa-clipboard" aria-hidden="true"></i> 复制到剪贴板</button>
  </aside>
</div>

<script src="/js/friends.js" defer></script>
