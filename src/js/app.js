// TODO: write code here

(() => {
    let playing = true,
      activeHole = 1;
  
    const stop = () => playing = true,
      deactivateHole = () => document.querySelector('.hole_has-goblin').classList.remove('hole_has-goblin'),
      activateHole = index => document.querySelector(`.hole${index}`).classList.add('hole_has-goblin'),
      next = () => setTimeout(() => {
        if ( !playing ) {
          return;
        }
        deactivateHole();
        activeHole = Math.floor( 1 + Math.random() * 16 );
        activateHole( activeHole );
        next();
      }, 800 );
  
    next();
  })();

for (let index = 1; index < 17; index += 1) {
    const hole = document.querySelector(`.hole${index}`);
    hole.onclick = function() {
        if(hole.classList.contains('hole_has-goblin')) {
            alert ("You've catched it");
        } else {
          alert ("You've missed it");
        };
      };
  };
