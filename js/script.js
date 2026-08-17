const menuToggle =
  document.getElementById(
    "menuToggle"
  );


const globalNav =
  document.getElementById(
    "globalNav"
  );


/*
  ハンバーガーメニュー
*/

menuToggle.addEventListener(
  "click",
  function(){

    const isOpen =
      menuToggle.classList.toggle(
        "active"
      );


    globalNav.classList.toggle(
      "active"
    );


    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );


    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "メニューを閉じる"
        : "メニューを開く"
    );

  }
);


/*
  メニューをクリックしたら閉じる
*/

document
  .querySelectorAll(
    ".global-nav a"
  )
  .forEach(
    function(link){

      link.addEventListener(
        "click",
        function(){

          menuToggle.classList.remove(
            "active"
          );


          globalNav.classList.remove(
            "active"
          );


          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    }
  );