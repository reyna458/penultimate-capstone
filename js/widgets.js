$(document).ready(function () {

  // 1. Get current page ID (text inside #pageid)
  const currentPage = $("#pageid").text().trim().toLowerCase();
  console.log("Current page:", currentPage);

  $.getJSON('data/widgets.json', function (widgets) {
    console.log('Loaded widgets:', widgets);

    // 2. Filter out widgets whose link matches current page
    const filteredWidgets = widgets.filter(w => w.link.toLowerCase() !== currentPage);

    console.log("Filtered widgets:", filteredWidgets);

    const usedIndexes = new Set();
    const numWidgets = 3;

    for (let x = 0; x < numWidgets; x++) {
      if (filteredWidgets.length === 0) break; // safety

      let whichWidget;
      do {
        whichWidget = Math.floor(Math.random() * filteredWidgets.length);
      } while (usedIndexes.has(whichWidget));

      usedIndexes.add(whichWidget);

      const widget = filteredWidgets[whichWidget];
      console.log("Picked widget:", widget);

      let widgetHTML = "";

      if (widget.type === "No-img") {
        widgetHTML = `
          <div class="widget">
            <h6>${widget.pg}</h6>
            <h2>${widget.headline}</h2>
            <h5><a href='${widget.link}.html'>Read more</a></h5>
          </div>
        `;
      } else if (widget.type === "Image") {
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

      // Insert into widget boxes
      $('#widget-box' + (x + 1)).html(widgetHTML);
    }

  }).fail(function () {
    console.error('Could not load widgets.json');
  });
});
