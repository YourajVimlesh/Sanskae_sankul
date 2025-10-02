<script>
  // List of hero background images
  const heroImages = [
    "schooldb.png",
    "schhooldb1.png",
    "schooldb2.png",
    "schooldb3.png"
  ];

  let currentIndex = 0;
  const heroSection = document.querySelector(".hero");

  function changeBackground() {
    heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % heroImages.length;
  }

  // Initial background
  changeBackground();

  // Change every 5 seconds
  setInterval(changeBackground, 5000);
</script>
