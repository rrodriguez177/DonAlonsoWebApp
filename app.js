const scriptURL = 'https://script.google.com/macros/s/AKfycbynNHr71lYY9ts60Gv5J0yekvxlBudk_NY6m4i-724nF0EG1PEMaPNq2Zv50F2XtWu/exec';
const form = document.getElementById('formulario');
const fechaInput = document.getElementById('fecha');

// Establecer la fecha de hoy por defecto
const hoy = new Date();
const formatoHoy = hoy.toISOString().split('T')[0];
fechaInput.value = formatoHoy;

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      if (response.ok) {
        alert('Datos guardados correctamente ✅');
        form.reset();
        fechaInput.value = formatoHoy;
      } else {
        alert('Error al guardar los datos. Intenta de nuevo.');
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Error de red o CORS. Verifica la implementación del script.');
    });
});