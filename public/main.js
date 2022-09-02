const para = document.getElementById("nickname");
        para.addEventListener('click', updateName);
        let debug = true;
        
        

        function nameCheck() {
            let name = localStorage.getItem('session-nick');
            if(name != (null || "null")){
                console.log("Loading nickname!");
                para.textContent = "nickname: " + name;
                return true;
            }else{
                updateName();
                return true;
            }
        }

        function updateName() {
            let name = prompt('Enter the user name');
            switch(name){
                case null:

                case "null":
                    name = "Guest";
                default:
                    if(debug == true){
                        console.log("User prompted for name change.");
                        console.log("User changed name to " + name + ".");
                    }
                    localStorage.setItem( 'session-nick', name);
                    para.textContent = "nickname: " + name
            }
            
            
        }