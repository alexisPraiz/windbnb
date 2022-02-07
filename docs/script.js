/*---==== Search Open: Start ====---*/
document.getElementById('search').addEventListener('click',()=>{
    document.querySelector('body').classList.add('search_open');
});
/*---==== Search Open: End ====---*/

/*---==== Search Close: Start ====---*/
document.querySelector('.icon_search').addEventListener('click',()=> document.querySelector('body').classList.remove('search_open'));
document.querySelector('.close_search').addEventListener('click',()=> document.querySelector('body').classList.remove('search_open'));
/*---==== Search Close: End ====---*/

/*---==== Input search value: Start ====---*/
document.querySelectorAll('.location').forEach(location =>{
    location.addEventListener('click',()=>{
        document.getElementById('geolocation').textContent = location.textContent;
        document.getElementById('location').value = location.textContent;
    });
});
/*---==== Input search value: End ====---*/

/*---==== Request data: Start ====---*/
const request = async ()=>{
    try{
        const response = await fetch('recursos/stays.json');
        const data     = await response.json();
        element(data);  
    }catch(error){
        console.log(error);
    }
}
addEventListener('DOMContentLoaded',request());
/*---==== Request data: Start ====---*/

/*---==== Create Elements DOM: Start ====---*/
const element = data =>{
    let elements  = '';

    document.querySelectorAll('.location').forEach(location =>{
        location.addEventListener('click',()=>{
            let geo = location.textContent.split(',');

            if(document.querySelector('.container').hasChildNodes(document.querySelector('.item'))){
                elements = '';

                data.filter(item => {           
                    if(item.city == geo[0]){
                        elements += `<div class="item">
                                        <img src="${item.photo}">
                                        <div class="hover">
                                           <div class="hover_content">
                                              <p><span>City</span>: ${item.city}</p>
                                              <p><span>Country</span>: ${item.country}</p>
                                              <p><span>Max Guests</span>: ${item.maxGuests}</p>
                                              <p><span>Beds</span>: ${item.beds}</p>
                                           </div>                 
                                        </div>
    
                                        <div class="stay_info">
                                           <span class="info">
                                              <p class="type">${item.type}</p>
                                           </span>
  
                                           <span>
                                              <i class='bx bxs-star'></i>
                                              <span class="star">${item.rating}</span>
                                           </span>
                                         </div>
  
                                         <p class="title">${item.title}</p>
                                      </div>`;
                      document.querySelector('.container').innerHTML = elements; 
                      if(item.superHost){
                           let host = document.createElement('H6');
                           host.classList.add('superhost');
                           host.classList.add('true');
                           host.textContent = 'SUPER HOST';
                           
                           document.querySelector('.info').appendChild(host);
                      }  
                    };       
              });
            };
        }); 
              
    });  

    document.querySelector('.ul-country').lastElementChild.addEventListener('click',()=>{
        location.reload();
    });
}
/*---==== Create Elements DOM: End ====---*/

/*---==== Add - Subtract guest: Start ====---*/

    
/*---==== Add - Subtract guest: End ====---*/