export enum Filters {
	status = 'Status'
}

export type FiltersValues = {
	filter: Filters
	value: string
}

export const getStatusKey = (status: string) => {
	if(status == 'Conforme')
		return 'cn'
	if(status == 'Non conforme')
		return 'nc'
	if(status == 'En cours de déploiement')
		return 'en'
	if(status == 'Non applicable')
		return 'na'
}

export const getKeySatus = (status: string) => {
	if(status == 'cn')
		return 'Conforme'
	if(status == 'nc')
		return 'Non conforme'
	if(status == 'en')
		return 'En cours de déploiement'
	return 'Non applicable'
}