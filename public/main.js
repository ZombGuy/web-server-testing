const para = document.getElementById("nickname");
        para.addEventListener('click', updateName);
        let debug = true;
        function updateName() {
            let name = prompt('Enter the user name');
            if(debug == true){
                console.log("User prompted for name change.");
                console.log("User changed name to " + name + ".");
            }
            sessionStorage.setItem( 'session-nick', name);
            para.textContent = "nickname: " + name
            
        }