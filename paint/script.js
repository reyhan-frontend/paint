const fileInput = document.querySelector(".file-input"),
filterOptions = document.querySelectorAll(".css-list .btn"),
filterName = document.querySelector(".filter-info .name"),
filterValue = document.querySelector(".filter-info .value"),
filterSlider = document.querySelector(".slider input"),
previewImg = document.querySelector(".picture img"),
chooseImgBtn = document.querySelector(".choose-img"),
saveImgBtn = document.querySelector(".save-img");

let blur="0", brightness = "0",contrast="0", grayscale="0", hue = "0", invert= "0", opacity="0", saturate = "0",sepia="0", drop="0" ;



const applyFilter = () => {
    previewImg.style.filter = `blur(${blur}px) contrast(${contrast}%) brightness(${brightness}%) hue(${hue}deg) saturate(${saturate}%) invert(${invert}%) opacity(${opacity}%) sepia(${sepia}%) drop(${drop}px) grayscale(${grayscale}%)`;
};

filterOptions.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        option.classList.add("active");
        filterName.innerText = option.innerText;

        if(option.id === "blur") {
            filterSlider.max = "100";
            filterSlider.value = blur;
            filterValue.innerText = `${blur}%`;
        } else if(option.id === "brightness") {
            filterSlider.max = "100";
            filterSlider.value = brightness;
            filterValue.innerText = `${brightness}%`
        } else if(option.id === "contrast") {
            filterSlider.max = "100";
            filterSlider.value = contrast;
            filterValue.innerText = `${contrast}%`
        } else if(option.id === "hue") {
            filterSlider.max = "360";
            filterSlider.value = hue;
            filterValue.innerText = `${hue}deg`
        } else if(option.id === "invert") {
            filterSlider.max = "100";
            filterSlider.value = invert;
            filterValue.innerText = `${invert}%`;
        } else if(option.id === "opacity") {
            filterSlider.max = "200";
            filterSlider.value = opacity;
            filterValue.innerText = `${opacity}%`;
        } else if(option.id === "saturate") {
            filterSlider.max = "100";
            filterSlider.value = saturate;
            filterValue.innerText = `${saturate}%`;
        } else if(option.id === "sepia") {
            filterSlider.max = "100";
            filterSlider.value = sepia;
            filterValue.innerText = `${sepia}%`;
        } else if(option.id === "drop") {
            filterSlider.max = "100";
            filterSlider.value = drop;
            filterValue.innerText = `${drop}deg`;
        } else {
            filterSlider.max = "100";
            filterSlider.value = grayscale;
            filterValue.innerText = `${grayscale}%`;
        }
    });
});


const updateFilter = () => {
    filterValue.innerText = `${filterSlider.value}${filterSlider.id === 'blur' ? 'px' : '%'}`;
    const selectedFilter = document.querySelector(".filter .active");

    if(selectedFilter.id === "blur") {
        blur = filterSlider.value; 
    } else if(selectedFilter.id === "brightness") {
        brightness = filterSlider.value;
    } else if(selectedFilter.id === "contrast") {
        contrast = filterSlider.value;
    } else if(selectedFilter.id === "grayscale") {
        grayscale = filterSlider.value;
    } else if(selectedFilter.id === "hue") {
        hue = filterSlider.value;
    } else if(selectedFilter.id === "invert") {
        invert = filterSlider.value;
    } else if(selectedFilter.id === "opacity") {
        opacity = filterSlider.value;
    } else if(selectedFilter.id === "saturate") {
        saturate = filterSlider.value;
    } else if(selectedFilter.id === "sepia") {
        sepia = filterSlider.value;
    } else {
        drop = filterSlider.value;
    }
    
    applyFilter();
}

const loadImage = () => {
    let file = fileInput.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
       
    });
}
const saveImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;
    
    ctx.filter =`blur(${blur}px) contrast(${contrast}%) brightness(${brightness}%) 
    hue(${hue}deg) saturate(${saturate}%) invert(${invert}%) opacity(${opacity}%) sepia(${sepia}%)
    drop(${drop}px) grayscale(${grayscale}%)`;

    
    ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
}

document.addEventListener("DOMContentLoaded", function() {
    // دسترسی به المان تصویر
    const image = document.querySelector(".picture");
  
    // دسترسی به المانهای فیلتر
    const blurButton = document.getElementById("blur");
    const brightnessButton = document.getElementById("brightness");
    const contrastButton = document.getElementById("contrast");
    const grayscaleButton = document.getElementById("grayscale");
    const hueButton = document.getElementById("hue");
    const invertButton = document.getElementById("invert");
    const opacityButton = document.getElementById("opacity");
    const saturateButton = document.getElementById("saturate");
    const sepiaButton = document.getElementById("sepia");
    const dropButton = document.getElementById("drop");
  
    // تابع اعمال فیلتر بر روی تصویر
    function applyFilter(filterName, value) {
      image.style.filter = `${filterName}(${value})`;
    }
    if (filterName === "brightness" || filterName === "contrast" || filterName === "grayscale" || filterName === "invert" || filterName === "opacity" || filterName === "saturate" || filterName === "sepia") {
        value = (parseInt(value) * 2) + "%"; // تغییر در محاسبه مقادیر
      } else if (filterName === "blur" || filterName === "hue-rotate") {
        value = (parseInt(value) * 2) + "deg"; // تغییر در محاسبه مقادیر
      } else if (filterName === "drop-shadow") {
        value = `${(parseInt(value) * 2)}px ${(parseInt(value) * 2)}px ${(parseInt(value) * 2)}px rgba(0, 0, 0, 0.5)`; // تغییر در محاسبه مقادیر
      }
  
    // اضافه کردن ایونت لیسنر بر روی المانهای فیلتر
    blurButton.addEventListener("click", function() {
      applyFilter("blur", "0px");
    });
  
    brightnessButton.addEventListener("click", function() {
      applyFilter("brightness", "50%");
    });
  
    contrastButton.addEventListener("click", function() {
      applyFilter("contrast", "50%");
    });
  
    grayscaleButton.addEventListener("click", function() {
      applyFilter("grayscale", "50%");
    });
  
    hueButton.addEventListener("click", function() {
      applyFilter("hue-rotate", "50deg");
    });
  
    invertButton.addEventListener("click", function() {
      applyFilter("invert", "40%");
    });
  
    opacityButton.addEventListener("click", function() {
      applyFilter("opacity", "50%");
    });
  
    saturateButton.addEventListener("click", function() {
      applyFilter("saturate", "50%");
    });
    sepiaButton.addEventListener("click", function() {
      applyFilter("sepia", "50%");
    });
    dropButton.addEventListener("click", function() {
      applyFilter("drop", "50deg");
    });
  
});

const picture = document.querySelector('.picture');
const rangeInput = document.querySelector('input[type="range"]');
const filterInfoName = document.querySelector('.filter-info .name');
const filterInfoValue = document.querySelector('.filter-info .value');

rangeInput.addEventListener('input', (e) => {
  const value = e.target.value;
rangeInput.addEventListener('input', (e) => {
//   const value = e.target.value;
  applyFilter(value);
  const value = e.target.value;
    const halfValue = value / 2;
    filterInfoValue.textContent = `${halfValue}%`;
    applyFilter(filterInfoName.textContent, `${halfValue}%`);
});

const filterButtons = document.querySelectorAll('.option .btn');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filterName = button.querySelector('span').textContent;
    filterInfoName.textContent = filterName;
    rangeInput.value = 50;
    filterInfoValue.textContent = '50%';
    applyFilter(0);
  });
});
  // اعمال فیلتر بر اساس نام فیلتر
  const filterName = filterInfoName.textContent;

  
  switch (filterName) {
    case 'Blur':
      picture.style.filter = `blur(${value}px)`;
      break;
    case 'Brightness':
      picture.style.filter = `brightness(${value}%)`;
      break;
    case 'Contrast':
      picture.style.filter = `contrast(${value}%)`;
      break;
    case 'Grayscale':
      picture.style.filter = `grayscale(${value}%)`;
      break;
    case 'Hue-Rotate':
      picture.style.filter = `hue-rotate(${value}deg)`;
      break;
    case 'Invert':
      picture.style.filter = `invert(${value}%)`;
      break;
    case 'Opacity':
      picture.style.filter = `opacity(${value}%)`;
      break;
    case 'Saturate':
      picture.style.filter = `saturate(${value}%)`;
      break;
    case 'Sepia':
      picture.style.filter = `sepia(${value}%)`;
      break;
    case 'Drop Shadow':
      picture.style.filter = `drop-shadow(${value}px ${value}px ${value}px rgba(0, 0, 0, 0.5))`;
      break;
    default:
      break;
  }

  filterInfoValue.textContent = `${value}%`;
});










filterSlider.addEventListener("input", updateFilter);
saveImgBtn.addEventListener("click", saveImage);
fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());  