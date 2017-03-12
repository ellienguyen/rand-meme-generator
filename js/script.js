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
});
mumpBtn.addEventListener("click", function () {
    memeState = 2;
    mumpBtn.className = mumpBtn.className + " active";
    zepposBtn.className = allBtn.className = origClass;

});
allBtn.addEventListener("click", function () {
    memeState = 1;
    allBtn.className = allBtn.className + " active";
    zepposBtn.className = mumpBtn.className = origClass;
});
var src = ["mis", "mumps", "zeppos"];
var nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", function () {
    if (memeState == 1) {
        var randomNum = Math.floor(Math.random() * 9);
        if (randomNum < 7) {
            photo.src = "photos/mis/mis-" + (randomNum + 1) + ".jpg";
        } else if (randomNum == 7) {
            photo.src = "photos/mumps/mumps-" + (8-randomNum) + ".jpg";
        } else  {
            photo.src = "photos/zeppos/zeppos-" + (9-randomNum) + ".jpg";
        }
    } else if (memeState == 2) {
        photo.src = "photos/mumps/mumps-1.jpg";
    } else {
        photo.src = "photos/zeppos/zeppos-1.jpg";
    }
});
