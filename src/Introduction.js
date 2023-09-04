export default function introductionContent(){
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('container-md');
    mainDiv.classList.add('d-flex');
    mainDiv.classList.add('justify-content-center');
    mainDiv.classList.add('align-items-center');
    mainDiv.style.minHeight = "90vh";


    mainDiv.innerHTML = `<div class="card shadow-lg p-3 mb-5 bg-white rounded">
    <div class="card-header">
      Quote
    </div>
    <div class="card-body ">
      <blockquote class="blockquote mb-0 ">
        <p>This is a quote</p>
        <footer class="blockquote-footer">Goti <cite title="Source Title">Gonechand</cite></footer>
      </blockquote>
    </div>
  </div>`


    
    document.getElementById('content').appendChild(mainDiv);
}