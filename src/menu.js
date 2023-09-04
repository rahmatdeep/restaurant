export default function menuContent(){
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('container-md');
    mainDiv.classList.add('d-flex');
    mainDiv.classList.add('justify-content-center');
    mainDiv.classList.add('align-items-center');
    mainDiv.style.minHeight = "90vh";


    mainDiv.innerHTML = `
    <div class="container text-center ">
        <div class="row ">
            <div class="col">
                <div class="card mb-3" style="width: 18rem;">
                    <img src="../src/pizza.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-3" style="width: 18rem;">
                    <img src="../src/pizza.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-3" style="width: 18rem;">
                    <img src="../src/pizza.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="col">
                <div class="card mb-3" style="width: 18rem;">
                    <img src="../src/pizza.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-3" style="width: 18rem;">
                    <img src="../src/pizza.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-3" style="width: 18rem;">
                    <img src="../src/pizza.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>`
    

    
    document.getElementById('content').appendChild(mainDiv);
}