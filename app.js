console.log("Hello from the other side");

let viz;

// To do List:
// 1. Select the container in the HTML
// 2. Give the viz options (height and width)
// 3. Variable for the dashboard URL

const vizContainer = document.getElementById("vizContainer");
const vizurl =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
const vizOptions = {
  height: 800,
  width: 1000,
  hideToolbar: true,
};

function initViz() {
  viz = new tableau.Viz(vizContainer, vizurl, vizOptions);
}

// Wait until the page has fully loaded then show dashboard
document.addEventListener("DOMContentLoaded", initViz);

// Export pdf Button
// Button element in your html
// Link the button in the JS
// Create teh tableau function
// add a listener to carry out the function when clicking the button

const exportPDF = document.getElementById("ExportPDF");
function loadPDF() {
  viz.showExportPDFDialog();
  console.log("PDF window loaded");
}

exportPDF.addEventListener("click", loadPDF);

const Powerpoint = document.getElementById("Powerpointbut");
function openpower() {
  viz.showExportPowerPointDialog();
  console.log("PowerPoint Bitttch");
}

Powerpoint.addEventListener("click", openpower);
