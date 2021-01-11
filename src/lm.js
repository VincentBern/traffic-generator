/*==============================================================================*/
/* CoveoResponseChecker generated Fri Jan 08 2021 17:26:42 GMT+0100 (Central European Standard Time) */
/*==============================================================================*/

var DEFAULT_TIMEOUT = 5000;
module.exports = {
  "test case": async function (client) {
    let mypage = client.page.Coveo();
    client.resizeWindow(1906, 922);
    client.url("https://www.leroymerlin.it/");
    client.pause(DEFAULT_TIMEOUT);
    //{"type":19,"info":{"tagName":"INPUT","selector":"html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93 > input","value":"","checked":false,"name":"search_input","type":"text","src":"","id":"","title":"","options":[]},"x":841,"y":71,"text":""}
    //{"type":20,"info":{"tagName":"INPUT","selector":"html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > input","value":"","checked":false,"name":"search_input","type":"text","src":"","id":"","title":"","options":[]},"x":841,"y":71,"text":""}
    await mypage.c_moveToElement(
      "html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > input",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > input"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"INPUT","selector":"html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > input","value":"","checked":false,"name":"search_input","type":"text","src":"","id":"","title":"","options":[]},"x":841,"y":71,"text":""}
    //{"type":23,"info":{"tagName":"INPUT","selector":"html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > input","value":"","checked":false,"name":"search_input","type":"text","src":"","id":"","title":"","options":[]},"text":"cucinnaa"}
    await client.clearValue("input[name='search_input']");
    await mypage.c_setValue("input[name='search_input']", "cucinnaa");
    await mypage.c_Pause();
    //{"type":19,"info":{"tagName":"DIV","selector":"html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > .csr97","id":"","title":"","options":[]},"x":1253,"y":75,"text":""}
    //{"type":2,"info":{"tagName":"INPUT","selector":"html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > input","value":"cucina","checked":false,"name":"search_input","type":"text","src":"","id":"","title":"","options":[]},"text":""}
    //{"type":20,"info":{"tagName":"DIV","selector":"html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > .csr97","id":"","title":"","options":[]},"x":1253,"y":75,"text":""}
    await mypage.c_moveToElement(
      "html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > .csr97",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > .csr97"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"DIV","selector":"html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > .csr97","id":"","title":"","options":[]},"x":1253,"y":75,"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > .csr97 > svg","id":"","options":[]},"x":1241,"y":72,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > .csr97 > svg","id":"","options":[]},"x":1241,"y":72,"text":""}
    await mypage.c_moveToElement(
      "html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > .csr97 > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93.csr95 > .csr97 > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"html > body > #app > .mainContainer > .csr47 > .csr55 > .csr57 > .csr58 > .csr92 > .csr93 > div > svg","id":"","options":[]},"x":1241,"y":72,"text":""}
    //{"type":19,"info":{"tagName":"IMG","selector":"html > body > #app > .mainContainer > :nth-child(5) > .csr193 > .csr217 > :nth-child(1) > .csr219 > a > .csr221 > img","name":"","src":"https://leroymerlin-res.cloudinary.com/images/b_white,c_pad,d_no-image_available.png,dpr_1.0,f_auto,fl_lossy,h_550,q_auto:good,w_550/v1/prd/azjhshffnaglrrtx9chg/Mobili%20cucina","id":"","title":"Mobili cucina","options":[]},"x":487,"y":742,"text":""}
    //{"type":20,"info":{"tagName":"IMG","selector":"html > body > #app > .mainContainer > :nth-child(5) > .csr193 > .csr217 > :nth-child(1) > .csr219 > a > .csr221 > img","name":"","src":"https://leroymerlin-res.cloudinary.com/images/b_white,c_pad,d_no-image_available.png,dpr_1.0,f_auto,fl_lossy,h_550,q_auto:good,w_550/v1/prd/azjhshffnaglrrtx9chg/Mobili%20cucina","id":"","title":"Mobili cucina","options":[]},"x":487,"y":742,"text":""}
    await mypage.c_moveToElement(
      "html > body > #app > .mainContainer > :nth-child(5) > .csr193 > .csr217 > :nth-child(1) > .csr219 > a > .csr221 > img",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #app > .mainContainer > :nth-child(5) > .csr193 > .csr217 > :nth-child(1) > .csr219 > a > .csr221 > img"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"IMG","selector":"","name":"","src":"https://leroymerlin-res.cloudinary.com/images/b_white,c_pad,d_no-image_available.png,dpr_1.0,f_auto,fl_lossy,h_550,q_auto:good,w_550/v1/prd/azjhshffnaglrrtx9chg/Mobili%20cucina","id":"","title":"Mobili cucina","options":[]},"x":487,"y":742,"text":""}
    //{"type":19,"info":{"tagName":"IMG","selector":"html > body > #app > .mainContainer > :nth-child(5) > .csr320 > .csr217 > :nth-child(1) > .csr219 > a > .csr221 > img","name":"","src":"https://leroymerlin-res.cloudinary.com/images/b_white,c_pad,d_no-image_available.png,dpr_1.0,f_auto,fl_lossy,h_550,q_auto:good,w_550/v1/prd/pjdbrld10hx3c9iocxjc/Cucine%20componibili","id":"","title":"Cucine componibili","options":[]},"x":459,"y":860,"text":""}
    //{"type":20,"info":{"tagName":"IMG","selector":"html > body > #app > .mainContainer > :nth-child(5) > .csr320 > .csr217 > :nth-child(1) > .csr219 > a > .csr221 > img","name":"","src":"https://leroymerlin-res.cloudinary.com/images/b_white,c_pad,d_no-image_available.png,dpr_1.0,f_auto,fl_lossy,h_550,q_auto:good,w_550/v1/prd/pjdbrld10hx3c9iocxjc/Cucine%20componibili","id":"","title":"Cucine componibili","options":[]},"x":459,"y":860,"text":""}
    await mypage.c_moveToElement(
      "html > body > #app > .mainContainer > :nth-child(5) > .csr320 > .csr217 > :nth-child(1) > .csr219 > a > .csr221 > img",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #app > .mainContainer > :nth-child(5) > .csr320 > .csr217 > :nth-child(1) > .csr219 > a > .csr221 > img"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"IMG","selector":"","name":"","src":"https://leroymerlin-res.cloudinary.com/images/b_white,c_pad,d_no-image_available.png,dpr_1.0,f_auto,fl_lossy,h_550,q_auto:good,w_550/v1/prd/pjdbrld10hx3c9iocxjc/Cucine%20componibili","id":"","title":"Cucine componibili","options":[]},"x":459,"y":860,"text":""}
    //{"type":19,"info":{"tagName":"DIV","selector":"html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr461","id":"","title":"","options":[]},"x":193,"y":467,"text":""}
    //{"type":20,"info":{"tagName":"DIV","selector":"html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr461","id":"","title":"","options":[]},"x":193,"y":467,"text":""}
    await mypage.c_moveToElement(
      "html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr461",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr461"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"DIV","selector":"html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr461","id":"","title":"","options":[]},"x":193,"y":467,"text":""}
    //{"type":19,"info":{"tagName":"DIV","selector":"html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr464 > .csr465 > .csr467 > :nth-child(2)","id":"","title":"","options":[]},"x":143,"y":545,"text":""}
    //{"type":20,"info":{"tagName":"DIV","selector":"html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr464 > .csr465 > .csr467 > :nth-child(2)","id":"","title":"","options":[]},"x":143,"y":545,"text":""}
    await mypage.c_moveToElement(
      "html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr464 > .csr465 > .csr467 > :nth-child(2)",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr464 > .csr465 > .csr467 > :nth-child(2)"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"DIV","selector":"html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr464 > .csr465 > .csr467 > :nth-child(2)","id":"","title":"","options":[]},"x":143,"y":545,"text":""}
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr464 > .csr465 > button > .csr496","id":"","title":"","options":[]},"x":224,"y":641,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr464 > .csr465 > button > .csr496","id":"","title":"","options":[]},"x":224,"y":641,"text":""}
    await mypage.c_moveToElement(
      "html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr464 > .csr465 > button > .csr496",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #app > .mainContainer > :nth-child(5) > :nth-child(4) > :nth-child(1) > .csr444 > .csr445 > .csr448 > :nth-child(2) > .csr464 > .csr465 > button > .csr496"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"","id":"","title":"","options":[]},"x":224,"y":641,"text":""}
  },
};
