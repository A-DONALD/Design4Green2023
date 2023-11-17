/**
 * @class Storage
 * @author Damien Laning
 * @description this class is used to manage the local or the local storage in the application
 * @exports
 * @default
 * @since 17/06/2023
 */
export default class LocalStorage {

	/**
	 * @method get
	 * @description this method is used to get a specific cookies in the navigator
	 * @param {string} name the name of the cookies
	 * @public
	 * @static
	 * @readonly
	 * @returns {any} the cookies
	 */
	public static readonly get = (name: string): any => {
		const value = localStorage.getItem(name)
		if (value) return JSON.parse(value)
		return null
	}

	/**
	 * @method set
	 * @description this method is used to set a specific cookies in the navigator
	 * @param {string} name the name of the cookies
	 * @param {string | number} value the value of the cookies
	 * @public
	 * @static
	 * @readonly
	 * @returns {void} the cookies
	 */
	public static readonly set = (name: string, value: string | object): void => {
		return localStorage.setItem(name, typeof value == 'string' ? value : JSON.stringify(value))
	}

	/**
	 * @method remove
	 * @description this method is used to get all the cookies in the navigator
	 * @param {string} name the name of the cookies
	 * @public
	 * @static
	 * @readonly
	 * @returns {void} the cookies
	 */
	public static readonly remove = (name: string): void => {
		localStorage.removeItem(name)
	}

	/**
	 * @method isExist
	 * @description this method is used to is a cookies is already defined in the navigator
	 * @param {string} name the name of the cookies
	 * @public
	 * @static
	 * @readonly
	 * @returns {boolean} if the cookies is defined or not
	 */
	public static readonly clear = (): void => {
		return localStorage.clear()
	}

}