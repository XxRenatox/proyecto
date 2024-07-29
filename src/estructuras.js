export function estructuraHTML(info, index) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card bg-transparent border border-black">
                <div class="row no-gutters ">
                    <div class="col-md-6">
                        <img src=${info.img} class="card-img shadow-pop-bl" alt="Imagen ${index + 1}">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body text-secondary">
                            <h5 class="card-title text-secondary">${info.titulo}</h5>
                            <p class="card-text">${info.titulo}</p>
                            <p class="card-text more-text">${info.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}