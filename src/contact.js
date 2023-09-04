export default function contactContent(){
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('container-md');
    mainDiv.classList.add('d-flex');
    mainDiv.classList.add('flex-column');
    mainDiv.classList.add('justify-content-center');
    mainDiv.classList.add('align-items-center');
    mainDiv.style.minHeight = "90vh";


    mainDiv.innerHTML = `
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../src/pizza.jpg" class="d-block w-100" alt="..." width="500" height="600">
        </div>
        <div class="carousel-item">
            <img src="../src/pizza.jpg" class="d-block w-100" alt="..." width="500" height="600">
        </div>
        <div class="carousel-item">
            <img src="../src/pizza.jpg" class="d-block w-100" alt="..." width="500" height="600">
        </div>
    </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <p class="h3 mt-3">Our Restaraunt is located in the downtown area</p>
    <p class="h4 mt-3">Contact us at </p>
    
    `


    
    document.getElementById('content').appendChild(mainDiv);
}