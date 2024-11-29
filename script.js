function sendmail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };

const serviceID="service_d3dv6ee";
const templateID="template_5th17u8";


emailjs.send(serviceID,templateID,params)
.then((res)=>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    console.log(res); 
    alert("your send message succesfull");

}
)
.catch((err)=> console.log(err));

}




