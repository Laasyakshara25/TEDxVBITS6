
    function toggleMenu() {
      const menuIcon = document.getElementById('menuIcon');
      const fullscreenMenu = document.getElementById('fullscreenMenu');

      menuIcon.classList.toggle('active');
      fullscreenMenu.classList.toggle('show');
    }




// Vanta Background
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xea2414,         // 🔴 Red lines
  backgroundColor: 0x000000, // ⚫ Black background
  points: 10.0,              // Optional: change dot count
  maxDistance: 20.0,         // Optional: adjust spacing
  spacing: 15.0 
});
