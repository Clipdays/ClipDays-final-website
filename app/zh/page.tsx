import { SiteFooter } from "../../components/site-footer";

const journey = [
  ["01", "注册", "开始前关联预订、身份与授权。", "/assets/journey-register.webp"],
  ["02", "捕捉", "固定、云台、全景与人工拍摄设备共同记录精彩瞬间。", "/assets/journey-capture.webp"],
  ["03", "处理", "内容会被整理、处理并关联到正确的课程与参与者。", "/assets/journey-process.webp"],
  ["04", "交付", "专属的品牌化回忆会通过简单的数字体验送达。", "/assets/journey-deliver.webp"],
  ["05", "重温", "宾客可以保存、分享，并反复回到那些重要时刻。", "/assets/journey-relive.webp"],
];

export default function ChineseHome() {
  return <>
    <header className="site-header"><nav className="nav shell" aria-label="主导航"><a className="logo" href="#top"><img src="/assets/clipdays-logo.png" alt="ClipDays" /></a><div className="nav-links"><a href="#why">为什么选择 ClipDays</a><a href="#solution">解决方案</a><a href="#cameras">摄像机</a><a href="#venues">运动场馆</a><a href="#team">团队</a></div><a className="nav-contact" href="#contact">联系我们 ↗</a><a className="language-link" href="/">EN</a></nav></header>
    <main id="top">
      <section className="hero"><img src="/assets/hero-ski.webp" alt="滑雪场中的 ClipDays 摄像系统" /><div className="hero-shade" /><div className="shell hero-content"><span className="kicker">运动场馆的体验层</span><h1>驱动未来的<br /><em>运动记忆基础设施。</em></h1><p>ClipDays 帮助场馆将真实的宾客体验转化为个人回忆、自然传播和全新的收入来源。</p><div className="actions"><a className="button button-primary" href="#contact">与我们交流 ↗</a><a className="button button-glass" href="#solution">了解运作方式</a></div></div></section>
      <section id="why" className="section opportunity"><div className="shell split"><div><span className="kicker kicker-dark">市场机会</span><h2>每一个场馆，<br />都在创造回忆。</h2></div><div className="opportunity-copy"><strong>但大多数回忆会在体验结束时消失。</strong><p>ClipDays 将宾客旅程延伸到离开场馆之后，把已经发生的时刻变成可以拥有、分享和珍藏的回忆。</p><blockquote>人们购买的不是短片，<br />而是回忆。</blockquote></div></div></section>
      <section id="solution" className="section section-soft journey-section"><div className="shell"><header className="section-heading"><span className="kicker kicker-dark">宾客旅程</span><h2>从体验到回忆，<br />无需额外摩擦。</h2><p>技术留在幕后，体验始终处于前台。</p></header><div className="journey-grid">{journey.map(([step,title,text,image])=><article className="journey-card" key={step}><div className="journey-image"><img src={image} alt="" /></div><div className="card-index"><b>{step}</b></div><div className="journey-copy"><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
      <section id="cameras" className="section capture-section"><div className="shell"><header className="section-heading"><span className="kicker kicker-dark">灵活的捕捉方案</span><h2>为每一个时刻，<br />选择合适的镜头。</h2><p>我们围绕环境、运动模式和宾客旅程，配置兼容的拍摄硬件。</p></header><div className="camera-grid">{[["全景 AI","广角覆盖","/assets/camera-panoramic-product.webp"],["固定系统","全天候区域","/assets/camera-fixed-product.webp"],["云台与光学变焦","追随运动","/assets/camera-ptz-product.webp"]].map(([label,title,image])=><article className="camera-card" key={label}><div className="camera-image"><img src={image} alt="" /></div><div className="camera-copy"><span>{label}</span><h3>{title}</h3><p>为可靠、高品质且可扩展的场馆捕捉体验而设计。</p></div></article>)}</div></div></section>
      <section id="venues" className="section section-soft"><div className="shell"><header className="section-heading"><span className="kicker kicker-dark">一个平台，多种体验</span><h2>从滑雪出发，<br />面向更广阔的运动世界。</h2><p>平台可灵活适配各类结构化运动和旅游体验。</p></header></div></section>
      <section id="team" className="section team-section"><div className="shell"><header className="section-heading"><span className="kicker kicker-dark">建设 ClipDays 的团队</span><h2>战略、平台执行与市场连接。</h2></header></div></section>
      <section id="contact" className="section contact-section"><div className="shell"><div className="contact-copy"><span className="kicker kicker-dark">与我们一起构建下一层体验</span><h2>了解 ClipDays 能为您的场馆带来什么。</h2><p>欢迎告诉我们您的宾客旅程、拍摄环境和商业目标。</p><a className="button button-primary" href="mailto:hello@clipdays.com">hello@clipdays.com</a></div></div></section>
    </main><SiteFooter />
  </>;
}
