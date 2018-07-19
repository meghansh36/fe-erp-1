export class SearchData {
    filters: Array<{ flexiLabel: { operator: string, value: string } }>;
    page: string;
    recordsPerPage: string;
    formCode: string;
    constructor(page: string, recordsPerPage: string, formCode: string, filters:Array<{ flexiLabel: { operator: string, value: string } }>) { }
}
