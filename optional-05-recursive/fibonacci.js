function fibonacci(n, sequence = [0, 1]) {
    // Jika n adalah 0, kembalikan sequence dengan hanya 0
    if (n === 0) {
      return [0];
    }
    // Jika sequence memiliki panjang lebih dari n, kembalikan sequence
    if (sequence.length > n) {
      return sequence.slice(0, n + 1);
    }
  
    // Hitung nilai berikutnya dalam deret Fibonacci
    const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextValue);
  
    // Panggil fungsi fibonacci secara rekursif
    return fibonacci(n, sequence);
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;
  