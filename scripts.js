// Multi-language translation dictionary (10 languages)
const translations = {
    en: {
        "nav.home": "Home", "nav.tech": "Tech", "nav.finance": "Finance",
        "nav.digital": "Digital", "nav.industry": "Industry",
        "search.placeholder": "Search news...",
        "section.latest": "Latest News",
        "filter.latest": "Latest", "filter.hot": "Hot",
        "sidebar.hotRanking": "Hot Ranking", "sidebar.categories": "Categories", "sidebar.recentUpdates": "Recent Updates",
        "footer.about": "Focused on tech, finance, digital and industry news, providing latest tech trends, industry analysis, and product reviews.",
        "footer.quickNav": "Quick Navigation", "footer.subscribe": "Subscribe",
        "footer.rss": "RSS Feed", "footer.emailSub": "Email Subscribe",
        "footer.contact": "Contact Us", "footer.business": "Business Cooperation", "footer.friendLink": "Friend Links",
        "modal.relatedNews": "Related News", "modal.prev": "Previous", "modal.next": "Next", "modal.views": "Views",
        "news.hot": "HOT", "news.noResults": "No news found",
        "news.loadError": "Failed to load news data, please refresh the page",
        "time.justNow": "just now", "time.minutesAgo": "minutes ago", "time.hoursAgo": "hours ago", "time.daysAgo": "days ago",
        "category.all": "All", "category.tech": "Tech", "category.finance": "Finance", "category.digital": "Digital", "category.industry": "Industry"
    },
    zh: {
        "nav.home": "首页", "nav.tech": "科技", "nav.finance": "财经",
        "nav.digital": "数码", "nav.industry": "行业资讯",
        "search.placeholder": "搜索新闻...",
        "section.latest": "最新资讯",
        "filter.latest": "最新", "filter.hot": "热门",
        "sidebar.hotRanking": "热门排行", "sidebar.categories": "分类标签", "sidebar.recentUpdates": "最近更新",
        "footer.about": "专注科技、财经、数码行业资讯，提供最新科技动态、行业分析、产品评测。",
        "footer.quickNav": "快速导航", "footer.subscribe": "订阅",
        "footer.rss": "RSS订阅", "footer.emailSub": "邮件订阅",
        "footer.contact": "联系我们", "footer.business": "商务合作", "footer.friendLink": "友情链接",
        "modal.relatedNews": "相关推荐", "modal.prev": "上一篇", "modal.next": "下一篇", "modal.views": "阅读",
        "news.hot": "热门", "news.noResults": "暂无相关新闻",
        "news.loadError": "加载新闻数据失败，请刷新页面重试",
        "time.justNow": "刚刚", "time.minutesAgo": "分钟前", "time.hoursAgo": "小时前", "time.daysAgo": "天前",
        "category.all": "全部", "category.tech": "科技", "category.finance": "财经", "category.digital": "数码", "category.industry": "行业资讯"
    },
    ja: {
        "nav.home": "ホーム", "nav.tech": "テクノロジー", "nav.finance": "金融",
        "nav.digital": "デジタル", "nav.industry": "業界",
        "search.placeholder": "ニュースを検索...",
        "section.latest": "最新ニュース",
        "filter.latest": "最新", "filter.hot": "人気",
        "sidebar.hotRanking": "人気ランキング", "sidebar.categories": "カテゴリー", "sidebar.recentUpdates": "最近の更新",
        "footer.about": "テクノロジー、金融、デジタル、業界ニュースに焦点を当て、最新の技術動向、業界分析、製品レビューを提供します。",
        "footer.quickNav": "クイックナビ", "footer.subscribe": "購読",
        "footer.rss": "RSSフィード", "footer.emailSub": "メール購読",
        "footer.contact": "お問い合わせ", "footer.business": "ビジネス協力", "footer.friendLink": "リンク",
        "modal.relatedNews": "関連ニュース", "modal.prev": "前へ", "modal.next": "次へ", "modal.views": "閲覧",
        "news.hot": "人気", "news.noResults": "ニュースが見つかりません",
        "news.loadError": "ニュースデータの読み込みに失敗しました。ページを更新してください",
        "time.justNow": "たった今", "time.minutesAgo": "分前", "time.hoursAgo": "時間前", "time.daysAgo": "日前",
        "category.all": "全て", "category.tech": "テクノロジー", "category.finance": "金融", "category.digital": "デジタル", "category.industry": "業界"
    },
    ko: {
        "nav.home": "홈", "nav.tech": "테크", "nav.finance": "금융",
        "nav.digital": "디지털", "nav.industry": "산업",
        "search.placeholder": "뉴스 검색...",
        "section.latest": "최신 뉴스",
        "filter.latest": "최신", "filter.hot": "인기",
        "sidebar.hotRanking": "인기 순위", "sidebar.categories": "카테고리", "sidebar.recentUpdates": "최근 업데이트",
        "footer.about": "테크, 금융, 디지털 및 산업 뉴스에 중점을 두고 최신 기술 동향, 산업 분석, 제품 리뷰를 제공합니다.",
        "footer.quickNav": "빠른 탐색", "footer.subscribe": "구독",
        "footer.rss": "RSS 피드", "footer.emailSub": "이메일 구독",
        "footer.contact": "문의하기", "footer.business": "비즈니스 협력", "footer.friendLink": "친구 링크",
        "modal.relatedNews": "관련 뉴스", "modal.prev": "이전", "modal.next": "다음", "modal.views": "조회수",
        "news.hot": "인기", "news.noResults": "뉴스를 찾을 수 없습니다",
        "news.loadError": "뉴스 데이터를 불러오는데 실패했습니다. 페이지를 새로고침하세요",
        "time.justNow": "방금", "time.minutesAgo": "분 전", "time.hoursAgo": "시간 전", "time.daysAgo": "일 전",
        "category.all": "전체", "category.tech": "테크", "category.finance": "금융", "category.digital": "디지털", "category.industry": "산업"
    },
    fr: {
        "nav.home": "Accueil", "nav.tech": "Tech", "nav.finance": "Finance",
        "nav.digital": "Numérique", "nav.industry": "Industrie",
        "search.placeholder": "Rechercher des actualités...",
        "section.latest": "Dernières Actualités",
        "filter.latest": "Récent", "filter.hot": "Populaire",
        "sidebar.hotRanking": "Classement Populaire", "sidebar.categories": "Catégories", "sidebar.recentUpdates": "Mises à jour récentes",
        "footer.about": "Axé sur l'actualité tech, finance, numérique et industrie. Tendances tech, analyses sectorielles et tests de produits.",
        "footer.quickNav": "Navigation rapide", "footer.subscribe": "S'abonner",
        "footer.rss": "Flux RSS", "footer.emailSub": "Email",
        "footer.contact": "Contact", "footer.business": "Coopération", "footer.friendLink": "Liens",
        "modal.relatedNews": "Actualités connexes", "modal.prev": "Précédent", "modal.next": "Suivant", "modal.views": "Vues",
        "news.hot": "HOT", "news.noResults": "Aucune actualité trouvée",
        "news.loadError": "Échec du chargement des données, veuillez rafraîchir la page",
        "time.justNow": "à l'instant", "time.minutesAgo": "minutes", "time.hoursAgo": "heures", "time.daysAgo": "jours",
        "category.all": "Tout", "category.tech": "Tech", "category.finance": "Finance", "category.digital": "Numérique", "category.industry": "Industrie"
    },
    de: {
        "nav.home": "Startseite", "nav.tech": "Tech", "nav.finance": "Finanzen",
        "nav.digital": "Digital", "nav.industry": "Industrie",
        "search.placeholder": "Nachrichten suchen...",
        "section.latest": "Aktuelle Nachrichten",
        "filter.latest": "Neueste", "filter.hot": "Beliebt",
        "sidebar.hotRanking": "Beliebte Rangliste", "sidebar.categories": "Kategorien", "sidebar.recentUpdates": "Letzte Updates",
        "footer.about": "Fokus auf Tech-, Finanz-, Digital- und Branchennachrichten. Neueste Tech-Trends, Branchenanalysen und Produkttests.",
        "footer.quickNav": "Schnellnavigation", "footer.subscribe": "Abonnieren",
        "footer.rss": "RSS-Feed", "footer.emailSub": "E-Mail Abo",
        "footer.contact": "Kontakt", "footer.business": "Geschäftskooperation", "footer.friendLink": "Links",
        "modal.relatedNews": "Verwandte Nachrichten", "modal.prev": "Zurück", "modal.next": "Weiter", "modal.views": "Aufrufe",
        "news.hot": "HOT", "news.noResults": "Keine Nachrichten gefunden",
        "news.loadError": "Nachrichten konnten nicht geladen werden, bitte Seite aktualisieren",
        "time.justNow": "gerade jetzt", "time.minutesAgo": "Minuten her", "time.hoursAgo": "Stunden her", "time.daysAgo": "Tage her",
        "category.all": "Alle", "category.tech": "Tech", "category.finance": "Finanzen", "category.digital": "Digital", "category.industry": "Industrie"
    },
    es: {
        "nav.home": "Inicio", "nav.tech": "Tecnología", "nav.finance": "Finanzas",
        "nav.digital": "Digital", "nav.industry": "Industria",
        "search.placeholder": "Buscar noticias...",
        "section.latest": "Últimas Noticias",
        "filter.latest": "Reciente", "filter.hot": "Popular",
        "sidebar.hotRanking": "Ranking Popular", "sidebar.categories": "Categorías", "sidebar.recentUpdates": "Actualizaciones recientes",
        "footer.about": "Enfoque en noticias de tecnología, finanzas, digital e industria. Últimas tendencias, análisis y reseñas.",
        "footer.quickNav": "Navegación rápida", "footer.subscribe": "Suscribirse",
        "footer.rss": "Feed RSS", "footer.emailSub": "Suscripción por email",
        "footer.contact": "Contacto", "footer.business": "Cooperación comercial", "footer.friendLink": "Enlaces",
        "modal.relatedNews": "Noticias relacionadas", "modal.prev": "Anterior", "modal.next": "Siguiente", "modal.views": "Vistas",
        "news.hot": "HOT", "news.noResults": "No se encontraron noticias",
        "news.loadError": "Error al cargar datos, actualice la página",
        "time.justNow": "justo ahora", "time.minutesAgo": "minutos", "time.hoursAgo": "horas", "time.daysAgo": "días",
        "category.all": "Todo", "category.tech": "Tecnología", "category.finance": "Finanzas", "category.digital": "Digital", "category.industry": "Industria"
    },
    ru: {
        "nav.home": "Главная", "nav.tech": "Технологии", "nav.finance": "Финансы",
        "nav.digital": "Цифровое", "nav.industry": "Индустрия",
        "search.placeholder": "Поиск новостей...",
        "section.latest": "Последние новости",
        "filter.latest": "Последние", "filter.hot": "Популярные",
        "sidebar.hotRanking": "Популярный рейтинг", "sidebar.categories": "Категории", "sidebar.recentUpdates": "Последние обновления",
        "footer.about": "Новости технологий, финансов, цифровые и отраслевые новости. Последние тенденции, анализ и обзоры.",
        "footer.quickNav": "Быстрая навигация", "footer.subscribe": "Подписка",
        "footer.rss": "RSS-канал", "footer.emailSub": "Email подписка",
        "footer.contact": "Контакты", "footer.business": "Сотрудничество", "footer.friendLink": "Ссылки",
        "modal.relatedNews": "Похожие новости", "modal.prev": "Предыдущая", "modal.next": "Следующая", "modal.views": "Просмотры",
        "news.hot": "ХИТ", "news.noResults": "Новости не найдены",
        "news.loadError": "Ошибка загрузки данных, обновите страницу",
        "time.justNow": "только что", "time.minutesAgo": "минут назад", "time.hoursAgo": "часов назад", "time.daysAgo": "дней назад",
        "category.all": "Все", "category.tech": "Технологии", "category.finance": "Финансы", "category.digital": "Цифровое", "category.industry": "Индустрия"
    },
    pt: {
        "nav.home": "Início", "nav.tech": "Tecnologia", "nav.finance": "Finanças",
        "nav.digital": "Digital", "nav.industry": "Indústria",
        "search.placeholder": "Pesquisar notícias...",
        "section.latest": "Últimas Notícias",
        "filter.latest": "Recente", "filter.hot": "Popular",
        "sidebar.hotRanking": "Ranking Popular", "sidebar.categories": "Categorias", "sidebar.recentUpdates": "Atualizações recentes",
        "footer.about": "Foco em notícias de tecnologia, finanças, digital e indústria. Últimas tendências, análises e avaliações.",
        "footer.quickNav": "Navegação rápida", "footer.subscribe": "Subscrever",
        "footer.rss": "Feed RSS", "footer.emailSub": "Subscrição por email",
        "footer.contact": "Contato", "footer.business": "Cooperação comercial", "footer.friendLink": "Links",
        "modal.relatedNews": "Notícias relacionadas", "modal.prev": "Anterior", "modal.next": "Próximo", "modal.views": "Visualizações",
        "news.hot": "HOT", "news.noResults": "Nenhuma notícia encontrada",
        "news.loadError": "Falha ao carregar dados, atualize a página",
        "time.justNow": "agora mesmo", "time.minutesAgo": "minutos atrás", "time.hoursAgo": "horas atrás", "time.daysAgo": "dias atrás",
        "category.all": "Todos", "category.tech": "Tecnologia", "category.finance": "Finanças", "category.digital": "Digital", "category.industry": "Indústria"
    },
    it: {
        "nav.home": "Home", "nav.tech": "Tecnologia", "nav.finance": "Finanza",
        "nav.digital": "Digitale", "nav.industry": "Industria",
        "search.placeholder": "Cerca notizie...",
        "section.latest": "Ultime Notizie",
        "filter.latest": "Recente", "filter.hot": "Popolare",
        "sidebar.hotRanking": "Classifica Popolare", "sidebar.categories": "Categorie", "sidebar.recentUpdates": "Aggiornamenti recenti",
        "footer.about": "Focus su notizie tech, finanza, digitale e industria. Ultime tendenze, analisi e recensioni.",
        "footer.quickNav": "Navigazione rapida", "footer.subscribe": "Iscriviti",
        "footer.rss": "Feed RSS", "footer.emailSub": "Iscrizione email",
        "footer.contact": "Contatto", "footer.business": "Cooperazione commerciale", "footer.friendLink": "Link",
        "modal.relatedNews": "Notizie correlate", "modal.prev": "Precedente", "modal.next": "Successivo", "modal.views": "Visualizzazioni",
        "news.hot": "HOT", "news.noResults": "Nessuna notizia trovata",
        "news.loadError": "Caricamento fallito, aggiorna la pagina",
        "time.justNow": "adesso", "time.minutesAgo": "minuti fa", "time.hoursAgo": "ore fa", "time.daysAgo": "giorni fa",
        "category.all": "Tutti", "category.tech": "Tecnologia", "category.finance": "Finanza", "category.digital": "Digitale", "category.industry": "Industria"
    },
    ar: {
        "nav.home": "الرئيسية", "nav.tech": "تقنية", "nav.finance": "مالية",
        "nav.digital": "رقمي", "nav.industry": "صناعة",
        "search.placeholder": "البحث عن الأخبار...",
        "section.latest": "آخر الأخبار",
        "filter.latest": "الأحدث", "filter.hot": "شائع",
        "sidebar.hotRanking": "الترتيب الشائع", "sidebar.categories": "الفئات", "sidebar.recentUpdates": "التحديثات الأخيرة",
        "footer.about": "تركيز على أخبار التكنولوجيا والمالية والرقمية والصناعة. أحدث الاتجاهات والتحليلات والمراجعات.",
        "footer.quickNav": "تنقل سريع", "footer.subscribe": "اشترك",
        "footer.rss": "تغذية RSS", "footer.emailSub": "اشتراك البريد",
        "footer.contact": "اتصل بنا", "footer.business": "تعاون تجاري", "footer.friendLink": "روابط",
        "modal.relatedNews": "أخبار ذات صلة", "modal.prev": "السابق", "modal.next": "التالي", "modal.views": "مشاهدات",
        "news.hot": "رائج", "news.noResults": "لم يتم العثور على أخبار",
        "news.loadError": "فشل تحميل البيانات، يرجى تحديث الصفحة",
        "time.justNow": "الآن", "time.minutesAgo": "دقائق", "time.hoursAgo": "ساعات", "time.daysAgo": "أيام",
        "category.all": "الكل", "category.tech": "تقنية", "category.finance": "مالية", "category.digital": "رقمي", "category.industry": "صناعة"
    },
    "zh-TW": {
        "nav.home": "首頁", "nav.tech": "科技", "nav.finance": "財經",
        "nav.digital": "數位", "nav.industry": "產業資訊",
        "search.placeholder": "搜尋新聞...",
        "section.latest": "最新資訊",
        "filter.latest": "最新", "filter.hot": "熱門",
        "sidebar.hotRanking": "熱門排行", "sidebar.categories": "分類標籤", "sidebar.recentUpdates": "最近更新",
        "footer.about": "專注科技、財經、數位產業資訊，提供最新科技動態、產業分析、產品評測。",
        "footer.quickNav": "快速導航", "footer.subscribe": "訂閱",
        "footer.rss": "RSS訂閱", "footer.emailSub": "郵件訂閱",
        "footer.contact": "聯絡我們", "footer.business": "商務合作", "footer.friendLink": "友情連結",
        "modal.relatedNews": "相關推薦", "modal.prev": "上一篇", "modal.next": "下一篇", "modal.views": "閱讀",
        "news.hot": "熱門", "news.noResults": "暫無相關新聞",
        "news.loadError": "載入新聞資料失敗，請重新整理頁面",
        "time.justNow": "剛剛", "time.minutesAgo": "分鐘前", "time.hoursAgo": "小時前", "time.daysAgo": "天前",
        "category.all": "全部", "category.tech": "科技", "category.finance": "財經", "category.digital": "數位", "category.industry": "產業資訊"
    }
};

// Language list with native names and flags
const languageList = [
    {code: "en", name: "English", flag: "🇺🇸"},
    {code: "zh", name: "中文", flag: "🇨🇳"},
    {code: "zh-TW", name: "繁體中文", flag: "🇹🇼"},
    {code: "ja", name: "日本語", flag: "🇯🇵"},
    {code: "ko", name: "한국어", flag: "🇰🇷"},
    {code: "fr", name: "Français", flag: "🇫🇷"},
    {code: "de", name: "Deutsch", flag: "🇩🇪"},
    {code: "es", name: "Español", flag: "🇪🇸"},
    {code: "ru", name: "Русский", flag: "🇷🇺"},
    {code: "pt", name: "Português", flag: "🇵🇹"},
    {code: "it", name: "Italiano", flag: "🇮🇹"},
    {code: "ar", name: "العربية", flag: "🇸🇦"}
];

// Country to language mapping
const countryToLang = {
    "US": "en", "GB": "en", "AU": "en", "CA": "en", "NZ": "en", "IE": "en",
    "CN": "zh", "HK": "zh-TW", "TW": "zh-TW", "MO": "zh-TW", "SG": "zh",
    "JP": "ja",
    "KR": "ko",
    "FR": "fr", "BE": "fr", "CH": "fr",
    "DE": "de", "AT": "de",
    "ES": "es", "MX": "es", "AR": "es", "CO": "es", "CL": "es", "PE": "es",
    "RU": "ru", "BY": "ru", "KZ": "ru",
    "PT": "pt", "BR": "pt",
    "IT": "it",
    "SA": "ar", "AE": "ar", "EG": "ar", "QA": "ar", "KW": "ar", "BH": "ar", "OM": "ar", "JO": "ar", "LB": "ar", "IQ": "ar"
};

let currentLang = localStorage.getItem('lang') || 'en';
let newsData = [];
let currentCategory = 'all';
let currentFilter = 'latest';
let searchQuery = '';
let currentSlide = 0;
let carouselInterval = null;

const categories = [
    {"id": "all", "icon": "📰"},
    {"id": "tech", "icon": "🔬"},
    {"id": "finance", "icon": "💰"},
    {"id": "digital", "icon": "📱"},
    {"id": "industry", "icon": "📊"}
];

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

// IP-based language detection
async function detectLanguageByIP() {
    if (localStorage.getItem('lang')) return;
    
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
            const data = await response.json();
            const countryCode = data.country_code;
            const detectedLang = countryToLang[countryCode];
            if (detectedLang && translations[detectedLang]) {
                currentLang = detectedLang;
                localStorage.setItem('lang', currentLang);
                return true;
            }
        }
    } catch (e) {
        console.log('IP detection failed, using default language');
    }
    
    // Fallback: use browser language
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
        currentLang = browserLang;
        localStorage.setItem('lang', currentLang);
        return true;
    }
    return false;
}

function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = t(key);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        el.placeholder = t(key);
    });
    
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        const lang = languageList.find(l => l.code === currentLang);
        langToggle.innerHTML = lang ? `${lang.flag} ${lang.name}` : '🇺🇸 English';
    }
    
    if (newsData.length > 0) {
        renderCarousel();
        renderNewsGrid();
        renderHotNews();
        renderCategoryTags();
        renderRecentNews();
    }
}

async function loadNewsData() {
    try {
        const response = await fetch('news.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        newsData = Array.isArray(data) ? data : (data.news || []);
        normalizeNewsData();
        renderCarousel();
        renderNewsGrid();
        renderHotNews();
        renderCategoryTags();
        renderRecentNews();
        startCarousel();
        initScrollAnimations();
    } catch (error) {
        console.error('Failed to load news data:', error);
        document.getElementById('news-grid').innerHTML = `<div class="text-center text-red-500 py-8">${t('news.loadError')}</div>`;
    }
}

function normalizeNewsData() {
    newsData = newsData.map((news, index) => ({
        id: news.id || String(index + 1),
        title: news.title || '',
        category: news.category || 'industry',
        categoryName: news.categoryName || {"en": "Industry", "zh": "行业资讯"},
        lang: news.lang || 'en',
        summary: news.summary || news.content || '',
        content: news.content || news.summary || '',
        cover: (news.cover || '').replace(/`/g, '').trim() || `https://picsum.photos/seed/news-${news.id || index}/800/450`,
        source: news.source || 'Unknown',
        publishTime: news.pubdate || news.publishTime || new Date().toISOString(),
        views: news.views || Math.floor(Math.random() * 10000) + 1000,
        isHot: news.isHot || Math.random() > 0.7
    }));
}

function formatTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (days > 0) return `${days} ${t('time.daysAgo')}`;
    if (hours > 0) return `${hours} ${t('time.hoursAgo')}`;
    if (minutes > 0) return `${minutes} ${t('time.minutesAgo')}`;
    return t('time.justNow');
}

function getCategoryName(categoryId) {
    return t(`category.${categoryId}`);
}

function renderCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    const hotNews = newsData.filter(n => n.isHot).slice(0, 3);
    
    slides.forEach((slide, index) => {
        if (hotNews[index]) {
            const news = hotNews[index];
            slide.innerHTML = `
                <img src="${news.cover}" alt="${news.title}" class="lazy-image">
                <div class="slide-overlay">
                    <h3 class="slide-title">${news.title}</h3>
                    <p class="slide-summary">${news.summary}</p>
                    <div class="slide-meta">
                        <span>${getCategoryName(news.category)}</span>
                        <span>${news.source}</span>
                        <span>${formatTime(news.publishTime)}</span>
                    </div>
                </div>
            `;
            slide.addEventListener('click', () => showNewsDetail(news.id));
        } else {
            slide.innerHTML = '';
        }
    });

    indicatorsContainer.innerHTML = '';
    hotNews.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = index === 0 ? 'active' : '';
        btn.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(btn);
    });
}

function startCarousel() {
    carouselInterval = setInterval(() => {
        const hotNews = newsData.filter(n => n.isHot).slice(0, 3);
        if (hotNews.length > 1) {
            currentSlide = (currentSlide + 1) % hotNews.length;
            updateCarousel();
        }
    }, 5000);
}

function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    const hotNews = newsData.filter(n => n.isHot).slice(0, 3);
    
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    indicators.forEach((btn, index) => {
        btn.className = index === currentSlide ? 'active' : '';
    });
}

function createNewsCard(news) {
    const card = document.createElement('article');
    card.className = 'news-card scroll-animate';
    card.innerHTML = `
        <div class="relative overflow-hidden">
            <img src="${news.cover}" alt="${news.title}" class="news-card-image lazy-image">
            ${news.isHot ? `<span class="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">${t('news.hot')}</span>` : ''}
        </div>
        <div class="news-card-content">
            <span class="news-card-category">${getCategoryName(news.category)}</span>
            <h3 class="news-card-title">${news.title}</h3>
            <p class="news-card-summary">${news.summary}</p>
            <div class="news-card-meta">
                <span>${news.source}</span>
                <span>${formatTime(news.publishTime)}</span>
            </div>
        </div>
    `;
    card.addEventListener('click', () => showNewsDetail(news.id));
    return card;
}

function getFilteredNews() {
    let filtered = [...newsData];
    
    if (currentCategory !== 'all') {
        filtered = filtered.filter(n => n.category === currentCategory);
    }
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(n => 
            n.title.toLowerCase().includes(query) ||
            n.summary.toLowerCase().includes(query) ||
            n.content.toLowerCase().includes(query)
        );
    }
    
    if (currentFilter === 'latest') {
        filtered.sort((a, b) => new Date(b.publishTime) - new Date(a.publishTime));
    } else if (currentFilter === 'hot') {
        filtered.sort((a, b) => b.views - a.views);
    }
    
    return filtered;
}

function renderNewsGrid() {
    const grid = document.getElementById('news-grid');
    grid.innerHTML = '';
    
    const filteredNews = getFilteredNews();
    
    if (filteredNews.length === 0) {
        grid.innerHTML = `<div class="text-center text-gray-500 py-12">${t('news.noResults')}</div>`;
        return;
    }
    
    filteredNews.forEach((news, index) => {
        const card = createNewsCard(news);
        card.style.transitionDelay = `${(index % 4) * 0.1}s`;
        grid.appendChild(card);
    });
    
    observeNewElements();
}

function renderHotNews() {
    const container = document.getElementById('hot-news-list');
    container.innerHTML = '';
    
    const hotNews = [...newsData]
        .filter(n => n.isHot)
        .sort((a, b) => b.views - a.views)
        .slice(0, 5);
    
    hotNews.forEach((news, index) => {
        const item = document.createElement('div');
        item.className = 'hot-news-item';
        item.innerHTML = `
            <span class="hot-news-rank ${index < 3 ? 'hot' : ''}">${index + 1}</span>
            <span class="hot-news-title">${news.title}</span>
        `;
        item.addEventListener('click', () => showNewsDetail(news.id));
        container.appendChild(item);
    });
}

function renderCategoryTags() {
    const container = document.getElementById('category-tags');
    container.innerHTML = '';
    
    categories.forEach(category => {
        const tag = document.createElement('button');
        tag.className = `category-tag ${currentCategory === category.id ? 'active' : ''}`;
        tag.textContent = `${category.icon} ${getCategoryName(category.id)}`;
        tag.addEventListener('click', () => {
            currentCategory = category.id;
            renderCategoryTags();
            renderNewsGrid();
            updateNavLinks();
        });
        container.appendChild(tag);
    });
}

function renderRecentNews() {
    const container = document.getElementById('recent-news-list');
    container.innerHTML = '';
    
    const recentNews = [...newsData]
        .sort((a, b) => new Date(b.publishTime) - new Date(a.publishTime))
        .slice(0, 5);
    
    recentNews.forEach(news => {
        const item = document.createElement('div');
        item.className = 'recent-news-item';
        item.innerHTML = `
            <img src="${news.cover}" alt="${news.title}" class="recent-news-thumb lazy-image">
            <span class="recent-news-title">${news.title}</span>
        `;
        item.addEventListener('click', () => showNewsDetail(news.id));
        container.appendChild(item);
    });
}

function showNewsDetail(newsId) {
    const news = newsData.find(n => String(n.id) === String(newsId));
    if (!news) return;
    
    const modal = document.getElementById('news-modal');
    const modalBody = document.getElementById('modal-body');
    
    const sortedNews = [...newsData].sort((a, b) => new Date(b.publishTime) - new Date(a.publishTime));
    const currentIndex = sortedNews.findIndex(n => String(n.id) === String(newsId));
    const prevNews = currentIndex > 0 ? sortedNews[currentIndex - 1] : null;
    const nextNews = currentIndex < sortedNews.length - 1 ? sortedNews[currentIndex + 1] : null;
    
    const relatedNews = sortedNews.filter(n => 
        n.category === news.category && String(n.id) !== String(newsId)
    ).slice(0, 4);
    
    let contentHtml = news.content;
    if (!contentHtml.startsWith('<')) {
        contentHtml = `<p>${contentHtml}</p>`;
    }
    
    modalBody.innerHTML = `
        <img src="${news.cover}" alt="${news.title}">
        <h1>${news.title}</h1>
        <div class="modal-meta">
            <span>${getCategoryName(news.category)}</span>
            <span>${news.source}</span>
            <span>${formatTime(news.publishTime)}</span>
            <span>${t('modal.views')} ${news.views.toLocaleString()}</span>
        </div>
        <div class="modal-content-text">${contentHtml}</div>
        
        <div class="modal-nav">
            <button class="modal-nav-btn" ${!prevNews ? 'disabled' : ''} onclick="showNewsDetail('${prevNews?.id || ''}')">
                <span>‹</span> ${t('modal.prev')}
            </button>
            <button class="modal-nav-btn" ${!nextNews ? 'disabled' : ''} onclick="showNewsDetail('${nextNews?.id || ''}')">
                ${t('modal.next')} <span>›</span>
            </button>
        </div>
        
        ${relatedNews.length > 0 ? `
        <div class="related-news">
            <h3>${t('modal.relatedNews')}</h3>
            <div class="related-news-list">
                ${relatedNews.map(n => `
                    <div class="related-news-item" onclick="showNewsDetail('${n.id}')">
                        <img src="${n.cover}" alt="${n.title}">
                        <span class="related-news-title">${n.title}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('news-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function updateNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.className = `nav-link ${link.dataset.category === currentCategory ? 'active' : ''}`;
    });
}

let scrollObserver = null;

function initScrollAnimations() {
    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    observeNewElements();
}

function observeNewElements() {
    if (!scrollObserver) return;
    document.querySelectorAll('.scroll-animate:not(.visible)').forEach(el => {
        scrollObserver.observe(el);
    });
}

function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    const performSearch = () => {
        searchQuery = searchInput.value.trim();
        currentCategory = 'all';
        updateNavLinks();
        renderCategoryTags();
        renderNewsGrid();
    };
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    searchInput.addEventListener('input', () => {
        if (!searchInput.value.trim()) {
            searchQuery = '';
            renderNewsGrid();
        }
    });
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderNewsGrid();
        });
    });
}

function initNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = link.dataset.category;
            updateNavLinks();
            renderCategoryTags();
            renderNewsGrid();
            
            const section = document.getElementById('news-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    
    const isDark = localStorage.getItem('theme') === 'dark' || 
                   (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
        document.documentElement.classList.add('dark');
        toggleBtn.textContent = '☀️';
    }
    
    toggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggleBtn.textContent = isDark ? '☀️' : '🌓';
    });
}

function initLangDropdown() {
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    
    if (!langToggle || !langDropdown) return;
    
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });
    
    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });
    
    langDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.target.dataset.lang) {
            currentLang = e.target.dataset.lang;
            localStorage.setItem('lang', currentLang);
            applyTranslations();
            langDropdown.classList.remove('show');
        }
    });
}

function initModalClose() {
    const modal = document.getElementById('news-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

function initCarouselControls() {
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const container = document.querySelector('.carousel-container');
    
    prevBtn.addEventListener('click', () => {
        const hotNews = newsData.filter(n => n.isHot).slice(0, 3);
        currentSlide = (currentSlide - 1 + hotNews.length) % hotNews.length;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        const hotNews = newsData.filter(n => n.isHot).slice(0, 3);
        currentSlide = (currentSlide + 1) % hotNews.length;
        updateCarousel();
    });
    
    container.addEventListener('mouseenter', stopCarousel);
    container.addEventListener('mouseleave', startCarousel);
}

function initLazyLoading() {
    const images = document.querySelectorAll('.lazy-image');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await detectLanguageByIP();
    applyTranslations();
    loadNewsData();
    initSearch();
    initFilters();
    initNavLinks();
    initThemeToggle();
    initLangDropdown();
    initModalClose();
    initCarouselControls();
    initLazyLoading();
});