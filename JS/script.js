const formContainer = document.getElementById("form-container");
const nama = document.getElementById("nama");
const tanggalLahir = document.getElementById("tanggal-lahir");
const jenisKelamin = document.getElementById("jenis-kelamin");
const pesan = document.getElementById("pesan");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {
  // Prevent the form from submitting in the traditional way
  event.preventDefault();

  // Collect the form data
  const formData = {
    nama: nama.value,
    tanggalLahir: tanggalLahir.value,
    jenisKelamin: jenisKelamin.value,
    pesan: pesan.value
  };

  console.log(formData);
});