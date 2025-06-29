 const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply saved theme on load
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

  // Toggle on click
  toggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  });