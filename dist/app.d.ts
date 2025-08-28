export interface ExecutableOptions {
	log?: boolean,
    dump?: boolean,
    logPage?: boolean,
	skipCheck?: boolean
}

export type DateLike = string | number | Date;

export type JSObject = Record<string,any>;

export type RequestProxyObject = {
	auth: {
		url: string, 
		apiKey: string, 
		version: number|string
	},
	params: Record<string, any>,
}

export type RequirementType = {
	any: string[]|true
} | string | ((RequestProxyObject) => string|false);

export type GatewayRequestProxyObject = {
	gate: {
		method: 'get'|'post'|'put'|'delete',
		node: string
	},
	appendable?: {
		index: number,
		arrayNode: string,
		except: string[]
	},
	custom?: Record<string,Function>,
	snakeCase?: boolean,
	next?: boolean,
	rootparams?: string|boolean,
	arrays?: string[],
	req?: RequirementType[],
} & RequestProxyObject;

export interface Gateway<R = JSObject, P = JSObject> {
	/**
	 * Executes the query to designated API endpoint
	 * @param options Use options: log - to console log params, url and method, logPage - to console log current page in a loop
	 * @returns Idosell response
	 */
	exec: (options?: ExecutableOptions) => Promise<R>,

	/**
	 * @returns Object with currently mapped parameters
	 */
	getParams: () => P,

	/**
	 * @description Set object as params
	 */
	setParams: (params: P) => this
}

export interface PagableGateway<T,R = JSObject, P = JSObject> extends Gateway<R, P> {
	/**
     * @returns number of items i.e. products, orders, documents, etc.
     */
	count: () => Promise<number>,

	/**
     * Allows to change offset and number of records returned
     * @param pageNumber - The page number to navigate to.
     * @param pageSize - The size of page
     * @returns The updated instance for method chaining.
     */
	page: (pageNumber: number, pageSize?: number) => T

	/**
	 * @returns If completed request has more pages
	 */
	hasNext: () => boolean
}

export interface AppendableGateway<T,R = JSObject, P = JSObject> extends Gateway<R, P> {
	/**
	 * Start creating next item in list
	 */
	append: () => T
}

export {};