export enum SortType {
    Ascending = "+",
    Descending = "-"
}

export class TableProperty<T = any> {
    /** pageNumber */
    pageNumber: number;
    /** pageLimit */
    pageLimit: number;
    /** sort */
    sort?: string;
    /** order */
    order?: string;
    /** order */
    start?: number;
    /** end */
    end?: number;
    /** search */
    search?: string;
    /**  filter */
    filter?: T;
    /** totalRecord */
    totalRecord?: number;
    constructor(data?: any) {
        this.pageNumber = data && data.pageNumber || 0;
        this.pageLimit = data && data.pageLimit || 0;
        this.sort = data && data.sort || 'firstname';
        this.order = data && data.order || SortType.Ascending;
        this.filter = data && data.filter || null;
        this.search = data && data.search || null;
    };
}

export declare class Params<T = any> {
    /**
     * Page  of params
     */
    page: string;
    /**
     * Per page of params
     */
    perPage: string;
    /**
     * Sort  of params
     */
    sort: string;
    /**
     * Order  of params
     */
    order: string;
    /**
     * Start  of params
     */
    start: string;
    /**
     * End  of params
     */
    end: string;
    /**
     * Q  of params
     */
    q: string;
    /**
     * Filter  of params
     */
    filter: T;
    
    search : string;
}



export interface MyState {
    /** type */
    type: string;
    /** payload */
    payload: any;
}

export class CustomerData {
    /** id */
    id: number;
    /** company */
    company: string;
    /** name */
    firstName: string;
    /** file */
    file: any;
    /** productNo */
    productNo: number;
     /** email */
    email: string;
    /** group */
    group: string;
    /** createdAt */
    createdAt: string

    constructor(data?: any) {       
        this.id = data && data.id || 0;
        this.company = data && data.company || '';
        this.firstName = data && data.firstName || '';
        this.file = data && data.file || null;
        this.productNo = data && data.productNo || 0;
        this.email = data && data.email || 0;
        this.group = data && data.group || '';
        this.createdAt = data && data.createdAt || ''
    }
}

export interface EmpState {
    /** empData */
    empData: CustomerData[];
    /** empDataById */
    empDataById: CustomerData;
}
