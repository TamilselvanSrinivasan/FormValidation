const form=document.querySelector('#form')
const username=document.querySelector('#Username')
const email=document.querySelector('#Email')
const password=document.querySelector('#Password')
const conform_password=document.querySelector('#Conform_Password')

form.addEventListener('submit',(e)=>{

        
            e.preventDefault();
            !checkinput()
  
})

function checkinput()
{
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const conform_passwordval=conform_password.value.trim();
    let success=true
    if(usernameval==='')
{     success=false;
    setError(username,'Username requried');
}
else{
    setSuccess(username)
}


if(emailval==='')
{
    success=false;
    setError(email,'email requried');
}
else if(!cheackemail(emailval))
{
    success=false;
    setError(email,'Enter vaild email')
}
else{
    setSuccess(email)
}


if(passwordval==='')
{success=false;
    setError(password,'password requried');
}
else if(passwordval.length<8)
{
    success=false;
    setError(password,'Max 8 character');
}
else{
    setSuccess(password)
}

if(conform_passwordval==='')
{success=false;
    setError(conform_password,'conform password requried');
}
else if(conform_passwordval!==passwordval)
{
    success=false;
    setError(conform_password,'Not matched with password');
}
else{
    setSuccess(conform_password)
}
   return success;
}




function setError(element,message)
{
  const inputgroup=element.parentElement;
  const errorElement=inputgroup.querySelector('.error')

  errorElement.innerText=message;
  inputgroup.classList.add('error')
  inputgroup.classList.remove('success')

}
function setSuccess(element)
{
  const inputgroup=element.parentElement;
  const errorElement=inputgroup.querySelector('.error')

  errorElement.innerText='';
  inputgroup.classList.remove('error')
  inputgroup.classList.add('success')

}

const cheackemail=(email)=>{
     return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };