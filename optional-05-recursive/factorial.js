function factorial(n) {
    // Basis kasus: jika n sama dengan 0, kembalikan 1
    if (n === 0) {
      return 1;
    }
    // Rekursi: kembalikan n dikalikan dengan faktorial dari n-1
    return n * factorial(n - 1);
  }
  
  // Jangan hapus kode di bawah ini!
  export default factorial;
  
