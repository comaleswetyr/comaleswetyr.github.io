function getRandomLogo() {
    var imgAr = ["img/title_gr_full_stacked.png", "img/title_en_full_stacked.png"];
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + img + '" alt = "">';
    document.write(imgStr); document.close();
}