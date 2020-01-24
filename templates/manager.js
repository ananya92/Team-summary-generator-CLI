function getManagerStr(data) {
    return `<div class="col-4" style="width: 18rem; margin:auto;">
      <div class="card mb-3">
        <div class="card-header bg-primary text-white"><h4><i class="fas fa-user-tie"></i> ${data.name}</h4></div>
        <div class="card-body">
          <h6 class="card-text text-muted" style="margin-bottom: 1rem;"><i class="far fa-id-card"></i> ${data.id}</h6>
          <p class="card-text"><i class="far fa-envelope"></i> ${data.email}</p>
          <p class="card-text"><i class="fas fa-phone"></i></i> ${data.number}</p>
        </div>
      </div>
    </div>`;
} 

module.exports.getManagerStr = getManagerStr;