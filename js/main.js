/**
 * 智医科技官网 V2 - 交互脚本
 */

// ========================================
// 客户案例数据
// ========================================
const casesData = {
    comprehensive: {
        logo: 'XX 省立医院',
        title: '突破传统医疗瓶颈，提质增效',
        desc: 'XX 省立医院通过智医科技的全流程智慧服务平台，将平均候诊时间从 45 分钟减少到 15 分钟，实现患者满意度和运营效率双提升。',
        bg: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    },
    specialized: {
        logo: 'XX 肿瘤医院',
        title: '打造专科专病的精细化患者管理体系',
        desc: 'XX 肿瘤医院借助企业微信生态，打通医患沟通专线，搭建智慧患者管理模式，实现院外长周期服务管理，患者满意度高达 92%。',
        bg: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    },
    primary: {
        logo: 'XX 市卫健委',
        title: '赋能医共体，实现基层医疗资源下沉',
        desc: 'XX 市卫健委携手智医科技构建医共体服务平台，创新"全专科协同"的家庭医生服务模式，让基层患者享受与三甲医院同质化服务。',
        bg: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    }
};

// ========================================
// 切换客户案例
// ========================================
function switchCase(type) {
    // 更新标签激活状态
    document.querySelectorAll('.case-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // 更新内容
    const data = casesData[type];
    const caseContent = document.getElementById('caseContent');
    
    caseContent.style.opacity = '0';
    caseContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        document.querySelector('.case-badge span').textContent = data.logo;
        document.getElementById('caseTitle').textContent = data.title;
        document.getElementById('caseDesc').textContent = data.desc;
        document.getElementById('casesBg').style.backgroundImage = `url(${data.bg})`;
        
        caseContent.style.opacity = '1';
        caseContent.style.transform = 'translateY(0)';
    }, 300);
}

// ========================================
// Mega Menu 显示/隐藏
// ========================================
function showMegaMenu(id) {
    const menu = document.getElementById('mega-' + id);
    if (menu) {
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
        menu.style.transform = 'translateY(0)';
    }
}

function hideMegaMenu(id) {
    const menu = document.getElementById('mega-' + id);
    if (menu) {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateY(10px)';
    }
}

// ========================================
// 移动端菜单切换
// ========================================
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const btn = document.querySelector('.mobile-menu-btn');
    
    if (navMenu && btn) {
        navMenu.classList.toggle('active');
        btn.classList.toggle('active');
    }
}

// ========================================
// 导航栏滚动效果
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
});

// ========================================
// 平滑滚动
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// 滚动动画 - 元素淡入效果
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察需要动画的元素
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.solution-card, .eco-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // 初始化背景
    document.getElementById('casesBg').style.backgroundImage = `url(${casesData.comprehensive.bg})`;
});

// ========================================
// 控制台信息
// ========================================
console.log('%c智医科技官网 V2', 'font-size: 20px; font-weight: bold; color: #35ADF3;');
console.log('%c为患者解忧，让医院更智慧', 'font-size: 14px; color: #666;');
