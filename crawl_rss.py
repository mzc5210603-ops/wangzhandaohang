import json
import urllib.request
import re
from datetime import datetime

# Bilingual RSS sources - English and Chinese
rss_sources = {
    "tech": [
        # English sources
        "https://feeds.feedburner.com/TechCrunch/",
        "https://www.theverge.com/rss/index.xml",
        "https://feeds.arstechnica.com/arstechnica/index",
        # Chinese sources
        "https://www.oschina.net/news/rss",
        "https://www.ithome.com/rss/",
    ],
    "finance": [
        # English sources
        "https://feeds.reuters.com/reuters/businessNews",
        "https://www.cnbc.com/id/10001147/device/rss/rss.html",
        # Chinese sources
        "https://stock.qq.com/rss/stock.xml",
    ],
    "digital": [
        # English sources
        "https://www.engadget.com/rss.xml",
        "https://www.cnet.com/rss/news/",
        # Chinese sources
        "https://www.pconline.com.cn/rss.xml",
    ],
    "industry": [
        # English sources
        "https://news.ycombinator.com/rss",
        "https://venturebeat.com/feed/",
        # Chinese sources
        "https://www.36kr.com/feed",
    ],
}

# Category names in both languages
category_names = {
    "tech": {"en": "Tech", "zh": "科技"},
    "finance": {"en": "Finance", "zh": "财经"},
    "digital": {"en": "Digital", "zh": "数码"},
    "industry": {"en": "Industry", "zh": "行业资讯"},
}

def fetch_url(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/rss+xml, application/xml, text/xml",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8",
        "Cache-Control": "no-cache",
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=20) as response:
            return response.read().decode("utf-8", errors="ignore")
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

def parse_rss(xml_content):
    items = []
    item_pattern = re.compile(r"<item>(.*?)</item>", re.DOTALL)
    entry_pattern = re.compile(r"<entry>(.*?)</entry>", re.DOTALL)
    
    for item_match in item_pattern.finditer(xml_content):
        item_content = item_match.group(1)
        
        title_tag = re.search(r"<title>(.*?)</title>", item_content, re.DOTALL)
        title = title_tag.group(1).strip() if title_tag else ""
        if "<![CDATA[" in title:
            title = re.sub(r"<!\[CDATA\[(.*?)\]\]>", r"\1", title, flags=re.DOTALL)
        
        desc_tag = re.search(r"<description>(.*?)</description>", item_content, re.DOTALL)
        summary = desc_tag.group(1).strip() if desc_tag else ""
        if "<![CDATA[" in summary:
            summary = re.sub(r"<!\[CDATA\[(.*?)\]\]>", r"\1", summary, flags=re.DOTALL)
        summary = re.sub(r"<[^>]*>", "", summary)
        summary = summary.replace("&nbsp;", " ").replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
        
        pub_tag = re.search(r"<pubDate>(.*?)</pubDate>", item_content, re.DOTALL)
        published = pub_tag.group(1).strip() if pub_tag else ""
        
        items.append({"title": title, "summary": summary, "published": published})
    
    for entry_match in entry_pattern.finditer(xml_content):
        entry_content = entry_match.group(1)
        
        title_tag = re.search(r"<title>(.*?)</title>", entry_content, re.DOTALL)
        title = title_tag.group(1).strip() if title_tag else ""
        if "<![CDATA[" in title:
            title = re.sub(r"<!\[CDATA\[(.*?)\]\]>", r"\1", title, flags=re.DOTALL)
        
        summary_tag = re.search(r"<summary>(.*?)</summary>", entry_content, re.DOTALL)
        summary = summary_tag.group(1).strip() if summary_tag else ""
        if "<![CDATA[" in summary:
            summary = re.sub(r"<!\[CDATA\[(.*?)\]\]>", r"\1", summary, flags=re.DOTALL)
        summary = re.sub(r"<[^>]*>", "", summary)
        summary = summary.replace("&nbsp;", " ").replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
        
        pub_tag = re.search(r"<published>(.*?)</published>", entry_content, re.DOTALL)
        published = pub_tag.group(1).strip() if pub_tag else ""
        
        items.append({"title": title, "summary": summary, "published": published})
    
    return items

def parse_date(date_str):
    formats = [
        "%a, %d %b %Y %H:%M:%S %z",
        "%a, %d %b %Y %H:%M:%S GMT",
        "%Y-%m-%dT%H:%M:%S%z",
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%dT%H:%M:%S",
    ]
    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt).strftime("%Y-%m-%d %H:%M")
        except:
            continue
    try:
        match = re.search(r"(\d{4})[-/](\d{2})[-/](\d{2})", date_str)
        if match:
            return f"{match.group(1)}-{match.group(2)}-{match.group(3)} 00:00"
    except:
        pass
    return datetime.now().strftime("%Y-%m-%d %H:%M")

def detect_language(text):
    """Detect if text is Chinese or English"""
    if not text:
        return "en"
    chinese_chars = len(re.findall(r"[\u4e00-\u9fff]", text))
    if chinese_chars > 3:
        return "zh"
    return "en"

news_data = []
seen_titles = set()

for category, rss_list in rss_sources.items():
    for rss_url in rss_list:
        xml_content = fetch_url(rss_url)
        entries = parse_rss(xml_content)
        
        for entry in entries[:15]:
            title = entry["title"]
            if not title or title in seen_titles or len(title) < 5:
                continue
            seen_titles.add(title)
            
            summary = entry["summary"][:120] if len(entry["summary"]) > 120 else entry["summary"]
            pubdate_str = parse_date(entry["published"])
            source = rss_url.split("/")[2]
            lang = detect_language(title + summary)
            
            cover = f"https://picsum.photos/seed/news-{hash(title) % 10000}/800/450"
            
            item = {
                "id": len(news_data) + 1,
                "title": title[:100],
                "category": category,
                "categoryName": category_names[category],
                "lang": lang,
                "summary": summary,
                "cover": cover,
                "pubdate": pubdate_str,
                "source": source,
                "content": f"<p>{entry['summary'][:300]}</p>",
            }
            news_data.append(item)

news_data.sort(key=lambda x: x["pubdate"], reverse=True)

for i, item in enumerate(news_data):
    item["id"] = i + 1

with open("news.json", "w", encoding="utf-8") as f:
    json.dump(news_data, f, ensure_ascii=False, indent=2)

print(f"News crawling completed. Generated news.json with {len(news_data)} items.")