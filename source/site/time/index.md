---
title: 建设进程
date: 2022-08-31 20:00:00
comments: false
---

<style>
.commit-log {
  --commit-accent: #167f8f;
  --commit-accent-dark: #0e5f6c;
  --commit-ink: #1c2d36;
  --commit-muted: #61727c;
  --commit-line: rgba(22, 127, 143, 0.22);
}

.commit-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  align-items: end;
  margin-bottom: 26px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--commit-line);
}

.commit-hero h2 {
  margin: 0 0 8px;
  padding: 0 !important;
  color: var(--commit-ink);
  font-size: clamp(26px, 4vw, 42px);
  line-height: 1.1;
}

.commit-hero p {
  margin: 0;
  color: var(--commit-muted);
  line-height: 1.8;
}

.commit-stat {
  min-width: 112px;
  padding: 12px 14px;
  border: 1px solid var(--commit-line);
  border-radius: 8px;
  color: var(--commit-accent);
  text-align: center;
  background: rgba(255, 255, 255, 0.34);
}

.commit-stat strong {
  display: block;
  font-size: 30px;
  line-height: 1;
}

.commit-list {
  position: relative;
  margin: 0;
  padding: 0 0 0 20px;
  list-style: none;
}

.commit-list::before {
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 4px;
  width: 2px;
  background: linear-gradient(180deg, transparent, var(--commit-line), transparent);
  content: "";
}

.commit-item {
  position: relative;
  margin: 0 0 14px;
  padding: 15px 16px;
  border: 1px solid rgba(22, 127, 143, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.28);
  box-shadow: 0 10px 26px rgba(28, 74, 82, 0.08);
}

.commit-item::before {
  position: absolute;
  top: 22px;
  left: -22px;
  width: 10px;
  height: 10px;
  border: 3px solid rgba(255, 255, 255, 0.82);
  border-radius: 50%;
  background: var(--commit-accent);
  box-shadow: 0 0 0 4px rgba(22, 127, 143, 0.13);
  content: "";
}

.commit-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  align-items: center;
  margin-bottom: 8px;
  color: var(--commit-muted);
  font-size: 13px;
}

.commit-hash {
  padding: 2px 7px;
  border-radius: 999px;
  color: #fff;
  font-family: Consolas, monospace;
  background: var(--commit-accent);
}

.commit-title {
  margin: 0;
  color: var(--commit-ink);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.55;
}

.commit-note {
  margin: 6px 0 0;
  color: var(--commit-muted);
  font-size: 13px;
}

@media (max-width: 620px) {
  .commit-hero {
    grid-template-columns: 1fr;
  }

  .commit-stat {
    width: 100%;
  }
}
</style>

<section class="commit-log">
  <div class="commit-hero">
    <div>
      <h2>建设进程</h2>
      <p>这里展示当前仓库最近的提交记录。每一次提交，都是小站往前挪的一小步。</p>
    </div>
    <div class="commit-stat"><strong>24</strong><span>recent commits</span></div>
  </div>

  <ol class="commit-list">
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">bc70481</span><time>2026-06-17 13:48</time></div><p class="commit-title">加功能</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">8381088</span><time>2026-06-17 13:28</time></div><p class="commit-title">格式</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">f35edef</span><time>2026-06-17 01:45</time></div><p class="commit-title">格式</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">3e85c87</span><time>2026-06-17 01:16</time></div><p class="commit-title">格式</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">11cd741</span><time>2026-06-17 01:04</time></div><p class="commit-title">格式</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">48f6222</span><time>2026-06-17 00:35</time></div><p class="commit-title">更新友链</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">d307cf9</span><time>2026-06-16 22:45</time></div><p class="commit-title">Merge branch 'main' of https://github.com/chagumu-01/chagumu-01.github.io</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">8a886f3</span><time>2026-06-16 22:43</time></div><p class="commit-title">Site updated: 2026-06-16 22:42:58</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">3112dfb</span><time>2026-06-16 22:34</time></div><p class="commit-title">Site updated: 2026-06-16 22:33:58</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">b18046d</span><time>2026-06-16 22:23</time></div><p class="commit-title">blog update</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">2c2b47f</span><time>2026-06-16 22:05</time></div><p class="commit-title">Merge branch 'main' of https://github.com/chagumu-01/chagumu-01.github.io</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">fa663aa</span><time>2026-06-16 22:04</time></div><p class="commit-title">add hexo-cli</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">b013813</span><time>2026-06-16 21:53</time></div><p class="commit-title">Site updated: 2026-06-16 21:52:56</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">39fce2f</span><time>2026-06-16 21:25</time></div><p class="commit-title">Site updated: 2026-06-16 21:25:25</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">e161a1f</span><time>2026-06-16 13:18</time></div><p class="commit-title">Site updated: 2026-06-16 13:17:41</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">e6d39c2</span><time>2026-06-16 12:53</time></div><p class="commit-title">Site updated: 2026-06-16 12:52:55</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">e65e4ea</span><time>2026-06-16 12:40</time></div><p class="commit-title">Merge branch 'main' of https://github.com/chagumu-01/chagumu-01.github.io</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">7cfa254</span><time>2026-06-16 12:37</time></div><p class="commit-title">测试</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">d93df01</span><time>2026-06-16 02:31</time></div><p class="commit-title">Site updated: 2026-06-16 02:30:55</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">f0a655b</span><time>2026-06-16 02:25</time></div><p class="commit-title">Site updated: 2026-06-16 02:25:13</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">17b0bba</span><time>2026-06-16 01:09</time></div><p class="commit-title">'更新'</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">ee67d59</span><time>2026-05-29 17:08</time></div><p class="commit-title">Site updated: 2026-05-29 17:08:02</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">d37d765</span><time>2026-05-29 16:53</time></div><p class="commit-title">Site updated: 2026-05-29 16:53:17</p></li>
    <li class="commit-item"><div class="commit-meta"><span class="commit-hash">d410174</span><time>2026-05-25 22:11</time></div><p class="commit-title">Site updated: 2026-05-25 22:11:09</p></li>
  </ol>
</section>
