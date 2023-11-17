import data from '../data/data.json'

export type Criteres = {
    id: string;
    url: string;
    critere: string;
    thematique: string;
    objectif: string;
    miseEnOeuvre: string;
    controle: string;
}

export enum Filter {
    thematique = 'thematique'
}

export default class CriteresModel {

    public static readonly getCriteres = (): Criteres[] => data

    static readonly getCriteresWithFilter = (filter: Filter, value: string): Criteres[] => {
        return data.filter(practice => practice[filter] == value)
    }

    static readonly getDatasCritereWithFilter = (filter: Filter, value: string): string[] => {
        const datasCritere: string[] = []
        data.filter(practice => practice[filter] == value).map(practice => {
            datasCritere.push(practice.critere)
        })
        return datasCritere.filter((dataCritere, index) => datasCritere.indexOf(dataCritere) == index)
    }

    static readonly getThematiques = (): string[] => {
        const thematiques: string[] = []
        data.map(practice => {
            thematiques.push(practice.thematique)
        })
        return thematiques.filter((thematique, index) => thematiques.indexOf(thematique) == index)
    }

    static readonly getCriteresSize = () => data.length

    static readonly getCriteresWithFilterSize = (filter: Filter, value: string): number => data.filter(practice => practice[filter] == value).length

}