function twoArrays(k, A, B) {
  const n = A.length;
  // Ordenar los arreglos A y B en orden ascendente y descendente respectivamente
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  
  console.log(A)
  console.log(B)
  
  // Verificar si existe alguna permutación de A y B que satisfaga la relación
  for (let i = 0; i < n; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

// Ejemplo de uso
const queries = 2;
const casosPrueba = [
  [[10, 20, 30], [1, 2, 3], [4, 5, 6]],
  [[5, 6, 7], [1, 2, 2], [2, 3, 4]]
];

for (let i = 0; i < 1; i++) {
  const [n, k] = casosPrueba[i][0];
  console.log(n)
  const A = casosPrueba[i][1];
  const B = casosPrueba[i][2];
  
  const result = twoArrays(k, A, B);
  console.log(result);
}