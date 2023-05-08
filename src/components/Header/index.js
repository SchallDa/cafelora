import './style.css';

export const Header =(props)=>{
    const {menuBurger}=props
    
const element=document.createElement("header");

// tato podmínka dělá to samé jako ${menuBurger} v .innerHTML, ale to druhé je rychlejší a lépe zakomponovatelné (asi)
// if(menuBurger){
//     `<div class="navigation">
//             <button class="nav-btn"></button>
//             <nav class="rollout-nav nav-closed">
//               <a href="#home">domů</a>
//               <a href="#menu">menu</a>
//               <a href="#gallery">galerie</a>
//               <a href="#contact">kontakt</a>
//             </nav>
//           </div>
//           `;

// }else {
//     `<nav class="inline-nav">
//           <a href="/">Hlavní stránka</a>
//         </nav>
//     `;
// }


element.innerHTML=`
<div class="header__content container">
      <div class="site-logo"></div>
      ${showMenu ? `
        <div class="navigation">
          <button class="nav-btn"></button>
          <nav class="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>
      ` : `
        <nav class="inline-nav">
          <a href="/">Hlavní stránka</a>
        </nav>
      `}
    </div>
`;
const navBtnElm=element.querySelector(".nav-btn");
if (navBtnElm !==null) {
    navBtnElm.addEventListener("click", () => {
    element.querySelector("nav").classList.toggle("nav-closed")
    });  
}

return element;
};