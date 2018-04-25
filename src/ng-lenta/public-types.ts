export interface LentaColumn {
    prop: string;
    name?: string;
    sortable?: boolean;
    size?: any;
}

export interface LentaOptions {
    clientSide?: boolean;
    paging?: {
        enabled?: boolean,
        maxSize?: number,
        pageSize?: number
    }
}
