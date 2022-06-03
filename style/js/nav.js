function move_nav() {
    let nav_menu = document.getElementById("overlay");
    let move_nav_menu_btn = document.getElementById("move_nav_btn");

    if (nav_menu.style.width <= "0vw") {
        nav_menu.style.width = "60vw";
        move_nav_menu_btn.style.right = 45 + 'vw';
    }
    else {
        nav_menu.style.width = "0vw";
        move_nav_menu_btn.style.right = 0 + 'vw';
    }
}