window.onload = () => {
  document.body.classList.remove("container");

  // Typewriter effect
  const text = `Happy Birthday, dear Celuny,  
a beacon in my life's grand sea.  
You mean so much, truly, profoundly,  
my precious friend, for all to see.

And beyond the bond of friendship's grace,  
you shine so bright, in every space.  
My precious girl, with heart so pure,  
a gentle soul, of whom I'm sure.

May this new year, with skies so vast,  
bring endless joy, a joy to last.  
May grand adventures find your way,  
each rising sun, a brighter day.

Happy Birthday sweet Celuny,  
may life’s best gifts now come to thee.`;
  let i = 0;
  const speed = 50; // Adjustable typing speed (ms per character)
  const container = document.getElementById("typewriter-text");
  const totalChars = text.length;
  const audio = document.getElementById("music");
  const audioDuration = audio.duration || 180; // Default to 180s (3 minutes) if duration unavailable

  function typeWriter() {
    if (i < totalChars) {
      container.textContent += text.charAt(i);
      i++;
      const progress = i / totalChars;
      const delay = speed * (1 - progress * 0.5); // Gradually speed up
      setTimeout(typeWriter, delay);
    }
  }
  typeWriter();

  // Audio playback
  audio.volume = 0.5;
  audio.play().catch((error) => {
    console.error("Audio playback failed:", error);
    // Fallback: Add click event to start audio
    document.addEventListener("click", () => {
      audio.play().catch((error) => console.error("Audio playback failed on click:", error));
      document.removeEventListener("click", arguments.callee);
    });
  });

  // Ensure animation duration matches audio
  audio.onloadedmetadata = () => {
    document.body.style.animationDuration = `${audio.duration}s`;
  };
};
