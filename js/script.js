/**
 * Created by admin on 3/12/17.
 */
var photo = document.getElementById("meme");
var allBtn = document.getElementById("all");
var mumpBtn = document.getElementById("mumps");
var zepposBtn = document.getElementById("zeppos");
var origClass = mumpBtn.className;
var memeState = 1;
zepposBtn.addEventListener("click", function () {
    memeState = 3;
    zepposBtn.className = origClass + " active";
    mumpBtn.className = allBtn.className = origClass;
    photo.src = "photos/zeppos/zeppos-1.jpg";
});
mumpBtn.addEventListener("click", function () {
    memeState = 2;
    mumpBtn.className = mumpBtn.className + " active";
    zepposBtn.className = allBtn.className = origClass;
    photo.src = "photos/mump/mump-1.jpg";

});
allBtn.addEventListener("click", function () {
    memeState = 1;
    allBtn.className = allBtn.className + " active";
    zepposBtn.className = mumpBtn.className = origClass;
});
var photoList =
    [{
        name: "mis",
        number: 21
    }, {
        name: "mump",
        number: 11
    }, {
        name: "zeppos",
        number: 12
    }
];
var photoNumber = 0;
photoList.forEach(function (photoType) {
    photoNumber+=photoType.number;
});
var nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", function () {
    if (memeState == 1) {
        var randomNum = Math.ceil(Math.random() * photoNumber);
        if (randomNum <= photoList[0].number) {
            photo.src = "photos/" + photoList[0].name + "/" + photoList[0].name + "-" + randomNum + ".jpg";
        } else if (randomNum <= photoList[1].number + photoList[0].number) {
            var index = randomNum - photoList[0].number;
            photo.src = "photos/" + photoList[1].name + "/" + photoList[1].name + "-" + index + ".jpg";
        } else {
            var index = randomNum - photoList[0].number  - photoList[1].number;
            photo.src = "photos/" + photoList[2].name + "/" + photoList[2].name + "-" + index + ".jpg";
        }
    } else if (memeState == 2) {
        var randomNum = Math.ceil(Math.random() * photoList[1].number);
        photo.src = "photos/" + photoList[1].name + "/" + photoList[1].name + "-" + randomNum + ".jpg";
    } else {
        var randomNum = Math.ceil(Math.random() * photoList[2].number);
        photo.src = "photos/" + photoList[2].name + "/" + photoList[2].name + "-" + randomNum + ".jpg";
    }
});
