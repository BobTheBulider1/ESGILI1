// Navbar Scrolled
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Advanced Inertia Parallax Engine (Lerp)
        let currentScrollY = 0;
        let targetScrollY = 0;
        const lerp = (start, end, factor) => start + (end - start) * factor;

        const parallaxElements = [
            { el: document.querySelector('.blob-1'), speed: 0.1, rotSpeed: 0 },
            { el: document.getElementById('shape1'), speed: 0.2, rotSpeed: 0 },
            { el: document.getElementById('shape2'), speed: -0.15, rotSpeed: 0 },
            { el: document.getElementById('hero-bg'), speed: 0.4, rotSpeed: 0 }
        ];

        window.addEventListener('scroll', () => {
            targetScrollY = window.scrollY;
        });

        function animateParallax() {
            currentScrollY = lerp(currentScrollY, targetScrollY, 0.06); // Smoothness factor

            parallaxElements.forEach(item => {
                if (item.el) {
                    const yPos = currentScrollY * item.speed;
                    const rotation = currentScrollY * item.rotSpeed;
                    
                    if(item.rotSpeed !== 0) {
                        // Using translate3d and rotate3d for hardware acceleration
                        item.el.style.transform = `translate3d(0, ${yPos}px, 0) rotate3d(1, 1, 1, ${rotation}deg)`;
                    } else {
                        item.el.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    }
                }
            });

            requestAnimationFrame(animateParallax);
        }
        
        animateParallax();

        // Particles Generation
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 6 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.bottom = `${(Math.random() * 100) - 20}%`;
            particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particlesContainer.appendChild(particle);
        }

        // 3D Tilt & Glow Effect for Menu Cards
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        
        if (!isMobile) {
            const cards = document.querySelectorAll('.menu-card');
            cards.forEach(card => {
                const glow = card.querySelector('.glow');
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    // Glow positioning
                    if(glow) {
                        glow.style.left = `${x}px`;
                        glow.style.top = `${y}px`;
                    }
                    
                    // 3D rotation logic
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg
                    const rotateY = ((x - centerX) / centerX) * 8;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
                    card.style.transition = 'transform 0.5s ease, box-shadow 0.3s ease';
                });
                card.addEventListener('mouseenter', () => {
                    card.style.transition = 'transform 0.1s ease, box-shadow 0.3s ease';
                });
            });
        }

        // Reveal Animations
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal(); // Trigger on load

        // Counter Animation for 1600+
        const counterElement = document.getElementById('review-counter');
        let counterStarted = false;

        function startCounter() {
            if (!counterElement || counterStarted) return;
            counterStarted = true;
            
            const target = +counterElement.getAttribute('data-target');
            let count = 0;
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); 
            
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    counterElement.innerText = target;
                    clearInterval(timer);
                } else {
                    counterElement.innerText = Math.floor(count);
                }
            }, 16);
        }

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        if (counterElement) {
            counterObserver.observe(counterElement);
        }