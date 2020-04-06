function dark() {
    var element = document.body;
    var theme = document.documentElement.getAttribute('data-user-color-scheme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-user-color-scheme', 'light');
        document.getElementById('theme-icon').classList.remove('fa-flip-horizontal');
    } else {
        document.documentElement.setAttribute('data-user-color-scheme', 'dark');
        document.getElementById('theme-icon').classList.add('fa-flip-horizontal');
    }

    document.getElementById("commento").style.display = "none";
}
function comment() {
    document.documentElement.setAttribute('data-user-color-scheme', 'light');
    document.getElementById('theme-icon').classList.remove('fa-flip-horizontal');
    var x = document.getElementById("commento");
    if (x.style.display === "none") {
        document.getElementById('comment-icon').classList.remove('fa-comments-o');
        document.getElementById('comment-icon').classList.add('fa-comments');
        x.style.display = "block";
        x.scrollIntoView();
    } else {
        x.style.display = "none";
        document.getElementById('comment-icon').classList.remove('fa-comments');
        document.getElementById('comment-icon').classList.add('fa-comments-o');
    }
}
function render(c) {
    $('.bookmark').each(function(i,e){
        e.classList.remove('fa-bookmark');
      	e.classList.add('fa-bookmark-o');
    });
    if (c !== '00') {
        var x = $('#'+c.toString())[0]
        x.classList.remove('fa-bookmark-o');
        x.classList.add('fa-bookmark');
    }
    $('#area').hide().load('chapters/' + c + '.html').fadeIn(500);
}

$(document).ready(function() {
    render('00');
});