document.addEventListener("DOMContentLoaded", function() {
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  if (!input || !results) return;

  var data = null;

  function renderResults(items) {
    if (items.length === 0) {
      results.innerHTML = '<li class="search-no-results">Nessun risultato trovato.</li>';
      return;
    }
    results.innerHTML = items.map(function(item) {
      var section = "";
      if (item.section === "blog") section = "Blog";
      else if (item.section === "D-project") section = "Progetto D";
      else if (item.section === "materia") section = "Materia";
      else if (item.section === "in-cucina") section = "In Cucina";

      var date = item.date ? new Date(item.date).toLocaleDateString("it-IT") : "";

      return '<li>' +
        '<a href="' + item.permalink + '">' + escapeHtml(item.title) + '</a>' +
        '<span class="search-section">' + section + '</span>' +
        '<span class="search-date">' + date + '</span>' +
        '</li>';
    }).join("");
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  function search(query) {
    if (!data) return;
    var q = query.toLowerCase().trim();
    if (!q) {
      results.innerHTML = "";
      return;
    }
    var filtered = data.filter(function(item) {
      return item.title.toLowerCase().indexOf(q) !== -1 ||
             (item.description && item.description.toLowerCase().indexOf(q) !== -1);
    });
    renderResults(filtered);
  }

  input.addEventListener("input", function() {
    search(this.value);
  });

  // Load search index
  fetch("/index.json")
    .then(function(r) { return r.json(); })
    .then(function(d) { data = d; })
    .catch(function() {});
});
