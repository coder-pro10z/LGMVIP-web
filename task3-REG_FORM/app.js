
let inName=document.getElementById("inName");
let inEmail=document.getElementById("inEmail");
let inWebsite=document.getElementById("inWebsite");
let inImage=document.getElementById("inImage");
let preview=document.getElementById("preview");
let clr=document.getElementById("clear");
preview.addEventListener("click",prev);
clr.addEventListener("click",clear);


function loadImage(event){
    let image=document.getElementById("imgDisplayed");
    image.src=URL.createObjectURL(event.target.files[0]);
}

function prev(){
    
    let div3=document.getElementById('container');
    let div4=document.createElement('div');
    div3.appendChild(div4);
    div4.className='card';
    let divn2=document.createElement('div');
    divn2.className='camp';
    let span1=document.createElement('span');
    span1.innerHTML='Description';
    divn2.append(span1);
    let span2=document.createElement('span');
    span2.className='right';
    span2.innerHTML='Image';
    divn2.append(span2);
    let header=document.createElement('header');
    header.appendChild(divn2);
    header.className='head';
    div4.appendChild(header);
    
    let name=document.createElement('li');
    let email=document.createElement('li');
    let website=document.createElement('li');
    let gender1=document.createElement('li');
    let img=document.createElement('img');

    img.src=[inImage.value];
    name.appendChild(document.createTextNode(inName.value));
    email.appendChild(document.createTextNode(inEmail.value));
    website.appendChild(document.createTextNode(inWebsite.value));


    let list=document.createElement('ul');
    list.className='your-bubble';
    list.appendChild(name);
    list.appendChild(email);

    // if (document.getElementById('gender').checked) {
    gender =document.querySelector("input[name=gender]:checked").value;
    gender1.appendChild(document.createTextNode(gender));
    list.appendChild(gender1);
    // }
    list.appendChild(website);

    let div1=document.createElement('div');
    div1.className='description';
    div1.appendChild(list);
    let div2=document.createElement('div');
    div2.className='content';
    div2.appendChild(div1);

    div4.appendChild(div2);


    divn1=document.createElement('div');
    divn1.className='image';
    divn1.appendChild(img);
    div2.appendChild(divn1);

};

function clear()
    {
    inName.value='';    
    inEmail.value='';
    inWebsite.value='';
    inImage.value='';
    }
