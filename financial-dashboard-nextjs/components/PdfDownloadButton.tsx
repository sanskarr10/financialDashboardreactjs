'use client';
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function PdfDownloadButton({ targetId }: { targetId: string }) {
  const handleDownload = async () => {
    const node = document.getElementById(targetId);
    if (!node) return;
    // Increase scale for crisp PDF
    const canvas = await html2canvas(node, { scale: 2, useCORS: true, backgroundColor: getComputedStyle(document.body).backgroundColor });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
    const imgWidth = canvas.width * ratio;
    const imgHeight = canvas.height * ratio;
    const x = (pageWidth - imgWidth) / 2;
    const y = 10;
    pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
    pdf.save('financial-dashboard.pdf');
  };

  return (
    <button className="btn btn-primary rounded-xl" onClick={handleDownload}>
      Download PDF
    </button>
  );
}
