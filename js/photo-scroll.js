$(document).ready(function () {
    let pageID = $('#pageid').html();
    console.log("pageID =", pageID);

    const photoSets = {
        index: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
        data: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
        about: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
        gallery: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
        stories: ['3', '7', '34', '12', '19', '39', '44', '6', '16', '20', '22'],
        resources: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
        mirador: ['12', '16', '13', '6', '10'],
        fema: ['3'],
        eduspec: ['5', '6', '10', '9', '4', '45'],
        airquality: ['25', '19', '18', '40', '43'],
        ddar: ['3', '7', '34', '25', '33', '6', '9', '1', '2', '14'],
    };

    const photos = photoSets[pageID];
    console.log("Loaded photo set:", photos);

    if (!photos) {
        console.error("❌ photoSets[pageID] is undefined — fix your pageID or photoSets key");
        return;
    }

    let pointer = 0;

    function photoUpdate() {
        const id = photos[pointer];
        const url = `url(./assets/gallery/gallery${id}_compressed.webp)`;
        console.log("Setting background:", url);
        $('header').css("background-image", url);
    }

    photoUpdate();

    $('#left').click(function() {
        console.log("Left clicked");
        pointer = (pointer - 1 + photos.length) % photos.length;
        photoUpdate();
    });

    $('#right').click(function() {
        console.log("Right clicked");
        pointer = (pointer + 1) % photos.length;
        photoUpdate();
    });
});
