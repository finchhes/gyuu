window.addEventListener('load', () => {

  setTimeout(() => {

    document.getElementById('preloader').style.opacity = '0';
    
    setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
    }, 200); 
  }, 1000);
});
