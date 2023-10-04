import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import Quill from 'quill';
import ImageResize from 'quill-image-resize';
import tableModule  from 'quill-table';

Quill.register('modules/imageResize', ImageResize);

// Register the formats and modules required for the table functionality
Quill.register('modules/table', tableModule);

const editorStyle = {
  height: "175px",
  position: "relative"
};

const quillStyle = {
  width: "100%",
  height: "135px",
};
const headingsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '10px',
  background: '#f0f0f0',
  position: 'absolute',
  top: '40px',
  left: '0',
  right: '0',
  zIndex: '1',
  color: "#03a803",
  fontWeight: 500,
};


const TextEditor = ({ onSave,bifurcation }) => {
  const [editorHtml, setEditorHtml] = useState('');
  const quillRef = useRef(null);
  const handleFontSizeChange = (value) => {
    const quill = quillRef.current.getEditor();
    quill.format('size', value);
  };
  const handleHeading1 = () => {
    const quill = quillRef.current.getEditor();
    quill.format('header', 1);
  };
  
  const handleHeading2 = () => {
    const quill = quillRef.current.getEditor();
    quill.format('header', 2);
  };
  
  const handleSmallerText = () => {
    const quill = quillRef.current.getEditor();
    quill.format('size', false);
  };

  const handleChange = (html) => {
    setEditorHtml(html);
    onSave(stripHtml(html));
  };
  useEffect(() => {
    
    // if(bifurcation){
      const initialContent = `
      
      `;
      quillRef.current.getEditor().root.innerHTML = initialContent;
    // }
    
  }, []);

  const stripHtml = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };
  const insertTable = (e) => {
    e.preventDefault();
    const tableDimensions = prompt('Enter the number of rows and columns (e.g., 3x3):');
    if (tableDimensions) {
      const [rows, cols] = tableDimensions.split('x');
      if (!isNaN(rows) && !isNaN(cols)) {
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        if (range) {
          // Create an empty table element with the specified rows and columns
          const table = document.createElement('table');
          for (let i = 0; i < rows; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
              const cell = document.createElement('td');
              cell.textContent = ' ';
              row.appendChild(cell);
            }
            table.appendChild(row);
          }
  
          // Insert the table HTML at the current cursor position
          quill.clipboard.dangerouslyPasteHTML(range.index, table.outerHTML);
        } else {
          alert('Please place the cursor in the editor where you want to insert the table.');
        }
      } else {
        alert('Please enter valid numbers for rows and columns.');
      }
    }
  };

  // const insertTable = (e) => {
  //   e.preventDefault();
  //   const quill = quillRef.current.getEditor();
  //   const range = quill.getSelection();
  //   const table = prompt('Enter the number of rows and columns (e.g., 3x3):');
  //   if (table) {
  //     const [rows, cols] = table.split('x');
  //     const tableHtml = `<table border="1">${'<tr>'.repeat(rows)}${'<td></td>'.repeat(cols)}</table>`;
  //     quill.clipboard.dangerouslyPasteHTML(range ? range.index : 0, tableHtml);
  //   }
  // };

  // const insertTable = () => {
  //   const table = prompt('Enter the number of rows and columns (e.g., 3x3):');
  //   if (table) {
  //     const [rows, cols] = table.split('x');
  //     const quill = quillRef.current.getEditor();
  //     const tableHtml = `<table border="1">${'<tr>'.repeat(rows)}${'<td></td>'.repeat(cols)}</table>`;
  //     quill.clipboard.dangerouslyPasteHTML(quill.getLength(), tableHtml);
  //   }
  // };

  

  return (
    <>
    <div className="text-editor" style={editorStyle}>
      {bifurcation && (<div style={headingsContainerStyle}>
        <h2 style={{ margin: '0' }}>INDIAN</h2>
        <h2 style={{ margin: '0' }}>OVERSEAS</h2>
      </div>) }
      
      <ReactQuill
        ref={quillRef}
        value={editorHtml}
        style={quillStyle}
        onChange={handleChange}
        theme="snow"
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            ['link'],
            ['image'],
            ['table'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
          ],
          imageResize: {
            displaySize: true,
          },
        }}
        
        onLoad={(quill) => {
          quill.getModule('toolbar').addHandler('smaller-text', handleSmallerText);
          quill.getModule('toolbar').addHandler('header', handleHeading1);
          quill.getModule('toolbar').addHandler('header', handleHeading2);
          quill.getModule('toolbar').addHandler('table', insertTable);
        }}
      />
    </div>
      <button onClick={insertTable}>Add Table</button>
      </>

  );
};

export default TextEditor;