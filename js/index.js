window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
  
    // Adjust speed for each layer
    document.querySelector('.layer1').style.transform = `translateY(${scrollPosition * 0.1}px)`;
    document.querySelector('.layer2').style.transform = `translateY(${scrollPosition * 0.2}px)`;
    document.querySelector('.layer3').style.transform = `translateY(${scrollPosition * 0.3}px)`;
    document.querySelector('.layer4').style.transform = `translateY(${scrollPosition * 0.4}px)`;
    document.querySelector('.layer5').style.transform = `translateY(${scrollPosition * 0.5}px)`;
    document.querySelector('.layer6').style.transform = `translateY(${scrollPosition * 0.6}px)`;
    document.querySelector('.layer7').style.transform = `translateY(${scrollPosition * 0.7}px)`;
    document.querySelector('.layer8').style.transform = `translateY(${scrollPosition * 0.8}px)`;
    document.querySelector('.layer9').style.transform = `translateY(${scrollPosition * 0.9}px)`;
    document.querySelector('.layer10').style.transform = `translateY(${scrollPosition * 1.0}px)`;
    document.querySelector('.layer11').style.transform = `translateY(${scrollPosition * 1.1}px)`;
    document.querySelector('.layer12').style.transform = `translateY(${scrollPosition * 1.2}px)`;
    document.querySelector('.layer13').style.transform = `translateY(${scrollPosition * 1.3}px)`;
    document.querySelector('.layer14').style.transform = `translateY(${scrollPosition * 1.4}px)`;
    document.querySelector('.layer15').style.transform = `translateY(${scrollPosition * 1.5}px)`;
  });