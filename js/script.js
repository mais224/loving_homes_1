// اظهار رسالة عند ارسال نموذج الحجز او التواصل
const forms = document.querySelectorAll("form");

forms.forEach(function(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const currentLanguage = localStorage.getItem("siteLanguage") || "en";

        if (form.closest(".contact-form-box")) {
            if (currentLanguage === "ar") {
                alert("تم إرسال رسالتك بنجاح!");
            } else {
                alert("Your message has been sent successfully!");
            }
        } else {
            if (currentLanguage === "ar") {
                alert("تم إرسال الحجز بنجاح!");
            } else {
                alert("Your booking has been submitted successfully!");
            }
        }
    });
});


// زر الرجوع لاعلى الصفحة
const backToTopButton = document.createElement("button");

backToTopButton.innerText = "↑";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "30px";
backToTopButton.style.right = "30px";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.fontSize = "20px";
backToTopButton.style.borderRadius = "50%";
backToTopButton.style.border = "none";
backToTopButton.style.backgroundColor = "#d6a86a";
backToTopButton.style.color = "white";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";
backToTopButton.style.zIndex = "9999";

document.body.appendChild(backToTopButton);


// اظهار الزر عند النزول بالصفحة
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});


// الرجوع لاعلى الصفحة
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// جعل أسئلة FAQ تفتح وتغلق عند الضغط
const faqItems = document.querySelectorAll(".faq-item h3");

faqItems.forEach(function (question) {
    question.style.cursor = "pointer";

    question.addEventListener("click", function () {
        const answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});


// تبديل اللغة بين الإنجليزية والعربية
const languageToggle = document.getElementById("language-toggle");

function applyLanguage(language) {
    const textElements = document.querySelectorAll("[data-en][data-ar]");
    const placeholderElements = document.querySelectorAll("[data-en-placeholder][data-ar-placeholder]");

    textElements.forEach(function (element) {
        if (language === "ar") {
            element.textContent = element.getAttribute("data-ar");
        } else {
            element.textContent = element.getAttribute("data-en");
        }
    });

    placeholderElements.forEach(function (element) {
        if (language === "ar") {
            element.placeholder = element.getAttribute("data-ar-placeholder");
        } else {
            element.placeholder = element.getAttribute("data-en-placeholder");
        }
    });

    if (language === "ar") {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        if (languageToggle) {
            languageToggle.textContent = "EN";
        }
    } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        if (languageToggle) {
            languageToggle.textContent = "AR";
        }
    }

    localStorage.setItem("siteLanguage", language);
}

const savedLanguage = localStorage.getItem("siteLanguage") || "en";
applyLanguage(savedLanguage);

if (languageToggle) {
    languageToggle.addEventListener("click", function () {
        const currentLanguage = localStorage.getItem("siteLanguage") || "en";

        if (currentLanguage === "en") {
            applyLanguage("ar");
        } else {
            applyLanguage("en");
        }
    });
}


// الوضع الليلي والنهاري
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggle) {
            themeToggle.textContent = "Light";
        }
    } else {
        document.body.classList.remove("dark-mode");
        if (themeToggle) {
            themeToggle.textContent = "Dark";
        }
    }

    localStorage.setItem("siteTheme", theme);
}

const savedTheme = localStorage.getItem("siteTheme") || "light";
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const currentTheme = localStorage.getItem("siteTheme") || "light";

        if (currentTheme === "light") {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    });
}