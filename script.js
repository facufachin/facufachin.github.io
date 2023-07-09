function checkPasswordStrength() {
    var password = document.getElementById('password').value;
  
    var result = zxcvbn(password);
  
    var strengthText = 'Fortaleza: ' + result.score + ' de 4'; // Mostrar la puntuación de fortaleza de la contraseña
    var timeToCrack = 'Tiempo estimado para crackear: ' + result.crack_times_display.online_no_throttling_10_per_second + ' (en línea sin limitaciones)';
  
    document.getElementById('passwordStrength').innerHTML = strengthText + '<br>' + timeToCrack;
  }
  