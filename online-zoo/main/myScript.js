//Open menu

let openMenu = document.querySelector('.nav-toggle'),
    menu = document.querySelector('.header__inner');
    // let closeMenu = openMenu.classList.add('active');

   
    // if (openMenu.onclick)
    //     {menu.classList.add('active');
    //     openMenu.classList.add('active')}

   // if (menu.classList.add('active')) {
        //     openMenu.addEventListener('click', ()=>{
        //     menu.classList.remove('active');
        //     openMenu.classList.remove('active');
        // })
        //   }

        // if (openMenu.contains('active')) {
        //     openMenu.addEventListener('click', ()=>{
        //              menu.classList.remove('active');
        //              openMenu.classList.remove('active');
        //          })
        //   }

    openMenu.addEventListener('click', ()=>{
        
        menu.classList.toggle('active');
      openMenu.classList.toggle('active');
      
    });

    window.onclick = (e) => {
        if (e.target ==menu) {
            menu.classList.remove('active');
            openMenu.classList.remove('active');
        }
    }

    

    // closeMenu.addEventListener('click', ()=>{
    //     menu.classList.remove('active');
    //      openMenu.classList.remove('active');
    // } )

//Slider


      