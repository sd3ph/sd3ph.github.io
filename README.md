<html lang="en" data-theme="quantum">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <meta name="theme-color" content="#080d18">
    <meta name="description" content="Physics + AI research, teaching, publications and lab projects.">
    <link rel="manifest" href="manifest.webmanifest">
    <link rel="apple-touch-icon" href="icons/icon-192.png">
    <title>iLab - Portfolio</title>
    <!-- Modern Typography Imports -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    
    <style>

:root {
  color-scheme: dark;
  --bg:#080d18; --surface:#101a2b; --card:#142238; --card-hover:#1a2c45;
  --text:#eaf0f8; --muted:#a7b5c9; --soft:#71829b; --line:rgba(255,255,255,.10);
  --accent:#62d8e8; --accent-2:#8b8cf5; --accent-soft:rgba(98,216,232,.12);
  --gradient:linear-gradient(120deg,var(--accent),var(--accent-2));
  --shadow:0 18px 50px rgba(0,0,0,.22);
  --radius:18px;
  --bg-base:var(--bg); --bg-surface:var(--surface); --bg-card:var(--card);
  --bg-card-hover:var(--card-hover); --bg-input:#0b1422;
  --text-primary:var(--text); --text-secondary:var(--muted); --text-muted:var(--soft);
  --heading-color:var(--text); --accent-cyan:var(--accent); --accent-blue:var(--accent-2);
  --accent-purple:var(--accent-2); --accent-pink:#f27b9b; --accent-emerald:#55d6a5;
  --accent-amber:#f3c875; --border-glow:var(--line); --border-highlight:rgba(98,216,232,.32);
  --border-hover:var(--accent); --badge-bg:var(--accent-soft); --badge-border:var(--border-highlight);
  --table-header-bg:rgba(255,255,255,.045); --gradient-primary:var(--gradient);
  --gradient-purple:linear-gradient(120deg,var(--accent-2),var(--accent));
  --gradient-ad:linear-gradient(135deg,#172b43,#17213a);
  --shadow-elevation:var(--shadow); --card-inner-shine:inset 0 1px rgba(255,255,255,.05);
}
[data-theme="aurora"] {
  --bg:#071512; --surface:#0d211e; --card:#12302b; --card-hover:#193d36;
  --accent:#57d9b0; --accent-2:#4dbbd2; --accent-soft:rgba(87,217,176,.12);
  --gradient-ad:linear-gradient(135deg,#12372f,#102b32);
}
[data-theme="solar"] {
  --bg:#160d19; --surface:#28172a; --card:#352039; --card-hover:#472748;
  --accent:#ff9b69; --accent-2:#ed6b8c; --accent-soft:rgba(255,155,105,.12);
  --gradient-ad:linear-gradient(135deg,#48243a,#2b1a35);
}
[data-theme="obsidian"] {
  --bg:#0c0d10; --surface:#17191e; --card:#20232a; --card-hover:#2a2e37;
  --accent:#d9e0eb; --accent-2:#8795aa; --accent-soft:rgba(217,224,235,.10);
  --gradient-ad:linear-gradient(135deg,#30343d,#17191e);
}
[data-theme="opal"], [data-theme="light"] {
  color-scheme:light;
  --bg:#f3f6fb; --surface:rgba(255,255,255,.92); --card:#fff; --card-hover:#f5f8fd;
  --text:#152238; --muted:#53647b; --soft:#718096; --line:rgba(20,38,62,.12);
  --accent:#087fae; --accent-2:#536bdc; --accent-soft:rgba(8,127,174,.09);
  --gradient-ad:linear-gradient(135deg,#fff,#eaf1fa);
  --shadow:0 14px 38px rgba(29,48,75,.08);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:130px}
body{
  margin:0;min-height:100vh;overflow-x:hidden;
  font:15px/1.75 "Plus Jakarta Sans",system-ui,sans-serif;color:var(--text);
  background:
    radial-gradient(ellipse at 8% 0%,var(--accent-soft),transparent 34rem),
    radial-gradient(ellipse at 95% 12%,rgba(139,140,245,.09),transparent 30rem),
    var(--bg);
  -webkit-font-smoothing:antialiased;transition:background .25s,color .25s;
}
a{color:var(--accent);text-underline-offset:3px}
button,input{font:inherit}
button:focus-visible,a:focus-visible,input:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
::selection{background:var(--accent);color:#07111d}
::-webkit-scrollbar{width:8px;height:8px}
::-webkit-scrollbar-thumb{background:var(--soft);border-radius:20px}
::-webkit-scrollbar-track{background:var(--bg)}

/* Header and navigation */
.main-header{
  position:sticky;top:10px;z-index:1000;width:min(1160px,94%);
  margin:10px auto 24px;background:var(--bg-surface);
  border:1px solid var(--border-glow);border-radius:16px;
  box-shadow:var(--shadow);backdrop-filter:blur(18px);
}
.site-title-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:13px 20px;flex-wrap:wrap}
.site-title-header .title{
  display:flex;align-items:center;gap:9px;white-space:nowrap;
  font:700 1.45rem/1 "Space Grotesk",sans-serif;letter-spacing:-.06em;color:var(--heading-color)
}
.site-title-header .title:after{content:"";width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 14px var(--accent)}
.top-nav-links,.nav-links{display:flex;align-items:center;gap:4px;list-style:none;margin:0;padding:0}
.top-nav-links li,.nav-links li{padding:0;margin:0;font-size:.86rem}
.top-nav-links li:before,.nav-links li:before{content:none}
.top-nav-links a,.nav-links a{
  display:inline-block;padding:7px 11px;border-radius:9px;text-decoration:none;
  color:var(--text-secondary);font-weight:600;transition:.2s ease;border:1px solid transparent
}
.top-nav-links a:hover,.nav-links a:hover{color:var(--text);background:var(--accent-soft)}
.nav-link.active{color:var(--accent)!important;background:var(--accent-soft);border-color:var(--border-highlight)!important}
.navbar{display:flex;justify-content:center;align-items:center;padding:7px 12px;border-top:1px solid var(--border-glow);overflow-x:auto;scrollbar-width:none}
.navbar::-webkit-scrollbar{display:none}
.nav-links{white-space:nowrap}
.theme-switcher-wrapper{position:relative;flex-shrink:0}
.theme-toggle-btn{
  display:flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid var(--border-glow);
  border-radius:10px;background:var(--card);color:var(--text);font-size:.84rem;font-weight:600;cursor:pointer
}
.theme-toggle-btn:hover{border-color:var(--accent)}
.theme-dropdown-arrow{opacity:.65;font-size:.8em}
.theme-dropdown-menu{
  position:absolute;right:0;top:calc(100% + 8px);z-index:2000;min-width:190px;padding:7px;
  display:flex;flex-direction:column;gap:3px;background:var(--bg-surface);
  border:1px solid var(--border-glow);border-radius:13px;box-shadow:var(--shadow);
  opacity:0;visibility:hidden;transform:translateY(6px);transition:.18s ease
}
.theme-dropdown-menu.show{opacity:1;visibility:visible;transform:none}
.theme-opt{display:flex;align-items:center;gap:10px;width:100%;padding:9px 10px;border:1px solid transparent;border-radius:8px;background:transparent;color:var(--text);text-align:left;font-size:.84rem;cursor:pointer}
.theme-opt:hover,.theme-opt.active{background:var(--accent-soft);border-color:var(--border-highlight);color:var(--accent)}
.theme-opt-dot{width:11px;height:11px;border-radius:50%;flex-shrink:0}

/* Main layout and typography */
.container{width:min(1080px,92%);margin:0 auto 60px}
.page-content{display:none;animation:enter .28s ease both}
.page-content.active{display:block}
@keyframes enter{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
h1,h2,h3,h4{font-family:"Space Grotesk",sans-serif;line-height:1.25;letter-spacing:-.035em;color:var(--heading-color)}
h1{font-size:clamp(1.8rem,4vw,2.6rem)}
h2{font-size:clamp(1.35rem,3vw,1.8rem);margin:0 0 20px;padding-bottom:12px;border-bottom:1px solid var(--border-glow)}
h3{font-size:1.2rem;color:var(--accent);margin:24px 0 12px}
h4{font-size:1.05rem;margin:16px 0 9px}
p{color:var(--text-secondary);margin:0 0 14px}
strong,b{color:var(--heading-color);font-weight:650}
ul{list-style:none;padding:0;margin:0 0 20px}
li{position:relative;padding-left:19px;margin:0 0 9px;color:var(--text-secondary)}
li:before{content:"";position:absolute;left:0;top:.78em;width:6px;height:6px;border-radius:50%;background:var(--accent)}
.section{
  padding:24px;margin:18px 0;background:var(--bg-surface);border:1px solid var(--border-glow);
  border-radius:var(--radius);box-shadow:var(--shadow);transition:border-color .2s
}
.section:hover{border-color:var(--border-highlight)}
img{max-width:100%}
.profile-header{display:flex;align-items:center;gap:22px}
.profile-picture{width:92px;height:92px;object-fit:cover;border-radius:50%;border:2px solid var(--accent);flex-shrink:0}
.header-text h1{font-size:2rem;margin:0 0 5px}
.header-text p{color:var(--accent);margin:0}
.social-links{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}
.social-links a img{height:27px;border-radius:7px;transition:transform .2s}
.social-links a:hover img{transform:translateY(-3px)}
.research-area-item,.publication-item,.timeline-content{
  background:var(--card);border:1px solid var(--border-glow);border-radius:12px;padding:14px 17px;margin:0 0 12px
}
.research-area-item{border-left:3px solid var(--accent)}
.research-area-item:hover,.publication-item:hover,.timeline-content:hover{background:var(--card-hover);border-color:var(--border-highlight)}
.publication-item .citation{color:var(--text);font-size:.98rem;line-height:1.65;margin-bottom:8px}
.publication-item a{display:inline-block;padding:3px 8px;border-radius:6px;background:var(--accent-soft);font-size:.86rem;font-weight:650;text-decoration:none}
.timeline{border-left:1px solid var(--border-highlight);padding-left:20px;margin-left:6px}
.timeline-item{position:relative;margin-bottom:16px}
.timeline-item:before{content:"";position:absolute;left:-26px;top:17px;width:10px;height:10px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px var(--bg)}
.timeline-content strong{font-size:.96rem}
.advertisement{position:relative;overflow:hidden;text-align:center;padding:30px 24px;border:1px solid var(--border-highlight);border-radius:16px;background:var(--gradient-ad)}
.advertisement h1{font-size:clamp(1.6rem,4vw,2.15rem);background:var(--gradient-purple);background-clip:text;-webkit-background-clip:text;color:transparent;margin:0 0 12px}
.opportunities{display:flex;justify-content:center;flex-wrap:wrap;gap:9px;margin:20px 0}
.opportunity,.semester-tag{display:inline-block;padding:7px 13px;border-radius:30px;background:var(--accent-soft);border:1px solid var(--badge-border);color:var(--text);font-size:.84rem;font-weight:600}
.email-link{display:inline-block;margin-top:12px;padding:11px 25px;border-radius:9px;background:var(--gradient-primary);color:#fff!important;text-decoration:none;font-weight:700;box-shadow:var(--shadow);transition:transform .2s}
.email-link:hover{transform:translateY(-2px)}
.course-grid,.outreach-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:14px;margin-top:16px}
.course-card,.outreach-card{
  padding:20px;border:1px solid var(--border-glow);border-radius:15px;background:var(--card);
  transition:transform .2s,border-color .2s,background .2s
}
.course-card{display:flex;flex-direction:column;justify-content:space-between;cursor:pointer}
.course-card:hover,.outreach-card:hover{transform:translateY(-3px);background:var(--card-hover);border-color:var(--border-highlight)}
.course-card h4{margin:0 0 12px;padding-bottom:10px;border-bottom:1px solid var(--border-glow)}
.course-code{color:var(--accent);font-weight:700;letter-spacing:.04em}
.outreach-card{border-top:3px solid var(--accent-amber)}
.outreach-icon{display:block;font-size:1.8rem;margin-bottom:8px}
.back-btn{display:inline-flex;align-items:center;gap:7px;margin:0 0 18px;padding:8px 14px;border:1px solid var(--border-glow);border-radius:9px;background:var(--card);color:var(--text);font-weight:600;cursor:pointer}
.back-btn:hover{border-color:var(--accent);color:var(--accent)}
.course-detail-view,.teaching-detail-view{display:none;animation:enter .25s ease}
.course-detail-view.active,.teaching-detail-view.active{display:block}
.playground-container{width:100%;height:70vh;min-height:420px;overflow:hidden;border:1px solid var(--border-glow);border-radius:14px;background:#05070b}
.playground-container iframe{width:100%;height:100%;border:0}
.password-prompt-container{max-width:500px;margin:32px auto;padding:34px 22px;text-align:center;background:var(--bg-surface);border:1px dashed var(--border-highlight);border-radius:16px;box-shadow:var(--shadow)}
.password-form{display:flex;justify-content:center;gap:9px;flex-wrap:wrap;margin-top:18px}
.password-form input{width:min(270px,100%);padding:11px 13px;border:1px solid var(--border-glow);border-radius:9px;background:var(--bg-input);color:var(--text)}
.password-form input:focus{outline:2px solid var(--border-highlight);border-color:var(--accent)}
.password-form button{padding:10px 18px;border:0;border-radius:9px;background:var(--gradient-primary);color:#fff;font-weight:700;cursor:pointer}
.password-error-message{margin-top:12px;color:#ef6464;font-weight:650}
#classroom-content.hidden{display:none}
.table-responsive{width:100%;overflow-x:auto;margin-top:14px;border:1px solid var(--border-glow);border-radius:12px}
table{width:100%;min-width:550px;border-collapse:collapse;background:var(--card);font-size:.9rem}
th,td{padding:11px 13px;text-align:left;border-bottom:1px solid var(--border-glow);color:var(--text-secondary)}
th{background:var(--table-header-bg);color:var(--heading-color);font-family:"Space Grotesk",sans-serif;font-weight:650}
tr:hover td{background:var(--card-hover);color:var(--text)}
.call-to-action{margin-top:22px}
@media(max-width:800px){
  .main-header{width:94%;top:6px;margin:6px auto 18px}
  .site-title-header{padding:12px 14px}
  .top-nav-links{order:3;width:100%;justify-content:center}
  .navbar{justify-content:flex-start}
  .container{width:94%}
  .section{padding:19px}
  .profile-header{flex-direction:column;text-align:center}
  .research-gifs{flex-direction:column!important;aspect-ratio:auto!important}
  .research-gifs img{width:100%!important;height:auto!important}
  .playground-container{height:56vh}
}
@media(max-width:520px){
  body{font-size:14px}
  .site-title-header .title{font-size:1.3rem}
  .top-nav-links a,.nav-links a{padding:6px 9px;font-size:.8rem}
  .theme-toggle-btn{padding:7px 9px}
  .section{padding:16px;border-radius:13px}
  .profile-picture{width:82px;height:82px}
  .header-text h1{font-size:1.65rem}
  .advertisement{padding:24px 15px}
  .email-link{width:100%}
  h2{font-size:1.4rem}
}
@media(prefers-reduced-motion:reduce){
  *,*:before,*:after{scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important}
}

    

/* =========================================================
   CREATIVE ART DIRECTION — editorial science / digital lab
   ========================================================= */
:root{
  --bg:#070b13; --surface:rgba(15,23,38,.88); --card:rgba(19,31,50,.82);
  --card-hover:rgba(27,43,67,.94); --text:#f2f5fa; --muted:#a7b4c7; --soft:#73839a;
  --line:rgba(181,205,231,.13); --accent:#b8f36b; --accent-2:#8b7cff;
  --accent-soft:rgba(184,243,107,.10); --border-highlight:rgba(184,243,107,.32);
  --border-hover:var(--accent); --badge-bg:var(--accent-soft); --badge-border:var(--border-highlight);
  --heading-color:var(--text); --text-primary:var(--text); --text-secondary:var(--muted);
  --text-muted:var(--soft); --bg-base:var(--bg); --bg-surface:var(--surface);
  --bg-card:var(--card); --bg-card-hover:var(--card-hover); --bg-input:#0b1220;
  --accent-cyan:var(--accent); --accent-blue:#75d9e8; --accent-purple:var(--accent-2);
  --accent-pink:#ff7f9d; --accent-emerald:#76e0b5; --accent-amber:#f7c66b;
  --gradient-primary:linear-gradient(115deg,#b8f36b,#69dce3 55%,#9b8cff);
  --gradient-purple:linear-gradient(115deg,#b8f36b,#9b8cff);
  --gradient-ad:linear-gradient(135deg,#172b34,#211c3b);
  --table-header-bg:rgba(255,255,255,.045);
  --shadow-elevation:0 22px 65px rgba(0,0,0,.28);
  --card-inner-shine:inset 0 1px rgba(255,255,255,.055);
}
[data-theme="aurora"]{
  --bg:#061512;--surface:rgba(10,32,27,.9);--card:rgba(15,48,40,.82);
  --card-hover:rgba(22,65,53,.95);--accent:#73f0b9;--accent-2:#6ddbe7;
  --accent-soft:rgba(115,240,185,.11);--gradient-ad:linear-gradient(135deg,#123c31,#102c37);
}
[data-theme="solar"]{
  --bg:#160b18;--surface:rgba(39,20,39,.9);--card:rgba(54,28,53,.82);
  --card-hover:rgba(75,37,67,.95);--accent:#ffb16d;--accent-2:#ff6f91;
  --accent-soft:rgba(255,177,109,.11);--gradient-ad:linear-gradient(135deg,#4a243b,#29182f);
}
[data-theme="obsidian"]{
  --bg:#090a0d;--surface:rgba(22,24,29,.92);--card:rgba(31,34,41,.85);
  --card-hover:rgba(43,47,56,.96);--accent:#e4e9f1;--accent-2:#8796ac;
  --accent-soft:rgba(228,233,241,.10);--gradient-ad:linear-gradient(135deg,#303640,#181a20);
}
[data-theme="opal"],[data-theme="light"]{
  color-scheme:light;--bg:#f2f5f8;--surface:rgba(255,255,255,.92);--card:#fff;
  --card-hover:#f5f8fb;--text:#142033;--muted:#53647a;--soft:#77869a;
  --line:rgba(20,36,57,.12);--accent:#477b24;--accent-2:#6554d9;
  --accent-soft:rgba(71,123,36,.09);--gradient-ad:linear-gradient(135deg,#fff,#edf3e8);
  --shadow-elevation:0 18px 50px rgba(30,48,70,.09);
}
body{
  font-family:"DM Sans",sans-serif;font-size:15.5px;line-height:1.78;
  background:
    radial-gradient(ellipse at 12% 4%,rgba(184,243,107,.11),transparent 32rem),
    radial-gradient(ellipse at 88% 14%,rgba(139,124,255,.13),transparent 35rem),
    linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px),var(--bg);
  background-size:auto,auto,56px 56px,56px 56px,auto;
}
h1,h2,h3,h4,.site-title-header .title,.advertisement h1,.course-card h4,th{
  font-family:"Sora","Space Grotesk",sans-serif;letter-spacing:-.045em;
}
code,.course-code,.semester-tag{font-family:"IBM Plex Mono",monospace}
.main-header{
  width:min(1220px,94%);top:12px;margin:12px auto 30px;border-radius:19px;
  background:color-mix(in srgb,var(--bg-surface) 88%,transparent);
  border-color:var(--line);box-shadow:0 18px 60px rgba(0,0,0,.24);
}
.site-title-header{padding:16px 22px}
.site-title-header .title{font-size:1.55rem;font-weight:800;letter-spacing:-.075em}
.site-title-header .title:before{
  content:"";display:inline-block;width:27px;height:27px;border-radius:9px;
  background:var(--gradient-primary);box-shadow:0 0 24px var(--accent-soft);
  transform:rotate(-12deg);
}
.site-title-header .title:after{width:6px;height:6px;box-shadow:0 0 13px var(--accent)}
.top-nav-links a,.nav-links a{font-size:.82rem;letter-spacing:.015em;border-radius:8px}
.navbar{padding:8px 14px}
.container{width:min(1120px,91%);margin-bottom:80px}
.page-content{position:relative}
.page-content>h2:first-child{margin-top:4px}
h2{
  font-size:clamp(1.55rem,3.1vw,2.15rem);line-height:1.2;
  padding-bottom:15px;margin-bottom:23px;border-bottom-color:var(--line);
}
h3{font-size:1.27rem;letter-spacing:-.04em}
p{max-width:90ch}
.section{
  position:relative;padding:clamp(20px,3vw,30px);margin:22px 0;
  border-radius:20px;border-color:var(--line);
  background:linear-gradient(145deg,var(--bg-surface),color-mix(in srgb,var(--bg-surface) 80%,var(--accent-soft)));
  box-shadow:0 20px 60px rgba(0,0,0,.13),var(--card-inner-shine);
}
.section:before{
  content:"";position:absolute;left:24px;top:0;width:46px;height:2px;
  background:var(--gradient-primary);opacity:.9;
}
#highlight>img:first-child{
  display:block;width:100%;aspect-ratio:2.25/1;object-fit:cover;
  border-radius:22px;border:1px solid var(--line);margin:0 0 30px;
  box-shadow:0 28px 80px rgba(0,0,0,.28);
}
#highlight>h2:first-of-type{
  max-width:900px;font-size:clamp(2rem,5vw,3.65rem);line-height:1.08;
  letter-spacing:-.07em;border:0;padding:0;margin:0 0 18px;
}
#highlight>h2:first-of-type:after{
  content:"";display:block;width:76px;height:4px;margin-top:22px;border-radius:9px;background:var(--gradient-primary)
}
#highlight>p:first-of-type{font-size:1.08rem;line-height:1.9;max-width:88ch}
#highlight>h2:nth-of-type(2){margin-top:48px;font-size:clamp(1.7rem,3.7vw,2.6rem)}
.profile-header{
  align-items:center;padding:clamp(20px,4vw,36px);border-radius:22px;
  background:linear-gradient(120deg,var(--accent-soft),transparent 65%),var(--card);
  border:1px solid var(--line);
}
.profile-picture{width:112px;height:112px;border:3px solid var(--accent);box-shadow:0 0 0 8px var(--accent-soft),0 14px 35px rgba(0,0,0,.25)}
.header-text h1{font-size:clamp(2rem,4vw,3rem);letter-spacing:-.075em}
.header-text p{font-size:1rem;letter-spacing:.01em}
.advertisement{
  padding:clamp(26px,5vw,48px);border-radius:22px;
  background:radial-gradient(circle at 12% 0%,var(--accent-soft),transparent 38%),var(--gradient-ad);
}
.advertisement h1{font-size:clamp(2rem,5vw,3.2rem);letter-spacing:-.07em}
.opportunity{border-radius:8px;padding:8px 13px}
.email-link{border-radius:8px;letter-spacing:.02em}
.publication-item,.timeline-content,.research-area-item{
  border-radius:13px;padding:17px 19px;background:var(--card);
}
.publication-item .citation{font-size:1rem}
.course-grid,.outreach-grid{gap:17px}
.course-card,.outreach-card{border-radius:17px;padding:23px}
.course-card h4{font-size:1.15rem}
.course-card:before{
  content:"";display:block;width:36px;height:3px;margin-bottom:15px;
  background:var(--gradient-primary);border-radius:5px;
}
.outreach-card{border-top-width:2px}
.playground-container{border-radius:18px;box-shadow:0 24px 65px rgba(0,0,0,.25)}
.password-prompt-container{border-radius:20px}
.table-responsive{border-radius:13px}
th{font-size:.82rem;letter-spacing:.02em;text-transform:uppercase}
td{font-size:.9rem}
a{transition:color .2s ease}
button{transition:transform .18s ease,border-color .18s ease,background .18s ease}
button:hover{filter:brightness(1.06)}
@media(max-width:800px){
  .main-header{top:5px;margin:5px auto 18px}
  .site-title-header{gap:12px}
  .container{width:94%}
  #highlight>img:first-child{aspect-ratio:1.7/1;border-radius:16px}
}
@media(max-width:520px){
  body{font-size:14.5px}
  .site-title-header .title{font-size:1.35rem}
  .site-title-header{padding:12px}
  .section{padding:18px;border-radius:15px}
  #highlight>h2:first-of-type{font-size:2.05rem}
  #highlight>p:first-of-type{font-size:1rem}
  .profile-header{padding:22px 16px}
}


/* Compact editorial typography: clearer hierarchy, quieter metadata */
:root{--font-body:"DM Sans",system-ui,sans-serif;--font-display:"Sora","Space Grotesk",sans-serif}
body{font-family:var(--font-body);font-size:14px;line-height:1.68;letter-spacing:-.012em}
h1,h2,h3,h4,.title,.site-title-header .title{font-family:var(--font-display);letter-spacing:-.045em;line-height:1.16}
h1{font-size:clamp(1.8rem,3.4vw,2.65rem)}
h2{font-size:clamp(1.35rem,2.3vw,1.9rem)}
h3{font-size:1.08rem}
h4{font-size:.96rem}
p{font-size:.91rem;line-height:1.7}
li{font-size:.9rem;line-height:1.65}
.section{padding:clamp(17px,2.4vw,27px)}
.container{max-width:1120px}
.site-title-header .title{font-size:1.45rem}
.nav-link{font-size:.76rem;letter-spacing:.015em}
.theme-toggle-btn,.theme-opt{font-size:.75rem}
.publication-item,.timeline-content,.research-area-item,.course-card,.outreach-card{font-size:.88rem}
.publication-item p,.timeline-content p,.research-area-item p,.course-card p,.outreach-card p,
.citation,.semester-tag,.course-code,.profile-header .subtitle,.muted,.meta,.metadata,
small,figcaption,.caption,.date,.tagline,.section-subtitle,.eyebrow{
  color:var(--soft);font-size:.76rem;line-height:1.55;letter-spacing:.005em
}
.citation,.course-code,.semester-tag,.date,.eyebrow{font-family:"IBM Plex Mono",monospace;font-size:.68rem;letter-spacing:.035em}
th{font-size:.72rem}td{font-size:.82rem}
button{font-size:.82rem}
.install-app-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:36px;padding:0 12px;border:1px solid var(--border-highlight);border-radius:999px;background:linear-gradient(120deg,var(--accent-soft),transparent);color:var(--text);font:600 .75rem var(--font-body);cursor:pointer;white-space:nowrap;transition:transform .2s,border-color .2s,background .2s}
.install-app-btn span:first-child{font-size:1rem;color:var(--accent)}
.install-app-btn:hover{transform:translateY(-2px);border-color:var(--accent);background:var(--accent-soft)}
.install-app-btn[hidden]{display:none!important}
@media(max-width:800px){body{font-size:13.5px}.install-app-btn{min-height:34px;padding:0 10px}.install-label{display:none}.site-title-header .title{font-size:1.25rem}}
@media(max-width:520px){p,li{font-size:.86rem}.section{padding:15px}.install-app-btn{width:34px;padding:0}.site-title-header{gap:8px}}

    
/* Responsive alignment and layout refinements */
html { scroll-padding-top: 155px; }
body { overflow-wrap: anywhere; }
.main-header { width: min(1220px, calc(100% - 32px)); }
.site-title-header {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 14px;
}
.top-nav-links { justify-content: center; flex-wrap: wrap; min-width: 0; }
.theme-switcher-wrapper, .install-app-btn { justify-self: end; }
.navbar { justify-content: center; min-width: 0; }
.nav-links { flex-wrap: nowrap; }
.container { width: min(1120px, calc(100% - 40px)); }
#highlight { text-align: left; }
#highlight > img:first-child {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 21 / 9;
  object-fit: cover;
  margin: 0 0 clamp(22px, 3vw, 34px) !important;
}
#highlight > h2,
#highlight > p,
#highlight > ul,
#highlight > .section { width: 100%; }
#highlight > h2 { text-align: left; }
#highlight > p,
#highlight > ul { max-width: 92ch; }
#highlight > p { margin: 0 0 17px; line-height: 1.78; }
#highlight > ul { margin: 0 0 20px; padding: 0; }
#highlight > ul > li {
  padding-left: 21px;
  margin: 0 0 12px;
  line-height: 1.72;
  text-align: left;
}
#highlight .section { text-align: left; }
#highlight .section p,
#highlight .section ul { max-width: 92ch; }
#highlight .advertisement { text-align: center; }
#highlight .advertisement p { margin-left: auto; margin-right: auto; }
#highlight .opportunities { justify-content: center; }
#highlight .call-to-action { text-align: center; }
#highlight .call-to-action h2 { text-align: center; }
.install-app-btn { flex-shrink: 0; min-width: 42px; }
.install-app-btn .install-label { display: inline; }
#install-status {
  display: none;
  margin: 8px 0 0;
  padding: 10px 13px;
  border: 1px solid var(--border-highlight);
  border-radius: 10px;
  background: var(--bg-surface);
  color: var(--text-secondary);
  font-size: .84rem;
  line-height: 1.55;
}
#install-status.show { display: block; }
@media (max-width: 900px) {
  .site-title-header {
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 10px;
  }
  .top-nav-links { grid-column: 1 / -1; grid-row: 2; }
  .theme-switcher-wrapper { grid-column: 2; grid-row: 1; }
  .install-app-btn { grid-column: 3; grid-row: 1; }
  .site-title-header .title { grid-column: 1; grid-row: 1; }
  .navbar { justify-content: flex-start; }
  .nav-links { justify-content: flex-start; }
  .container { width: min(100% - 30px, 1120px); }
}
@media (max-width: 600px) {
  html { scroll-padding-top: 185px; }
  .main-header { width: calc(100% - 16px); top: 4px; margin: 4px auto 15px; }
  .site-title-header { padding: 10px; gap: 8px; }
  .site-title-header .title { font-size: 1.15rem; }
  .site-title-header .title:before { width: 21px; height: 21px; border-radius: 7px; }
  .top-nav-links { gap: 2px; }
  .top-nav-links a { padding: 6px 8px; font-size: .75rem; }
  .theme-toggle-btn { padding: 7px 8px; gap: 5px; font-size: .72rem; }
  .install-app-btn { width: auto; min-width: 38px; min-height: 36px; padding: 0 10px; }
  .install-app-btn .install-label { display: inline; }
  .navbar { padding: 6px 8px; }
  .nav-links a { padding: 7px 9px; font-size: .75rem; }
  .container { width: calc(100% - 24px); margin-bottom: 45px; }
  #highlight > img:first-child { aspect-ratio: 16 / 9; border-radius: 13px; }
  #highlight > h2:first-of-type { font-size: clamp(1.8rem, 8vw, 2.35rem); }
  #highlight > p { font-size: .91rem; line-height: 1.72; }
  #highlight > ul > li { font-size: .88rem; line-height: 1.65; }
  #highlight .section { padding: 16px; }
  .section { min-width: 0; }
  .course-grid, .outreach-grid { grid-template-columns: minmax(0, 1fr); }
  .playground-container { min-height: 300px; }
}
@media (max-width: 380px) {
  .site-title-header { grid-template-columns: minmax(0, 1fr) auto auto; }
  .site-title-header .title { font-size: 1.02rem; }
  #theme-toggle-text { display: none; }
  .install-app-btn .install-label { display: none; }
  .top-nav-links a { padding-inline: 6px; font-size: .7rem; }
}
@media (prefers-reduced-motion: reduce) {
  .page-content { animation: none; }
}

    </style>
</head>
<body>

    <!-- MAIN HEADER -->
    <header class="main-header">
        <!-- Top Row: Title, Main Nav Buttons, and Theme Switcher Button -->
        <div class="site-title-header">
            <div class="title">Physics+AI</div>
            <ul class="top-nav-links">
                <li><a href="#research" class="nav-link">Research</a></li>
                <li><a href="#publication" class="nav-link">Publication</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
            </ul>

            <!-- Multi-Theme Dropdown Switcher -->
            <div class="theme-switcher-wrapper">
                <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Theme">
                    <span id="theme-toggle-icon">🌌</span>
                    <span id="theme-toggle-text">Quantum</span>
                    <span class="theme-dropdown-arrow">▾</span>
                </button>
                <div class="theme-dropdown-menu" id="theme-menu">
                    <button class="theme-opt active" data-theme-val="quantum">
                        <span class="theme-opt-dot" style="background: linear-gradient(135deg, #00f2fe, #8b5cf6);"></span>
                        <span>Quantum Glow</span>
                    </button>
                    <button class="theme-opt" data-theme-val="aurora">
                        <span class="theme-opt-dot" style="background: linear-gradient(135deg, #10b981, #06b6d4);"></span>
                        <span>Aurora Emerald</span>
                    </button>
                    <button class="theme-opt" data-theme-val="solar">
                        <span class="theme-opt-dot" style="background: linear-gradient(135deg, #f43f5e, #fb923c);"></span>
                        <span>Solar Flare</span>
                    </button>
                    <button class="theme-opt" data-theme-val="obsidian">
                        <span class="theme-opt-dot" style="background: linear-gradient(135deg, #ffffff, #64748b);"></span>
                        <span>Obsidian Monolith</span>
                    </button>
                    <button class="theme-opt" data-theme-val="opal">
                        <span class="theme-opt-dot" style="background: linear-gradient(135deg, #0284c7, #6366f1);"></span>
                        <span>Opal Daylight</span>
                    </button>
                </div>
            </div>
            <button class="install-app-btn" id="install-app" type="button" aria-label="Install this website" title="Install this website">
                <span aria-hidden="true">↓</span><span class="install-label">Install</span>
            </button>
        </div>

        <!-- Bottom Row: Other Navigation Links -->
        <nav class="navbar">
            <ul class="nav-links">
                <li><a href="#highlight" class="nav-link active">Home</a></li>
                <li><a href="#teaching" class="nav-link">Teaching</a></li>
                <li><a href="#outreach" class="nav-link">Outreach</a></li>
                <li><a href="#latest" class="nav-link">Latest</a></li>
                <li><a href="#classroom" class="nav-link">Live Class Room</a></li>
                <li><a href="#products" class="nav-link">Lab Products</a></li>
                <li><a href="#misc" class="nav-link">Misc</a></li>
                <li><a href="#playground" class="nav-link">Playground</a></li>
            </ul>
        </nav>
    </header>

    <div class="container">
        <!-- 1. Highlight Page -->
        <div id="highlight" class="page-content active">
            <img src="cover1.png" alt="Highlight cover image" style="width: 100%; aspect-ratio: 21 / 9; object-fit: cover; margin-bottom: 20px; border-radius: 14px; border: 1px solid var(--border-glow);">
           
            <h2>Lab 360° | The Nexus of Data-driven Creativity</h2>
<p>Welcome to <b>Lab 360°</b>—a crucible of innovation where abstract contemplation is transmuted into purposeful action, and action into world-shaping realities. Embracing an omnidirectional perspective, we traverse the physical continuum from the quantum choreography of molecular assemblies to the subterranean fury of seismic faults, and from automated kinematic systems to predictive climate modeling. We are driven by a relentless thirst for data-fueled discovery, translating high-dimensional entropy into elegant mathematical models that power next-generation healthcare, molecular intelligence, and sustainable societal enterprise.</p>
<ul>
    <li><b>Omnidirectional Data Exploration:</b> Dissolving conventional academic silos, our researchers synthesize insights across disparate domains—from the precision mechanics of athletic motion to continental-scale environmental rhythms—extracting harmony from complex data streams.</li>
    <li><b>Molecular Intelligence & Clinical Horizons:</b> Orchestrating deep learning with biophysical intuition, we decode the architecture of macromolecular interactions, catalyzing breakthroughs in targeted therapeutics and precision diagnostics.</li>
    <li><b>Planetary Dynamics & Structural Resilience:</b> Fusing fundamental physics with machine intelligence to anticipate catastrophic structural shifts and geodynamic hazards, fortifying communities against nature’s most extreme events.</li>
    <li><b>Deep Tech for Humanitarian Enterprise:</b> We treat discovery not merely as an intellectual pursuit, but as a moral imperative—incubating agile, socially conscious ventures that transform laboratory breakthroughs into enduring global value.</li>
</ul>
<p>Though we are new, Lab 360° is guided by an ambitious mandate: to empower a cadre of forward-looking thinkers equipped to craft the technological paradigms of tomorrow.</p>

<h2>Lab 360° has a heart of Physics</h2>
<p>Positioned at the luminous crossroads of non-equilibrium physics and machine intelligence, we uncover the universal principles that govern intricate, multi-scale systems. We approach artificial intelligence not merely as an engine for empirical prediction, but as an epistemic prism—a tool to reveal the latent mathematical harmonies of the cosmos. Our central research thrusts comprise:</p>
<ul>
    <li><b>Collective Intelligence in Natural and Synthetic Swarms:</b> How do autonomous entities—from avian murmurations and cellular monolayers to coordinated robotic swarms—manifest collective genius from minimal local rules? We investigate the physical principles of emergence to engineer resilient, self-organizing synthetic systems.</li>
    <li><b>Physics of Living Matter & Morphogenesis:</b> Viewing biological assemblies through the lens of active matter, we illuminate the biomechanical forces orchestrating tissue repair, pattern formation, and embryonic growth, charting new possibilities for regenerative bioengineering.</li>
    <li><b>Mechanics of Disordered & Amorphous Solids:</b> Defying crystalline predictability, glasses and granular media conceal subtle preludes to catastrophic failure. We develop physics-informed algorithms capable of detecting the structural precursors to rupture, pioneering the design of ultra-durable, damage-tolerant materials.</li>
    <li><b>Interpretable Machine Intelligence for Fundamental Discovery:</b> Transcending opaque black-box models, our neural architectures are sculpted to distill sparse, transparent governing equations directly from raw observation, revealing fundamental physical laws that ignite bold scientific hypotheses.</li>
</ul>
<p>Flourishing at the vibrant intersection of theoretical elegance and experimental craftsmanship, we cultivate an intellectual commons where fearless curiosity gives rise to enduring innovation.</p>

            <div class="section">
                <h3>🌟 Highlights</h3>
                <ul>
                    <li><strong>Research Interests:</strong> Investigating the dynamics of natural and artificial complex systems, with a focus on out-of-equilibrium soft, glassy, and active matter.</li>
                    <li><strong>Physics at the Interface of AI:</strong> By training models from physical systems, we integrate fundamental physical laws into novel AI models. This involves using high-performance computing and explainable AI to decode molecular information processing, predict material failure, and attempts to understand emergent behaviors in living and artificial systems.</li>
                    <li><strong>Teaching and Mentoring:</strong> Engaged in teaching courses such as Mathematics for AI and Intelligent Systems, and mentoring research interns and graduate students.</li>
                </ul>
            </div>

            <div class="section">
                <h2>🌟 Join Us </h2>
                <div class="advertisement">
                    <h1>Join Us to Innovate</h1>
                    <p> We are seeking creative individuals to join our lab to co-create the future.</p>
           
                    <p>Whether you are an established researcher, a budding scientist, or a creative force eager to collaborate, we have a place for you. We are actively seeking passionate individuals for:</p>
           
                    <div class="opportunities">
                        <div class="opportunity">Collaborative Projects</div>
                        <div class="opportunity">Internship Opportunities</div>
                        <div class="opportunity">PhD Positions</div>
                        <div class="opportunity">Postdoctoral Fellowships</div>
                    </div>
           
                    <p>Find your chance to work on projects that matter, surrounded by a team to pushing the boundaries of what's possible. We believe in the power of diversity and the magic that happens when generative minds connect.</p>
           
                    <div class="call-to-action">
                        <h2 style="justify-content: center; border: none;">Ready to answer the call?</h2>
                        <p>We want to hear from you: your vision and plans with us.<br>Email your one-page CV, a well supported SOP</p>
                        <a href="mailto:sumandutta.avvcb@gmail.com" class="email-link">Submit</a>
                    </div>
           
                    <p style="margin-top: 25px; font-style: italic; font-size: 0.9em;">Let's build the future together.</p>
                </div>
                <img src="joinus.png" alt="Join Us Graphic" style="width: 100%; margin-top: 15px; border-radius: 12px; border: 1px solid var(--border-glow);">
            </div>
        </div>

        <!-- 2. Research Page -->
        <div id="research" class="page-content">
            <h2>🔬 Research Interests & Competencies</h2>
            <div class="section">
                <h3>Research Expertise</h3>
                <ul>
                    <li><strong>Domain Expertise:</strong> Collective Intelligence in Living and Artificial Systems, Physics of Complex Fluids, Soft Condensed Matter. </li>
                    <li><strong>Core Competencies:</strong> Creative Research, Out-of-Equilibrium Statistical Physics, Machine Learning Order Disorder.</li>
                </ul>
            </div>
            <div class="research-gifs" style="display: flex; gap: 15px; width: 100%; aspect-ratio: 32 / 9; overflow: hidden; margin-bottom: 20px;">
                <img src="cavitation.gif" alt="First highlight cover image" style="width: 50%; height: 100%; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glow);">
                <img src="mips.gif" alt="Second highlight cover image" style="width: 50%; height: 100%; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glow);">
            </div>
            <div class="section">
                <h3>Key Research Areas</h3>
                <ul>
                    <li class="research-area-item"><strong>Soft, Glassy, Active & Adaptable Matter</strong></li>
                    <li class="research-area-item"><strong>Physics of Flow, Glass & Living Machines</strong></li>
                    <li class="research-area-item"><strong>Material Failure and Molecular Information Processing</strong></li>
                    <li class="research-area-item"><strong>Mechanobiology, Catastrophe Science, Emergent Intelligence</strong></li>
                </ul>
            </div>
            <div class="section">
                <h3>Extensive Experience in</h3>
                <ul>
                    <li>Soft Condensed Matter</li>
                    <li>High Performance Computing (Molecular Simulations)</li>
                </ul>
            </div>
            <div class="section">
                <h3>Research within the Group</h3>
                <p>We perform extensive computer simulations, harnessing the power of High-Performance Computing (HPC), alongside statistical methods. Our aim is to develop and deploy data-driven yet inherently explainable techniques. These methods are meticulously designed to systematically investigate the intricate complex processes that drive autonomous organization and the phenomena of failure in both living and artificial systems. Our approach bridges the gap between complex data analysis and fundamental scientific understanding, ensuring our findings are not only predictive but also interpretable.</p>
                <p>Our research endeavors delve into several key directions, offering a comprehensive exploration of complex systems:</p>
                <ul>
                    <li><strong>Molecular Information Processing:</strong> We meticulously decode how molecular systems store, manipulate, and relay information. This involves unraveling the fundamental principles that govern adaptive behaviors observed in both natural biological networks and synthetic molecular constructs. By understanding these intricate mechanisms, we aim to engineer more sophisticated and responsive artificial systems.</li>
                    <li><strong>Cellular Migration and Turbulence:</strong> We investigate the often chaotic and dynamic patterns exhibited by migrating cells. This research focuses on understanding their collective dynamics during critical biological processes such as tissue formation, repair, and in cases of failure. By analyzing these complex movements, we gain insights into emergent behaviors and the underlying physical constraints.</li>
                    <li><strong>Failure and Jamming of Amorphous Systems:</strong> A significant area of our work explores the transitions of disordered materials between fluid-like and rigid states. We aim to develop predictive models that can accurately forecast their resilience, pinpoint critical points of failure, and understand the jamming phenomena that can lead to material collapse.</li>
                    <li><strong>Predicting Vulnerability and Avalanches:</strong> We develop models that capture the dynamics of critical cascades—phenomena ranging from natural avalanches to the interconnectedness of economic societies. Our goal is to forecast the likelihood and potential impact of systemic failures, thereby enabling proactive mitigation strategies.</li>
                    <li><strong>Autonomous and Critical Phenomena in Living and Artificial Systems:</strong> We are deeply interested in the emergence of self-organized behaviors in systems poised at critical thresholds. By studying these systems, we aim to uncover the delicate balance between stability and adaptability, and how these seemingly opposing forces coexist to drive complex system evolution.</li>
                    <li><strong>Generative Physical Intelligence:</strong> We are pioneering the development of novel generative models that are deeply integrated with the fundamental laws of physics. This research aims to create AI systems capable of not only predicting but also generating physically plausible dynamics and structures. By teaching models the principles of statistical mechanics and emergent phenomena, we seek to build intelligent agents that can autonomously discover new materials, understand system failures, and generate innovative solutions to a complex physical challenges.</li>
                </ul>
            </div>
        </div>

        <!-- Publication Page -->
        <div id="publication" class="page-content">
            <h2>📚 Publications</h2>
            <div class="section">
                <h3>2026</h3>
                <div class="publication-item">
                    <p class="citation">V. Vaibhav, T. Das & <u>S. Dutta</u>*, <em>Persistently Non-Gaussian Metastable Liquids</em>, Ann. Phys. (Berlin) 538 (4), e00247(2026) [<a href="https://onlinelibrary.wiley.com/doi/pdf/10.1002/andp.202500247" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Corresponding author</u></p>
                </div>
                <h3>2025</h3>
                <div class="publication-item">
                    <p class="citation">S. Santra, L. Touzo, C. Dasgupta, A. Dhar, <u>S. Dutta</u>, A. Kundu, P. Le Doussal, G. Schehr & P. Singh, <em>Crystal to liquid cross-over in the active Calogero-Moser model</em>, J. Stat. Mech. 033203 (2025) [<a href="https://iopscience.iop.org/article/10.1088/1742-5468/adbb5d" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Contributing author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>*, P. Chaudhuri, M. Rao & C. Dasgupta, <em>Activity-driven sorting, approach to criticality and turbulent flows in dense persistent active fluids</em>, arXiv:2509.00376 (2025) [<a href="https://arxiv.org/abs/2509.00376" target="_blank" rel="noopener noreferrer">LINK</a>] </p>
                    <p><strong>Contribution:</strong> <u>First and Corresponding author</u></p>
                </div>
               
                <h3>2024</h3>
                <div class="publication-item">
                    <p class="citation">V. Vaibhav & <u>S. Dutta</u>*, <em>Entropic timescales of Dynamic Heterogeneity in Supercooled Liquid</em>, Phys. Rev. E (Lett.), <strong>109</strong>, L062102 (2024) [<a href="https://journals.aps.org/pre/abstract/10.1103/PhysRevE.109.L062102" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Corresponding author</u></p>
                </div>

                <h3>2023</h3>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>, K. Martens & P. Chaudhuri, <em>Creep response of athermal amorphous solids under imposed shear stress</em>, arXiv:2303.04718 (2023) [<a href="https://arxiv.org/abs/2303.04718" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First author</u></p>
                </div>
               
                <h3>2021</h3>
                <div class="publication-item">
                    <p class="citation">C. Liu, <u>S. Dutta</u>, P. Chaudhuri & K. Martens, <em>Elastoplastic approach based on microscopic insights for the steady state and transient dynamics of sheared disordered solids</em>, Phys. Rev. Lett., <strong>126</strong>, 138005 (2021) [<a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.126.138005" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Joint first author</u></p>
                </div>

                <h3>2020</h3>
                <div class="publication-item">
                    <p class="citation">R. Dandekar, S. Bose & <u>S. Dutta</u>*, <em>Non-Gaussian information of heterogeneity in soft matter</em>, Europhys. Lett., <strong>131</strong>, 18002 (2020) [<a href="https://iopscience.iop.org/article/10.1209/0295-5075/131/18002/meta" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Corresponding author</u></p>
                </div>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>* & J. Chakrabarti, <em>Length-scales of dynamic heterogeneity in a driven binary colloid</em>, Phys. Chem. Chem. Phys., <strong>22</strong>, 17731 (2020) [<a href="https://pubs.rsc.org/en/content/articlelanding/2020/cp/d0cp02703k/unauth" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First and Corresponding author</u></p>
                </div>

                <h3>2019</h3>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>*, <em>Microscopic insights into dynamical heterogeneity in a lane forming colloid</em>, Chem. Phys., <strong>522</strong>, 256 (2019) [<a href="https://www.sciencedirect.com/science/article/pii/S0301010418311510" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Solo author</u></p>
                </div>

                <h3>2018</h3>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>* & J. Chakrabarti, <em>Transient dynamical responses of a charged binary colloid in an electric field</em>, Soft Matter, <strong>14</strong>, 4477 (2018) [<a href="https://pubs.rsc.org/en/content/articlehtml/2018/sm/c7sm02552a" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First and Corresponding author</u></p>
                </div>

                <h3>2016</h3>
                <div class="publication-item">
                    <p class="citation"><u>S. Dutta</u>* & J. Chakrabarti, <em>Anomalous dynamical responses in a driven system</em>, Europhys. Lett., <strong>116</strong>, 38001 (2016) [<a href="https://iopscience.iop.org/article/10.1209/0295-5075/116/38001/meta" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>First author</u></p>
                </div>

                <h3>2015</h3>
                <div class="publication-item">
                    <p class="citation">J. Chakrabarti & <u>S. Dutta</u>, <em>Analytical form of forces in hydrophobic collapse</em>, Chem. Phys. Lett., 620, <strong>109</strong> (2015) [<a href="https://www.sciencedirect.com/science/article/pii/S0009261414010483" target="_blank" rel="noopener noreferrer">LINK</a>]</p>
                    <p><strong>Contribution:</strong> <u>Second author</u></p>
                </div>
            </div>
        </div>

        <!-- 3. Teaching Page -->
        <div id="teaching" class="page-content">
            <h2>💡 Teaching & Mentoring</h2>
            <div class="section">
                <h3>Glimpses</h3>
                <p>Moments from My Classes</p>
                <div class="playground-container">
                    <iframe src="slideshow.html" frameborder="0"></iframe>
                </div>
            </div>
           
            <!-- TEACHING DASHBOARD -->
            <div id="teaching-dashboard">
                <p style="text-align: center; margin-bottom: 20px; font-size: 1.05em; color: var(--text-secondary);">
                    Explore our academic engagements, mentoring programs, and pedagogical philosophy.
                </p>

                <div class="course-grid">
                    <!-- Card 1: Academic Courses -->
                    <div class="course-card" onclick="openTeachingSection('teaching-courses')">
                        <div>
                            <h4>👨‍🏫 Academic Courses</h4>
                            <p><strong>Focus:</strong> AI, Mathematics & Material Science</p>
                            <p>Courses delivered at Amrita Vishwa Vidyapeetham and S. N. Bose National Centre for Basic Sciences.</p>
                            <ul style="margin-top:10px; font-size: 0.9em; color: var(--text-secondary);">
                                <li>Mathematics for Intelligent Systems-III (23MAT204)</li>
                                <li>Introduction to Material Informatics (23CHY115)</li>
                                <li>Mathematics for Intelligent Systems-I (23MAT106)</li>
                                <li>Research Methodology (PHY501)</li>
                            </ul>
                        </div>
                        <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan); font-weight: bold;">
                            View Course List &rarr;
                        </div>
                    </div>

                    <!-- Card 2: Mentoring -->
                    <div class="course-card" onclick="openTeachingSection('teaching-mentoring')">
                        <div>
                            <h4>🤝 Mentoring & Supervision</h4>
                            <p><strong>Role:</strong> Advisor & Co-Supervisor</p>
                            <p>Guiding research interns, Masters thesis students, and student collaborators.</p>
                            <div style="margin-top:10px;">
                                <span class="semester-tag">Interns</span>
                                <span class="semester-tag">Thesis</span>
                            </div>
                        </div>
                        <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan); font-weight: bold;">
                            View Student Profiles &rarr;
                        </div>
                    </div>

                    <!-- Card 3: Philosophy -->
                    <div class="course-card" onclick="openTeachingSection('teaching-philosophy')">
                        <div>
                            <h4>🧠 Teaching Philosophy</h4>
                            <p><strong>Approach:</strong> Interactive & Generative</p>
                            <p>Believing in "Learning by Doing" and bridging the gap between theoretical Physics and applied AI.</p>
                        </div>
                        <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan); font-weight: bold;">
                            Read Methodology &rarr;
                        </div>
                    </div>
                </div>
            </div>

            <!-- DETAILED VIEW: ACADEMIC COURSES -->
            <div id="teaching-courses" class="teaching-detail-view">
                <button class="back-btn" onclick="closeTeachingSection()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Back to Dashboard
                </button>
                <div class="section">
                    <h3>Courses Taught</h3>
                    <div class="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Code</th>
                                    <th>Credit</th>
                                    <th>Hrs/Week</th>
                                    <th>Session</th>
                                    <th>Students</th>
                                    <th>TLP-Feedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mathematics for Intelligent System - III (B.Tech in AI & Data Science, Semester-III)</td>
                                    <td>3+3</td>
                                    <td>4+4</td>
                                    <td>2026-27 Odd</td>
                                    <td>65+66</td>
                                    <td>Ongoing</td>
                                </tr>
                                <tr>
                                    <td>Introduction to Material Informatics (B.Tech in AI & Data Science, Semester-II)</td>
                                    <td>3+3</td>
                                    <td>4+4</td>
                                    <td>2025-26 Even</td>
                                    <td>64+65</td>
                                    <td>92.92%</td>
                                </tr>
                                <tr>
                                    <td>Mathematics for Intelligent System - I (B.Tech in AI & Data Science, Semester-I)</td>
                                    <td>4+4</td>
                                    <td>5+5</td>
                                    <td>2025-26 Odd</td>
                                    <td>65+66</td>
                                    <td>93.11%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- DETAILED VIEW: MENTORING -->
            <div id="teaching-mentoring" class="teaching-detail-view">
                <button class="back-btn" onclick="closeTeachingSection()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Back to Dashboard
                </button>
                <div class="section">
                    <h3>Research Supervision</h3>
                    <div class="research-area-item">
                        <strong>Research Interns</strong>
                        <p>A. Jagdish, School of Physical Sciences, Amrita Vishwa Vidyapeetham (06/2025 onwards)</p>
                    </div>
                    <div class="research-area-item">
                        <strong>Student Collaborators</strong>
                        <p>A. Harish, Department of Mathematics, Amrita Vishwa Vidyapeetham (06/2025 onwards)</p>
                        <p>A. Venkatraman, Department of Mathematics, Amrita Vishwa Vidyapeetham (06/2025 onwards)</p>
                        <p>P. S. Mrudula, Department of AI, Amrita Vishwa Vidyapeetham (11/2025 onwards)</p>
                    </div>
                    <div class="research-area-item">
                        <strong>Masters Thesis Co-supervision</strong>
                        <p>Magnus Olsen, <em>Understanding Non-Newtonian Materials</em> <br> (Supervisor: R. Cabriolu, Norwegian University of Science and Technology, since 08/2025)</p>
                    </div>
                    <div class="research-area-item">
                        <strong>Supervision: Topical Projects</strong>
                        <div class="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Subject Code</th>
                                        <th>Names</th>
                                        <th>Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- 23CHY115 Projects -->
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Adithya R, Ashwin Krishna V, Madhan S, Nawin K.G</td>
                                        <td>Prediction of Molecular Solubility</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Mahalakshmi R, Venugopalan G, Ram Eswar P, Selva Vignesh V</td>
                                        <td>Semantic RAG with Specialized Embeddings</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>A. Shashank Royal, M. Dinesh Kumar, M. Sujan, K. Aravind Guptha</td>
                                        <td>Bio-Match: Implant Material Recommender</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>P. Manvith, M. Venkat Naidu, S. Manoj Chowdary, B. Nakul</td>
                                        <td>Earthquake Probability & Early Warning Analysis</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Rithvik, Venkat, Abhishek, Grishmanth</td>
                                        <td>Forecasting Stress-Strain with Koopman</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Rithvik Arulprakash, Harshith K. V, Vijayamurughan S, Vipin Sudhakar</td>
                                        <td>AI-Driven Dynamics in Active Glass</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Suthasrinitha K.G, Asmitha T, Moushika S, Mirudhunya V</td>
                                        <td>Governing Equations of Chaotic Systems</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>J. Harini, A. Harsha Sree, B. Pavani, P. Prasad</td>
                                        <td>Identifying Metastable States with HAVOK</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>B. Lalith, K. Swami, M. Pranavi, N. Manoj</td>
                                        <td>The Sandpile Model (BTW)</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>N.V. Varshitha, A. Jahnavi, T. Varshini, B. Sai Prasanna</td>
                                        <td>Polymer Property Prediction Simulator</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>V.R. Yasswant, Abishek S, Y. Sanmukha Sai, U. Sudheer</td>
                                        <td>Convex Hull for Alloy</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Hari Priya, Maha Sri, Neha, Prathibaa</td>
                                        <td>SINDy - Discovering Physics from Data</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Moorthy Neeraj, Mortha Sathwik, Surya Charan Teja, Pavan Kalyan S.V, Dhanush</td>
                                        <td>Lennard-Jones System for Glass Formation</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Sharvesh S. P, B. gurucharan, P. A. Bhavesh Jayan, Hashwin M</td>
                                        <td>The Butterfly Paradox: Chaos in MD</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>T.V.S.S Phanindra Guptha, Athul V.R, Nanda Kishore, M. Vittal</td>
                                        <td>Ocean Waves Dynamics</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>B. Sharmitha, H. Bala Sri Siva Sai Surya Tej, V. Mouli Sri, K. Bhanu Prakash</td>
                                        <td>AI-Based Material Recommendation System</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>D. Durga Prasad Reddy, Mukesh Reddy, G. Yaswanth Reddy, K. Praneeth, Jasmitha</td>
                                        <td>Failure Prediction in Amorphous Solids</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>S. Sujitkumar, M. Hemanthkumar, H. Abinavkumaran, P.V. RithikRaj</td>
                                        <td>Molecular Phase Dynamics using Koopman DMD</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Kirithik B, Sankardas K.K, V. Amruth, Vishnu Prasad P</td>
                                        <td>Discontinuous Molecular Dynamics</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Adharsh K, Anu R, Sidharth M, Vethavarsini A</td>
                                        <td>Rare Event Acceleration with Koopman-GNN</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Akshara Sree R, Anirudh S Nair, Iniyaa Muthuselvan, Shashank Kannan</td>
                                        <td>The Battery Oracle</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Harish Kumaar S, S. Sri Raghav Vatsan, Dhruv Jayesh, Prithve KC</td>
                                        <td>Predicting Swarm Dynamics</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Kanish Visyanth C, Kavipranidan J.T, Navaneet K.V, Nethaaji S</td>
                                        <td>Radiation Damage Prediction</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Revanth S, G Kamalesh, Jaswanth S, Elango Megabala G</td>
                                        <td>Graph Neural Networks for Molecules</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>K. Gayathri, P. Sri Harshini, M. Deekshitha, A. Gnana Amrutha</td>
                                        <td>AI-Based Inverse Material Selector</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Rohith Meka, Kode Karrthik, Naram Divya Akhil, T. Yashwant</td>
                                        <td>Microstructure Evolution Prediction</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Meenakshi Bijoy, Neelanjana J Anil, Aryananda M, Ghadige Rithika</td>
                                        <td>Learning Swarm Behaviour</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>U. Raghu Nandan, S. Akshaya, Nikitha, Likhit K</td>
                                        <td>De-noising MD Data via Hankel SVD</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>M. Harsha, M. Anudeep Reddy, P. Nihal Reddy, P. Naren</td>
                                        <td>Bayesian Optimization for Alloy Design</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>C. Sai Hardhik Reddy, R. Gagan Chowdhury, K. Charan Saatvikh Reddy, T. Sri Sai</td>
                                        <td>Deformation in Copper Crystals</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Srikar, Sumanth, Sai Sushanth, Sai Sathwik</td>
                                        <td>Perovskite Solar Cells</td>
                                    </tr>
                                    <tr>
                                        <td>23CHY115</td>
                                        <td>Neha Saravanan, Y. Pranavi Reddy, T. Sai Varshitha</td>
                                        <td>Predicting Particle Mobility in Active Matter</td>
                                    </tr>

                                    <!-- 23MAT106 Projects -->
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Adithya R, Sai Prasanna B, Anudeep Reddy</td>
                                        <td>Stochastic Gradient Descent-Image Brightness Optimizer</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Abisheik S, Ashwin Krishna V, Nakul Sharvan B, Nawin K.G</td>
                                        <td>Interior Point Method for Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Raghuraman V, Vipin Sudhakar, Harshith KV, Rithvik Arul Prakash</td>
                                        <td>Optimization Using Sequential Quadratic Programming</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Harish Kumaar S, Prabakar, Venkat D, Prithve K C</td>
                                        <td>Minimizing 2-D Lennard-Jones System via Broyden’s Good Method</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>V R Yasswant, S. Sri Raghav Vatsan, Selva Vignesh V, Madhan S</td>
                                        <td>Augmented Lagrangian Method for Constrained Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>P. Manvith Sharma, P. Grishmanth, P. Naren, S. Manoj</td>
                                        <td>Broyden’s Bad Method for Energy Minimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>P. Sri Harshini, K. Gayathri, M. Deekshitha, Meenakshi Bijoy</td>
                                        <td>Movie Recommendation System</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>S Jaswant, Revanth S, Elango Megabala G, G Kamalesh</td>
                                        <td>Steepest Descent Algorithm</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Rohith Meka, Naram Divya Akhil, B. Sai Srikar, Danush Mani Yerramsetti</td>
                                        <td>Movie Recommendation Using SVD</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>P.S. Sathwik, V.S. Amruth Chowdary, Kirithik B, Sankar Das K.K</td>
                                        <td>Computational Search for Glassy States using Conjugate Gradient</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>SV Pavan Kalyan, Neeraj M, C. Jasmitha, S. Akshaya, G. Rithika</td>
                                        <td>Audio Compression using SVD</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>B. Sharmitha, H. Bala Sri Siva Sai Surya Tej, V. Mouli Sri, K. Bhanu Prakash</td>
                                        <td>Energy Minimization of 2D Particle System via L-BFGS</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Mortha Sathwik, Surya Charan Tej B, AryaNanda M, Neelanjana J Anil</td>
                                        <td>Computer Glassy States via Newton-Raphson Method</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>T.V.S.S Phanindra Guptha, M. Vittal, K. Nanda Kishore, Athul V.R</td>
                                        <td>Lennard-Jones Potential via Nelder-Mead</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Y. Pranavi Reddy, Neha Saravanan, T. Sai Varshitha Reddy, K.B Nikitha Krishna</td>
                                        <td>Optimization of Lennard-Jones via PSO</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Nethaaji S, Navaneet KV, Kavipranidan JT, Kanish Visyanth C</td>
                                        <td>Computer Glassy States through Simulated Annealing</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Prasad Reddy, Sai Praneeth, Mukesh Reddy, Yaswanth Reddy</td>
                                        <td>Adopted Basis Newton-Raphson Method</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Kode Karrthik, Kella Likhith, T. Yaswanth Sai Vedadri, U. Raghu Nandan</td>
                                        <td>Glassy States by Instantaneous Quench (FIRE Algorithm)</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>H. Abinavkumaran, S. Sujitkumar, M. Hemanthkumar, P.V. RithikRaj</td>
                                        <td>Stable Particle Arrangement via Barzilai-Borwein Method</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Vishnu Prasad, N Sai Sushanth Reddy, Hari Sumanth, Gnana Amrutha</td>
                                        <td>Glassy States via Instant Quenching</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>B. Lalith Hari Sainath Reddy, N. Manoj Kumar, P. Krishna Prasad, K. Swamy</td>
                                        <td>Powell’s Method for Energy Minimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Moushika S, Iniyaa Muthuselvan, Alamuru Harsha Sree, Akshara Sree R</td>
                                        <td>Levenberg-Marquardt Algorithm for Glass Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Suthasrinitha K G, Mirudhunya V, Asmitha T, Ram Eswar P</td>
                                        <td>RMS Propagation Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Pavani B, Maha Sri N, Neha S, Varshini T</td>
                                        <td>Basin Hopping Algorithm</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Ala Shashank Royal, M. Dinesh Kumar, M. Sujan, K. Aravind Guptha</td>
                                        <td>Smart Diet Planner</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>B. Lalith, N. Manoj Kumar, P. Krishna Prasad, K. Swamy</td>
                                        <td>Powell’s Method of Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>K. Charan Saatvikh Reddy, R. Gagan Chowdary, C. Sai Hardhik Reddy, M. Venkat Naidu</td>
                                        <td>Adagrad Optimization</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Dhruv Jayesh Kansagara, Nihal Reddy P, T. Sri Sai, Y. Sanmukha Sai</td>
                                        <td>BFGS with Trust Region</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>J. Harini, Prathibaa, Mahalakshmi</td>
                                        <td>Image Compression using SVD</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Aadharsh, Anu R, Sidharth M, Vethavarsini A</td>
                                        <td>Glassy States via Instantaneous Quench (TNM)</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>M. Dinesh Kumar, M. Sujan, K. Aravind Guptha, A. Sheshank Royal</td>
                                        <td>Smart Diet Planner (Revised)</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Madhan Senthil Kumar, Selva Vignesh V, S. Sri Raghav Vatsan, V.R. Yasswant</td>
                                        <td>Augmented Lagrangian Method (ALM)</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>B. Sai Prasanna Anjaneyulu, M. Annudeep Reddy, R. Adithya</td>
                                        <td>Image Enhancement Using SGD</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Mukesh Reddy, D. Durga Prasad Reddy, Yaswanth Reddy, K. Sai Praneeth</td>
                                        <td>Lennard-Jones via Adopted Basis Newton-Raphson</td>
                                    </tr>
                                    <tr>
                                        <td>23MAT106</td>
                                        <td>Anirudh S Nair, Shashank Kannan, Vijayamurughan S, G. Venugopalan</td>
                                        <td>The Math Behind PageRank</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DETAILED VIEW: PHILOSOPHY -->
            <div id="teaching-philosophy" class="teaching-detail-view">
                <button class="back-btn" onclick="closeTeachingSection()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Back to Dashboard
                </button>
                <div class="section">
                    <h3>My Teaching Philosophy</h3>
                    <p>My approach to teaching is grounded in the belief that the interface between Physics and Artificial Intelligence provides a unique playground for intuitive understanding. I emphasize:</p>
                    <ul>
                        <li><strong>Active Learning:</strong> Moving beyond lectures to include live coding sessions, simulation workshops, and "playground" style problem solving.</li>
                        <li><strong>Interdisciplinary Thinking:</strong> Encouraging students to see the mathematical structures common to both quantum mechanics and machine learning.</li>
                        <li><strong>Project-Based Assessment:</strong> Evaluating understanding through the creation of tangible models and tools (like our Lab Products) rather than just rote memorization.</li>
                    </ul>
                    <p><em>"Education is not the learning of facts, but the training of the mind to think." - Albert Einstein</em></p>
                </div>
            </div>
        </div>

        <!-- 4. About Me Page -->
        <div id="about" class="page-content">
            <h2>Group Leader</h2>
            <div class="profile-header section">
                <img src="Image_PPic.png" alt="Profile Picture" class="profile-picture">
                <div class="header-text">
                    <h1>Suman Dutta</h1>
                    <p>Researcher | Intelligent Living & Artificial Systems</p>
                </div>
            </div>

            <h2> About Me</h2>
            <p>I am a <strong>Creative</strong> researcher in the field of <strong>Intelligent Complex Systems</strong>, with a specialization in <strong>out-of-equilibrium Complex Fluids</strong>. I investigate model dynamics of <strong>Natural and Artificial Systems</strong>, combining <strong>Statistical Physics</strong>, <strong>High Performance Computing </strong> and <strong>Machine Intelligence</strong>, with an aim to develop strategies for <strong>Generative Physical Systems</strong>.</p>
            <div class="section">
                <h3>🎓 Professional Journey</h3>
                <h4>Present Affiliation</h4>
                <p><strong>Gemini Certified Faculty</strong><br>(2026-2028)<br></p>
                <p><strong>Assistant Professor (Sr. Gr.), Department of Artificial Intelligence</strong><br>School of AI, Amrita Vishwa Vidyapeetham, Coimbatore HQ<br></p>
                <h4>Professional Research Experience</h4>
                <ul>
                    <li><strong>Post Doctoral Fellow</strong> (01/2024 – 09/2024)<br>Simons Centre for the Study of Living Machines, National Centre for Biological Sciences - Tata Institute of Fundamental Research, Bangalore (Advisor: M. Rao)</li>
                    <li><strong>Post Doctoral Fellow</strong> (01/2021 – 12/2023)<br>International Centre for Theoretical Sciences - Tata Institute of Fundamental Research, Bangalore (Advisor: C. Dasgupta)</li>
                    <li><strong>Post Doctoral Fellow</strong> (02/2018 – 12/2020)<br>The Institute of Mathematical Sciences, Chennai (Advisor: P. Chaudhuri, in collaboration with K. Martens)</li>
                </ul>
                <h4>Visiting Researcher Experience</h4>
                <ul>
                    <li>Fluvial Mechanics Laboratory Indian Statistical Institute (Kolkata, IN) </li>
                    <li>Department of Physics Indian Institute of Science (Bangalore, IN) </li>
                    <li>Department of Physics Indian Institute of Science Education and Research (Bhopal, IN) </li>
                    <li>Laboratoire Interdisciplinaire de Physique Université Grenoble Alpes (Grenoble, FR) </li>
                    <li>Institut für Theoretische Physik II - Soft Matter Heinrich-Heine-Universität (Düsseldorf, DE) </li>
                </ul>
                <h4>Education</h4>
                <ul>
                    <li><strong>Ph.D in Physics</strong> (08/2012 – 01/2018)<br>Department of Chemical, Biological and Macromolecular Sciences, S. N. Bose National Centre for Basic Sciences, Kolkata (Degree awarded by University of Calcutta) <br><em>Thesis:</em> Numerical Studies on the Dynamics of Soft Matter Systems (Advisor: J. Chakrabarti)</li>
                    <li><strong>M.Sc in Physical Sciences</strong> (08/2010 – 07/2012)<br>S. N. Bose National Centre for Basic Sciences (Degree awarded by West Bengal University of Technology, Kolkata)</li>
                </ul>
            </div>
            <h2>📫 Connect</h2>
            <div class="section" style="text-align: center;">
                <div class="social-links">
                    <a href="mailto:sumandutta.snbncbs@gmail.com"><img src="https://img.shields.io/badge/Email-red?style=flat-square&logo=gmail&logoColor=white" alt="Email"></a>
                    <a href="https://scholar.google.com/citations?user=j-83jp8AAAAJ"><img src="https://img.shields.io/badge/Google_Scholar-007bff?style=flat-square&logo=google-scholar&logoColor=white" alt="Google Scholar"></a>
                    <a href="https://github.com/sd3ph"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"></a>
                    <a href="https://www.linkedin.com/in/sd3ph/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
                </div>
            </div>
        </div>

        <!-- NEW OUTREACH PAGE -->
        <div id="outreach" class="page-content">
            <h2>📢 Outreach & Community</h2>
            <p style="text-align: center; margin-bottom: 25px;">Engaging with the scientific community and the public to demystify Physics and AI.</p>
           
            <div class="outreach-grid">
                <!-- Outreach Item 1 -->
                <div class="outreach-card">
                    <span class="outreach-icon">🗣️</span>
                    <h4>Talks</h4>
                    <p>Talks/Presentations</p>
                    <ul style="font-size: 0.9em;">
                        <li>International: 3+ </li>
                        <li>National: 10+ </li>
                        <li>Total: 26+ </li>
                    </ul>
                </div>
            
                <!-- Outreach Item 3 -->
                <div class="outreach-card">
                    <span class="outreach-icon">🌍</span>
                    <h4>Science Popularization</h4>
                    <p>October 31, 2025 -- Story writing by human-machine collaboration. Participation: 115 Students </p>
                    <p>February 6, 2026 -- International Mini-Workshop -- 125 Minutes (Online). Participation: 106 </p>
                </div>
               
                <!-- Outreach Item 4 -->
                <div class="outreach-card">
                    <span class="outreach-icon">🏆</span>
                    <h4>Competitions</h4>
                    <p>August 28–29, 2025-- The Class Hackathon on the theme "AI for Greener Future". Participation: 23 Groups (Each consisting of 6 Members) </p>
                    <p>March 20, 2026-- Class hackathon -II. Participation: 9 Groups (Each consisting of 4-6 Members) </p>
                </div>
            </div>
           
            <div class="section" style="margin-top: 30px;">
                <h3>Milestones</h3>
                <div class="research-area-item">
                    <strong>Human+AI Collaboration</strong>
                    <p>In a fusion of logic and creativity, we conducted an experimental initiative in the Autumn of 2025, challenging first-year BTech(AID) students to move beyond the mechanics of AI to the artistry of generation. The resulting anthology compiles 115 distinct narratives, representing a massive coordination of human imagination amplified by Large Language Models. This collection showcases a remarkable spectrum of themes, refracting a single premise into genres ranging from the futuristic sci-fi of The Neural Vault and ZeroTrace to the philosophical introspection of synthetic intelligence. Demonstrating how artificial tools can yield storytelling, we present the book: "Tales from the Hidden Layers — An Anthology of Neural Symphonies" (115 Stories from 115 Student coauthors from BTech AID S1 batch, 748 Pages).</p>
                </div>
            </div>
        </div>

        <!-- Latest News Page -->
        <div id="latest" class="page-content">
            <h2>✨ Latest News</h2>
            <div class="section">
                <div class="timeline">,

                <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Suman presented work titled "Inverse Learning Complex Systems" - by Moushika S, Ashmitha T, V Vaibhav & Suman Dutta, at the Statistical Mechanics Meeting - Kolkata coorganised by IISER-Kolkata, S. N. Bose National Centre for Basic Sciences, Bose Institute & Indian Association for the Cultivation of Science (Oct 13-15, 2026). </strong>
                        </div>
                    </div>

                <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Suman presented work titled "An Adaptive AI Assisted Framework for Personalized Indian Nutrition" - by M. Dinesh Kumar, M. Sujan, K. Aravind Guptha, A. Sheshank Royal, B. Surya. Tej, M. Neeraj
Dr Chakravarthy S Maddipati, Dr Br Nivedita Pavithran & Suman Dutta, at the 58th Conference of Nutrition Society of India, at Avinashilingam Institute for Home Science and Higher Education for Women (Oct 8-9, 2026). </strong>
                        </div>
                    </div>

                <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Poster on AI-driven Material Discovery platform - GenMatX by Revanth S, G Kamalesh, P S Sugatha, Sudip K Batabyal & Suman Dutta, at the National Conference on Quality and Safety of Biosimilars, organized by IPC & C-CAMP (Sept 10-11, 2026). </strong>
                        </div>
                    </div>

                <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Magnus Olsen submitted his Master's thesis titled 'Molecular dynamics simulations of
non-Newtonian flow in glassy materials' at Department of Physics, Faculty of Natural Sciences, Norwegian University of Science and Technology (Supervisor: R. Cabriolu, Co-supervisor: Suman Dutta) (Sept 07, 2026) </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Siddharth M and MVS Praneeth has successfully completed the summer internship at the Department of Physics, SRM University. </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Suman delivered a talk at the Department of Physics of Complex Systems, S. N. Bose National Centre for Basic Sciences, Kolkata: Persistently Non-Gaussian Metastable Fluids </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Moushika S selected for ICTS-TIFR Summer Course: Dynamical Systems in Neuroscience </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Archit Harish joined the Institute of Mathematical Sciences, Chennai </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Completed Project: Development of a Proof-of-Concept Multimodal Agentic AI System for Advanced Geological Well Log Analysis (PI: Abhijith A, Project in partnership with Telesto Energy Pvt. Ltd. via The Directorate of Corporate & Industry Relations, Amrita Vishwa Vidyapeetham, Coimbatore (2025-2026) (PI: Abhijit A., CoPI: Sai N Sundarakrishna, T. Subeesh and S. Dutta </strong>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Publication: Persistently Non Gaussian Metastable Liquids, V. Vaibhav, T. Das and S. Dutta, Ann. Phys. (Berlin), 538 (4), e00247 (2026) </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Oral presentation in International Mini-Workshop - 125 Minutes: Optimal Diet Plannar, M. Dinesh Kumar, M. Sujan, K. Aravind Guptha and A. Sheshank Royal </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>International Mini-Workshop - 125 Minutes was organised at School of AI (Coordinators: Dr Milton Mondal, Ayan Banerjee and Suman Dutta). </strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong> Suman delivered a talk at the Institute of Mathematical Sciences, Chennai: Persistently Non-Gaussian Metastable Fluids </strong>
                        </div>
                    </div>
            
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>EuroHPC Benchmark Access awarded for LUMI clusters (9th Fastest Supercomputer Globally) (PI: Raffaela Cabriolu, CoPI: Suman Dutta)</strong>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Archit Harish selected for the Biophysical Society/ICTS-TIFR flagship Meeting: Spatial Organizations of Biophysical Functions. He presented a poster -- Learning Micro-flocking Dynamics in Living Machines by Hybrid Machine Intelligence</strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Agnevesh Jagdish selected in the ICTS-TIFR/Google flagship school: Data Science: Probabilistic and Optimization Methods II.</strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Oral presentation by Archit in International Conference: Machine Learning Material Heterogeneity at Micro-scale, A Harish, A Jagdish, A Venkatraman, S Dutta, International Conference on Advanced Materials and Green Technologies, MPD34; 74 (2025)</strong>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-content">
                            <strong>Suman Dutta joined the School of AI, Amrita Vishwa Vidyapeetham, as Assistant Professor (24 March, 2025).</strong>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <!-- NEW: Live Class Room Page -->
        <div id="classroom" class="page-content">
             <h2>🧑‍🏫 Live Class Room</h2>
             
             <!-- Password Prompt Container -->
             <div id="password-prompt-container" class="password-prompt-container">
                 <h3>🔒 Access Restricted</h3>
                 <p>Please enter the passcode to view course materials.</p>
                 <form id="password-form" class="password-form">
                     <input type="password" id="passcode-input" placeholder="Enter passcode" required>
                     <button type="submit">Unlock</button>
                 </form>
                 <p id="password-error-message" class="password-error-message"></p>
             </div>
             
             <!-- Protected Content -->
             <div id="classroom-content" class="hidden">
               
                <!-- DASHBOARD VIEW -->
                <div id="classroom-dashboard">
                    <p style="text-align: center; margin-bottom: 25px; font-size: 1.05em;">Welcome to the Live Class Room. Select a course below to view details.</p>
                    <div class="course-grid">
                        <!-- Card 1: 23MAT106 -->
                        <div class="course-card" onclick="openCourse('course-mat106')">
                            <div>
                                <h4>Mathematics for Intelligent Systems - I</h4>
                                <p><span class="course-code">23MAT106</span> <span class="semester-tag">Fall 2025</span></p>
                                <p><strong>Subject:</strong> Linear Algebra, ODEs, Probability, Quantum Computing</p>
                                <p><strong>Credit:</strong> 4 </p>
                                <p><strong>Timeline:</strong> 6 Aug - 5 Dec, 2025 </p>
                                <p><strong>Students:</strong> BTech AID, Batch A and B (Total: 133 Students) First Year, First Semester </p>
                            </div>
                            <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan);">
                                Click to view Schedule, Syllabus & Notes &rarr;
                            </div>
                        </div>

                        <!-- Card 2: 23CHY115 -->
                        <div class="course-card" onclick="openCourse('course-chy115')">
                            <div>
                                <h4>Introduction to Material Informatics</h4>
                                <p><span class="course-code">23CHY115</span> <span class="semester-tag">Spring 2026</span></p>
                                <p><strong>Subject:</strong> AI in Material Science</p>
                                <p><strong>Credit:</strong> 3 </p>
                                <p><strong>Timeline:</strong> 5 Jan - 4 May, 2026 </p>
                                <p><strong>Students:</strong> BTech AID, Batch A and B (Total: 129 Students) First Year, Second Semester</p>
                            </div>
                            <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan);">
                                Click to view Schedule, Syllabus & Notes &rarr;
                            </div>
                        </div>

                        <!-- Card 3: 23MAT204 -->
                        <div class="course-card" onclick="openCourse('course-mat204')">
                            <div>
                                <h4>Mathematics for Intelligent Systems - III</h4>
                                <p><span class="course-code">23MAT204</span> <span class="semester-tag">Fall 2026</span></p>
                                <p><strong>Subject:</strong> Advanced Optimization, Multivariate Calculus, Vector Spaces</p>
                                <p><strong>Credit:</strong> 3 </p>
                                <p><strong>Timeline:</strong> 5 Aug - 4 Dec, 2026 </p>
                                <p><strong>Students:</strong> BTech AID, Batch A and B (Total: 131 Students) Second Year, Third Semester</p>
                            </div>
                            <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan);">
                                Click to view Schedule, Syllabus & Notes &rarr;
                            </div>
                        </div>

                        <!-- Card: 25AID434 -->
                        <div class="course-card">
                            <div>
                                <h4>Linear Algebra and Quantum Gates</h4>
                                <p><span class="course-code">25AID434</span></p>
                                <p><strong>Subject:</strong> Linear Algebra and Quantum Gates</p>
                            </div>
                        </div>

                        <!-- Card 4: 23MAT304 -->
                        <div class="course-card" onclick="openCourse('course-mat304')">
                            <div>
                                <h4>Mathematics for Intelligent Systems - IV</h4>
                                <p><span class="course-code">23MAT304</span> <span class="semester-tag">Spring 2027</span></p>
                                <p><strong>Subject:</strong> Random Processes, Advanced Probability, Statistical Inference</p>
                                <p><strong>Credit:</strong> 3 </p>
                                <p><strong>Timeline:</strong> 6 Jan - 5 May, 2027 </p>
                                <p><strong>Students:</strong> BTech AID, Batch A and B (Total: 130 Students) Second Year, Fourth Semester</p>
                            </div>
                            <div style="margin-top: 15px; font-style: italic; color: var(--accent-cyan);">
                                Click to view Schedule, Syllabus & Notes &rarr;
                            </div>
                        </div>
                    </div>
                </div>

                <!-- DETAILED VIEW: 23MAT106 -->
                <div id="course-mat106" class="course-detail-view">
                    <button class="back-btn" onclick="closeCourse()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                        Back to Dashboard
                    </button>
                   
                    <div class="section">
                        <h3>Course Details</h3>
                        <ul>
                            <li><strong>Class:</strong> BTech AID</li>
                            <li><strong>Semester:</strong> Fall, 2025 </li>
                            <li><strong>Course Code:</strong> 23MAT106</li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Combined Weekly Schedule</h3>
                        <p style="font-weight: bold; margin-bottom: 5px;">BTech (AID)</p>
                        <p style="font-size: 1.05em; font-style: italic; margin-top: 0;">Mathematics for Intelligent Systems - I - 23MAT106, School of AI, Amrita Vishwa Vidyapeetham</p>

                        <div class="table-responsive">
                            <table style="text-align: center;">
                                <thead>
                                    <tr>
                                        <th>Time Slot</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="font-weight: bold;">08:00 - 08:50</td>
                                        <td></td><td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">08:50 - 09:40</td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">09:40 - 10:30</td>
                                        <td></td><td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">10:30 - 10:45</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">10:45 - 11:35</td>
                                        <td></td><td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">11:35 - 12:25</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">12:25 - 01:15</td>
                                        <td></td><td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">01:15 - 02:05</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Lunch Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">02:05 - 02:55</td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">02:55 - 03:45</td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">03:45 - 04:35</td>
                                        <td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">04:35 - 06:15</td>
                                        <td></td><td></td><td></td><td></td><td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                   
                    <div class="section">
                        <h3>Syllabus</h3>
                        <dl>
                            <dt><strong>Unit 1</strong></dt>
                            <dd>Basics of Linear Algebra - Linear Dependence and independence of vectors - Gaussian Elimination - Rank of set of vectors forming a matrix - Vector space and Basis set for a Vector space – Dot product and Orthogonality - CR decomposition - Rotation matrices - Eigenvalues and Eigenvectors and its interpretation - Introduction to SVD. Computational experiments using Matlab/Excel/Simulink.</dd>
                           
                            <dt><strong>Unit 2</strong></dt>
                            <dd>Ordinary Linear differential equations, formulation - concept of slope, velocity and acceleration - analytical and numerical solutions - Impulse Response computations - converting higher order into first order equations - examples of ODE modelling in falling objects, satellite and planetary motion, Electrical and mechanical systems – Introduction to solving simple differential equations with Simulink - Introduction to one variable optimization - Taylor series. Computational experiments using Matlab /Excel/Simulink.</dd>

                            <dt><strong>Unit 3</strong></dt>
                            <dd>Introduction to random variables (continuous and discrete), mean, standard deviation, variance, sum of independent random variable, convolution, sum of convolution integral, probability distributions.</dd>

                            <dt><strong>Unit 4</strong></dt>
                            <dd>Introduction to quantum computing, Quantum Computing Roadmap, Quantum Mission in India, A Brief Introduction to Applications of Quantum computers, Quantum Computing Basics, Bracket Notation, Inner product, outer product, concept of state.</dd>
                        </dl>
                    </div>

                    <div class="section">
                        <h3>Lecture Notes</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1iQD5Idz2AqHFS5tHxHp9FYU0DpuDQ2t2/view?usp=sharing">Lecture 01: Introduction to Linear Algebra for AI (06/08/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1QxHKnfaHpDvrX1Q6f9Q9I8hQ8eetbBaU/view?usp=sharing">Lecture 02: Pseudoinverse in Action: Left and Right Inverses (08/08/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1tWhlRsK2VE4cyas4OhLAwnjNwyOfuxR/view?usp=sharing">Lecture 03: Pseudoinverse : Guide to your first AI application (11/08/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1xMa106_qIavA7vq0Un-bNcqrSbn4ItBr/view?usp=sharing">Lecture 04: Complex Data Processing (13/08/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1Cex5xgXujKA76VS8t02WuPzfFm4i7vMf/view?usp=sharing">Lecture 05-06: Introduction to Advanced Optimization and Physics-Informed Approaches(18/8/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1rwP78U60kntlpxxYTe5jD12t332jRt1s/view?usp=sharing">Lecture 07: The Linear Algebra Behind Large Language Models and Generative AI (21/08/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1MkGZUF9IKAIYxBv7noBz9B3FnrgaPJc5/view?usp=sharing">Lecture 08-10: The Physics behind the Data: Unveiling the Symmetries and Principal Axes of Transformations (1-5/09/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1MkGZUF9IKAIYxBv7noBz9B3FnrgaPJc5/view?usp=sharing">Lecture 11-12: Introduction to Ordinary Differential Equations (8-10/9/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1_PaitQ1drWka5PChDg8cy8fRMGuFMhA2/view?usp=sharing">Lecture 13-15:Impulse Response and Convolution(10-13/09/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1pRwjpohrF_t-iULyS0VWk7NBpHGEKWqo/view?usp=sharing">Lecture S1: An Introduction to Python for Linear Algebra(17/09/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1hlK77sH8cevDB_e4i1mbi67cYOawG7hw/view?usp=sharing">Lecture 16-17: Modeling Falling Objects, Satellites, and Planetary Motion (3-4/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1oe9eS-2PNsJ_ms5_4UgoKinqTAhAeGID/view?usp=sharing">Lecture 18: Ordinary Differential Equations (6/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/15vP6HRE0uMPYSHGrdb1SOZZ2CLl9UuaU/view?usp=sharing">Lecture 19: Complex RLC Circuit Analysis (8/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1mkCa3YYbM5Y04IAdMoVx39nBrDEsV5sR/view?usp=sharing">Lecture 20-21: Solving Ordinary Differential Equations in Python with SciPy (8/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1C-MSVKh_8QVNJtfayCFyjBGn_F1A2To5/view?usp=sharing">Lecture 22: Numerical Solution of ODEs (11/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1iRcFYW5_NAFJNh9FnoA9uo16n-Cv5R8c/view?usp=sharing">Lecture 23-26: Probability and Random Variables (24/10/2025)</a> - (LH 310/314)</li>
                            <li><a href="https://drive.google.com/file/d/1qLYkZweb2UPk8yMq9tnCXjYJoxhnoDSO/view?usp=sharing">Hybrid Lecture-1: Buidling your first AI model (5/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1qPFETANADVHdJYmeeauB-VWI1uOieIvr/view?usp=sharing">Hybrid Lecture-2: Building your second AI model (6/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1JhTzCXodJKlXThSbIfQH9Wt4rWrv4WA1/view?usp=sharing">Hybrid Lecture-3: Polynomial Regression via Design Matrix Modification (7/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1HwdJjU6YZwOnGfQAE5U_FlKCwx0ZBiwr/view?usp=sharing">Hybrid Lecture-4: Finding the Pseudoinverse via CR Decomposition (11/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1o-EyZnoYgP5XWq7N9jYSVEB9K5tOGHDT/view?usp=sharing">Hybrid Lecture-5: Application of Singular Value Decomposition(SVD) (12/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1ZmoDHKNj4rgpQNUL0a5F4NBmyQDESGfY/view?usp=sharing">Hybrid Lecture-6: Application of Singular Value Decomposition(SVD) and Stochastic Analysis (14/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1AH3pcCV2Y20UcjFV1GsWdiEphSNxoSeG/view?usp=sharing"> Summary and Revision Unit-I-II-III (Theory) (17/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1H00roWBC8HzWcGgA-pDbqYawVBSGjIwY/view?usp=sharing"> Summary and Revision Unit-I-II-III (Coding) (19/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1odIEqeeOxx4CVEQcGZPm_qSWesh43KN_/view?usp=sharing"> SmartLab1: Linear Regression on the Edge (27/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1_WMGs493n6NF6MFzfg_KIoJpky-3X1ex/view?usp=sharing"> Lecture 27: Introduction to Quantum Computing (28/11/2025)</a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1TDx-ZVSEYl2dRAufjnGKXv9N5GwKH0rJ/view?usp=sharing"> Lecture 28-30: Introduction to Quantum Computing (Extended) (29/11/2025)</a> - (LH 15/16)</li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Topical Project</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1kfk44ClGk1CHYdp4oH3HK4MVGU5g_oYK/view?usp=drive_link"> Summary of Topical Projects </a> </li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Assignments</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1rkGgMks5BO0PGgv5f-wHzubaMnZHBIxF/view?usp=sharing">Assignment 1: Linear Algebra and ML </a> - (Due: 18/08/2025)</li>
                            <li><a href="https://drive.google.com/file/d/1yReUaF3pPoDgymTmBLUbRtqrZP40dzlW/view?usp=sharing">Assignment 2: Differential Equations and Modeling</a> - (Due: 11/10/2025)</li>
                        </ul>
                    </div>
                </div>

                <!-- DETAILED VIEW: 23CHY115 -->
                <div id="course-chy115" class="course-detail-view">
                    <button class="back-btn" onclick="closeCourse()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                        Back to Dashboard
                    </button>

                    <div class="section">
                        <h3>Course Details</h3>
                        <ul>
                            <li><strong>Class:</strong> BTech AID</li>
                            <li><strong>Semester:</strong> Fall, 2025 </li>
                            <li><strong>Course Code:</strong> 23CHY115</li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Combined Weekly Schedule</h3>
                        <p style="font-weight: bold; margin-bottom: 5px;">BTech (AID)</p>
                        <p style="font-size: 1.05em; font-style: italic; margin-top: 0;">Material Informatics - 23CHY115, School of AI, Amrita Vishwa Vidyapeetham</p>

                        <div class="table-responsive">
                            <table style="text-align: center;">
                                <thead>
                                    <tr>
                                        <th>Time Slot</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="font-weight: bold;">08:00 - 08:50</td>
                                        <td></td><td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">08:50 - 09:40</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">09:40 - 10:30</td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">10:30 - 10:45</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">10:45 - 11:35</td>
                                        <td></td><td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">11:35 - 12:25</td>
                                        <td></td><td></td><td></td><td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">12:25 - 01:15</td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td></td><td></td><td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">01:15 - 02:05</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Lunch Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">02:05 - 03:45</td>
                                        <td></td><td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B (Lab)</span></td>
                                        <td></td><td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">03:45 - 04:35</td>
                                        <td></td><td></td><td></td>
                                        <td><span class="semester-tag">Section A (Lab)</span></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="section">
                        <h3>Syllabus</h3>
                        <dl>
                            <dt><strong>Unit 1</strong></dt>
                            <dd>Introduction to material science – structure, properties, and process spaces - process-structure-property linkages – foundation of material informatics – introduction to molecular mechanism and force field – quantification of dynamics properties of polymers (monte carlo simulation, molecular dynamics simulation, normal mode analysis) – electronics structure of atoms (Gaussian, Gauss view, density functional theory)</dd>
                           
                            <dt><strong>Unit 2</strong></dt>
                            <dd>Quantification and screening of materials properties - property prediction and optimization using AI - materials design and discovery using AI – how to handle small, spared, and low-quality dataset using AI.</dd>

                            <dt><strong>Unit 3</strong></dt>
                            <dd>Materials failure and sustainability analysis – new material and inverse materials design concept – solve inverse design using AI – enhance speed, efficacy and cost-effectiveness of material using AI - basic concept of quantum computing in material informatics.</dd>

                            <dt><strong>Unit 4</strong></dt>
                            <dd>Case studies of materials informatics (use of AI) in different fields (e.g. energy, aerospace, biomedical, etc.) - ethical considerations and limitations of materials informatics - future directions and challenges in materials informatics.</dd>
                        </dl>
                    </div>

                    <div class="section">
                        <h3>Lecture Notes</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/10rcKnWqmk5Hy0MSTJqXo8-H74M2xk72T/view?usp=sharing">Lecture 01-03: Overview of Material Informatics </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1cZaj16h_Sk6r1eZzc-ZFUbtcTkD7J-z2/view?usp=sharing">Lecture S1: Generative Prediction using Koopman Theory </a> - (LH 15/16)</li>  
                            <li><a href="https://drive.google.com/file/d/1hfJNXZGG6GfeTdLZS3ALU6GrzoUQhBdy/view?usp=sharing">Lecture 4-5: Koopman Operator & Simple DMD </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1lz4Ddp6zURVGcWDvydx6Za-LBiv1wt7c/view?usp=sharing">Lecture 6-7: Koopman Prediction in Material Informatics </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1uW-H33hAH_Th4Y_Ejim6yngpuo9gq43a/view?usp=sharing">Lecture 8: Single Variable Time-Series Prediction (Hankel-DMD) </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1zUQ6BYGaNtxK2LeCS5pzdL0czc-1aZHG/view?usp=sharing">Lecture S2: Data-Driven Model Engineering </a> - (LH 15/16)</li>  
                            <li><a href="https://drive.google.com/file/d/1zUQ6BYGaNtxK2LeCS5pzdL0czc-1aZHG/view?usp=drive_link">DMD Slides: Data-Driven Model Engineering </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/10btQz3_e2ZYVLppxqe5Zqhg0wxUBOAZY/view?usp=drive_link">Lecture 9-10: Analytical Data-Driven Koopman </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1I54B2QkDEIKDU_1Vk8Or9NcVrmtz-gaw/view?usp=drive_link">Lecture 11-12: Introduction to Molecular Dynamics </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1hnKFxWve7AYl4j8dOCd-JzC-rZAyxlYu/view?usp=drive_link">Lecture 13: Basic Molecular Dynamics </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1t1njTsSTpOiqRU6bVZCJHe98pCBcKfsM/view?usp=drive_link">Lecture 14-15: Catastrophic Algorithms in Materials BTW Sandpile vs. CBO Earthquake Model </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1BSzk1M6NML5LYN_KgRYH-GUJco4YDLPv/view?usp=sharing">Lecture 14-18: Catastrophic Algorithms in Materials BTW Sandpile vs. CBO Earthquake Model </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1X1Cv0vV0pIWJsyU0P-M8dduBeOsBiz-I/view?usp=sharing">Lecture 22: Massively Parallel Material Simulations LAMMPS and OVITO </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1-ZvtPiX5y_kmptXihOqa5jQbOkfN724e/view?usp=sharing">Lecture 24: Agent-Based Simulations using LAMMPS </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1SXG6P7WjXRF_BbrG1r8ix1ya77g1PmKw/view?usp=sharing">Lecture 26: Post Processing LAMMPS data </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1x02_HxmbctBWNH9JE-QyohEowLdpwCw6/view?usp=sharing">Lecture 27: Tutorial: Material Discovery with AI </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1-ZvtPiX5y_kmptXihOqa5jQbOkfN724e/view?usp=sharing">Lecture 26-30: Material Discovery by AI </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1lmd9snw_9iXnuwFd-jeRUOTeB5SqjVov/view?usp=sharing">Lecture 31: Vibrational Dynamics, Normal Mode Analysis (NMA) and Data-Driven Modeling </a> - (LH 15/16)</li>
                            <li><a href="https://drive.google.com/file/d/1znn-zVH3Ciy3cJJHQO3Tiuo-i4yUdGIt/view?usp=sharing">Lecture 32-34: Ethical Considerations, Limitations, and Future Directions </a> - (LH 15/16)</li>    
                            <li><a href="https://drive.google.com/file/d/1Is5xz_s14I5ROZDtmghbUwJOtNb5wAZT/view?usp=sharing">Extensive Summary</a> - (LH 15/16)</li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Topical Project</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/13OLMqsd1L7j0Fj4esVj72-NellyJjNn9/view?usp=sharing"> Summary of Project Review</a> </li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Assignments</h3>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1DHuBZ-bzmekvveB4S0OiRT2LBufMDDvi/view?usp=sharing">Assignment 01: Due Date 31/01/2026 </a> - (LH 15/16)</li>     
                        </ul>
                    </div>
                </div>

                <!-- DETAILED VIEW: 23MAT204 -->
                <div id="course-mat204" class="course-detail-view">
                    <button class="back-btn" onclick="closeCourse()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                        Back to Dashboard
                    </button>

                    <div class="section">
                        <h3>Course Details</h3>
                        <ul>
                            <li><strong>Class:</strong> BTech AID</li>
                            <li><strong>Semester:</strong> Fall, 2026 </li>
                            <li><strong>Course Code:</strong> 23MAT204</li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Combined Weekly Schedule</h3>
                        <p style="font-weight: bold; margin-bottom: 5px;">BTech (AID)</p>
                        <p style="font-size: 1.05em; font-style: italic; margin-top: 0;">Mathematics for Intelligent Systems - III - 23MAT204, School of AI, Amrita Vishwa Vidyapeetham</p>

                        <div class="table-responsive">
                            <table style="text-align: center;">
                                <thead>
                                    <tr>
                                        <th>Time Slot</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="font-weight: bold;">08:50 - 09:40</td>
                                        <td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">09:40 - 10:30</td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">10:30 - 10:45</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">11:35 - 12:25</td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                        <td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">01:15 - 02:05</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Lunch Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">02:05 - 03:45</td>
                                        <td><span class="semester-tag">Section A (Lab)</span></td>
                                        <td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B (Lab)</span></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="section">
                        <h3>Syllabus</h3>
                        <dl>
                            <dt><strong>Unit 1</strong></dt>
                            <dd>Direct methods for convex functions - sparsity inducing penalty functions- Constrained Convex Optimization problems - Krylov subspace -Conjugate gradient method - formulating problems as LP and QP - Lagrangian multiplier method-KKT conditions - support vector machines- solving by packages (CVXOPT) - Introduction to RKS - Introduction to DMD-Tensor and HoSVD- Linear algebra for AI.</dd>

                            <dt><strong>Unit 2</strong></dt>
                            <dd>Introduction to PDEs - Formulation and numerical solution methods (Finite difference and Fourier) for PDEs in Physics and Engineering- Computational experiments using Matlab/Excel/Simulink.</dd>

                            <dt><strong>Unit 3</strong></dt>
                            <dd>Multivariate Gaussian and weighted least squares - Markov chains - Markov decision Process </dd>

                            <dt><strong>Unit 4</strong></dt>
                            <dd>Introduction to quantum computing-Bells inequality-Quantum gates</dd>
                        </dl>
                    </div>

                    <div class="section">
    <h3>Lecture Notes</h3>

    <p style="font-style: italic; color: var(--text-muted);">
        Lecture materials and notes will be uploaded concurrently with the session schedule.
    </p>

    <ul>
        <li><a href="https://drive.google.com/file/d/1EwogTaFt1xZVnn0F5ViFsdDrhAy-Z_si/view?usp=drive_link">Lecture 01–04: Revision Lectures (16/07/2026)</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1jctIVBS-wtMVfnak4N-NsIZhkYFSlvO7/view?usp=drive_link">Lecture 05–07: Convexity and Derivatives in Multivariable Space — Gradients, Jacobians, and Hessians</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1b1s9-iJJV5DzEm1I5XM53A4_TqdYW8ol/view?usp=drive_link">Lecture 08–10: Introduction to Convex Optimization — Applications in AI</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/14j82gOLLanHIJiCT05aXygfujhRC3Dfi/view?usp=drive_link">Lecture 10b: The Method of Lagrange Multipliers</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1zGw-iGAGiykFh2iBI4zcj1LJ7AqViz7g/view?usp=drive_link">Lecture 11–13: Sparsity, Constraints, and Smart Search Methods</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1owY3q7knQ_mTrE6K5zQHpRKvmwAyX2ka/view?usp=drive_link">Lecture 14–15: The Conjugate Gradient Method</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1nLnM5vGfJTQQQD0EuVGQBX2D3A8TeK2H/view?usp=drive_link">Lecture 16–17: Classical and Stochastic Optimization Algorithms (04/08/2026)</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1stwpuUI90J834yh1-lkXL2vKY3jFBXYN/view?usp=drive_link">Lecture 18: Why Support Vector Machines? — The Maximum Margin Principle (09/11/2026)</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1bClgNZc1M5Nem0LNVQw6sRSTH_w2nUcq/view?usp=drive_link">Lecture 19–20: Predicting Student Pass/Fail Using SVM and Pseudoinverse</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1DiuiZxEs901s02BZ3rPAvXEwzmlZnGEX/view?usp=drive_link">Lecture 21–25: Introduction to Partial Differential Equations in Engineering and Physics (05/09/2026)</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1da3pM5BnLSqZCbzQZIrCMGEzXFETzx3H/view?usp=drive_link">Lecture 22: Four Easy First-Order Homogeneous PDEs — Separation of Variables</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1A1lxsGCwUdJjZtyWICE9772PQ_CXcoPs/view?usp=drive_link">Lecture 27: Solving PDEs with SymPy (21/09/2026)</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1BDi3Ck8p0S9DX8TNQj8HzV4Wjc-sDh8Y/view?usp=drive_link">Lecture 29–30: Solving and Discovering PDEs — Fourier Transform, FDM, and PINNs (05/10/2026)</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1v1S7qb9bS1IvymN6IlolKxtfZR6XWPQC/view?usp=drive_link">Lecture 31–32: Engineering Foundations of Machine Learning (05/10/2026)</a> - (LH 115/116)</li>

        <li><a href="https://drive.google.com/file/d/1VNK5-s_vWhYCOEtVnVR42vbd4RbEPMdU/view?usp=drive_link">Lecture 34–36: Foundations of Quantum Computing — Qubits, Quantum Gates, and Bell’s Inequality</a> - (LH 115/116)</li>
    </ul>
</div>

                    <div class="section">
                        <h3>Topical Project</h3>
                        <p style="font-style: italic; color: var(--text-muted);">Project briefs and topics will be announced during Unit 2.</p>
                    </div>

                    <div class="section">
                        <h3>Assignments</h3>
                        <p style="font-style: italic; color: var(--text-muted);">Assignments will be published here with respective deadlines.</p>
                    </div>
                </div>

                <!-- DETAILED VIEW: 23MAT304 -->
                <div id="course-mat304" class="course-detail-view">
                    <button class="back-btn" onclick="closeCourse()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                        Back to Dashboard
                    </button>

                    <div class="section">
                        <h3>Course Details</h3>
                        <ul>
                            <li><strong>Class:</strong> BTech AID</li>
                            <li><strong>Semester:</strong> Spring, 2027 </li>
                            <li><strong>Course Code:</strong> 23MAT304</li>
                        </ul>
                    </div>

                    <div class="section">
                        <h3>Combined Weekly Schedule</h3>
                        <p style="font-weight: bold; margin-bottom: 5px;">BTech (AID)</p>
                        <p style="font-size: 1.05em; font-style: italic; margin-top: 0;">Mathematics for Intelligent Systems - IV - 23MAT304, School of AI, Amrita Vishwa Vidyapeetham</p>

                        <div class="table-responsive">
                            <table style="text-align: center;">
                                <thead>
                                    <tr>
                                        <th>Time Slot</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="font-weight: bold;">08:50 - 09:40</td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">09:40 - 10:30</td>
                                        <td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                        <td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">10:30 - 10:45</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">11:35 - 12:25</td>
                                        <td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B</span></td>
                                        <td></td>
                                        <td></td>
                                        <td><span class="semester-tag">Section A</span></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">01:15 - 02:05</td>
                                        <td colspan="5" style="background: rgba(255,255,255,0.05); font-style: italic;">Lunch Break</td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold;">02:05 - 03:45</td>
                                        <td></td>
                                        <td><span class="semester-tag" style="border-color: var(--accent-pink); color: var(--accent-pink);">Section B (Lab)</span></td>
                                        <td></td>
                                        <td><span class="semester-tag">Section A (Lab)</span></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="section">
                        <h3>Syllabus</h3>
                        <dl>
                            <dt><strong>Unit 1</strong></dt>
                            <dd>Advanced Probability Theory - Joint, conditional, and marginal distributions, Multivariate Gaussian distributions, Transformations of random variables, Characteristic functions, Moments and cumulants.</dd>

                            <dt><strong>Unit 2</strong></dt>
                            <dd>Stochastic Processes & Random Walks - Discrete and continuous-time Markov chains, Transition probability matrices, Chapman-Kolmogorov equations, Stationary distributions, Ergodicity, Poisson processes, Brownian motion.</dd>

                            <dt><strong>Unit 3</strong></dt>
                            <dd>Statistical Inference & Estimation - Maximum Likelihood Estimation (MLE), Maximum A Posteriori (MAP), Bayesian inference, Expectation-Maximization (EM) algorithm, Hypothesis testing, Confidence intervals, Information theory measures (Entropy, KL divergence).</dd>

                            <dt><strong>Unit 4</strong></dt>
                            <dd>Probabilistic Modeling in AI - Markov Decision Processes (MDPs), Hidden Markov Models (HMMs), Markov Chain Monte Carlo (MCMC), Metropolis-Hastings and Gibbs sampling, Generative probabilistic models.</dd>
                        </dl>
                    </div>

                    <div class="section">
                        <h3>Lecture Notes</h3>
                        <p style="font-style: italic; color: var(--text-muted);">Lecture materials and notes will be uploaded concurrently with the session schedule.</p>
                    </div>

                    <div class="section">
                        <h3>Topical Project</h3>
                        <p style="font-style: italic; color: var(--text-muted);">Project briefs and topics will be announced during Unit 2.</p>
                    </div>

                    <div class="section">
                        <h3>Assignments</h3>
                        <p style="font-style: italic; color: var(--text-muted);">Assignments will be published here with respective deadlines.</p>
                    </div>
                </div>

             </div>
        </div>

        <!-- Lab Products Page -->
        <div id="products" class="page-content">
            <h2>🧪 Lab Products</h2>
           
            <div class="section">
                <h3>🤖 Aadri 2.0: Conversational AI for Customary Profiles</h3>
                <h4>AADRI – An Intelligent Conversational AI for Academic Profiles (v2.0)</h4>
               
                <h4>🔹 Team</h4>
                <ul>
                    <li><strong>Lead Developer:</strong> Dr. Suman Dutta, School of AI, Amrita Vishwa Vidyapeetham</li>
                    <li><strong>Quality Testing:</strong> BTech AID (Core) students</li>
                    <li><strong>Consultants & Reviewers:</strong> Experts from TCS, Cognizant, and University of Luxembourg</li>
                </ul>

                <h4>🔹 Project Synopsis</h4>
                <p> AI system engineered for the interactive presentation of academic profiles. Utilizing the Google Gemini engine and Retrieval-Augmented Generation (RAG) architecture, it transforms static information base into dynamic, query-driven user experiences. The platform ensures heightened accuracy, engagement, and personalization in professional digital self-presentation.</p>

                <h4>🔹 Colloquial Abstract</h4>
                <p>Aadri can be conceptualized as an intelligent assistant that articulates your academic contributions with the fluency of an informed colleague. Rather than navigating a conventional, static document, users engage through direct inquiry, receiving precise and user-centric responses. It functions as a personalized navigational tool for one's research portfolio, pedagogical experience, and professional accomplishments.</p>
               
                <h4>🔹 Purpose</h4>
                <ul>
                    <li>To make academic profiles interactive, accessible, and engaging.</li>
                    <li>To help users (students, collaborators, institutions) explore a researcher’s work through natural conversation.</li>
                    <li>To set a new standard for how academics present themselves digitally.</li>
                </ul>
                <h4>🔹 Mobile Demonstration 📱</h4>
                <p>Evaluate the application's real-time conversational capabilities on the go, in the playground subpage. Read the: <a href="https://drive.google.com/file/d/1wTpjT0-jby8hUuf01bEL8L08Mx2ihmwp/view?usp=sharing" style="text-decoration: none; color: var(--accent-cyan); font-weight: bold; border-bottom: 2px solid var(--accent-cyan); padding-bottom: 2px;">White Paper</a></p>
            </div>

            <div class="section">
                <h3>📝 AtoGRAD: OMR Solutions for Class-based Tests</h3>
                <p>AtoGRAD is an innovative Optical Mark Recognition (OMR) solution designed to streamline and automate the grading process for classroom-based tests. More details coming soon!</p>

                <h4>🔹 Team</h4>
                <p>To be announced.</p>
               
                <h4>🔹 Abstract</h4>
                <p>Details about the technology and application will be available shortly.</p>

                <h4>🔹 Purpose</h4>
                <ul>
                    <li>To provide a fast, accurate, and cost-effective OMR solution for educators.</li>
                    <li>To reduce the manual effort and time spent on grading multiple-choice exams.</li>
                    <li>To offer instant analytics and performance reports for students and instructors.</li>
                </ul>
            </div>

            <div class="section">
                <h3>🩺 MedScriptAI: Intelligent Medical Documentation</h3>
                <h4>MedScriptAI – Automated Clinical Scripting and Analysis Engine</h4>

                <h4>🔹 Team</h4>
                <p>To be announced.</p>

                <h4>🔹 Project Synopsis</h4>
                <p>MedScriptAI utilizes advanced natural language processing to transcribe and analyze clinical interactions. By automating documentation, it allows healthcare professionals to focus more on patient care and less on administrative tasks.</p>

                <h4>🔹 Purpose</h4>
                <ul>
                    <li>To reduce clinician burnout by automating electronic health record (EHR) entries.</li>
                    <li>To ensure high accuracy in medical transcription and prescription generation.</li>
                    <li>To provide real-time clinical decision support based on patient history.</li>
                </ul>
            </div>
        </div>

        <!-- miscellaneous Page -->
        <div id="misc" class="page-content">
            <h2>🤝 Research Collaborators</h2>
            <div class="section">
                <div class="research-area-item"><strong>Jaydeb Chakrabarti</strong> (Senior Professor, S N Bose National Centre for Basic Sciences, Kolkata, IN)</div>
                <div class="research-area-item"><strong>Pinaki Chaudhuri</strong> (Professor, The Institute of Mathematical Sciences, Chennai, IN)</div>
                <div class="research-area-item"><strong>Kirsten Martens</strong> (CNRS Researcher, University of Grenoble Alpes, Grenoble, FR)</div>
                <div class="research-area-item"><strong>Chandan Dasgupta</strong> (Honorary Professor, Indian Institute of Sciences, Bengaluru, IN)</div>
                <div class="research-area-item"><strong>Madan Rao</strong> (Senior Professor, National Centre for Biological Sciences -TIFR, Bengaluru, IN)</div>
                <div class="research-area-item"><strong>Vinay Vaibhav</strong> (Post Doctoral Fellow, University of Goettingen, DE)</div>
                <div class="research-area-item"><strong>Raffaela Cabriolu</strong> (Associate Professor, Norwegian University of Science and Technology, NO)</div>
                <div class="research-area-item"><strong>Tamoghna Kanti Das</strong> (Assistant Professor, WPA-NanoLSI - Kanazawa University, JP)</div>
                <div class="research-area-item"><strong>AM Parvez Biswas</strong> (Solution Architect - Enterprise Systems, Data & Integration, Tata Consultancy Services, IN)</div>
                 <div class="research-area-item"><strong>Souvick Das</strong> (Post Doctoral Fellow, University of Luxembourg, LU)</div>
                 <div class="research-area-item"><strong> Nivedita Pavithran </strong> (Professor, Amrita Hospital-Kochi, IN)</div>
                 <div class="research-area-item"><strong> Chakravarthy S Maddipati </strong> (Professor, Amrita Hospital-Kochi, IN)</div>
                 <div class="research-area-item"><strong> Sudip Kumar Batabyal </strong> (Professor, Amrita Vishwa Vidyapeetham, IN)</div>
            </div>

            <h2>🏆 Awards & Recognition</h2>
            <div class="section">
                <ul>
                    <li><strong>Project Awarded: EUROHPC-Joint Undertaking Benchmark Access</strong> (2025-2026) (PI: Raffaela Cabriolu, CoPI: S. Dutta).</li>
                    <li><strong>Project Awarded: Development of a Proof-of-Concept Multimodal Agentic AI System for Advanced Geological Well Log Analysis</strong> (PI: Abhijith A, Project in partnership with Telesto Energy Pvt. Ltd. via The Directorate of Corporate & Industry Relations, Amrita Vishwa Vidyapeetham, Coimbatore) (PI: Abhijit A., CoPI: Sai N Sundarakrishna, T. Subeesh and S. Dutta) (2025-2026).</li>
                    <li><strong>Best Oral Presenter</strong> at the Condensed Matter and Statistical Physics Symposium, Presidency University (August 2024).</li>
                    <li><strong>Visiting Research Grant</strong> from the Indo-French Centre for the Promotion of Advanced Research (IFC-PAR/CEFIPRA) (2019, 2018).</li>
                    <li><strong>Post BSc Integrated PhD Research Fellowship</strong> (2010-18).</li>
                    <li><strong>National Merit Scholarship</strong> (2004).</li>
                </ul>
            </div>
        </div>
        
        <!-- NEW: Playground Page (Chatbot moved here) -->
        <div id="playground" class="page-content">
            <h2>🎮 Swarm Intelligence</h2>
            <div class="section">
                <p>Unleash the swarm. Take control of the artificial 'intelligence' and guide its trajectory toward the target in the simulation below. Acknowledgement: Harish Kumaar S, S. Sri Raghav Vatsan, Neelanjana. J A, Aryananda M, M. Bijoy, Ghadige R, D. Jayesh, Prithve KC, A. Jagdish (Ongoing) </p>
                <div class="playground-container">
                    <iframe src="boids_lj_interactive.html" frameborder="0"></iframe>
                </div>
            </div>
        </div>

    </div>

    <script>
        window.addEventListener('DOMContentLoaded', () => {
           
            // --- CONFIGURATION ---
            const CLASSROOM_PASSCODE = '23MAT106';

            // --- Multi-Theme Metadata ---
            const THEMES = {
                quantum: { name: 'Quantum', icon: '🌌' },
                aurora: { name: 'Aurora', icon: '🌿' },
                solar: { name: 'Solar', icon: '🔥' },
                obsidian: { name: 'Obsidian', icon: '💎' },
                opal: { name: 'Opal Day', icon: '☀️' }
            };

            // --- DOM Elements ---
            const navLinks = document.querySelectorAll('.nav-link');
            const pageContents = document.querySelectorAll('.page-content');
            const passwordForm = document.getElementById('password-form');
            const passwordInput = document.getElementById('passcode-input');
            const passwordErrorMsg = document.getElementById('password-error-message');
            const classroomPrompt = document.getElementById('password-prompt-container');
            const classroomContent = document.getElementById('classroom-content');

            // --- Theme Switcher Logic ---
            const themeToggleBtn = document.getElementById('theme-toggle');
            const themeMenu = document.getElementById('theme-menu');
            const themeIcon = document.getElementById('theme-toggle-icon');
            const themeText = document.getElementById('theme-toggle-text');
            const themeOptions = document.querySelectorAll('.theme-opt');

            function applyTheme(themeKey) {
                // Backward compatibility mapping
                if (themeKey === 'dark') themeKey = 'quantum';
                if (themeKey === 'light') themeKey = 'opal';
                if (!THEMES[themeKey]) themeKey = 'quantum';

                document.documentElement.setAttribute('data-theme', themeKey);
                themeIcon.textContent = THEMES[themeKey].icon;
                themeText.textContent = THEMES[themeKey].name;

                themeOptions.forEach(opt => {
                    if (opt.getAttribute('data-theme-val') === themeKey) {
                        opt.classList.add('active');
                    } else {
                        opt.classList.remove('active');
                    }
                });

                localStorage.setItem('ilab_theme', themeKey);
            }

            // Detect saved theme or initialize default
            const savedTheme = localStorage.getItem('ilab_theme') || 'quantum';
            applyTheme(savedTheme);

            // Toggle dropdown menu
            themeToggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                themeMenu.classList.toggle('show');
            });

            // Option selection
            themeOptions.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const chosen = btn.getAttribute('data-theme-val');
                    applyTheme(chosen);
                    themeMenu.classList.remove('show');
                });
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!themeMenu.contains(e.target) && !themeToggleBtn.contains(e.target)) {
                    themeMenu.classList.remove('show');
                }
            });

            // --- Navigation Logic ---
            function switchTab(targetId) {
                navLinks.forEach(nav => nav.classList.remove('active'));
                pageContents.forEach(content => content.classList.remove('active'));

                const activeLinks = document.querySelectorAll(`.nav-link[href="${targetId}"]`);
                activeLinks.forEach(link => {
                    link.classList.add('active');
                    link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                });

                const activeContent = document.querySelector(targetId);
                if (activeContent) activeContent.classList.add('active');
               
                // Special check for classroom page
                if(targetId === '#classroom') {
                    checkClassroomAccess();
                }

                // Reset teaching dashboard state when navigating away/to
                if(targetId === '#teaching') {
                    closeTeachingSection();
                }
            }

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (window.location.hash !== targetId) {
                        history.pushState ? history.pushState(null, null, targetId) : window.location.hash = targetId;
                    }
                    switchTab(targetId);
                });
            });

            function handleHashChange() {
                const currentHash = window.location.hash || '#highlight';
                switchTab(currentHash);
            }

            window.addEventListener('popstate', handleHashChange);
            handleHashChange(); // Initial page load

            // --- Classroom Passcode Logic ---
            function checkClassroomAccess() {
                if (sessionStorage.getItem('classroomAccessGranted') === 'true') {
                    classroomPrompt.style.display = 'none';
                    classroomContent.classList.remove('hidden');
                    closeCourse();
                } else {
                    classroomPrompt.style.display = 'block';
                    classroomContent.classList.add('hidden');
                }
            }
           
            if (passwordForm) {
                passwordForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    if (passwordInput.value.trim() === CLASSROOM_PASSCODE) {
                        sessionStorage.setItem('classroomAccessGranted', 'true');
                        passwordErrorMsg.textContent = '';
                        passwordInput.value = '';
                        checkClassroomAccess();
                    } else {
                        passwordErrorMsg.textContent = 'Incorrect passcode. Please try again.';
                        passwordInput.value = '';
                    }
                });
            }
        });

        // --- Live Classroom Dashboard Logic ---
        function openCourse(courseId) {
            document.getElementById('classroom-dashboard').style.display = 'none';
            const views = document.querySelectorAll('.course-detail-view');
            views.forEach(view => view.classList.remove('active'));
            const target = document.getElementById(courseId);
            if(target) target.classList.add('active');
            document.querySelector('.container').scrollIntoView({behavior: 'smooth'});
        }

        function closeCourse() {
            const views = document.querySelectorAll('.course-detail-view');
            views.forEach(view => view.classList.remove('active'));
            const dashboard = document.getElementById('classroom-dashboard');
            if(dashboard) dashboard.style.display = 'block';
        }

        // --- Teaching Page Dashboard Logic ---
        function openTeachingSection(sectionId) {
            document.getElementById('teaching-dashboard').style.display = 'none';
            const views = document.querySelectorAll('.teaching-detail-view');
            views.forEach(view => view.classList.remove('active'));
            const target = document.getElementById(sectionId);
            if(target) target.classList.add('active');
            document.querySelector('.container').scrollIntoView({behavior: 'smooth'});
        }

        function closeTeachingSection() {
            const views = document.querySelectorAll('.teaching-detail-view');
            views.forEach(view => view.classList.remove('active'));
            const dashboard = document.getElementById('teaching-dashboard');
            if(dashboard) dashboard.style.display = 'block';
        }
    </script>


<script>
/* Progressive Web App installation: Chromium prompt + clear iOS/unsupported guidance. */
(() => {
  const installButton = document.getElementById('install-app');
  if (!installButton) return;

  let deferredInstallPrompt = null;
  const status = document.createElement('p');
  status.id = 'install-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  installButton.insertAdjacentElement('afterend', status);

  const isStandalone = () =>
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  const isIOS = () => /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  const isSecureContextForInstall = () =>
    window.isSecureContext || location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1';

  const showStatus = (message) => {
    status.textContent = message;
    status.classList.add('show');
  };

  if (isStandalone()) {
    installButton.hidden = true;
  } else {
    installButton.hidden = false;
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    installButton.hidden = isStandalone();
    const label = installButton.querySelector('.install-label');
    if (label) label.textContent = 'Install';
    status.classList.remove('show');
  });

  installButton.addEventListener('click', async () => {
    if (isStandalone()) {
      installButton.hidden = true;
      return;
    }

    if (!isSecureContextForInstall()) {
      showStatus('Installation requires a secure HTTPS connection. Please open this website using its HTTPS address.');
      return;
    }

    if (deferredInstallPrompt) {
      const promptEvent = deferredInstallPrompt;
      deferredInstallPrompt = null;
      try {
        await promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        if (choice && choice.outcome === 'accepted') {
          showStatus('Installation started. You can open the app from your home screen or apps list.');
        } else {
          showStatus('Installation was cancelled. You can install this website later from your browser menu.');
        }
      } catch (error) {
        showStatus('The browser could not start installation. Please use the browser menu and choose “Install app” or “Add to Home screen”.');
      }
      return;
    }

    if (isIOS()) {
      showStatus('To install on iPhone or iPad: tap the Share button in Safari, then choose “Add to Home Screen”.');
    } else {
      showStatus('To install this website, open your browser menu and choose “Install app” or “Add to Home screen”. If this option is unavailable, check that the site is served over HTTPS and has a valid web app manifest.');
    }
  });

  window.addEventListener('appinstalled', () => {
    installButton.hidden = true;
    deferredInstallPrompt = null;
    showStatus('App installed successfully.');
  });

  if ('serviceWorker' in navigator && isSecureContextForInstall()) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch((error) => {
        console.warn('Service worker registration failed:', error);
      });
    });
  }
})();
</script>

</body>
</html>
