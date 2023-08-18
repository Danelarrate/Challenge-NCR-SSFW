import { ordenarPaginas } from "../getPagination";

describe('ordenarPaginas', () => {


    it('should correctly split an array of length 6 into a subarray of length 6', () => {
        const array = [
            { e: "e1", n: "n1", t: "t1", saldo: "saldo1", moneda: "moneda1", tipo_letras: "tipo_letras1" },
            { e: "e2", n: "n2", t: "t2", saldo: "saldo2", moneda: "moneda2", tipo_letras: "tipo_letras2" },
            { e: "e3", n: "n3", t: "t3", saldo: "saldo3", moneda: "moneda3", tipo_letras: "tipo_letras3" },
            { e: "e4", n: "n4", t: "t4", saldo: "saldo4", moneda: "moneda4", tipo_letras: "tipo_letras4" },
            { e: "e5", n: "n5", t: "t5", saldo: "saldo5", moneda: "moneda5", tipo_letras: "tipo_letras5" },
            { e: "e6", n: "n6", t: "t6", saldo: "saldo6", moneda: "moneda6", tipo_letras: "tipo_letras6" }
        ];
        const expected = [
            [
                { e: "e1", n: "n1", t: "t1", saldo: "saldo1", moneda: "moneda1", tipo_letras: "tipo_letras1" },
                { e: "e2", n: "n2", t: "t2", saldo: "saldo2", moneda: "moneda2", tipo_letras: "tipo_letras2" },
                { e: "e3", n: "n3", t: "t3", saldo: "saldo3", moneda: "moneda3", tipo_letras: "tipo_letras3" },
                { e: "e4", n: "n4", t: "t4", saldo: "saldo4", moneda: "moneda4", tipo_letras: "tipo_letras4" },
                { e: "e5", n: "n5", t: "t5", saldo: "saldo5", moneda: "moneda5", tipo_letras: "tipo_letras5" },
                { e: "e6", n: "n6", t: "t6", saldo: "saldo6", moneda: "moneda6", tipo_letras: "tipo_letras6" }
            ],
        ]
        const result = ordenarPaginas(array);
        expect(result).toEqual(expected);
    });


    it('should correctly split an array of length 10 into subarrays of length 5 and 5', () => {
        const array = [
            { e: "e1", n: "n1", t: "t1", saldo: "saldo1", moneda: "moneda1", tipo_letras: "tipo_letras1" },
            { e: "e2", n: "n2", t: "t2", saldo: "saldo2", moneda: "moneda2", tipo_letras: "tipo_letras2" },
            { e: "e3", n: "n3", t: "t3", saldo: "saldo3", moneda: "moneda3", tipo_letras: "tipo_letras3" },
            { e: "e4", n: "n4", t: "t4", saldo: "saldo4", moneda: "moneda4", tipo_letras: "tipo_letras4" },
            { e: "e5", n: "n5", t: "t5", saldo: "saldo5", moneda: "moneda5", tipo_letras: "tipo_letras5" },
            { e: "e6", n: "n6", t: "t6", saldo: "saldo6", moneda: "moneda6", tipo_letras: "tipo_letras6" },
            { e: "e7", n: "n7", t: "t7", saldo: "saldo7", moneda: "moneda7", tipo_letras: "tipo_letras7" },
            { e: "e8", n: "n8", t: "t8", saldo: "saldo8", moneda: "moneda8", tipo_letras: "tipo_letras8" },
            { e: "e9", n: "n9", t: "t9", saldo: "saldo9", moneda: "moneda9", tipo_letras: "tipo_letras9" },
            { e: "e10", n: "n10", t: "t10", saldo: "saldo10", moneda: "moneda10", tipo_letras: "tipo_letras10" }
        ];
        const expected = [
            [
                { e: "e1", n: "n1", t: "t1", saldo: "saldo1", moneda: "moneda1", tipo_letras: "tipo_letras1" },
                { e: "e2", n: "n2", t: "t2", saldo: "saldo2", moneda: "moneda2", tipo_letras: "tipo_letras2" },
                { e: "e3", n: "n3", t: "t3", saldo: "saldo3", moneda: "moneda3", tipo_letras: "tipo_letras3" },
                { e: "e4", n: "n4", t: "t4", saldo: "saldo4", moneda: "moneda4", tipo_letras: "tipo_letras4" },
                { e: "e5", n: "n5", t: "t5", saldo: "saldo5", moneda: "moneda5", tipo_letras: "tipo_letras5" },
            ],
            [
                { e: "e6", n: "n6", t: "t6", saldo: "saldo6", moneda: "moneda6", tipo_letras: "tipo_letras6" },
                { e: "e7", n: "n7", t: "t7", saldo: "saldo7", moneda: "moneda7", tipo_letras: "tipo_letras7" },
                { e: "e8", n: "n8", t: "t8", saldo: "saldo8", moneda: "moneda8", tipo_letras: "tipo_letras8" },
                { e: "e9", n: "n9", t: "t9", saldo: "saldo9", moneda: "moneda9", tipo_letras: "tipo_letras9" },
                { e: "e10", n: "n10", t: "t10", saldo: "saldo10", moneda: "moneda10", tipo_letras: "tipo_letras10" }
            ],

        ];
        const result = ordenarPaginas(array);
        expect(result).toEqual(expected);
    });

    it('should correctly split an array of length 11 into subarrays of length 5, 4, and 2', () => {
        const array = [
            { e: "e1", n: "n1", t: "t1", saldo: "saldo1", moneda: "moneda1", tipo_letras: "tipo_letras1" },
            { e: "e2", n: "n2", t: "t2", saldo: "saldo2", moneda: "moneda2", tipo_letras: "tipo_letras2" },
            { e: "e3", n: "n3", t: "t3", saldo: "saldo3", moneda: "moneda3", tipo_letras: "tipo_letras3" },
            { e: "e4", n: "n4", t: "t4", saldo: "saldo4", moneda: "moneda4", tipo_letras: "tipo_letras4" },
            { e: "e5", n: "n5", t: "t5", saldo: "saldo5", moneda: "moneda5", tipo_letras: "tipo_letras5" },
            { e: "e6", n: "n6", t: "t6", saldo: "saldo6", moneda: "moneda6", tipo_letras: "tipo_letras6" },
            { e: "e7", n: "n7", t: "t7", saldo: "saldo7", moneda: "moneda7", tipo_letras: "tipo_letras7" },
            { e: "e8", n: "n8", t: "t8", saldo: "saldo8", moneda: "moneda8", tipo_letras: "tipo_letras8" },
            { e: "e9", n: "n9", t: "t9", saldo: "saldo9", moneda: "moneda9", tipo_letras: "tipo_letras9" },
            { e: "e10", n: "n10", t: "t10", saldo: "saldo10", moneda: "moneda10", tipo_letras: "tipo_letras10" },
            { e: "e11", n: "n11", t: "t11", saldo: "saldo11", moneda: "moneda11", tipo_letras: "tipo_letras11" }
        ];
        const expected = [
            [
                { e: "e1", n: "n1", t: "t1", saldo: "saldo1", moneda: "moneda1", tipo_letras: "tipo_letras1" },
                { e: "e2", n: "n2", t: "t2", saldo: "saldo2", moneda: "moneda2", tipo_letras: "tipo_letras2" },
                { e: "e3", n: "n3", t: "t3", saldo: "saldo3", moneda: "moneda3", tipo_letras: "tipo_letras3" },
                { e: "e4", n: "n4", t: "t4", saldo: "saldo4", moneda: "moneda4", tipo_letras: "tipo_letras4" },
                { e: "e5", n: "n5", t: "t5", saldo: "saldo5", moneda: "moneda5", tipo_letras: "tipo_letras5" },
            ],
            [

                { e: "e6", n: "n6", t: "t6", saldo: "saldo6", moneda: "moneda6", tipo_letras: "tipo_letras6" },
                { e: "e7", n: "n7", t: "t7", saldo: "saldo7", moneda: "moneda7", tipo_letras: "tipo_letras7" },
                { e: "e8", n: "n8", t: "t8", saldo: "saldo8", moneda: "moneda8", tipo_letras: "tipo_letras8" },
                { e: "e9", n: "n9", t: "t9", saldo: "saldo9", moneda: "moneda9", tipo_letras: "tipo_letras9" },
            ],
            [
                { e: "e10", n: "n10", t: "t10", saldo: "saldo10", moneda: "moneda10", tipo_letras: "tipo_letras10" },
                { e: "e11", n: "n11", t: "t11", saldo: "saldo11", moneda: "moneda11", tipo_letras: "tipo_letras11" }
            ]
        ];
        const result = ordenarPaginas(array);
        expect(result).toEqual(expected);
    });
});
