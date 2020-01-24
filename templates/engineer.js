function getEngineerStr(data) {
    var github = "";
    if(data.github !== "NA") {
      github = `<a href = "https://github.com/${data.github}" class="card-link"><i class="fab fa-github"></i> ${data.github}</a>`;
    }
    else {
      github = `<p class="card-text"><i class="fab fa-github"></i> NA</p>`;
    }
    return `<div class="col-4" style="width: 18rem;">
      <div class="card mb-3">
        <div class="card-header bg-primary text-white"><h4><i class="fas fa-user-cog"></i> ${data.name}</h4></div>
        <div class="card-body">
          <h6 class="card-text text-muted" style="margin-bottom: 1rem;"><i class="far fa-id-card"></i> ${data.id}</h6>
          <p class="card-text"><i class="far fa-envelope"></i> ${data.email}</p>
          ${github}
        </div>
      </div>
    </div>`;
} 

module.exports.getEngineerStr = getEngineerStr;