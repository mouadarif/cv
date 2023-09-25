// Add an event listener to the download button
document.getElementById('downloadButton').addEventListener('click', downloadPDF);
// JavaScript code to convert HTML to PDF and trigger download
function downloadPDF() {
  const element = document.getElementById('pdf-content');

  // Create a configuration object
  const pdfOptions = {
    margin: 10,
    filename: 'output.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  // Use html2pdf.js to generate PDF
  html2pdf()
    .from(element)
    .set(pdfOptions)
    .outputPdf()
    .then((pdf) => {
      // Trigger download
      pdf.save();
    });
}

// Call the downloadPDF function when needed, e.g., when a button is clicked
// document.getElementById('downloadButton').addEventListener('click', downloadPDF);
