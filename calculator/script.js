let string = "";
let buttons = document.querySelectorAll('.number');
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML === '='){
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch {
                document.querySelector('input').value = "Error";
            }
        }
        else if(e.target.innerHTML === 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})