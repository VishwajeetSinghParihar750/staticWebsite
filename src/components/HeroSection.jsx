import React from 'react';

// Smooth scroll function
const smoothScrollBy = (x, y, duration) => {
  const startTime = performance.now();
  const initialY = window.scrollY;

  const step = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const scrollAmount = easeInOutQuad(timeElapsed, initialY, y, duration);
    window.scrollTo(0, scrollAmount);

    if (timeElapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

// Easing function for smooth effect
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

const HeroSection = () => {
  const scrollToSection = () => {
    document.getElementById('whoWeAre').scrollIntoView({ behavior: 'smooth' });
  
    // Adding smooth scroll after a small delay
    setTimeout(() => {
      smoothScrollBy(0, -60, 300); // Scroll up by -60px over 300ms
    }, 500);
  };
  return (
    <section
      id="home"
      className="relative text-white h-screen flex items-center justify-center flex-col"
      style={{
        background: 'radial-gradient(circle at center, rgba(255, 223, 138, 1), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.5), rgba(34, 100, 34, 0.9))',
      }}
    >
      <div className="relative z-10 text-center max-sm:px-2 max">
        <h2 className="text-5xl font-bold mb-6">AIDSPOT</h2>
        <p className="text-3xl font-light mb-8">Your Trusted Partner for AI Digital Spots</p>

        <div className="bg-black text-white rounded-full py-4 px-8 my-8 bg-opacity-20">
          <p className="text-2xl font-semibold">100% Solar Powered</p>
          <p className="text-lg">Eco-friendly and sustainable energy solution for a brighter future.</p>
        </div>
        
      </div>
      <div
        onClick={scrollToSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        style={{
          width: '40px',
          height: '40px',
          backgroundImage: 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MTIiIGlkPSJzdmcyIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzIGlkPSJkZWZzNCIvPjxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTU0MC4zNjIyKSI+PHBhdGggZD0ibSAxMjcuNDA2MjUsNjU3Ljc4MTI1IGMgLTQuOTg1MywwLjA3ODQgLTkuOTEwNzcsMi4xNjMwOCAtMTMuNDM3NSw1LjY4NzUgbCAtNTUsNTUgYyAtMy42MDA1NjUsMy41OTkyNyAtNS42OTY4ODMsOC42NTg5NSAtNS42OTY4ODMsMTMuNzUgMCw1LjA5MTA1IDIuMDk2MzE4LDEwLjE1MDczIDUuNjk2ODgzLDEzLjc1IEwgMjQyLjI1LDkyOS4yNSBjIDMuNTk5MjcsMy42MDA1NiA4LjY1ODk1LDUuNjk2ODggMTMuNzUsNS42OTY4OCA1LjA5MTA1LDAgMTAuMTUwNzMsLTIuMDk2MzIgMTMuNzUsLTUuNjk2ODggTCA0NTMuMDMxMjUsNzQ1Ljk2ODc1IGMgMy42MDA1NiwtMy41OTkyNyA1LjY5Njg4LC04LjY1ODk1IDUuNjk2ODgsLTEzLjc1IDAsLTUuMDkxMDUgLTIuMDk2MzIsLTEwLjE1MDczIC01LjY5Njg4LC0xMy43NSBsIC01NSwtNTUgYyAtMy41OTgxNSwtMy41OTEyNyAtOC42NTA2OCwtNS42ODEyNyAtMTMuNzM0MzgsLTUuNjgxMjcgLTUuMDgzNjksMCAtMTAuMTM2MjIsMi4wOSAtMTMuNzM0MzcsNS42ODEyNyBMIDI1Niw3NzguMDMxMjUgMTQxLjQzNzUsNjYzLjQ2ODc1IGMgLTMuNjY2NzgsLTMuNjY0MjMgLTguODQ4MDEsLTUuNzY0NDIgLTE0LjAzMTI1LC01LjY4NzUgeiIgaWQ9InBhdGgzNzY2LTEiIHN0eWxlPSJmb250LXNpemU6bWVkaXVtO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO2xpbmUtaGVpZ2h0Om5vcm1hbDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2RpcmVjdGlvbjpsdHI7YmxvY2stcHJvZ3Jlc3Npb246dGI7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO2NvbG9yOiMwMDAwMDA7ZmlsbDojMjIyMjIyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozOC44ODAwMDEwNzttYXJrZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlO2ZvbnQtZmFtaWx5OlNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpTYW5zIi8+PC9nPjwvc3ZnPg==)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          animation: 'bounce 2s infinite',
        }}
      />
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-15px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
