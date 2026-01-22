// js/auth.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from './firebase-config.js';

export function checkUserRole() {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      window.location.href = '/flower/login.html';
      return;
    }

    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      const role = userDoc.data().role;
      if (role === 'admin') {
        window.location.href = '/flower/admin/dashboard.html';
      } else {
        window.location.href = '/flower/employee/dashboard.html';
      }
    } else {
      alert('Пользователь не найден в системе. Обратитесь к администратору.');
      window.location.href = '/flower/login.html';
    }
  });
}

// Делаем функцию доступной глобально для вызова из HTML
window.checkUserRole = checkUserRole;
