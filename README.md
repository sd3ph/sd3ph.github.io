<script>
        window.addEventListener('DOMContentLoaded', () => {
           
            // --- CONFIGURATION ---
            const CLASSROOM_PASSCODE = '23MAT106'; 

            // --- DOM Elements ---
            const navLinks = document.querySelectorAll('.nav-link');
            const pageContents = document.querySelectorAll('.page-content');
            const chatbotBubble = document.getElementById('chatbot-bubble');
            const chatbotWidget = document.getElementById('chatbot-widget');
            const passwordForm = document.getElementById('password-form');
            const passwordInput = document.getElementById('passcode-input');
            const passwordErrorMsg = document.getElementById('password-error-message');
            const classroomPrompt = document.getElementById('password-prompt-container');
            const classroomContent = document.getElementById('classroom-content');

            // --- Navigation Logic ---
            function switchTab(targetId) {
                navLinks.forEach(nav => nav.classList.remove('active'));
                pageContents.forEach(content => content.classList.remove('active'));

                const activeLink = document.querySelector(`.nav-link[href="${targetId}"]`);
                if (activeLink) activeLink.classList.add('active');

                const activeContent = document.querySelector(targetId);
                if (activeContent) activeContent.classList.add('active');
               
                if(targetId === '#classroom') {
                    checkClassroomAccess();
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
            handleHashChange(); 

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

            // --- Chatbot Logic ---
            if (chatbotBubble && chatbotWidget) {
                chatbotBubble.addEventListener('click', () => {
                    chatbotWidget.classList.toggle('open');
                });
            }

            // --- Physics Research Explorer Logic ---
            initPhysicsExplorer();
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

        // --- Physics Research Explorer Script ---
        function initPhysicsExplorer() {
            const topics = [
                { id: 'chemistry', name: 'Chemistry', emoji: '⚗️' },
                { id: 'biology', name: 'Biology', emoji: '🧬' },
                { id: 'technology', name: 'Technology', emoji: '💻' },
                { id: 'engineering', name: 'Engineering', emoji: '🔧' },
                { id: 'medical', name: 'Medical Science', emoji: '🏥' },
                { id: 'indian-systems', name: 'Indian Knowledge Systems', emoji: '📚' }
            ];

            const grid = document.getElementById('topicsGrid');
            if(grid) {
                grid.innerHTML = ''; // Clear existing to prevent duplicates on reload
                topics.forEach(topic => {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = `
                        <input type="checkbox" id="${topic.id}" class="pre-topic-checkbox" value="${topic.id}">
                        <label for="${topic.id}" class="pre-topic-label">
                            <strong>${topic.emoji} ${topic.name}</strong>
                            <small>+ Physics</small>
                        </label>
                    `;
                    grid.appendChild(wrapper);
                });
            }

            const generateBtn = document.getElementById('generateBtn');
            const clearBtn = document.getElementById('clearBtn');

            if(generateBtn) {
                // Remove old listeners to prevent stacking
                const newBtn = generateBtn.cloneNode(true);
                generateBtn.parentNode.replaceChild(newBtn, generateBtn);
                newBtn.addEventListener('click', generateIdeas);
            }
            
            if(clearBtn) {
                 const newClear = clearBtn.cloneNode(true);
                 clearBtn.parentNode.replaceChild(newClear, clearBtn);
                 newClear.addEventListener('click', () => {
                    document.querySelectorAll('.pre-topic-checkbox').forEach(cb => cb.checked = false);
                    document.getElementById('researchQuery').value = '';
                    document.getElementById('resultsSection').style.display = 'none';
                });
            }
        }

        async function generateIdeas() {
            const topicsList = [
                { id: 'chemistry', name: 'Chemistry' },
                { id: 'biology', name: 'Biology' },
                { id: 'technology', name: 'Technology' },
                { id: 'engineering', name: 'Engineering' },
                { id: 'medical', name: 'Medical Science' },
                { id: 'indian-systems', name: 'Indian Knowledge Systems' }
            ];
            
            const selectedTopics = Array.from(document.querySelectorAll('.pre-topic-checkbox:checked')).map(cb => {
                return topicsList.find(t => t.id === cb.value).name;
            });
            const query = document.getElementById('researchQuery').value;
            const apiKey = document.getElementById('apiKey').value.trim();
            const btn = document.getElementById('generateBtn');
            const messageBox = document.getElementById('messageBox');
            const container = document.getElementById('ideasContainer');

            // Validation
            if (selectedTopics.length === 0) {
                alert('Please select at least one domain.');
                return;
            }

            // UI Loading State
            btn.disabled = true;
            btn.innerHTML = '<span class="pre-spinner"></span> Processing...';
            messageBox.innerHTML = '';
            container.innerHTML = '';
            document.getElementById('resultsSection').style.display = 'block';

            try {
                let ideas = [];
                
                // If API Key is present, try Gemini
                if (apiKey) {
                    ideas = await callGeminiAPI(selectedTopics, query, apiKey);
                    displayIdeas(ideas, selectedTopics, true);
                } else {
                    // Fallback to RANDOMIZED local ideas if no key provided
                    console.warn("No API Key provided. Using randomized local fallback.");
                    messageBox.innerHTML = '<div class="pre-error-message">⚠️ <strong>No API Key detected.</strong><br>Showing randomized examples from our offline database.<br>To get real AI results, get a free key from <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>.</div>';
                    
                    // Simulate processing delay for realism
                    await new Promise(r => setTimeout(r, 800)); 
                    
                    ideas = generateRandomLocalIdeas(selectedTopics);
                    displayIdeas(ideas, selectedTopics, false);
                }

            } catch (error) {
                console.error('Generation Error:', error);
                messageBox.innerHTML = `<div class="pre-error-message">Error: ${error.message}. <br>Showing offline backup ideas instead.</div>`;
                const ideas = generateRandomLocalIdeas(selectedTopics);
                displayIdeas(ideas, selectedTopics, false);
            } finally {
                btn.disabled = false;
                btn.innerHTML = '🚀 Generate Ideas';
            }
        }

        async function callGeminiAPI(topics, query, apiKey) {
            const prompt = `
                Act as a physics research assistant. Generate 4 innovative research ideas that combine Physics with: ${topics.join(', ')}.
                ${query ? `Focus specificially on: ${query}.` : ''}
                
                Return ONLY a JSON array. Do not include markdown formatting like \`\`\`json.
                The JSON objects must have these fields:
                - title (string)
                - description (2-3 sentences explaining physics principles and application)
                - domains (comma separated string)
                - impact (string: "High", "Medium", or "Low")
            `;

            // Using Gemini 1.5 Flash (Faster/Cheaper free tier) or Pro
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }]
                })
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error?.message || 'API Call Failed');
            }

            const data = await response.json();
            let textResponse = data.candidates[0].content.parts[0].text;

            // Clean up markdown if Gemini adds it despite instructions
            textResponse = textResponse.replace(/```json/g, '').replace(/```/g, '').trim();

            return JSON.parse(textResponse);
        }

        // --- NEW: EXTENSIVE LOCAL DATABASE FOR "OFFLINE" MODE ---
        function generateRandomLocalIdeas(selectedTopics) {
            // A pool of varied ideas to pick from randomly
            const library = [
                { title: 'Quantum Entanglement Sensors', description: 'Utilizing quantum mechanical entanglement to create ultra-sensitive sensors for detecting minute chemical changes.', domains: 'Physics, Chemistry', impact: 'High' },
                { title: 'Bio-Mimetic Aerodynamics', description: 'Studying the fluid dynamics of bird flight to engineer more efficient drone propellers based on evolutionary biology.', domains: 'Physics, Biology', impact: 'Medium' },
                { title: 'Thermodynamic Data Storage', description: 'Exploring entropy-based coding for high-density data storage systems using phase-change materials.', domains: 'Physics, Technology', impact: 'High' },
                { title: 'Nano-fluidic Drug Delivery', description: 'Applying fluid dynamics at the nanoscale to precisely target drug delivery within the human body.', domains: 'Physics, Medical', impact: 'High' },
                { title: 'Fractal Antenna Design', description: 'Using fractal geometry physics to design compact, multi-band antennas for 6G communication.', domains: 'Physics, Engineering', impact: 'Medium' },
                { title: 'Photosynthetic Photovoltaics', description: 'Mimicking the quantum efficiency of plant photosynthesis to create superior solar panels.', domains: 'Physics, Biology', impact: 'High' },
                { title: 'Non-Newtonian Armor', description: 'Developing liquid body armor using shear-thickening fluids that harden instantly upon impact.', domains: 'Physics, Engineering', impact: 'High' },
                { title: 'Vedic Acoustics in Architecture', description: 'Analyzing ancient Indian acoustic principles to design modern auditoriums with perfect sound distribution.', domains: 'Physics, IKS', impact: 'Medium' },
                { title: 'Superconducting MRI Magnets', description: 'Developing high-temperature superconductors to make MRI machines portable and cheaper.', domains: 'Physics, Medical', impact: 'High' },
                { title: 'Algorithmic Material Discovery', description: 'Using physics-informed neural networks (PINNs) to predict properties of new alloys before synthesis.', domains: 'Physics, Technology', impact: 'High' },
                { title: 'Chaos Theory in Cardiology', description: 'Applying non-linear dynamics to detect early warning signs of cardiac arrest in ECG patterns.', domains: 'Physics, Medical', impact: 'High' },
                { title: 'Piezoelectric Roads', description: 'Harvesting kinetic energy from vehicle traffic using piezoelectric materials embedded in asphalt.', domains: 'Physics, Engineering', impact: 'Medium' },
                { title: 'Quantum Encryption for IoT', description: 'Implementing lightweight quantum key distribution for securing Internet of Things devices.', domains: 'Physics, Technology', impact: 'High' },
                { title: 'Ayurvedic Nanomedicine', description: 'Investigating the physico-chemical properties of Bhasmas (nano-medicines) in traditional Indian medicine.', domains: 'Physics, IKS, Medical', impact: 'Medium' },
                { title: 'Micro-Gravity Crystallization', description: 'Growing perfect protein crystals in space to design better pharmaceutical inhibitors.', domains: 'Physics, Chemistry', impact: 'Medium' },
                { title: 'Metamaterial Cloaking', description: 'Using optical physics and metamaterials to bend light around objects, rendering them invisible to specific wavelengths.', domains: 'Physics, Engineering', impact: 'Low' }
            ];

            // 1. Filter library to try and match selected topics (optional refinement)
            // If no match found, use the whole library
            let pool = library.filter(idea => {
                const ideaDomains = idea.domains.toLowerCase();
                return selectedTopics.some(topic => ideaDomains.includes(topic.toLowerCase()) || 
                                          (topic === 'Indian Knowledge Systems' && ideaDomains.includes('iks')));
            });

            if (pool.length < 4) pool = library; // Fallback to full library if filter is too strict

            // 2. Shuffle and pick 4
            const shuffled = pool.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 4);
        }

        function displayIdeas(ideas, topicNames, isLive) {
            const container = document.getElementById('ideasContainer');
            const messageBox = document.getElementById('messageBox');
            
            if(isLive) {
                messageBox.innerHTML = `<div class="pre-success-message">✓ Generated ${ideas.length} fresh ideas using Google Gemini.</div>`;
            }

            ideas.forEach((idea, index) => {
                const domains = idea.domains.split(',').map(d => `<span class="pre-tag">${d.trim()}</span>`).join('');
                const impactClass = `pre-impact-${idea.impact.toLowerCase()}`;
                
                const card = document.createElement('div');
                card.className = 'pre-idea-card';
                card.innerHTML = `
                    <div class="pre-idea-title">${index + 1}. ${idea.title}</div>
                    <div class="pre-idea-description">${idea.description}</div>
                    <div class="pre-idea-tags">
                        <span class="pre-tag" style="background:#e0e7ff; color:#4338ca">Physics</span>
                        ${domains}
                        <span class="pre-tag ${impactClass}">Impact: ${idea.impact}</span>
                    </div>
                `;
                container.appendChild(card);
            });
        }
    </script>
