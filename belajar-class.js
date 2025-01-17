class Manusia {
    constructor(nama, alamat, namaPanggilan, tahunLahir) {
        this.namaSaya = nama;
        this.alamat = alamat;
        this.namaPanggilan = namaPanggilan;
        this.tahunLahir = tahunLahir;
    }

    kenalanDong() {
        console.log(`
            Halo, nama saya ${this.namaSaya}.
            Saya tinggal di ${this.alamat}.
            Nama panggilan saya adalah ${this.namaPanggilan}
        `);
    }

    hitungUmur() {
        const tahunIni = new Date().getFullYear();
        const umur = tahunIni - this.tahunLahir;
        return umur;
    }

    makan() {
        this.#memasak();
        console.log(`${this.namaSaya} makan, nyam-nyam-nyam`);
    }

    #memasak() {
        console.log('Memasak dilakukan sebelum makan, tidak boleh memasak tanpa dimakan');
    }
}

class Programmer extends Manusia {
    constructor(nama, alamat, namaPanggilan, tahunLahir, bahasaPemrograman) {
        super(nama, alamat, namaPanggilan, tahunLahir);
        this.bahasaPemrograman = bahasaPemrograman;
    }

    kenalanDong() {
        super.kenalanDong();
        console.log('Aku Programmer Jago nih');
    }

    coding() {
        console.log('Coding dulu bosqu');
    }
}

class Dokter extends Manusia {
    constructor(nama, alamat, namaPanggilan, tahunLahir, spesialis) {
        super(nama, alamat, namaPanggilan, tahunLahir);
        
        this.spesialis = spesialis;
    }
}

class Supir extends Manusia {
    constructor(nama, alamat, namaPanggilan, tahunLahir, kendaraan, sim) {
        super(nama, alamat, namaPanggilan, tahunLahir);
        
        this.kendaraan = kendaraan;
        this.sim = sim;
    }
}

const sabrina = new Manusia("Sabrina Binar", "Jakarta", "Sabrina", 2000);
const elonMusk = new Manusia("Elon Musk", "Mars", "Elon", 1975);

sabrina.kenalanDong();
elonMusk.kenalanDong();

console.log(sabrina.hitungUmur()); // Langsung di console.log

// Tampung di variabel dulu baru console.log
const umurElonMusk = elonMusk.hitungUmur();
console.log(umurElonMusk);

const namDoSan = new Programmer("Nam Do-san", "Korea Selatan", "Do-san", 1991, ["JavaScript", "Python"])
namDoSan.kenalanDong();

try {
    sabrina.coding();
} catch (err) {
    alert("Sabrina gak bisa ngoding 😅");
}