const mediaQueryList = window.matchMedia("(min-width: 640px)");

function expandContent(list) {
  if(list.matches) {
    // document.body.style.backgroundColor = "purple";
    // Object.keys(buttons).forEach((button) => {
    //   button.click()
    // })
    document.getElementById('primary-nav').classList.remove('hide');
    let contentDivs = document.getElementsByClassName('content');
    for (let i = 0; i < contentDivs.length; i++) {
      // buttons[i].click();
      let height = ['224px', '643px', '224px', '80px', '876px'];
      // 224,about - 643, events 224?, info - 73, local-602 */
      contentDivs[i].classList.add("active");
      contentDivs[i].style.maxHeight = height[i];
    }
  }
}

expandContent(mediaQueryList);
mediaQueryList.addEventListener('change', expandContent);