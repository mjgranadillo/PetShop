document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Realiza la validación del formulario aquí
    if (validateForm()) {
      // Muestra una alerta de agradecimiento
      alert("¡Gracias por completar el formulario!");
      form.reset(); // Restablece el formulario
    }
  });

  function validateForm() {
    // Realiza las validaciones necesarias
    // Aquí puedes agregar las validaciones según tus campos requeridos

    // Ejemplo de validación: Verifica que el campo de nombre no esté vacío
    const nameInput = document.querySelector("#contact input[type='text']");
    if (nameInput.value.trim() === "") {
      alert("Por favor, ingresa tu nombre");
      return false; // La validación falla
    }

    // Agrega más validaciones si es necesario

    return true; // La validación es exitosa
  }
});