import FontFaceObserver from 'fontfaceobserver';

function testFonts() {
  if (document.documentElement.className.indexOf('fonts-loaded' ) > -1) {
    return;
  }

  const fontA = new FontFaceObserver('Dosis');
  const fontB = new FontFaceObserver('Roboto');
  const fontC = new FontFaceObserver('Roboto Mono');

  Promise.all([fontA.load(), fontB.load()]).then(() => {
    document.documentElement.className += ' fonts-loaded';
    localStorage.setItem('fontsLoaded', true);
  });
}

testFonts();
