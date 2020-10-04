import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

// "../../../public/Ashif_Fahim_Resume.pdf"
function Resume() {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess = ({ totalPages }) => {
        setNumPages(totalPages)
    }

    const goToPrevPage = () =>
        setNumPages(pageNumber - 1)

    const goToNextPage = () =>
        setPageNumber(pageNumber + 1)

    return (
        <div>
            <nav>
                <button onClick={goToPrevPage}>Prev</button>
                <button onClick={goToNextPage}>Next</button>
            </nav>
            <Document file="../../../public/Ashif_Fahim_Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} width={600} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <a href={"../../../public/Ashif_Fahim_Resume.pdf"} download="myFile"> Dwonload File </a >
        </div>
    )
}

export default Resume;