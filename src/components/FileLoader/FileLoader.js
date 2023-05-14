import * as XLSX from 'xlsx'

function readExcelFile() {
    const file = '//Mongo.xlsx';
    const workbook = XLSX.readFile(file);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    console.log(data);
    // generate response based on the parsed data here
  }

function FileLoader () {
    return readExcelFile();
}

export default FileLoader;