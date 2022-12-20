const signButton=document.querySelector(".sign_btn");
const signPopUp=document.querySelector(".sign_pop_up");
const modalClose=document.querySelector(".modalclose");
const phoneNumber=document.querySelector(".phone_num");
const termsCondition=document.querySelector(".terms");
const continueBox=document.querySelector(".continue");
const height=document.querySelector(".height");
const signPopUpVerify=document.querySelector(".sign_pop_up1");
const continueBox1=document.querySelector(".continue1");
const phoneNumVerify=document.querySelector(".phonenum_verify");
const leftChevronIcon=document.querySelector(".leftchevro_icon");
const firstOtpBox=document.querySelector(".otp_box1");
const resendOtp=document.querySelector(".resnd_otp");
const otpBox=document.querySelectorAll(".otp_box");
const invalidMsg=document.querySelector(".invalid_msg");
const rightNavRest=document.querySelector(".right_nav_rest");
const rightNavRest1=document.querySelector(".right_nav_rest1");
let sentOtp;

signButton.addEventListener("click",()=>{
    signPopUp.classList.add("display_block");
});

modalClose.addEventListener("click",()=>{
    signPopUp.classList.remove("display_block");
})

height.addEventListener("click",()=>{
    phoneNumber.style.borderBottom="1px solid rgb(156, 154, 154)";
    termsCondition.classList.remove("display_none");
    continueBox.classList.remove("display_block");
})
phoneNumber.addEventListener("click",()=>{
    phoneNumber.style.borderBottom="1px solid red";
    termsCondition.classList.add("display_none");
    continueBox.classList.add("display_block");
    
})

phoneNumber.addEventListener("input",(event)=>{
    if(phoneNumber.value.length==10){
        continueBox.classList.add("background_red");
    }else{
        continueBox.classList.remove("background_red");
    }
})

continueBox.addEventListener("click",()=>{
   signPopUp.classList.add("display_none");
   signPopUpVerify.classList.add("display_block");
    phoneNumVerify.innerText=phoneNumber.value;
})

//----------------------------------------GENERATE OTP----------------------------------------------------

phoneNumVerify.addEventListener("click",generateOtp);
resendOtp.addEventListener("click",generateOtp);

function generateOtp(){
    let digits="0123456789";
    sentOtp="";

    for(let i=0;i<6;i++){
        sentOtp += digits[Math.floor(Math.random()*10)];
    }
    alert(`Your OTP is ${sentOtp}`);
}
//--------------------------------------------CURSOR MOVING IN OTP BOXES-------------------------------------------
  otpBox.forEach((input,index)=>{
    // console.log(input);
    input.dataset.index=index;
    input.addEventListener("keyup",handleOtp);
  });

  function handleOtp(event){
    // console.log(event.target.value);
    const input=event.target;
    let value=input.value;
    input.value="";
   input.value= value ? value[0] : "";

    let fieldIndex=input.dataset.index;
    if(value.length>0 && fieldIndex<otpBox.length-1){
        input.nextElementSibling.focus();
    }

    if(event.key === "Backspace" && fieldIndex>0){
        input.previousElementSibling.focus();
    }

    if(fieldIndex==otpBox.length-1){
        let enterOtp="";
        otpBox.forEach((input)=>{
            enterOtp += input.value;
        })
        console.log(enterOtp);
        console.log(sentOtp);

        if(enterOtp!==sentOtp){
            setTimeout
            invalidMsg.innerText="invalid otp entered.Please try again";
        } else{
            signPopUpVerify.classList.remove("display_block");
            rightNavRest.classList.add("display_none");
            rightNavRest1.classList.add("display_flex");
        }
    }
  }
//----------------------------------------------------------------------------------------------------------------
  
leftChevronIcon.addEventListener("click",()=>{
    signPopUp.classList.remove("display_none");
   signPopUpVerify.classList.remove("display_block");
   termsCondition.classList.remove("display_none");
   continueBox.classList.remove("display_block");
})

//-----------------------------------------------------City-pop-up--------------------------------------------------
const hideCity=document.querySelector(".hide");
const viewCity=document.querySelector(".view");
const lowerpartCity=document.querySelector(".lowerpart_city");
const rightNavCityOption=document.querySelector(".right_nav_city");
const cityPopUp=document.querySelector(".city_pop_up");
const mainBody=document.querySelector("main");
const cityName=document.querySelector(".city_name");

viewCity.addEventListener("click",()=>{
  lowerpartCity.classList.add("display_block");
   viewCity.classList.add("display_none");
})

hideCity.addEventListener("click",()=>{
   lowerpartCity.classList.remove("display_block");
   viewCity.classList.remove("display_none");
})

rightNavCityOption.addEventListener("click",()=>{
   cityPopUp.classList.add("display_block");
})

mainBody.addEventListener("click",()=>{
    cityPopUp.classList.remove("display_block");
})

cityPopUp.addEventListener("click",(event)=>{
    if(event.target.classList.contains("cityTrans")){
    cityName.innerText=event.target.innerText;
    }
    else if(event.target.classList.contains("cityimg")){
        cityName.innerText=event.target.alt;
        }
})