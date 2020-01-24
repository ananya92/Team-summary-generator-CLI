function getEngineerStr(data) {
    return `<div class="card col-4" style="width: 18rem; margin:auto;">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Employee ID: ${data.id}</h6>
        <p class="card-text">${data.email}</p>
        <a href="${data.github}" class="card-link">${data.github}</a>
      </div>
    </div>`;
} 

module.exports.getEngineerStr = getEngineerStr;