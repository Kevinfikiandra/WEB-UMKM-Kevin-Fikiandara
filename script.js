document.querySelectorAll(`[href="#"]`). forEach(anchor => {
    anchor.addEventListener(`click`, funtion (e)) ({
      e:PreventDefault(),

      document:queryselector(this.GetAttribute(`href`)). scrolIntoview({
        behavior: `smooth`
      })
    })
})