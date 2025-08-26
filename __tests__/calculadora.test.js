import { somar, subtrair, dividir, multiplicar } from '../src/calculadora.js';


describe("calculadora", () => {
    test("Deve ser dois numeros corretamente", () => {
        //AAA
        // Arrange (Preparar)
        const a = 2;
        const b = 3;

        // Act (Executar)
        const resultado = somar(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(5);
    })


    test("Deve subtrair os dois numeros corretamente", () => {
        //AAA
        // Arrange (Preparar)
        const a = 13;
        const b = 3;

        // Act (Executar)
        const resultado = subtrair(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(10);
    })
    
    test("Deve multiplicar os dois numeros corretamente", () => {
        //AAA
        // Arrange (Preparar)
        const a = 10;
        const b = 4;

        // Act (Executar)
        const resultado = multiplicar(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(40);
    })

    test("Deve dar erro ao dividir por zero", () => {
        expect(() => {
            dividir(10, 0);
        }).toThrow("Não é possível dividir por zero");
    })
})
