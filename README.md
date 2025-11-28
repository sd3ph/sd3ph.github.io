```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Physics+AI — iLab Portfolio</title>

  <!-- Preconnect to speed up font loading -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@300;400;600&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">

  <!-- Chart.js (pin to a stable version; consider adding integrity attribute) -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js" defer></script>

  <style>
    :root {
      --primary-color: #2c3e50;
      --secondary-color: #7f8c8d;
      --accent-color: #e74c3c;
      --background-color: #ecf0f1;
      --card-background: #ffffff;
      --border-color: #bdc3c7;
      --nav-hover-bg: #34495e;
      --nav-active-bg: #e74c3c;
      --max-width: 960px;
    }

    /* Base */
    html,body{height:100%;margin:0;padding:0;background:var(--background-color);color:var(--primary-color);font-family:"Open Sans",sans-serif;}
    a{color:var(--accent-color);}
    img{max-width:100%;height:auto;display:block;}

    /* Page container */
    .container{max-width:var(--max-width);margin:20px auto;padding:0 16px;box-sizing:border-box;}

    /* Header / navigation */
    .main-header{background:var(--nav-hover-bg);color:#fff;border-radius:8px 8px 0 0;overflow:hidden}
    .site-title-header{padding:16px 24px}
    .site-title-header .title{font-family:'Playfair Display',serif;font-size:1.6rem;margin:0;color:#fff}
    .navbar{display:flex;justify-content:center;align-items:center;padding:8px 16px;border-top:3px solid var(--accent-color);background:transparent}
    .nav-links{display:flex;gap:12px;list-style:none;margin:0;padding:0;flex-wrap:wrap}
    .nav-links a{color:#fff;text-decoration:none;padding:8px 12px;border-radius:6px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px}
    .nav-links a:hover,.nav-links a:focus{background:var(--accent-color);outline:none}
    .nav-links a[aria-current="page"]{background:var(--accent-color)}

    /* Sections */
    main{padding:20px 0}
    .section{background:var(--card-background);padding:20px;border-radius:8px;border:1px solid var(--border-color);margin-bottom:20px;box-shadow:0 2px 8px rgba(0,0,0,0.05)}
    h1,h2,h3,h4{font-family:'Playfair Display',serif;color:var(--primary-color);margin:0 0 12px 0}
    h2{font-size:1.4rem;border-bottom:3px solid var(--accent-color);padding-bottom:8px}
    p,li{line-height:1.6;font-size:1rem;color:var(--primary-color)}

    /* Responsive layout helpers */
    .two-col{display:flex;gap:16px;flex-wrap:wrap}
    .two-col > *{flex:1 1 300px;min-width:200px}

    /* Badge / social */
    .social-links{display:flex;gap:10px;justify-content:center;align-items:center}
    .social-links img{height:28px}

    /* Analytics chart */
    .chart-container{width:100%;max-width:640px;margin:0 auto;height:220px}

    /* Chatbot widget (keeps the same behavior but add focus state) */
    #chatbot-widget{position:fixed;right:24px;bottom:24px;z-index:1000}
    #chatbot-bubble{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--accent-color);color:#fff;cursor:pointer;box-shadow:0 6px 18px rgba(0,0,0,0.15);border:none}
    #chatbot-bubble:focus{outline:3px solid rgba(231,76,60,0.25)}
    #chatbot-iframe-container{position:absolute;right:0;bottom:72px;width:360px;height:520px;border-radius:12px;overflow:hidden;box-shadow:0 12px 36px rgba(0,0,0,0.2);visibility:hidden;opacity:0;transform:translateY(8px) scale(.98);transition:all .22s ease}
    #chatbot-widget.open #chatbot-iframe-container{visibility:visible;opacity:1;transform:translateY(0) scale(1)}
    @media (max-width:480px){
      #chatbot-iframe-container{width:calc(100vw - 32px);right:8px;height:70vh}
    }

    /* Password form */
    .password-form{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
    .password-form input{padding:10px;border:1px solid var(--border-color);border-radius:6px;font-size:1rem}
    .password-form button{padding:10px 16px;border-radius:6px;background:var(--primary-color);color:#fff;border:none;cursor:pointer}
    .password-error-message{color:var(--accent-color);min-height:1.2em;text-align:center}

    /* Focus visible for keyboard users */
    :focus{outline:3px solid rgba(0,0,0,0.05);outline-offset:2px}
  </style>
</head>
<body>
  <header class="main-header" role="banner">
    <div class="container">
      <div class="site-title-header">
        <div class="title">Physics+AI</div>
      </div>
    </div>

    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="container">
        <ul class="nav-links" role="menubar">
          <li role="none"><a role="menuitem" href="#highlight" aria-current="page">Home</a></li>
          <li role="none"><a role="menuitem" href="#research">Research</a></li>
          <li role="none"><a role="menuitem" href="#publication">Publications</a></li>
          <li role="none"><a role="menuitem" href="#teaching">Teaching</a></li>
          <li role="none"><a role="menuitem" href="#about">About</a></li>
          <li role="none"><a role="menuitem" href="#latest">Latest</a></li>
          <li role="none"><a role="menuitem" href="#classroom">Live Class Room</a></li>
          <li role="none"><a role="menuitem" href="#products">Lab Products</a></li>
          <li role="none"><a role="menuitem" href="#misc">misc</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="container" id="main">
    <!-- Highlight -->
    <section id="highlight" class="section" aria-labelledby="highlight-heading">
      <h2 id="highlight-heading">Hello World!</h2>
      <p>We are a group of creative researchers exploring physics at the interface of artificial intelligence, working in a collaborative and interdisciplinary setting. Our goal is to understand natural and artificial complex systems and to develop tools that accelerate discovery.</p>

      <div class="section" aria-labelledby="join-heading">
        <h3 id="join-heading">Join Us</h3>
        <p>We are seeking creative individuals to join our lab. Email your CV and a short statement of purpose to <a href="mailto:sumandutta.avvcb@gmail.com">sumandutta.avvcb@gmail.com</a>.</p>
      </div>

      <div class="section" aria-labelledby="analytics-heading">
        <h3 id="analytics-heading">Page Analytics</h3>
        <div style="text-align:center">
          <img src="https://hitwebcounter.com/counter/counter.php?page=17152025&style=0007&nbdigits=6&type=page&initCount=120" alt="Visitor counter" style="margin:0 auto 8px auto">
          <p style="color:var(--secondary-color);margin:0 0 12px 0;"><strong>Total Visits</strong></p>
          <div class="chart-container">
            <canvas id="viewsChart" aria-label="Views in last 7 days" role="img"></canvas>
          </div>
        </div>
      </div>
    </section>

    <!-- Research (example shortened) -->
    <section id="research" class="section" aria-labelledby="research-heading">
      <h2 id="research-heading">Research Interests & Competencies</h2>
      <div class="two-col">
        <div>
          <h3>Domain Expertise</h3>
          <ul>
            <li>Collective Intelligence in Living and Artificial Systems</li>
            <li>Physics of Complex Fluids & Soft Condensed Matter</li>
            <li>AI for Scientific Discovery</li>
          </ul>
        </div>
        <div>
          <h3>Core Competencies</h3>
          <ul>
            <li>Out-of-equilibrium statistical physics</li>
            <li>High-performance computing and molecular simulations</li>
            <li>Deep learning integrated with physics</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Publications/Teaching/About/Latest/Classroom placeholders (shortened for README) -->
    <section id="publication" class="section"><h2>Publications</h2><p>See repository or website for full publication list.</p></section>
    <section id="teaching" class="section"><h2>Teaching & Mentoring</h2><p>Courses and mentoring details.</p></section>

    <section id="about" class="section" aria-labelledby="about-heading">
      <h2 id="about-heading">Group Leader</h2>
      <div class="two-col" style="align-items:center">
        <div style="max-width:120px"><img src="Image_PPic.png" alt="Suman Dutta profile picture" style="border-radius:50%;border:3px solid var(--accent-color)"></div>
        <div>
          <h3>Suman Dutta</h3>
          <p>Researcher | Intelligent Living & Artificial Systems</p>
          <div class="social-links" aria-hidden="false" aria-label="Contact links">
            <a href="mailto:sumandutta.snbncbs@gmail.com"><img src="https://img.shields.io/badge/Email-red?style=flat-square&logo=gmail&logoColor=white" alt="Email"></a>
            <a href="https://scholar.google.com/citations?user=j-83jp8AAAAJ"><img src="https://img.shields.io/badge/Google_Scholar-007bff?style=flat-square&logo=google-scholar&logoColor=white" alt="Google Scholar"></a>
            <a href="https://github.com/sd3ph"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"></a>
            <a href="https://www.linkedin.com/in/sd3ph/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
          </div>
        </div>
      </div>
    </section>

    <section id="latest" class="section"><h2>Latest News</h2><p>Timeline items go here.</p></section>

    <section id="classroom" class="section" aria-labelledby="classroom-heading">
      <h2 id="classroom-heading">Live Class Room</h2>

      <div id="password-prompt-container" class="password-prompt-container" role="region" aria-labelledby="classroom-heading">
        <h3>Access Restricted</h3>
        <p>Please enter the passcode to view course materials.</p>

        <form id="password-form" class="password-form" aria-describedby="password-error-message">
          <label for="passcode-input" class="visually-hidden">Passcode</label>
          <input id="passcode-input" name="passcode" type="password" placeholder="Enter passcode" aria-required="true" required>
          <button type="submit">Unlock</button>
        </form>
        <p id="password-error-message" class="password-error-message" aria-live="polite"></p>
      </div>

      <div id="classroom-content" hidden>
        <div class="section"><h3>Course Details</h3><ul><li><strong>Class:</strong> BTech AID</li><li><strong>Semester:</strong> Fall, 2025</li><li><strong>Course Code:</strong> 23MAT106</li></ul></div>
        <!-- add course resources here -->
      </div>
    </section>
  </main>

  <!-- Chatbot widget (basic toggle) -->
  <div id="chatbot-widget" aria-hidden="false">
    <button id="chatbot-bubble" aria-expanded="false" aria-controls="chatbot-iframe-container" title="Open chat">
      💬
    </button>
    <div id="chatbot-iframe-container" role="dialog" aria-label="Chat dialog">
      <!-- Replace src with the real chatbot URL if available -->
      <iframe src="about:blank" title="Chatbot"></iframe>
    </div>
  </div>

  <script>
    // Small client-side behaviors: chart + simple passcode check + chatbot toggle.
    // NOTE: Passcode protection is client-side only and not secure. Do not use for sensitive data.

    // Chart: a simple example dataset for the last 7 days.
    window.addEventListener('DOMContentLoaded', function () {
      // Views chart
      const ctx = document.getElementById('viewsChart');
      if (ctx) {
        const data = {
          labels: ['Day -6','Day -5','Day -4','Day -3','Day -2','Day -1','Today'],
          datasets: [{
            label: 'Page Views',
            data: [120, 150, 130, 170, 160, 140, 185],
            fill: true,
            backgroundColor: 'rgba(231,76,60,0.12)',
            borderColor: 'rgba(231,76,60,1)',
            tension: 0.3
          }]
        };
        // Chart.js 4.x usage
        new Chart(ctx, { type: 'line', data, options: { responsive: true, plugins: { legend: { display:false } }, scales: { y: { beginAtZero: true } } } });
      }

      // Simple password unlock (client-side only).
      const correctPass = 'letmein'; // placeholder: replace or remove in production
      const form = document.getElementById('password-form');
      const input = document.getElementById('passcode-input');
      const errorNode = document.getElementById('password-error-message');
      const classroomContent = document.getElementById('classroom-content');
      if (form && input && errorNode && classroomContent) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          const val = input.value.trim();
          if (val === correctPass) {
            errorNode.textContent = '';
            form.parentElement.style.display = 'none';
            classroomContent.removeAttribute('hidden');
            classroomContent.focus();
          } else {
            errorNode.textContent = 'Incorrect passcode.';
          }
        });
      }

      // Chatbot toggle
      const widget = document.getElementById('chatbot-widget');
      const bubble = document.getElementById('chatbot-bubble');
      const iframeContainer = document.getElementById('chatbot-iframe-container');
      if (bubble && widget && iframeContainer) {
        bubble.addEventListener('click', function () {
          const open = widget.classList.toggle('open');
          bubble.setAttribute('aria-expanded', String(open));
        });
      }

      // Small enhancement: update nav aria-current based on hash
      function updateNav() {
        document.querySelectorAll('.nav-links a').forEach(a => {
          if (a.getAttribute('href') === location.hash || (location.hash === '' && a.getAttribute('href') === '#highlight')) {
            a.setAttribute('aria-current', 'page');
          } else {
            a.removeAttribute('aria-current');
          }
        });
      }
      window.addEventListener('hashchange', updateNav);
      updateNav();
    });
  </script>
</body>
</html>
```
