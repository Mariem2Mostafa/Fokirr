// const words = [" Designer", " Developer"];
// let index = 0;
// let charIndex = 0;
// let isDeleting = false;
// const speed = 100; // سرعة الكتابة والمسح

// function typeEffect() {
//   const textElement = document.getElementById("dynamic-text");
//   const currentWord = words[index];

//   if (isDeleting) {
//     // مسح حرف حرف
//     textElement.textContent = currentWord.substring(0, charIndex - 1);
//     charIndex--;
//   } else {
//     // كتابة حرف حرف
//     textElement.textContent = currentWord.substring(0, charIndex + 1);
//     charIndex++;
//   }

//   if (!isDeleting && charIndex === currentWord.length) {
//     // بعد اكتمال الكلمة، انتظر قليلاً ثم ابدأ الحذف
//     setTimeout(() => isDeleting = true, 1000);
//   } else if (isDeleting && charIndex === 0) {
//     // بعد حذف الكلمة بالكامل، انتقل للكلمة التالية
//     isDeleting = false;
//     index = (index + 1) % words.length;
//   }

//   setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
// }

// // بدء التأثير بعد تحميل الصفحة
// document.addEventListener("DOMContentLoaded", typeEffect);


const textElement = document.getElementById("dynamic-text");
const words = ["Developer", "Designer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];
    let displayedText = currentWord.substring(0, letterIndex);
    
    textElement.textContent = displayedText;

    if (!isDeleting) {
        if (letterIndex < currentWord.length) {
            letterIndex++;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // توقف قليلًا قبل الحذف
        }
    } else {
        if (letterIndex > 0) {
            letterIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500); // توقف قبل بدء الكلمة التالية
        }
    }
}

typeEffect();


window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav"); // استهداف النافبار
    const homeSection = document.getElementById("home"); // قسم الهوم
    
    if (window.scrollY > homeSection.clientHeight) {
        navbar.style.backgroundColor = "#333333"; // تغيير لون الخلفية إلى الرمادي
    } else {
        navbar.style.backgroundColor = "transparent"; // إبقائها شفافة
    }
});
