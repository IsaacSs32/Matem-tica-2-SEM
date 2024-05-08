# Matematica-2-SEM
Considere uma base de dados relacional que possua uma tabela de usuários com os seguintes valores:

| Nome      | Telefone |
|-----------|----------|
| Fabrício  | 111      |
| Beatriz   | 222      |
| Fabíola   | 33       |



Utilizando consultas SQL, mostre que não é possível efetuar uma quantidade de consultas que seja 
superior a P(A), sendo A o conjunto formado pelas n-tuplas que compõem as linhas da tabela. Para esse caso, ilustre todas as consultas e resultados possíveis.

<img src="images/Imagem1.png" alt="" width="1200" >
<img src="images/Imagem2.png" alt="" width="1200" >
<img src="images/Imagem3.png" alt="" width="1200" >
<img src="images/Imagem4.png" alt="" width="1200" >
<img src="images/Imagem5.png" alt="" width="1200" >





Essas consultas mostram que, mesmo com diferentes combinações e filtros, o número total de consultas possíveis não pode exceder o tamanho do conjunto A (que é igual ao número de n-tuplas na tabela de usuários). Portanto, não é possível efetuar uma quantidade de consultas superior a P(A).


Operações realizadas no banco de dados


SELECT * FROM usuarios;
SELECT * FROM usuarios WHERE Nome = 'fabrício';
SELECT COUNT(*) FROM usuarios;
SELECT COUNT(*) FROM usuarios;
SELECT Telefone FROM usuarios;
SELECT * FROM usuarios WHERE Telefone = '222';
