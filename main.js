let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #FFBCF4;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #DE66FD;">Estudio y admiro la naturaleza.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
