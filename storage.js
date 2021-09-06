// add items
const addItem=()=>{
   const userInput=document.getElementById("user-input");
   const userText=userInput.value ;
   if(!userText){
       return;
   }
   displayProducts(userText)
   setItem(userText)
   userInput.value=''

}

// display products
const displayProducts=(product)=>{
    const ul=document.getElementById("products")
    const li=document.createElement("li")
    li.innerText=product
    ul.appendChild(li)
}

// local storage get items
const getItem=()=>{
    const cart=localStorage.getItem("cart");
    let cartObj;
    if(cart){
        cartObj=JSON.parse(cart)
    }else{
        cartObj={}
    }
    return cartObj;
}


// local storage set item
const setItem=(userText)=>{
    const cart=getItem();
    if(cart[userText]){
        cart[userText]+=1
    }else{
        cart[userText]=1
    }
    const productsStringify=JSON.stringify(cart);
    localStorage.setItem("cart",productsStringify);
}

// awless display product that you add to cart
const localStorageToDisplayProducts=()=>{
      const cart=getItem();
      for(const product in cart){
          displayProducts(product)
      }
}
localStorageToDisplayProducts()


// clear display and local storage products when you order
const orderNow=()=>{
    document.getElementById("products").textContent='';
    localStorage.removeItem("cart")
}