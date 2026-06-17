---
title: 我的唠叨
date: 2022-09-08 23:08:13
comments: true
---

<style>
#bibi button {
  color: #fff;
  border: 0;
  margin: 20px auto;
  border-radius: 0.3125rem;
  display: block;
  padding: 0 1rem;
  height: 40px;
  font-weight: 500;
  text-align: center;
  transition: all 0.5s ease-out;
  background: linear-gradient(-45deg, #5aa9b7, #68b690, #8aa8d8, #59c7aa);
  background-size: 1000% 1000%;
  animation: Gradient 60s linear infinite;
  outline: 0;
}

#bibi .bb-info {
  font-weight: 700;
  font-size: 22px;
}

#bibi .bb-card {
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #a5a5a5ee;
  margin-top: 20px;
  transition: all 0.25s;
  user-select: none;
  width: calc(48% - 7px);
  margin: 10px;
}

@media screen and (max-width: 800px) {
  #bibi .bb-card {
    width: 100%;
  }
}

#bibi .bb-card:hover {
  box-shadow: 0 5px 10px 8px #07111b29;
  transform: translateY(-3px);
}

#bibi .card-header {
  display: flex;
  align-items: center;
}

#bibi .card-header .avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;
}

#bibi .card-header .avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#bibi .card-header .card-time {
  font-size: 12px;
  text-shadow: #d9d9d9 0 0 1px, #fffffb 0 0 1px, #fffffb 0 0 2px;
  margin-left: 10px;
}

#bibi .card-content {
  padding: 10px 0;
  white-space: pre-wrap;
}

#bibi .card-footer {
  display: flex;
  padding-bottom: 10px;
}

#bibi .card-footer .card-label {
  border-radius: 5px;
  padding: 0 8px;
  font-weight: 550;
  box-shadow: inset 0 -1px 0 rgb(27 31 35 / 12%);
  font-size: 14px;
  user-select: none;
  margin-right: 10px;
  background: #5aa9b7;
  color: #fff;
}

#bibi .bb-empty {
  width: 100%;
  margin: 10px;
  padding: 18px;
  border: 1px dashed rgba(22, 127, 143, 0.45);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.18);
  color: var(--font-color);
}

#bb-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>

<script src="/js/bibi.js"></script>

<div id="bibi">
  <div class="bb-info"></div>
  <div id="bb-main"></div>
</div>

<template id="bibi-template">
  <article class="bb-card">
    <div class="card-header">
      <div class="avatar"><img class="nofancybox" src="/assets/avatar.webp" alt="avatar"></div>
      <div class="name">chagumu</div>
      <div class="card-time">2026-06-17</div>
    </div>
    <div class="card-content">期末周又要学，还要投简历，好累啊</div>
    <div class="card-footer"><div class="card-label">日常唠叨</div></div>
  </article>

  <article class="bb-card">
    <div class="card-header">
      <div class="avatar"><img class="nofancybox" src="D:\other_blog\hexo_youqi\source\personal\bb\assets\avatar.webp" alt="avatar"></div>
      <div class="name">chagumu</div>
      <div class="card-time">2026-06-17</div>
    </div>
    <div class="card-content">听喜欢的歌也是非常美妙了</div>
    <div class="card-footer"><div class="card-label">日常唠叨</div></div>
  </article></template>

<!--
添加自己的唠叨：
1. 复制上面 template 里的 <article class="bb-card">...</article>。
2. 修改头像、名字、日期、正文和标签。
3. 想隐藏示例内容，就删掉示例 article，保留 template 标签即可。
-->
