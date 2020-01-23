function getManagerStr(data) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Employee ID: ${data.id}</h6>
        <p class="card-text">${data.email}</p>
        <p class="card-text">${data.number}</p>
      </div>
    </div>`;
} 

module.exports.getManagerStr = getManagerStr;