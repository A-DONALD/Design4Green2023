import data from '../data/data.json'
import Storage from '../modules/storage/LocalStorage'
import JsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import CartModel from './CartModel';
import { getKeySatus } from './FilterModel';

export default class PDFModel {
	
	public static readonly generatePDF = () => {
    const report = new JsPDF('portrait', 'pt', 'a4');

    const values: string[][] = []

    CartModel.getCriteres().map(value => {
      values.push([value.critere.id, value.critere.critere, getKeySatus(value.value)])
    })

    autoTable(report, {
      head: [['ID', 'CRITERE', 'STATUT']],
      body: values
    })

    report.text("Votre audit", 250, 25);
    report.save('WebSiteReport.pdf');

  }

}