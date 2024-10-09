/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
    constructor() {
      this.items = []; // Properti untuk menampung daftar item
    }
  
    // Method untuk menambahkan item ke dalam inventory
    addItem(item) {
      this.items.push(item); // Menambahkan item ke dalam array items
    }
  
    // Method untuk menghapus item berdasarkan id
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id); // Menghapus item dengan id yang sesuai
    }
  
    // Method untuk mengembalikan string yang berisi detail semua barang
    listItems() {
      return this.items.map(item => item.displayDetails()).join('\n'); // Mengembalikan detail setiap item
    }
  }


// Jangan hapus kode di bawah ini!
export default Inventory;
