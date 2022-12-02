// first_img
document.querySelector("#files").addEventListener("change", (e) => {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    const files = e.target.files;
    const output = document.querySelector("#result");

    for (let i = 0; i < files.length; i++) {
      if (!files[i].type.match("image")) continue;
      const picReader = new FileReader();
      picReader.addEventListener("load", function (event) {
        const picFile = event.target;
        const div = document.createElement("div");
        div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
        output.appendChild(div);
      });
      picReader.readAsDataURL(files[i]);
    }
  } else {
    alert("Your browser does not support File API");
  }
});

function fun() {
  prompt("This is a prompt box", "The Image is submitted succesfull");
}

// second imgae
function showImage(src, target) {
  var fr = new FileReader();

  fr.onload = function () {
    target.src = fr.result;
  };
  fr.readAsDataURL(src.files[0]);
}
function putImage() {
  var src = document.getElementById("select_image");
  var target = document.getElementById("target");
  showImage(src, target);
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#blah").attr("src", e.target.result).width(150).height(200);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// Thirs_img

const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
