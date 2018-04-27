

$(document).ready(function(){
    console.log("running gallery.js");
    drawCard(cards);
})

var trisha = {
    'carousel_id' : 'trishaCarousel',
    'title' : 'Barn and Willow Founder',
    'title2' : "Trisha Roy's House",
    'desc' : "For her first home, Trisha Roy, the founder of Barn & Willow, knew that she wanted to get it right. With the help of Homepolish’s Courtney Lake, she gave her the house a facelift, complete with her own Belgian Flax Linen draperies in Natural.",
    'specifications' : {
        'color' : "Belgian Flax - Neutral",
        'style' : "Soft Top",
        'lining' : "Privacy"
    },
    'review' : "This is my review about my curtains and drapes... I LOVE THEM!!!! ",
    'name' : "Trisha Roy",
    'profile_image' : "../images/Trisha.jpg",
    'images' : [
        `../images/trishamain_large.jpg`,
        `../images/1/trisha1.jpg`,
        `../images/1/trisha2.jpg`,
        `../images/1/trisha3.jpg`,
        `../images/1/trisha4.jpg`,
        `../images/1/trisha5.jpg`,
        `../images/1/trisha6.jpg`,
        `../images/1/trisha8.jpg`,
    ],
    'customize_link' : 'https://barnandwillow.com/products/customize-product-draperies?id=8269916225'
}

var virginia = {
    'carousel_id' : 'virginiaCarousel',
    'title' : 'A Virginia home gets a modern facelift',
    'desc' : "To create a formal living room, Jennifer, from Dear Lillie, wanted floor to ceiling draperies with a slight puddle to give the room a classic look. To go with the neutral color scheme throughout her home, she decided on our Belgian Flax Linen in Mist Gray to add a bit of color and refined elegance.",
    'specifications' : {
        'color' : "Belgian Flax - Mist Gray",
        'style' : "Soft Top",
        'lining' : "Blackout"
    },
    'review' : "Thanks Barn & Willow for making my home so elegant! 5 stars!",
    'name' : "Jennifer",
    'profile_image' : "../images/dearlillie_profile.jpg",
    'images' : [
        `../images/dearlilliemain_large.jpg`,
        `../images/3/GalleryDetail_1.jpg`,
        `../images/3/GalleryDetail_2.jpg`,
        `../images/3/GalleryDetail_3.jpg`,
        `../images/3/GalleryDetail_4.jpg`,
        `../images/3/GalleryDetail_5.jpg`,
        `../images/3/GalleryDetail_6.jpg`,
        `../images/3/GalleryDetail_7.jpg`,
        `../images/3/GalleryDetail_8.jpg`,
    ],
    'customize_link' : 'https://barnandwillow.com/products/customize-product-draperies?id=2013542401&type=softtop&lining=Privacy&width=50&length=84&panels=1'
}

var navi = {
    'carousel_id' : 'naviCarousel',
    'title' : 'Techie by day,',
    'title2' : "a designer by night",
    'desc' : "With the birth of her son, Navi and her husband decided to move closer to her family in Fremont, CA. Navi decorated her home from scratch, but was at a loss for what to do with her two story tall windows in her dining room. Cue Barn & Willow, where she was able to easily order floor to ceiling custom draperies for her dining room and attached living room to match.",
    'specifications' : {
        'color' : "Belgian Flax - Mist Gray",
        'style' : "Soft Top",
        'lining' : "Privacy"
    },
    'review' : "Ordering from Barn & Willow was so easy, I recommend the service to everyone!",
    'name' : "Navi",
    'profile_image' : "../images/IMG_4970.jpg",
    'images' : [
        `../images/navimain_large.jpg`,
        `../images/2/navi1.jpg`,
        `../images/2/navi2.jpg`,
        `../images/2/navi3.jpg`,
        `../images/2/navi4.jpg`,
        `../images/2/navi5.jpg`,
        `../images/2/navi6.jpg`,
        `../images/2/navi7.jpg`,
        `../images/2/navi8.jpg`,
    ],
    'customize_link' : 'https://barnandwillow.com/products/customize-product-draperies?id=2013542401&type=softtop&lining=Privacy&width=50&length=84&panels=1'
}
var sita = {
    'carousel_id' : 'sitaCarousel',
    'title' : 'A neutral retreat in Salt Lake City',
    'desc' : "When Sita, of Sita Montgomery Interiors, decided to replace the wallpaper in her master bedroom, she knew that it was time for a complete bedroom refresh. Her first stop? Barn & Willow, to cover her windows with Belgian linen roman shades to give her the clean, streamlined look that she envisioned.",
    'specifications' : {
        'color' : "Belgian Flax - Off White",
        'style' : "Flat",
        'lining' : "Blackout"
    },
    'review' : "Barn & Willow had just the solution I was looking for.  I couldn't find anywhere else to customize my curtains at such an incredible price.",
    'name' : "Sita",
    'profile_image' : "../images/sitaprofile.jpg",
    'images' : [
        `../images/sitamain_large.jpg`,
        `../images/4/Sita1.png`,
        `../images/4/Sita2.jpg`,
        `../images/4/Sita3.jpg`,
        `../images/4/sita4.jpg`,
        `../images/4/Sita5.jpg`,
        `../images/4/Sita6.jpg`,
        `../images/4/Sita7.jpg`,
        `../images/4/Sita8.jpg`,
    ],
    'customize_link' : 'https://barnandwillow.com/products/customize-product-roman-shades?id=6770805505&type=flat&lining=Privacy&width=30&length=54&panels=1&mount=Inside&cord=Continuous&cordLoc=Left'
}

var cards = [trisha, navi, virginia, sita];

function drawCard(cards) {

    for ( var j = 0; j < cards.length; j++ ) {
        var data = cards[j];
        html = "<div class='gallery-card beige'>";
        html += "<div class='row'><div class='col-sm-6'>"

        /* CAROUSEL */
        html += "<div id='" + data.carousel_id + "' class='carousel slide top-border' data-ride='carousel'>";
        /* indicators */
        html += "<ol class='carousel-indicators'>";
        for ( var i = 0; i < data.images.length; i ++ ) {
            html += "<li data-target='#" + data.carousel_id + "' data-slide-to='" + i + "'" + ( i == 0 ? "class='active'" : "") + "></li>";
        }
        html += "</ol>";

        /* wrapper for slides */
        html += "<div class='carousel-inner'>";

        /* slides */
        for ( var i = 0; i < data.images.length; i ++ ) {
            html += "<div class='item " + ( i == 0 ? "active" : "") + "'>"
            html += "<div class='item-image' style='background-image:url(" + data.images[i] + "')'>";
            html += "</div></div>";
        }

        /* left and right controls */

        html += "<a class='left carousel-control' href='#" + data.carousel_id + "' data-slide='prev'>";
        html += "<span class='glyphicon glyphicon-chevron-left'></span>";
        html += "<span class='sr-only'>Previous</span></a>";

        html += "<a class='right carousel-control' href='#" + data.carousel_id + "' data-slide='next'>";
        html += "<span class='glyphicon glyphicon-chevron-right'></span>";
        html += "<span class='sr-only'>Next</span></a>";

        html += "</div></div></div>";

        /* INFO */

        html += "<div class='col-sm-6 top-border' style='padding:0 50px;'>"
        html += "<div style='padding:10px;'>";

        /* Header */

        html += "<h2 class='text-center'>" + data.title + ( data.title2 != undefined ? ( "<br>" + data.title2 ) : "" ) + "</h2><hr style='margin:5px;color:black;border:1px solid rgba(0,0,0,.03);'>";
        html += "<br>";

        /* Description */

        html += "<p>" + data.desc + "</p>";

        /* Specifications */

        html += "<div class='row' style='padding:10px;'><div class='col-sm-6'>";
        html += "<table style='width:100%;'>";
        html += "<tr><td>Specifications</td><td></td></tr>";
        html += "<tr><td>Color</td><td>" + data.specifications.color + "</td></tr>";
        html += "<tr><td>Style</td><td>" + data.specifications.style + "</td></tr>";
        html += "<tr><td>Lining</td><td>" + data.specifications.lining + "</td></tr>";
        html += "</table></div>";

        /* Customize button */
        html += "<div class='col-sm-6 text-center' style='line-height:104px;'>";
        html += "<a href='" + data.customize_link + "'>";
        html += "<button class='btn btn-default'><img src='../images/customize_icon.png' width='15px' height='15px'></img> Customize It</button></a></div></div>";

        /* Profile pic */

        html += "<div class='row' style='padding:10px;'><div class='col-sm-3' style='text-align:center;'>";
        html += "<img class='profile-pic' src='" + data.profile_image + "' alt='" + data.name + "'></div>";

        /* Review */
        html += "<div class='col-sm-8'>";
        html += "<p class='review'><em>" + data.review + "</em><br>-" + data.name + "</p>";

        /* END OF CARD */
        html += "</div></div></div></div></div>";

        $(".myGallery").append(html);
    }
}
