"use client";

import { useState } from "react";

const work = [
  { image: "/portfolio/orange-bonbons-upright.jpg", en: "Chocolate Orange Bonbons", ko: "초콜릿 오렌지 봉봉", noteEn: "Chocolate · Confectionery", noteKo: "초콜릿 · 컨펙셔너리" },
  { image: "/portfolio/kataifi-cheesecake.jpg", en: "Kataifi Cheesecake", ko: "카다이프 치즈케이크", noteEn: "Contemporary plated pastry", noteKo: "컨템포러리 플레이티드 페이스트리" },
  { image: "/portfolio/dark-chocolate-truffle-upright.jpg", en: "Dark Chocolate Soft Truffle", ko: "다크 초콜릿 소프트 트러플", noteEn: "Retail development", noteKo: "리테일 제품 개발" },
  { image: "/portfolio/tiramisu-cake-upright.jpg", en: "Tiramisu Celebration Cake", ko: "티라미수 셀레브레이션 케이크", noteEn: "Classic technique", noteKo: "클래식 테크닉" },
  { image: "/portfolio/sourdough-upright.jpg", en: "Artisan Sourdough", ko: "아르티잔 사워도우", noteEn: "Bread production", noteKo: "브레드 프로덕션" },
  { image: "/portfolio/pistachio-mousse.jpg", en: "Pistachio Mousse", ko: "피스타치오 무스 케이크", noteEn: "Seasonal showpiece", noteKo: "시즈널 쇼피스" },
];

const experience = [
  { years: "2024–2025", role: "Brand Ambassador", company: "IRCA Group", en: "B2B product demonstrations, tasting programs, and dessert consultation for regional businesses.", ko: "지역 비즈니스 고객을 위한 B2B 제품 시연, 시식 프로그램 및 디저트 컨설팅." },
  { years: "2024–2025", role: "Pastry Chef", company: "FIYA Restaurant", en: "Developed café and dinner desserts, including gluten-free and Middle Eastern-inspired offerings.", ko: "카페와 디너 디저트를 개발하고 글루텐프리 및 중동풍 메뉴 R&D를 수행." },
  { years: "2024–2025", role: "Pastry Chef Consultant", company: "Sorelle Italian", en: "Built the dessert program, recipes, high-volume production schedules, and kitchen workflow.", ko: "디저트 프로그램과 레시피, 고부하 생산 일정 및 키친 워크플로우를 구축." },
  { years: "2023–2024", role: "Executive Pastry Sous Chef", company: "Pella Signature", en: "Led menu R&D, production planning, purchasing, inventory, and pastry team development.", ko: "메뉴 R&D, 생산 계획, 발주·재고 관리 및 파티시에 팀 육성을 총괄." },
  { years: "2021–2022", role: "Pastry Sous Chef", company: "Bazaar Meat by José Andrés", en: "Directed pastry preparation, service, menu research, ordering, and team training.", ko: "파티세리 생산과 서비스, 메뉴 연구, 발주 및 팀 교육을 운영." },
  { years: "2020–2021", role: "Pastry Cook", company: "Nobu Hotel Chicago", en: "High-volume restaurant and rooftop service, hotel amenities, chocolate, and new-hire training.", ko: "고부하 레스토랑·루프탑 서비스, 호텔 어메니티, 초콜릿 및 신입 교육." },
  { years: "2014–2020", role: "Pastry & Chocolate Leadership", company: "Chicago · Buffalo · Florida", en: "Progressive roles at Nico Osteria, Blue Table Chocolate, Sixteen, Loews Don CeSar, and Mina Group.", ko: "Nico Osteria, Blue Table Chocolate, Sixteen, Loews Don CeSar, Mina Group에서 단계적으로 성장." },
  { years: "2011–2014", role: "Foundation in Culinary Arts", company: "Buffalo, New York", en: "Bakery and pastry production alongside formal Baking & Pastry and Culinary Arts studies.", ko: "Baking & Pastry 및 Culinary Arts 전공과 함께 베이커리·파티세리 생산의 기본기를 구축." },
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "ko">("en");
  const ko = lang === "ko";
  return (
    <main>
      <nav className="nav" aria-label={ko ? "주요 메뉴" : "Primary navigation"}>
        <a className="monogram" href="#top" aria-label="Jamie Lee Dunne home">JLD</a>
        <div className="navLinks">
          <a href="#about">{ko ? "소개" : "About"}</a><a href="#work">{ko ? "프로젝트" : "Work"}</a><a href="#experience">{ko ? "경력" : "Experience"}</a><a href="#contact">{ko ? "연락처" : "Contact"}</a>
        </div>
        <div className="language" aria-label="Language selector"><button className={!ko ? "active" : ""} onClick={() => setLang("en")} aria-pressed={!ko}>EN</button><span>/</span><button className={ko ? "active" : ""} onClick={() => setLang("ko")} aria-pressed={ko}>한글</button></div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy"><p className="eyebrow">{ko ? "파티시에 · 디저트 R&D" : "Pastry Chef · Dessert R&D"}</p><h1>Jamie Lee<br />Dunne</h1><p className="heroStatement">{ko ? "기술에 따뜻한 환대를 담아, 기억에 남는 디저트 경험을 만듭니다." : "Creating memorable dessert experiences through precision, imagination, and warm hospitality."}</p><a className="textLink" href="#work">{ko ? "작업 컬렉션 보기" : "View selected work"}<span>↘</span></a></div>
        <div className="heroVisual"><img src="/portfolio/kataifi-cheesecake-hd.png" alt={ko ? "카타이피와 과일을 곁들인 치즈케이크" : "Cheesecakes finished with kataifi and fresh fruit"} /><div className="portraitCard"><img src="/portfolio/jamie-dunne.jpg" alt={ko ? "셰프복을 입은 제이미 리 던" : "Jamie Lee Dunne in chef whites"} /><p>{ko ? "브루클린에서 시작해 세계의 주방으로" : "Brooklyn beginnings, a global kitchen"}</p></div></div>
      </section>

      <section className="intro" id="about"><p className="sectionNumber">01</p><h2>{ko ? "아이디어를 완벽한 서비스로 구현하는 10년 차 디저트 마스터" : "A pastry chef fluent in both craft and operations"}</h2><p>{ko ? "파인다이닝과 럭셔리 호텔, 초콜릿 전문점, 베이커리 등 다양한 환경에서 메뉴 R&D부터 대량 생산 체계 구축, 팀 교육, 신규 브랜드 오프닝까지 전 과정을 주도했습니다. 창의적인 아이디어를 완성도 높은 매장 서비스와 안정적인 운영 프로세스로 구현해 냅니다." : "More than a decade across fine dining, luxury hotels, chocolate, and bakery environments. From menu R&D and high-volume production to team training and new-concept openings, Jamie turns ideas into consistent service."}</p></section>

      <section className="numbers" id="stats" aria-label={ko ? "주요 경력 수치" : "Career highlights"}>
        <div><strong>10+</strong><span>{ko ? "경력 연수" : "Years of craft"}</span></div><div><strong>6</strong><span>{ko ? "신규 콘셉트 오프닝" : "Concept openings"}</span></div><div><strong>4</strong><span>{ko ? "전문 분야" : "Craft disciplines"}</span></div><div><strong>2</strong><span>{ko ? "국가에서의 실무 경험" : "Countries of experience"}</span></div>
      </section>

      <section className="workSection" id="work"><header className="sectionHeader"><p><span>02</span>{ko ? "작업 컬렉션" : "Selected work"}</p><h2>{ko ? "시각을 넘어 감각을 채우는 디저트" : "Delight, built from precision"}</h2></header><div className="workGrid">{work.map((item, i) => <figure className={item.tall ? "tall" : ""} key={item.en}><div className="imageWrap"><img src={item.image} alt={ko ? item.ko : item.en} /></div><figcaption><span>0{i + 1}</span><div><h3>{ko ? item.ko : item.en}</h3><p>{ko ? item.noteKo : item.noteEn}</p></div></figcaption></figure>)}</div></section>

      <section className="philosophy"><p className="sectionNumber light">03</p><blockquote className={ko ? "quoteKo" : ""}>{ko ? <>좋은 디저트는<br />마지막 코스가 아니라<br />손님이 오래 기억할<br />경험의 &apos;마지막 문장&apos; 입니다.</> : "Dessert is not simply the final course. It is the closing line of an experience guests carry with them."}</blockquote><p className="signature">Jamie Lee Dunne<br /><span>{ko ? "파티시에" : "Pastry Chef"}</span></p></section>

      <section className="expertise"><header className="sectionHeader"><p><span>04</span>{ko ? "전문 영역" : "Expertise"}</p><h2>{ko ? "아이디어에서 안정적인 서비스까지" : "From idea to consistent service"}</h2></header><div className="expertiseGrid">
        <article><span>01</span><h3>{ko ? "메뉴 개발 & R&D" : "Menu Development & R&D"}</h3><p>{ko ? "콘셉트, 맛, 식감, 계절성을 실제 서비스에 맞는 레시피로 전환합니다." : "Translating concept, flavor, texture, and seasonality into recipes built for service."}</p></article>
        <article><span>02</span><h3>{ko ? "파인다이닝 & 호텔" : "Fine Dining & Hotels"}</h3><p>{ko ? "플레이트 디저트, 어메니티, 연회 및 고부하 생산 환경의 품질 기준을 이해합니다." : "Quality-led execution across plated desserts, amenities, banquets, and high-volume production."}</p></article>
        <article><span>03</span><h3>{ko ? "초콜릿 & 컨펙셔너리" : "Chocolate & Confectionery"}</h3><p>{ko ? "봉봉, 몰드, 바, 소형 컨펙션과 리테일 제품 생산 경험을 보유합니다." : "Hands-on experience with bonbons, molded pieces, bars, small confections, and retail production."}</p></article>
        <article><span>04</span><h3>{ko ? "리더십 & 오프닝" : "Leadership & Openings"}</h3><p>{ko ? "생산 일정, 재고, 교육, 키친 레이아웃 및 신규 프로그램의 안정화를 이끕니다." : "Guiding production schedules, inventory, training, kitchen workflow, and new-program launches."}</p></article>
      </div></section>

      <section className="experience" id="experience"><header className="sectionHeader"><p><span>05</span>{ko ? "경력" : "Experience"}</p><h2>{ko ? "다양한 주방에서 쌓은 하나의 기준" : "One standard, shaped across many kitchens"}</h2></header><div className="timeline">{experience.map((item) => <article key={item.role + item.years}><p className="years">{item.years}</p><div><h3>{item.role}</h3><p className="company">{item.company}</p></div><p className="description">{ko ? item.ko : item.en}</p></article>)}</div><div className="notable"><p>{ko ? "주요 브랜드 경험" : "Notable kitchens & groups"}</p><div><span>NOBU</span><span>JOSÉ ANDRÉS</span><span>MINA GROUP</span><span>LOEWS HOTELS</span><span>IRCA</span></div></div></section>

      <section className="education"><div><p className="sectionNumber">06</p><h2>{ko ? "교육과 언어" : "Education & languages"}</h2></div><div className="educationList"><article><p>2012–2014</p><h3>Erie Community College</h3><span>{ko ? "Culinary Arts, A.S." : "Associate of Science, Culinary Arts"}</span></article><article><p>2011–2012</p><h3>Erie Community College</h3><span>{ko ? "Baking & Pastry Arts 수료" : "Certification, Baking & Pastry Arts"}</span></article><article><p>{ko ? "언어" : "Languages"}</p><h3>{ko ? "영어 · 한국어 · 미국 수어" : "English · Korean · ASL"}</h3><span>{ko ? "영어 모국어 · 한국어 초급 · 미국 수어 일상회화" : "Native English · Beginner Korean · Conversational American Sign Language"}</span></article></div></section>

      <footer id="contact"><p className="eyebrow">{ko ? "함께 만들어 봅시다" : "Let’s create together"}</p><h2 className={ko ? "footerTitleKo" : ""}>{ko ? <><span>새로운 주방과</span><span>다음 디저트를 위해.</span></> : <>For the next kitchen.<br />For the next dessert.</>}</h2><div className="contactRow"><a href="mailto:Jamie.leed1225@gmail.com">Jamie.leed1225@gmail.com ↗</a><a href="tel:+821051990490">+82 10 5199 0490 ↗</a><p>{ko ? "대한민국 고양시" : "Goyang, South Korea"}</p></div><div className="footerBottom"><span>Jamie Lee Dunne</span><span>© 2026</span><a href="#top">{ko ? "맨 위로 ↑" : "Back to top ↑"}</a></div></footer>
    </main>
  );
}
