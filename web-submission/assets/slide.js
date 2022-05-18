var slideIndex = 1;
            showSlide(slideIndex);

        function nextslide(n){
            showSlide(slideIndex += n);
        }

        function dotslide(n){
            showSlide(slideIndex = n);
        }

        function showSlide(n) {
            var i;
            var slides = document.getElementsByClassName("imgSlide");
            var dot = document.getElementsByClassName("dot");
            
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                
                slides[i].style.display = "none";
            }

            for (i = 0; i < slides.length; i++) {
                
                dot[i].className = dot[i].className.replace(" active", "");
            }

            slides[slideIndex - 1].style.display = "block";

            dot[slideIndex - 1].className += " active";
        }


var slideI = 1;
        slideShow(slideI);

    function nextWisata(n){
        slideShow(slideI += n);
    }
    function prevWisata(n){
        slideShow(slideI -= n);
    }

    function dotslide(n){
        slideShow(slideI = n);
    }

    function slideShow(n) {
        var i;
        var wisatas = document.getElementsByClassName("wisataSlide");
        var dot = document.getElementsByClassName("dot");
        
        if (n > wisatas.length) {
            slideI = 1
        }
        if (n < 1) {
            slideI = wisatas.length;
        }
        for (i = 0; i < wisatas.length; i++) {
            
            wisatas[i].style.display = "none";
        }

        for (i = 0; i < wisatas.length; i++) {
            
            dot[i].className = dot[i].className.replace(" active", "");
        }

        wisatas[slideI - 1].style.display = "block";

        dot[slideI - 1].className += " active";
    }