//menu.js
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("nav-sticky");
    } else {
        $(".sticky").removeClass("nav-sticky");
    }
});

// Scrollspy
$("#navbarCollapse").scrollspy({ offset: 70 });

// Modal Keyboard Function
document.addEventListener("keydown", function (e) {
    const opened = document.querySelector(".modal.show");
    if (!opened) return;

    const id = opened.id;
    const current = parseInt(id.replace("project", ""));
    const total = 11;

    let target = null;

    if (e.key === "ArrowLeft") {
        target = current - 1 < 1 ? total : current - 1;
    }

    if (e.key === "ArrowRight") {
        target = current + 1 > total ? 1 : current + 1;
    }

    if (target !== null) {
        $("#" + id).modal("hide");
        setTimeout(() => {
            $("#project" + target).modal("show");
        }, 300); // perfect timing with fade transition
    }
});

document.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;

    const opened = document.querySelector(".modal.show");
    if (!opened) return;

    const id = opened.id;
    const current = parseInt(id.replace("project", ""));
    const total = 11;
    let target = null;

    // Swipe left → Next
    if (touchStartX - touchEndX > 50) {
        target = current + 1 > total ? 1 : current + 1;
    }

    // Swipe right → Previous
    if (touchEndX - touchStartX > 50) {
        target = current - 1 < 1 ? total : current - 1;
    }

    if (target !== null) {
        $("#" + id).modal("hide");
        setTimeout(() => {
            $("#project" + target).modal("show");
        }, 200);
    }
});