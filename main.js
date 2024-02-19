let menutoggle = document.querySelector('.toggle')
    menutoggle.onclick = function(){
            menutoggle.classList.toggle('active')
            const sidebar = document.querySelector('.navigation')
            sidebar.style.display = 'flex'    
                
            }
let hidesidebar = document.querySelector('.toggle')
        hidesidebar.onclick = function(){
            menutoggle.classList.toggle('deactive')
            const sidebar = document.querySelector('.navigation')
            sidebar.style.display = 'none' 
            }