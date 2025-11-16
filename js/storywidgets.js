$(document).ready(function () {
  $.getJSON('data/widgets.json', function (widgets) {
    console.log('Loaded widgets:', widgets);
    const usedIndexes = new Set();
    const numWidgets = 7;
    

    for (let x = 0; x < numWidgets; x++) {
      let whichWidget;
      do {
        whichWidget = Math.floor(Math.random() * widgets.length);
      } while (usedIndexes.has(whichWidget));

      usedIndexes.add(whichWidget);

      const widget = widgets[whichWidget];
      console.log('Picked widget:', widget);

      let widgetHTML = '';

      if (widget.type === 'No-img') {
        widgetHTML = `
          <div class="widget">
            <h6>${widget.pg}</h6>
            <h2>${widget.headline}</h2>
            <h5><a href='${widget.link}.html'>Read more</a></h5>
          </div>
        `;
      } else if (widget.type === 'Image') {
        widgetHTML = `
          <div class="imagewidget">
            <h6>${widget.pg}</h6>
            <h2>${widget.headline}</h2>
            <p>${widget.dek}</p>
            <h5><a href="${widget.link}.html">Read the full story...</a></h5>
            <img src="assets/gallery/${widget.img}.webp" alt="${widget.alt}">
          </div>
        `;
      }

      
      // If you only have one widget box:
      // $('#widget-box').append(widgetHTML);

      // Or if you have 3 boxes with IDs widget-box1, widget-box2, widget-box3:
      $('#widget-box' + (x + 1)).html(widgetHTML);
      console.log('Inserting into', '#widget-box' + (x + 1), widgetHTML);

    }
  }).fail(function () {
    console.error('Could not load widgets.json');
  });
});
