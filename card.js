window.addEventListener("load", function () {
    let body = document.body;                            // создаем переменную body
    let card = document.createElement("div");            // создаем переменную card
    let container = document.createElement("div");       // создаем переменную container
    let img = document.createElement("img");             // создаем переменную img
    let cardTitle = document.createElement("h2");        // создфем переменную cardTitle
    let cardDescr = document.createElement("p");         // создаем переменную cardDescr
    let cardLogo = document.createElement("ul");         // создаем переменную cardLogo
    let descr = document.createElement("li");            // создаем переменную descr
    let img2 = document.createElement("img")             // создаем переменную img2
    let cost = document.createElement("span");           // создаем переменную cost
    
    let descr2 = document.createElement("li");           // создаем переменную descr2
    let img3 = document.createElement("img")             // создаем переменную img3 
    let lastDays = document.createElement("span");        // создаем переменную lastDays

    let author = document.createElement("ul");            // создаем переменную author
    let authorImg = document.createElement("li");         // создаем переменную authorImg
    let img4 = document.createElement("img");             // создаем переменную img4
    let authorDescr = document.createElement("li");        // создаем переменную authorDescr
    let authorName = document.createElement("a");         // создаем переменную authorName
    
    body.append(card);
    card.append(container);
    container.append(img, cardTitle, cardDescr, cardLogo, author);

    card.id = "wrapper";

    body.style.cssText = `
        background-color: hsl(217, 54%, 11%);
        align-items: center;
        vertical-align: middle;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: 100vh;    
  `;

    card.style.cssText = `background-color: hsl(216, 50%, 16%);
                          width: 300px;
                          border-radius: 10px;
                          box-shadow: 0 0 0 21px hsl(218, 54%, 11%);
  `;

container.style.cssText = `margin: auto; 
                           width: 90%;
                           padding-bottom: 15px;
`;
    
img.setAttribute("src","./images/image-equilibrium.jpg");                 // добавляем атрибут src и задаем ему значение
img.style.cssText = `width: 100%;                                     
                     border-radius: 11px;
                     margin: 15px auto;
  `;
  
container.append(cardTitle);                                                    
cardTitle.textContent = "Equilibrium #3429";                      
cardTitle.style.cssText = `color: white;
                           font-weight: 600;
  `;

container.append(cardDescr);
cardDescr.textContent = "Our Equilibrium collection ptomotes balance and calm";
cardDescr.style.cssText = `color: hsl(215, 51%, 70%);
                           font-weight: 400;
  `;

container.append(cardLogo);
cardLogo.style.cssText = `display: flex;
                          justify-content: space-between;
                          font-weight: 400;
                          color: hsl(178, 100%, 50%);
                          padding-bottom: 20px;
                          border-bottom: 1px solid hsl(215, 51%, 70%);
                          list-style: none;
                          padding: 0;
  `;


cardLogo.append(descr); 
descr.style.cssText = `align-items: flex-start;
                       font-weight: 400;
                       color: hsl(178, 100%, 50%);
                       padding-bottom: 20px;

                         `;

descr.append(img2);
img2.setAttribute("src","./images/icon-ethereum.svg");
img2.style.cssText = `width: 20px;`;

descr.append(cost);
cost.textContent = ` 0.041ETH`;

cardLogo.append(descr2);
descr2.style.cssText = `align-items: flex-start;
                        font-weight: 400;
                        //color: hsl(178, 100%, 50%);
                        padding-bottom: 25px;
   `;
descr2.append(img4);
img4.setAttribute("src","./images/icon-clock.svg");

descr2.append(lastDays);
lastDays.textContent = ` 3 day left`;
lastDays.style.cssText = `font-weight: 500;
                         color: hsl(215, 51%, 70%);
        `;
              
container.append(author);
author.style.cssText = `display: flex;
                        align-items: center;
                        list-style: none;
                        padding: 0;
                         `;

author.append(authorImg);
authorImg.append(img3);
img3.setAttribute("src","./images/image-avatar.png");
img3.style.cssText = `width: 45px;
                      border: 1px solid white;
                      border-radius:25px;
                      margin: auto;
                      margin-right: 10px;
    `;

author.append(authorDescr);
authorDescr.textContent = ` Creation of `;
authorDescr.style.cssText = `font-weight: 400;
                             color: white;
  `;

authorDescr.append(authorName);
authorName.textContent = ` Jules Wyvern`;
authorName.style.cssText = `font-weight: 400;
                            color: hsl(178, 100%, 50%);
                            `;
  });

  alert(`Я оцениваю свою работу на 100 баллов` )


