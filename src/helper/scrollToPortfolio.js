const scrollToPortfolio = () => {
  const screen = document.getElementById('screen');
  const nav = document.getElementById('nav');
  const profile = document.getElementById('profile');
  const height = nav.offsetHeight + profile.offsetHeight;
  screen.scrollTo({
    top: height,
    left: 0,
    behavior: 'smooth'
  });
};

export default scrollToPortfolio;