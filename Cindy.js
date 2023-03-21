let formContainer = 1;

const form = document.querySelector('#form')
const stage1 = document.querySelector("#stage1")
const stage2 = document.querySelector("#stage2")
const stage3 = document.querySelector("#stage3")
const next = document.querySelector("#next")
const back = document.querySelector("#back")

console.log('next', {next});

next.addEventListener("click", nextHandler)
back.addEventListener("click", backHandler)

stage1.style.display = 'none';
stage2.style.display = 'none';
stage3.style.display = 'none';

function showing() {
    if (formContainer === 1) {
        stage1.style.display = 'flex'
        stage2.style.display = 'none'
        stage3.style.display = 'none'

        back.style.visibility = 'hidden'
    }
    if (formContainer === 2) {
        stage2.style.display = 'flex'
        stage1.style.display = 'none'
        stage3.style.display = 'none'
        back.style.visibility = 'visible'
    }
    if (formContainer === 3) {
        stage3.style.display = 'flex'
        stage2.style.display = 'none'
        back.style.visibility = 'visible'

    }
}
showing();

function nextHandler() {
    if(formContainer === 3) {return}
    formContainer ++
    showing();
    runCheck()
}

function backHandler() {
    formContainer --
    showing();
    runCheck()
}

function runCheck() {
    if (formContainer === 3) {
        next.style.width = '167px'
        next.textContent = 'Sign Up'
        next.addEventListener('click', submit)
    } else {
        next.style.width = '114px'
        next.innerHTML = 'Next<i class=\"fa fa-arrow-right\" style=\"margin-left: 16px;\"></i>'
        next.addEventListener("click", nextHandler)
    }
   
}
function submit(e) {
    const form = document.querySelector('form')
  const formData = new FormData(form)
  let payload = {}
  for (const pair of formData.entries()) {
    console.log(pair)
    payload[pair[0]] = pair[1]
  }
  console.log(payload);
}