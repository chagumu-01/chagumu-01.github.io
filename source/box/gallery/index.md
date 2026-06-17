---
title: 我的画廊
date: 2022-08-10 18:54:52
comments: false
---

<style>
.landscape-gallery {
  --gallery-ink: #1c2d36;
  --gallery-muted: #60717a;
  --gallery-line: rgba(22, 127, 143, 0.18);
  margin: -8px auto 0;
}

.gallery-intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  align-items: end;
  padding: 4px 2px 22px;
  border-bottom: 1px solid var(--gallery-line);
}

.gallery-intro h2 {
  margin: 0 0 8px;
  padding: 0 !important;
  color: var(--gallery-ink);
  font-size: clamp(26px, 4vw, 42px);
  line-height: 1.1;
}

.gallery-intro p {
  margin: 0;
  color: var(--gallery-muted);
  line-height: 1.8;
}

.gallery-count {
  min-width: 92px;
  padding: 12px 14px;
  border: 1px solid var(--gallery-line);
  border-radius: 8px;
  color: #167f8f;
  text-align: center;
  background: rgba(255, 255, 255, 0.34);
}

.gallery-count strong {
  display: block;
  font-size: 28px;
  line-height: 1;
}

.gallery-grid {
  column-count: 3;
  column-gap: 16px;
  margin-top: 22px;
}

.gallery-photo {
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 0 0 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.48);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 12px 32px rgba(30, 77, 86, 0.12);
  transform: translateZ(0);
}

.gallery-photo img {
  display: block;
  width: 100%;
  margin: 0 !important;
  transition: transform 0.7s ease, filter 0.7s ease;
}

.gallery-photo:hover img {
  transform: scale(1.035);
  filter: saturate(1.06) contrast(1.03);
}

.gallery-caption {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  padding: 36px 14px 12px;
  color: #fff;
  background: linear-gradient(180deg, transparent, rgba(12, 31, 39, 0.62));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-photo:hover .gallery-caption {
  opacity: 1;
}

.gallery-caption span {
  display: block;
  font-size: 15px;
  font-weight: 700;
}

.gallery-caption small {
  display: block;
  margin-top: 3px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 12px;
}

@media (max-width: 900px) {
  .gallery-grid {
    column-count: 2;
  }
}

@media (max-width: 620px) {
  .gallery-intro {
    grid-template-columns: 1fr;
  }

  .gallery-count {
    width: 100%;
  }

  .gallery-grid {
    column-count: 1;
  }
}
</style>

<section class="landscape-gallery">
  <div class="gallery-intro">
    <div>
      <h2>把路上的光收起来</h2>
      <p>这里放我的风景照片：竖幅、安静、带一点呼吸感。之后有新照片，继续按下面的卡片格式追加就行。</p>
    </div>
    <div class="gallery-count"><strong>8</strong><span>frames</span></div>
  </div>

  <div class="gallery-grid">
    <a class="gallery-photo fancybox" href="/assets/1.jpg" data-fancybox="landscape" data-caption="风景 01"><img src="/assets/1.jpg" alt="风景 01"><span class="gallery-caption"><span>风景 01</span><small>Quiet view</small></span></a>
    <a class="gallery-photo fancybox" href="/assets/2.jpg" data-fancybox="landscape" data-caption="风景 02"><img src="/assets/2.jpg" alt="风景 02"><span class="gallery-caption"><span>风景 02</span><small>Soft weather</small></span></a>
    <a class="gallery-photo fancybox" href="/assets/3.jpg" data-fancybox="landscape" data-caption="风景 03"><img src="/assets/3.jpg" alt="风景 03"><span class="gallery-caption"><span>风景 03</span><small>Slow walk</small></span></a>
    <a class="gallery-photo fancybox" href="/assets/4.jpg" data-fancybox="landscape" data-caption="风景 04"><img src="/assets/4.jpg" alt="风景 04"><span class="gallery-caption"><span>风景 04</span><small>Clean air</small></span></a>
    <a class="gallery-photo fancybox" href="/assets/5.jpg" data-fancybox="landscape" data-caption="风景 05"><img src="/assets/5.jpg" alt="风景 05"><span class="gallery-caption"><span>风景 05</span><small>Green hour</small></span></a>
    <a class="gallery-photo fancybox" href="/assets/6.jpg" data-fancybox="landscape" data-caption="风景 06"><img src="/assets/6.jpg" alt="风景 06"><span class="gallery-caption"><span>风景 06</span><small>Open sky</small></span></a>
    <a class="gallery-photo fancybox" href="/assets/7.jpg" data-fancybox="landscape" data-caption="风景 07"><img src="/assets/7.jpg" alt="风景 07"><span class="gallery-caption"><span>风景 07</span><small>Little pause</small></span></a>
    <a class="gallery-photo fancybox" href="/assets/8.jpg" data-fancybox="landscape" data-caption="风景 08"><img src="/assets/8.jpg" alt="风景 08"><span class="gallery-caption"><span>风景 08</span><small>Long memory</small></span></a>
  </div>
</section>
