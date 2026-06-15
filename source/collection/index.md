---
title: 收藏图片
date: 2026-03-24 21:00:00
---

<div class="collection-container">
  <div class="collection-header">
    <h1 class="collection-title">我的收藏图片</h1>
    <p class="collection-subtitle">记录生活中的美好瞬间</p>
  </div>

  <div class="collection-content">
    <section class="collection-section">
      <h2 class="collection-section-title">风景</h2>
      <div class="collection-grid">
        <div class="collection-item">
          <img src="https://cdn.phototourl.com/free/2026-03-24-c6cd394d-e102-4c1a-a2d9-c79200a5d472.jpg" alt="风景图片1" class="collection-image">
          <div class="collection-overlay">
            <span class="collection-caption">天</span>
          </div>
        </div>
        <div class="collection-item">
          <img src="https://cdn.phototourl.com/free/2026-03-24-81758651-c015-4363-82cc-c0a2dedb0429.jpg" alt="风景图片2" class="collection-image">
          <div class="collection-overlay">
            <span class="collection-caption">球</span>
          </div>
        </div>
        <div class="collection-item">
          <img src="https://cdn.phototourl.com/free/2026-03-24-1fdc098a-06b6-40d9-bb67-7adfe5771ce8.jpg" alt="风景图片3" class="collection-image">
          <div class="collection-overlay">
            <span class="collection-caption">树</span>
          </div>
        </div>
      </div>
    </section>

    <section class="collection-section">
      <h2 class="collection-section-title">动物</h2>
      <div class="collection-grid">
        <div class="collection-item">
          <img src="https://example.com/image4.jpg" alt="动物图片1" class="collection-image">
          <div class="collection-overlay">
            <span class="collection-caption">可爱的猫咪</span>
          </div>
        </div>
        <div class="collection-item">
          <img src="https://example.com/image5.jpg" alt="动物图片2" class="collection-image">
          <div class="collection-overlay">
            <span class="collection-caption">忠诚的狗狗</span>
          </div>
        </div>
        <div class="collection-item">
          <img src="https://example.com/image6.jpg" alt="动物图片3" class="collection-image">
          <div class="collection-overlay">
            <span class="collection-caption">美丽的鸟儿</span>
          </div>
        </div>
      </div>
    </section>
    
    <section class="collection-section">
      <h2 class="collection-section-title">美食</h2>
      <div class="collection-grid">
        <div class="collection-item">
          <img src="https://example.com/image7.jpg" alt="美食图片1" class="collection-image">
          <div class="collection-overlay">
            <span class="collection-caption">美味的料理</span>
          </div>
        </div>
        <div class="collection-item">
          <img src="https://example.com/image8.jpg" alt="美食图片2" class="collection-image">
          <div class="collection-overlay">
            <span class="collection-caption">精致的甜点</span>
          </div>
        </div>
        <div class="collection-item">
          <img src="https://example.com/image9.jpg" alt="美食图片3" class="collection-image">
          <div class="collection-overlay">
            <span class="collection-caption">新鲜的水果</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
.collection-container {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  overflow-x: hidden;
}

.collection-header {
  position: relative;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #2c3e50;
  padding: 100px 20px;
  text-align: center;
  overflow: hidden;
}

.collection-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.2)"/></svg>');
  animation: float 20s linear infinite;
}

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(-100px) rotate(360deg); }
}

.collection-header-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.collection-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.collection-subtitle {
  font-size: 24px;
  margin-bottom: 40px;
  opacity: 0.8;
}

.collection-content {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.collection-section {
  margin-bottom: 80px;
}

.collection-section-title {
  font-size: 32px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
}

.collection-section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #a8edea, #fed6e3);
  border-radius: 2px;
}

.collection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.collection-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.collection-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.collection-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: all 0.3s ease;
}

.collection-item:hover .collection-image {
  transform: scale(1.1);
}

.collection-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  padding: 30px 20px 20px;
  transform: translateY(100%);
  transition: all 0.3s ease;
}

.collection-item:hover .collection-overlay {
  transform: translateY(0);
}

.collection-caption {
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .collection-header {
    padding: 80px 15px;
  }

  .collection-title {
    font-size: 36px;
  }

  .collection-subtitle {
    font-size: 20px;
  }

  .collection-content {
    padding: 40px 15px;
  }

  .collection-section-title {
    font-size: 28px;
  }

  .collection-grid {
    grid-template-columns: 1fr;
  }

  .collection-image {
    height: 200px;
  }
}
</style>
