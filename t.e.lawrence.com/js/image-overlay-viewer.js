(function(){

    let currentSlide = '';
    let nextSlide = '';
    let lastSlide = '';

    countOfSlides = 16;

    function getImage(id) {
        switch (id) {
            case 'img1':
                return {
                    mediumImage: '../images/antelope-canyon-1128815_1280.jpg',
                    largeImage: '../images/antelope-canyon-1128815_1920.jpg',
                };
                break;
            case 'img2':
                return {
                    mediumImage: '../images/canyon-4245261_1280.jpg',
                    largeImage: '../images/canyon-4245261_1920.jpg',
                };
                break;
            case 'img3':
                return {
                    mediumImage: '../images/cyprus-4030808_1280.jpg',
                    largeImage: '../images/cyprus-4030808_1920.jpg',
                };
                break;
            case 'img4':
                return {
                    mediumImage: '../images/forest-931706_1280.jpg',
                    largeImage: '../images/forest-931706_1920.jpg',
                };
                break;
            case 'img5':
                return {
                    mediumImage: '../images/landscape-615429_1280.jpg',
                    largeImage: '../images/landscape-615429_1920.jpg',
                };
                break;
            case 'img6':
                return {
                    mediumImage: '../images/molten-1084181_1280.jpg',
                    largeImage: '../images/molten-1084181_1920.jpg',
                };
                break;
            case 'img7':
                return {
                    mediumImage: '../images/rock-wall-1845128_1280.jpg',
                    largeImage: '../images/rock-wall-1845128_1920.jpg',
                };
                break;
            case 'img8':
                return {
                    mediumImage: '../images/sandstone-467714_1280.jpg',
                    largeImage: '../images/sandstone-467714_1920.jpg',
                };
                break;
            case 'img9':
                return {
                    mediumImage: '../images/spring-276014_1280.jpg',
                    largeImage: '../images/spring-276014_1920.jpg',
                };
                break;
            case 'img10':
                return {
                    mediumImage: '../images/startrails-918551_1280.jpg',
                    largeImage: '../images/startrails-918551_1920.jpg',
                };
                break;
            case 'img11':
                return {
                    mediumImage: '../images/sunset-3325080_1280.jpg',
                    largeImage: '../images/sunset-3325080_1920.jpg',
                };
                break;
            case 'img12':
                return {
                    mediumImage: '../images/tree-838667_1280.jpg',
                    largeImage: '../images/tree-838667_1920.jpg',
                };
                break;
            case 'img13':
                return {
                    mediumImage: '../images/yellowstone-national-park-1581879_1280.jpg',
                    largeImage: '../images/yellowstone-national-park-1581879_1920.jpg',
                };
                break;
            case 'img14':
                return {
                    mediumImage: '../images/turret-arch-1364314_1280.jpg',
                    largeImage: '../images/turret-arch-1364314_1920.jpg',
                };
                break;
            case 'img15':
                return {
                    mediumImage: '../images/fog-1535201_1280.jpg',
                    largeImage: '../images/fog-1535201_1920.jpg',
                };
                break;
            case 'img16':
                return {
                    mediumImage: '../images/desert-1654439_1280.jpg',
                    largeImage: '../images/desert-1654439_1920.jpg',
                };
                break;
            default:
                break;
        }
    }

    function openOverlay() {
        document.getElementById('overlay').style.display = 'block';
    }
    function closeOverlay() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('overlay').classList.remove("full-screen");
    }

    document.querySelectorAll('.image-inner').forEach(function(el){
        el.addEventListener('click', function() {
            openOverlay();
            setSlidePos(this.id);
        });
    });

    function resetButtonAnimation() {
        let div = document.getElementById('overlay-inner');
        div.classList.remove('animate-viewer');
        void div.offsetWidth; // triggering reflow
        div.classList.add('animate-viewer');    
    }

    function setSlidePos(id) {
        resetButtonAnimation();

        currentSlide = id;
        currentSlidePos = parseInt(currentSlide.replace('img', ''));
        displayImage(currentSlide);

        nextSlidePos = currentSlidePos + 1;
        if (nextSlidePos === countOfSlides + 1) nextSlidePos = 1;
        nextSlide = 'img' + nextSlidePos;

        lastSlidePos = currentSlidePos - 1;
        if (lastSlidePos === 0) lastSlidePos = countOfSlides;
        lastSlide = 'img' + lastSlidePos;
    }

    function displayImage(id) {
        let inner = document.getElementById('overlay-inner');
        const {mediumImage, largeImage} = getImage(id);
        
        let overlay = document.getElementById('overlay');
        (overlay.classList.contains('full-screen')) ? url = largeImage : url = mediumImage;
        inner.style.backgroundImage = "url('"+ url +"')";
    }

    function fullscreenMode() {
        document.getElementById('overlay').classList.add("full-screen");
        setSlidePos(currentSlide);
    }
    function regularMode() {
        document.getElementById('overlay').classList.remove("full-screen");
        setSlidePos(currentSlide);
    }

    document.getElementById('expand').addEventListener('click', function(){
        fullscreenMode();
    });
    document.getElementById('collapse').addEventListener('click', function(){
        regularMode();
    });
    document.getElementById('close').addEventListener('click', function(){
        closeOverlay();
    });
    document.getElementById('forward').addEventListener('click', function(){
        setSlidePos(nextSlide);
    });
    document.getElementById('back').addEventListener('click', function(){
        setSlidePos(lastSlide);
    });

    document.addEventListener("keydown", function(event) {
        event.preventDefault();
        const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
        switch (key) { // change to event.key to key to use the above variable
          case "ArrowLeft":
            setSlidePos(lastSlide);
            break;
          case "ArrowRight":
            setSlidePos(nextSlide);
            break;
          case "ArrowUp":
            fullscreenMode();
            break;
          case "ArrowDown":
            regularMode();
            break;
        case "Escape":
            closeOverlay();
            break;
        }
      });

})();